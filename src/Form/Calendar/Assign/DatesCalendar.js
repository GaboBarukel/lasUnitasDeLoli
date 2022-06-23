import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "../Calendar.module.css";
import Button from "../../../UI/Button";
import DatesTimeTable from "./DatesTimeTable";

const DatesCalendar = (props) => {
  const [dates, setDates] = useState([]);
  const [week, setWeek] = useState(false);
  // const [renderWeek, setRenderWeek] = useState([]);

  const datesCollectionRef = collection(db, "week");

  useEffect(() => {
    const getDates = async () => {
      const data = await getDocs(datesCollectionRef);
      const toSort = data.docs.map((doc) => ({ ...doc.data() }));
      toSort.sort(weekSorter);
      setDates(toSort);
    };
    getDates();
    setWeek(true);
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

  // console.log(dates);

  // const Week = dates[0];
  // if (Week && renderWeek.length === 0) {
  //   const updatedWeek = Object.keys(Week).map(function (key) {
  //     return Week[key];
  //   });
  //   console.log(updatedWeek);
  //   setRenderWeek(updatedWeek);
  // }

  return (
    <div className={classes.calendar}>
      {!week ? (
        <h1>CARGANDO...</h1>
      ) : (
        dates.map((dayTimeTable) => (
          <DatesTimeTable
            onTimeTableData={dayTimeTable}
            key={dayTimeTable.id}
          />
        ))
      )}
      <Button type="button" onClick={props.onSelector}>
        VOLVER AL MENU
      </Button>
    </div>
  );
};

export default DatesCalendar;
