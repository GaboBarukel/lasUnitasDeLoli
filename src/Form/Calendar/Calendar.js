import { useState } from "react";
// import { db } from "../../firebase-config";
// import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import TimeTable from "./TimeTable";

const Calendar = (props) => {
  // const [dates, setDates] = useState([]);
  // const datesCollectionRef = collection(db, "turnos");
  // useEffect(() => {
  //   const getDates = async () => {
  //     const data = await getDocs(datesCollectionRef);
  //     setDates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getDates();
  // }, [datesCollectionRef]);
  // const [showTimeTable, setShowTimeTable] = useState(false);
  // const [dayTimeTable, setDayTimeTable] = useState({});
  const [weekDays, setWeekDays] = useState([]);
  const weekSelectorHandler = (event) => {
    let weekDates = parseDates(event.target.value);
    setWeekDays(weekDates);
  };

  const weekTimeTableDummy = [
    {
      id: "lunes, 16/05",
      eight: "busy",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "martes, 17/05",
      eight: "",
      nine: "busy",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "miércoles, 18/05",
      eight: "",
      nine: "",
      ten: "busy",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "jueves, 19/05",
      eight: "",
      nine: "",
      ten: "",
      eleven: "busy",
      twelve: "",
      thirteen: "",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "viernes, 20/05",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "busy",
      thirteen: "",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "sábado, 21/05",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "busy",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "domingo, 22/05",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "busy",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
  ];

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
    console.log(days[0].slice(-5));
    return days;
  };

  return (
    <div className={classes.calendar}>
      {weekTimeTableDummy.map((dayTimeTable) => (
        <TimeTable onTimeTableData={dayTimeTable} key={dayTimeTable.id} />
      ))}
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
