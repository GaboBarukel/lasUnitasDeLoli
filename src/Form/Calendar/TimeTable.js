import { useEffect, useState } from "react";
import classes from "./TimeTable.module.css";

const TimeTable = (props) => {
  const [showTimeTable, setShowTimeTable] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const update = () => {
      if (props.newTime !== props.onTimeTableData.id) {
        setSelectedTime("");
      }
    };
    update();
  }, [props.newTime]);

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
        props.onRefreshTimeHandler(props.onTimeTableData.id);
        setSelectedTime(event.target);
        props.onGetData({
          day: props.onTimeTableData.id,
          time: event.target.id,
        });
      }
    }
  };

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
                (props.onTimeTableData.eight.disp === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "eight" ? classes.selected : "")
              }
              id="eight"
            >
              08:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.nine.disp === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "nine" ? classes.selected : "")
              }
              id="nine"
            >
              09:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.ten.disp === "busy"
                  ? classes.busy
                  : "") || (selectedTime.id === "ten" ? classes.selected : "")
              }
              id="ten"
            >
              10:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.eleven.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "eleven" ? classes.selected : "")
              }
              id="eleven"
            >
              11:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.twelve.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "twelve" ? classes.selected : "")
              }
              id="twelve"
            >
              12:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.thirteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "thirteen" ? classes.selected : "")
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
                (props.onTimeTableData.fourteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "fourteen" ? classes.selected : "")
              }
              id="fourteen"
            >
              14:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.fifteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "fifteen" ? classes.selected : "")
              }
              id="fifteen"
            >
              15:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.sixteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "sixteen" ? classes.selected : "")
              }
              id="sixteen"
            >
              16:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.seventeen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "seventeen" ? classes.selected : "")
              }
              id="seventeen"
            >
              17:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.eighteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "eighteen" ? classes.selected : "")
              }
              id="eighteen"
            >
              18:00
            </td>
            <td
              onClick={boxClickHandler}
              className={
                (props.onTimeTableData.nineteen.disp === "busy"
                  ? classes.busy
                  : "") ||
                (selectedTime.id === "nineteen" ? classes.selected : "")
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

export default TimeTable;
