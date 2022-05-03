import classes from "./Calendar.module.css";
import Button from "../../UI/Button";

const Calendar = (props) => {
  return (
    <div className={classes.calendar}>
      <Button type="submit">Enviar Info</Button>
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
    </div>
  );
};

export default Calendar;
