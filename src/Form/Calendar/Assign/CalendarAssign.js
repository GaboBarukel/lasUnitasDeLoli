import { useState } from "react";

import classes from "./CalendarAssign.module.css";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import TimeTableAssign from "./TimeTableAssign";

const CalendarAssign = (props) => {
  const [weekDays, setWeekDays] = useState([]);

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

  const weekTimeTableDummy = [
    {
      id: "one",
      eight: "",
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
      id: "two",
      eight: "",
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
      id: "three",
      eight: "",
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
      id: "four",
      eight: "",
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
      id: "five",
      eight: "",
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
      id: "six",
      eight: "",
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
      id: "seven",
      eight: "",
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
  ];

  for (let i = 0; i < weekTimeTableDummy.length; i++) {
    weekTimeTableDummy[i].id = weekDays[i];
  }

  const onGetDataAssignHandler = (date) => {
    weekTimeTableDummy.forEach((day) => {
      if (day.id === date.id) {
        for (const key in day) {
          if (key === date.time) {
            day[key] = "busy";
          }
        }
        console.log(day);
      }
    });
  };

  const printWeekHandler = () => {
    console.log(weekTimeTableDummy);
  };

  return (
    <div className={classes.calendar}>
      <h1>ASIGNAR TURNOS DISPONIBLES</h1>
      {weekTimeTableDummy.map((dayTimeTable) => (
        <TimeTableAssign
          onTimeTableData={dayTimeTable}
          key={dayTimeTable.id}
          onGetData={onGetDataAssignHandler}
        />
      ))}
      <Input
        type="week"
        id="weekSelector"
        name="weekSelector"
        onChange={weekSelectorHandler}
      />
      <Button type="button" onClick={props.onClick}>
        Enviar Info
      </Button>
      <Button onClick={printWeekHandler}>Ver Semana</Button>
    </div>
  );
};

export default CalendarAssign;
