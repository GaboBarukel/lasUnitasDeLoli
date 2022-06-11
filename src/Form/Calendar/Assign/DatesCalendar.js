import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "../Calendar.module.css";
import Button from "../../../UI/Button";
import DatesTimeTable from "./DatesTimeTable";

const DatesCalendar = (props) => {
  const [dates, setDates] = useState([]);
  const [renderWeek, setRenderWeek] = useState([]);
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

  return (
    <div className={classes.calendar}>
      {!Week ? (
        <h1>CARGANDO...</h1>
      ) : (
        renderWeek.map((dayTimeTable) => (
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
