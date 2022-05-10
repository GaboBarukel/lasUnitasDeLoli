import { useState } from "react";

import classes from "./TimeTable.module.css";

const TimeTable = (props) => {
  // const [selectedTime, setSelectedTime] = useState("");
  // const boxClickHandler = (event) => {
  //   if (selectedTime.id) {
  //     if (event.target.id !== selectedTime.id) {
  //       selectedTime.className = '{classes.free}';
  //       setSelectedTime(event.target);
  //       event.target.className = "{classes.selected}";
  //     }
  //   } else if (!selectedTime.id) {
  //     setSelectedTime(event.target);
  //     event.target.className = "{classes.selected}";
  //   }
  // };

  const [showTimeTable, setShowTimeTable] = useState(false);

  const showTimeTableHandler = () => {
    if (!showTimeTable) {
      setShowTimeTable(true);
    } else {
      setShowTimeTable(false);
    }
  };

  return (
    <table className={classes.timeTable} id="calendar">
      <thead>
        <tr>
          <th colSpan="6" onClick={showTimeTableHandler}>
            {props.onTimeTableData.id}
          </th>
        </tr>
      </thead>
      {showTimeTable && (
        <tbody>
          <tr>
            <td
              className={
                (props.onTimeTableData.eight === "busy" ? classes.busy : "") ||
                (props.onTimeTableData.eight === "selected"
                  ? classes.selected
                  : "")
              }
              id="8"
            >
              08:00
            </td>
            <td
              className={
                (props.onTimeTableData.nine === "busy" ? classes.busy : "") ||
                (props.onTimeTableData.nine === "selected"
                  ? classes.selected
                  : "")
              }
              id="9"
            >
              09:00
            </td>
            <td
              className={
                (props.onTimeTableData.ten === "busy" ? classes.busy : "") ||
                (props.onTimeTableData.ten === "selected"
                  ? classes.selected
                  : "")
              }
              id="10"
            >
              10:00
            </td>
            <td
              className={
                (props.onTimeTableData.eleven === "busy" ? classes.busy : "") ||
                (props.onTimeTableData.eleven === "selected"
                  ? classes.selected
                  : "")
              }
              id="11"
            >
              11:00
            </td>
            <td
              className={
                (props.onTimeTableData.twelve === "busy" ? classes.busy : "") ||
                (props.onTimeTableData.twelve === "selected"
                  ? classes.selected
                  : "")
              }
              id="12"
            >
              12:00
            </td>
            <td
              className={
                (props.onTimeTableData.thirteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.thirteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="13"
            >
              13:00
            </td>
          </tr>
          <tr>
            <td
              className={
                (props.onTimeTableData.fourteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.fourteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="14"
            >
              14:00
            </td>
            <td
              className={
                (props.onTimeTableData.fifteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.fifteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="15"
            >
              15:00
            </td>
            <td
              className={
                (props.onTimeTableData.sixteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.sixteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="16"
            >
              16:00
            </td>
            <td
              className={
                (props.onTimeTableData.seventeen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.seventeen === "selected"
                  ? classes.selected
                  : "")
              }
              id="17"
            >
              17:00
            </td>
            <td
              className={
                (props.onTimeTableData.eighteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.eighteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="18"
            >
              18:00
            </td>
            <td
              className={
                (props.onTimeTableData.nineteen === "busy"
                  ? classes.busy
                  : "") ||
                (props.onTimeTableData.nineteen === "selected"
                  ? classes.selected
                  : "")
              }
              id="19"
            >
              19:00
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default TimeTable;
