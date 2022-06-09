import { useState } from "react";

import classes from "../../../App.module.css";
import CalendarAssign from "./CalendarAssign";
import AssignSelector from "./AssignSelector";

const AssignPage = (props) => {
  const [display, setDisplay] = useState("SELECTOR");
  // const [assignedWeek, setAssignedWeek] = useState([]);

  const showCalendarHandler = () => {
    setDisplay("CALENDAR");
  };

  const backToSelectorHandler = () => {
    setDisplay("SELECTOR");
  };

  return (
    <div className={classes.app}>
      {display === "SELECTOR" && (
        <AssignSelector onCalendar={showCalendarHandler} />
      )}
      {display === "CALENDAR" && (
        <CalendarAssign onSelector={backToSelectorHandler} />
      )}
    </div>
  );
};

export default AssignPage;
