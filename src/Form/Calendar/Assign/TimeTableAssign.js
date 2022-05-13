import { useState } from "react";

import classes from "./TimeTableAssign.module.css";

const TimeTableAssign = (props) => {
  const [selectedTime, setSelectedTime] = useState("");

  const dayId = props.onTimeTableData.id;

  const boxClickHandler = (event) => {
    if (event.target.id === selectedTime.id) {
      setSelectedTime("");
    } else {
      setSelectedTime(event.target);
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
              props.onTimeTableData.eight === "busy" ? classes.busy : ""
            }
            id="eight"
          >
            08:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.nine === "busy" ? classes.busy : ""
            }
            id="nine"
          >
            09:00
          </td>
          <td
            onClick={boxClickHandler}
            className={props.onTimeTableData.ten === "busy" ? classes.busy : ""}
            id="ten"
          >
            10:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.eleven === "busy" ? classes.busy : ""
            }
            id="eleven"
          >
            11:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.twelve === "busy" ? classes.busy : ""
            }
            id="twelve"
          >
            12:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.thirteen === "busy" ? classes.busy : ""
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
              props.onTimeTableData.fourteen === "busy" ? classes.busy : ""
            }
            id="fourteen"
          >
            14:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.fifteen === "busy" ? classes.busy : ""
            }
            id="fifteen"
          >
            15:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.sixteen === "busy" ? classes.busy : ""
            }
            id="sixteen"
          >
            16:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.seventeen === "busy" ? classes.busy : ""
            }
            id="seventeen"
          >
            17:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.eighteen === "busy" ? classes.busy : ""
            }
            id="eighteen"
          >
            18:00
          </td>
          <td
            onClick={boxClickHandler}
            className={
              props.onTimeTableData.nineteen === "busy" ? classes.busy : ""
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
