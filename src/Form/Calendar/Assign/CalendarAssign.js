import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
  const [updatedCorrectly, setUpdatedCorrectly] = useState(false);
  const [prevDays, setPrevDays] = useState([]);

  useEffect(() => {
    const getDays = async () => {
      const data = await getDocs(weekCollectionRef);
      setPrevDays(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getDays();
  }, []);

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
      id: "lunes",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "martes",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "miércoles",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "jueves",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "viernes",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "sábado",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
    },
    {
      id: "domingo",
      eight: { disp: "busy", treat: "", name: "", contact: "" },
      nine: { disp: "busy", treat: "", name: "", contact: "" },
      ten: { disp: "busy", treat: "", name: "", contact: "" },
      eleven: { disp: "busy", treat: "", name: "", contact: "" },
      twelve: { disp: "busy", treat: "", name: "", contact: "" },
      thirteen: { disp: "busy", treat: "", name: "", contact: "" },
      fourteen: { disp: "busy", treat: "", name: "", contact: "" },
      fifteen: { disp: "busy", treat: "", name: "", contact: "" },
      sixteen: { disp: "busy", treat: "", name: "", contact: "" },
      seventeen: { disp: "busy", treat: "", name: "", contact: "" },
      eighteen: { disp: "busy", treat: "", name: "", contact: "" },
      nineteen: { disp: "busy", treat: "", name: "", contact: "" },
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
            day[key].disp = "busy";
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
            day[key].disp = "free";
          }
        }
      }
    });
  };

  const weekCollectionRef = collection(db, "week");

  const dayDocCreate = async (day) => {
    await setDoc(doc(db, "week", day.id.slice(0, -3)), { ...day });
  };

  const updateWeekHandler = () => {
    for (let i = 0; i < weekTimeTableDummy.length; i++) {
      dayDocCreate(weekTimeTableDummy[i]);
    }
    setUpdatedCorrectly(true);
    setNewWeekAvailable(false);
    setShowWeek(false);
  };

  const dayDocDelete = async (day) => {
    const previousDayDoc = doc(db, "week", day);
    await deleteDoc(previousDayDoc);
  };

  const onDeletePreviousHandler = () => {
    for (let i = 0; i < prevDays.length; i++) {
      dayDocDelete(prevDays[i].id.slice(0, -3));
    }
    setNewWeekAvailable(true);
  };

  return (
    <div className={classes.calendar}>
      {!updatedCorrectly && <h1>ASIGNAR TURNOS DISPONIBLES</h1>}
      {updatedCorrectly && (
        <h1>TURNOS DE LA SEMANA ASIGNADOS CORRECTAMENTE!</h1>
      )}
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
      {showWeek && (
        <Button onClick={updateWeekHandler}>
          Actualizar Turnos disponibles de la Semana
        </Button>
      )}
    </div>
  );
};

export default CalendarAssign;
