import { useState } from "react";
import { collection, setDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import classes from "./CalendarAssign.module.css";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";
import TimeTableAssign from "./TimeTableAssign";

const CalendarAssign = (props) => {
  const [weekDays, setWeekDays] = useState([
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo",
  ]);
  const [newWeekAvailable, setNewWeekAvailable] = useState(false);
  const [showWeek, setShowWeek] = useState(false);

  const weekSelectorHandler = (event) => {
    let weekDates = parseDates(event.target.value);
    setWeekDays(weekDates);
    setShowWeek(true);
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
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "two",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "three",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "four",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "five",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "six",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
    },
    {
      id: "seven",
      eight: "busy",
      nine: "busy",
      ten: "busy",
      eleven: "busy",
      twelve: "busy",
      thirteen: "busy",
      fourteen: "busy",
      fifteen: "busy",
      sixteen: "busy",
      seventeen: "busy",
      eighteen: "busy",
      nineteen: "busy",
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
      }
    });
  };

  const onUpdateDataHandler = (date) => {
    weekTimeTableDummy.forEach((day) => {
      if (day.id === date.id) {
        for (const key in day) {
          if (key === date.time) {
            day[key] = "free";
          }
        }
      }
    });
  };

  const weekCollectionRef = collection(db, "week");

  const updateWeekHandler = async () => {
    await setDoc(doc(db, "week", "NEW"), { ...weekTimeTableDummy });
  };

  const onDeletePreviousHandler = async () => {
    const previousWeekDoc = doc(db, "week", "NEW");
    await deleteDoc(previousWeekDoc);
    setNewWeekAvailable(true);
  };

  return (
    <div className={classes.calendar}>
      <h1>ASIGNAR TURNOS DISPONIBLES</h1>
      {!newWeekAvailable && (
        <Button onClick={onDeletePreviousHandler}>
          ELIMINAR SEMANA PREVIA
        </Button>
      )}
      {newWeekAvailable && (
        <Input
          type="week"
          id="weekSelector"
          name="weekSelector"
          label="Seleccione una semana: "
          onChange={weekSelectorHandler}
        />
      )}
      {showWeek &&
        weekTimeTableDummy.map((dayTimeTable) => (
          <TimeTableAssign
            onTimeTableData={dayTimeTable}
            key={dayTimeTable.id}
            onGetData={onGetDataAssignHandler}
            onUpdateData={onUpdateDataHandler}
          />
        ))}
      <Button type="button" onClick={props.onSelector}>
        VOLVER AL MENU
      </Button>
      <Button onClick={updateWeekHandler}>
        Actualizar Turnos disponibles de la Semana
      </Button>
    </div>
  );
};

export default CalendarAssign;
