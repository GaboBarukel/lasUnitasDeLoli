import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";
import TimeTable from "./TimeTable";

const Calendar = (props) => {
  const [dates, setDates] = useState([]);
  const [weekShow, setWeekShow] = useState(false);
  const [refreshTime, setRefreshTime] = useState("");

  const refreshTimeHandler = (dayID) => {
    if (refreshTime === "") {
      setRefreshTime(dayID);
    } else if (dayID !== refreshTime) {
      setRefreshTime(dayID);
    }
  };

  const datesCollectionRef = collection(db, "week");

  useEffect(() => {
    const getDates = async () => {
      const data = await getDocs(datesCollectionRef);
      const toSort = data.docs.map((doc) => ({ ...doc.data() }));
      toSort.sort(weekSorter);
      setDates(toSort);
      setWeekShow(true);
    };
    getDates();
  }, []);

  const weekOrder = {
    lunes: 1,
    marte: 2,
    miérc: 3,
    jueve: 4,
    viern: 5,
    sábad: 6,
    domin: 7,
  };

  const weekSorter = (a, b) => {
    let day1 = a.id.slice(0, 5);
    let day2 = b.id.slice(0, 5);
    return weekOrder[day1] - weekOrder[day2];
  };

  const GetDataHandler = (date) => {
    const newDayID = date.day.slice(0, -3);
    props.onDateData(date.time, newDayID);
  };

  return (
    <div className={classes.calendar}>
      {!weekShow ? (
        <h1>CARGANDO...</h1>
      ) : (
        dates.map((dayTimeTable) => (
          <TimeTable
            onTimeTableData={dayTimeTable}
            key={dayTimeTable.id}
            onGetData={GetDataHandler}
            onRefreshTimeHandler={refreshTimeHandler}
            newTime={refreshTime}
          />
        ))
      )}
      <Button type="submit">Enviar Info</Button>
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
    </div>
  );
};

export default Calendar;
