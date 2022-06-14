import { useState } from "react";
import classes from "../TimeTable.module.css";

const DatesTimeTable = (props) => {
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
              className={
                props.onTimeTableData.eight.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="eight"
            >
              08:00
            </td>
            <td
              className={
                props.onTimeTableData.nine.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="nine"
            >
              09:00
            </td>
            <td
              className={
                props.onTimeTableData.ten.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="ten"
            >
              10:00
            </td>
            <td
              className={
                props.onTimeTableData.eleven.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="eleven"
            >
              11:00
            </td>
            <td
              className={
                props.onTimeTableData.twelve.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="twelve"
            >
              12:00
            </td>
            <td
              className={
                props.onTimeTableData.thirteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="thirteen"
            >
              13:00
            </td>
          </tr>
          <tr>
            <td
              className={
                props.onTimeTableData.fourteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="fourteen"
            >
              14:00
            </td>
            <td
              className={
                props.onTimeTableData.fifteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="fifteen"
            >
              15:00
            </td>
            <td
              className={
                props.onTimeTableData.sixteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="sixteen"
            >
              16:00
            </td>
            <td
              className={
                props.onTimeTableData.seventeen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="seventeen"
            >
              17:00
            </td>
            <td
              className={
                props.onTimeTableData.eighteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="eighteen"
            >
              18:00
            </td>
            <td
              className={
                props.onTimeTableData.nineteen.disp === "busy"
                  ? classes.busy
                  : classes.free
              }
              id="nineteen"
            >
              19:00
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default DatesTimeTable;
