import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import classes from "./Calendar.module.css";
import Button from "../../UI/Button";

const Calendar = (props) => {
  const [dates, setDates] = useState([]);
  const datesCollectionRef = collection(db, "turnos");
  useEffect(() => {
    const getDates = async () => {
      const data = await getDocs(datesCollectionRef);
      setDates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDates();
  }, []);

  return (
    <div className={classes.calendar}>
      {dates.map((date) => {
        return (
          <h2>
            Nombre: {date.name} <br />
            Tel: {date.tel} <br />
            Tratamiento: {date.treatment}
          </h2>
        );
      })}
      <Button type="submit">Enviar Info</Button>
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
    </div>
  );
};

export default Calendar;
