import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";
import TimeTable from "./TimeTable";

const Calendar = (props) => {
  const [dates, setDates] = useState([]);
  const [renderWeek, setRenderWeek] = useState([]);
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
      setDates(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getDates();
  }, []);

  const Week = dates[0];

  if (Week && renderWeek.length === 0) {
    const updatedWeek = Object.keys(Week).map(function (key) {
      return Week[key];
    });
    setRenderWeek(updatedWeek);
  }
  const GetDataHandler = (date) => {
    props.onDateData(date);
  };

  return (
    <div className={classes.calendar}>
      {!Week ? (
        <h1>CARGANDO...</h1>
      ) : (
        renderWeek.map((dayTimeTable) => (
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
