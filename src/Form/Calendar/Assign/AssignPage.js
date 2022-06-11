import { useState } from "react";

import classes from "../../../App.module.css";
import CalendarAssign from "./CalendarAssign";
import AssignSelector from "./AssignSelector";
import DatesCalendar from "./DatesCalendar";

const AssignPage = (props) => {
  const [display, setDisplay] = useState("SELECTOR");
  // const [assignedWeek, setAssignedWeek] = useState([]);

  const showCalendarHandler = () => {
    setDisplay("ASSIGN");
  };

  const showDatesHandler = () => {
    setDisplay("DATES");
  };

  const backToSelectorHandler = () => {
    setDisplay("SELECTOR");
  };

  return (
    <div className={classes.app}>
      {display === "SELECTOR" && (
        <AssignSelector
          onCalendar={showCalendarHandler}
          onDates={showDatesHandler}
        />
      )}
      {display === "ASSIGN" && (
        <CalendarAssign onSelector={backToSelectorHandler} />
      )}
      {display === "DATES" && (
        <DatesCalendar onSelector={backToSelectorHandler} />
      )}
    </div>
  );
};

export default AssignPage;
