import { useState } from "react";

import classes from "./TimeTable.module.css";

const TimeTable = (props) => {
  const [showTimeTable, setShowTimeTable] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const boxClickHandler = (event) => {
    if (event.target.className !== "TimeTable_busy__YeMcg") {
      if (selectedTime.id) {
        if (event.target.id !== selectedTime.id) {
          setSelectedTime(event.target);
          props.onGetData({
            day: props.onTimeTableData.id,
            time: event.target.id,
          });
        } else if (event.target.id === selectedTime.id) {
          setSelectedTime("");
          props.onGetData({});
        }
      } else if (!selectedTime.id) {
        setSelectedTime(event.target);
        props.onGetData({
          day: props.onTimeTableData.id,
          time: event.target.id,
        });
      }
    }
  };
  //revisar la lógica de selección de horario(condicional)
  const showTimeTableHandler = () => {
    if (!showTimeTable) {
      setSelectedTime("");
      setShowTimeTable(true);
    } else {
      setSelectedTime("");
      setShowTimeTable(false);
    }
  };

  return (
    <table className={classes.timeTable} id="calendar">
      <thead className={classes.thead}>
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
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.eight === "busy" ? classes.busy : "") ||
                (selectedTime.id === "8" ? classes.selected : "")
              }
              id="8"
            >
              08:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.nine === "busy" ? classes.busy : "") ||
                (selectedTime.id === "9" ? classes.selected : "")
              }
              id="9"
            >
              09:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.ten === "busy" ? classes.busy : "") ||
                (selectedTime.id === "10" ? classes.selected : "")
              }
              id="10"
            >
              10:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.eleven === "busy" ? classes.busy : "") ||
                (selectedTime.id === "11" ? classes.selected : "")
              }
              id="11"
            >
              11:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.twelve === "busy" ? classes.busy : "") ||
                (selectedTime.id === "12" ? classes.selected : "")
              }
              id="12"
            >
              12:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.thirteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "13" ? classes.selected : "")
              }
              id="13"
            >
              13:00
            </td>
          </tr>
          <tr>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.fourteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "14" ? classes.selected : "")
              }
              id="14"
            >
              14:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.fifteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "15" ? classes.selected : "")
              }
              id="15"
            >
              15:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.sixteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "16" ? classes.selected : "")
              }
              id="16"
            >
              16:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.seventeen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "17" ? classes.selected : "")
              }
              id="17"
            >
              17:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.eighteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "18" ? classes.selected : "")
              }
              id="18"
            >
              18:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.nineteen === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "19" ? classes.selected : "")
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
