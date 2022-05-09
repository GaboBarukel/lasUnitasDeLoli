import classes from "./TimeTable.module.css";

const TimeTable = () => {
  const boxClickHandler = (event) => {
    if (event.target.className === "free") {
      event.target.style.backgroundColor = "white";
      event.target.className = "busy";
    } else if (event.target.className === "busy") {
      event.target.style.backgroundColor = "#c99e9aff";
      event.target.className = "free";
    }
  };

  return (
    <table className={classes.timeTable} id="calendar">
      <tbody>
        <tr>
          <td onClick={boxClickHandler} className="free" id="08:00">
            08:00
          </td>
          <td onClick={boxClickHandler} className="free" id="09:00">
            09:00
          </td>
          <td onClick={boxClickHandler} className="free" id="10:00">
            10:00
          </td>
          <td onClick={boxClickHandler} className="free" id="11:00">
            11:00
          </td>
          <td onClick={boxClickHandler} className="free" id="12:00">
            12:00
          </td>
          <td onClick={boxClickHandler} className="free" id="13:00">
            13:00
          </td>
        </tr>
        <tr>
          <td onClick={boxClickHandler} className="free" id="14:00">
            14:00
          </td>
          <td onClick={boxClickHandler} className="free" id="15:00">
            15:00
          </td>
          <td onClick={boxClickHandler} className="free" id="16:00">
            16:00
          </td>
          <td onClick={boxClickHandler} className="free" id="17:00">
            17:00
          </td>
          <td onClick={boxClickHandler} className="free" id="18:00">
            18:00
          </td>
          <td onClick={boxClickHandler} className="free" id="19:00">
            19:00
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeTable;
