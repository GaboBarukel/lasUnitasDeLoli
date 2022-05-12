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
      id: "one",
      eight: "busy",
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
      id: "two",
      eight: "",
      nine: "busy",
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
      id: "three",
      eight: "",
      nine: "",
      ten: "busy",
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
      id: "four",
      eight: "",
      nine: "",
      ten: "",
      eleven: "busy",
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
      id: "five",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "six",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
    {
      id: "seven",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "",
      seventeen: "",
      eighteen: "",
      nineteen: "",
    },
  ];

  for (let i = 0; i < weekTimeTableDummy.length; i++) {
    weekTimeTableDummy[i].id = weekDays[i];
  }

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

  const onGetDataHandler = (date) => {
    props.onDateData(date);
  };

  return (
    <div className={classes.calendar}>
      {weekTimeTableDummy.map((dayTimeTable) => (
        <TimeTable
          onTimeTableData={dayTimeTable}
          key={dayTimeTable.id}
          onGetData={onGetDataHandler}
        />
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
