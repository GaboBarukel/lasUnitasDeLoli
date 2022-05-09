import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import TimeTable from "./TimeTable";

const Calendar = (props) => {
  // const [dates, setDates] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  // const datesCollectionRef = collection(db, "turnos");
  // useEffect(() => {
  //   const getDates = async () => {
  //     const data = await getDocs(datesCollectionRef);
  //     setDates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getDates();
  // }, [datesCollectionRef]);

  const weekSelectorHandler = (event) => {
    let weekDates = parseDates(event.target.value);
    setWeekDays(weekDates);
  };

  const parseDates = (inp) => {
    let year = parseInt(inp.slice(0, 4), 10);
    let week = parseInt(inp.slice(6), 10);
    let day = 1 + week * 7;

    let dayOffset = new Date(year, 0, 1).getDay();

    dayOffset--;

    const options = {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
    };

    let days = [];
    for (let i = 0; i < 7; i++)
      days.push(
        new Date(year, 0, day - dayOffset + i).toLocaleDateString(
          undefined,
          options
        )
      );
    return days;
  };

  return (
    <div className={classes.calendar}>
      <h2>{weekDays[2]}</h2>
      <TimeTable />
      <Input
        type="week"
        id="weekSelector"
        name="weekSelector"
        onChange={weekSelectorHandler}
      />
      <Button type="submit">Enviar Info</Button>
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
    </div>
  );
};

export default Calendar;
