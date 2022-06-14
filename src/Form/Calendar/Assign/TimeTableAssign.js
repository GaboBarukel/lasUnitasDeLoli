import { useState } from "react";

import classes from "./TimeTableAssign.module.css";

const TimeTableAssign = (props) => {
  const [selectedTime, setSelectedTime] = useState("");

  const dayId = props.onTimeTableData.id;

  const boxClickHandler = (event) => {
    if (
      event.target.id === selectedTime.id ||
      event.target.className === "TimeTableAssign_busy__mZWYo"
    ) {
      setSelectedTime("");
      event.target.className = "TimeTableAssign_free__FHs7l";
      props.onUpdateData({
        id: dayId,
        time: event.target.id,
      });
    } else if (
      event.target.id !== selectedTime.id ||
      event.target.className === "TimeTableAssign_free__FHs7l"
    ) {
      setSelectedTime(event.target);
      event.target.className = "TimeTableAssign_busy__mZWYo";
      props.onGetData({
        id: dayId,
        time: event.target.id,
      });
    }
  };

  return (
    <table className={classes.timeTable} id="calendar">
      <thead className={classes.thead}>
        <tr>
          <th colSpan="6">{dayId}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            onClick={boxClickHandler}
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
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.nine.disp === "busy" ? classes.busy : ""
            }
            id="nine"
          >
            09:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.ten.disp === "busy" ? classes.busy : ""
            }
            id="ten"
          >
            10:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.eleven.disp === "busy" ? classes.busy : ""
            }
            id="eleven"
          >
            11:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.twelve.disp === "busy" ? classes.busy : ""
            }
            id="twelve"
          >
            12:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.thirteen.disp === "busy" ? classes.busy : ""
            }
            id="thirteen"
          >
            13:00
          </td>
        </tr>
        <tr>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.fourteen.disp === "busy" ? classes.busy : ""
            }
            id="fourteen"
          >
            14:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.fifteen.disp === "busy" ? classes.busy : ""
            }
            id="fifteen"
          >
            15:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.sixteen.disp === "busy" ? classes.busy : ""
            }
            id="sixteen"
          >
            16:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.seventeen.disp === "busy"
                ? classes.busy
                : ""
            }
            id="seventeen"
          >
            17:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.eighteen.disp === "busy" ? classes.busy : ""
            }
            id="eighteen"
          >
            18:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.nineteen.disp === "busy" ? classes.busy : ""
            }
            id="nineteen"
          >
            19:00
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeTableAssign;
