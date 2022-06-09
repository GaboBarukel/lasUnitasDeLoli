import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";
import TimeTable from "./TimeTable";

const Calendar = (props) => {
  const [dates, setDates] = useState([]);
  const [renderWeek, setRenderWeek] = useState([]);
  const datesCollectionRef = collection(db, "week");
  useEffect(() => {
    console.log("tuvieja");
    const getDates = async () => {
      const data = await getDocs(datesCollectionRef);
      setDates(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getDates();
    // console.log(dates);
  }, []);
  const weekTimeTableDummy = [
    {
      id: "lunes",
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
      id: "martes",
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
      id: "miércoles",
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
      id: "jueves",
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
      id: "viernes",
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
      id: "sábado",
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
      id: "domingo",
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
  // RESOLVEEEEEEEEEER

  const Week = dates[0];
  if (Week && renderWeek.length === 0) {
    const updatedWeek = Object.keys(Week).map(function (key) {
      return Week[key];
    });
    setRenderWeek(updatedWeek);
    // for (let i = 0; i < updatedWeek.length; i++) {
    //   const day = {
    //     id: updatedWeek[i].id,
    //     eight: updatedWeek[i].eight,
    //     nine: updatedWeek[i].nine,
    //     ten: updatedWeek[i].ten,
    //     eleven: updatedWeek[i].eleven,
    //     twelve: updatedWeek[i].twelve,
    //     thirteen: updatedWeek[i].thirteen,
    //     fourteen: updatedWeek[i].fourteen,
    //     fifteen: updatedWeek[i].fifteen,
    //     sixteen: updatedWeek[i].sixteen,
    //     seventeen: updatedWeek[i].seventeen,
    //   };
    //   console.log(day);
    // }
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
