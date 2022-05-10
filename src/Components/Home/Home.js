import { useState } from "react";

import classes from "./Home.module.css";

import Greeting from "./Greeting";
import TreatmentText from "./TreatmentText";

const Home = (props) => {
  const [display, setDisplay] = useState(true);

  const onChangeDisplayHandler = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  return (
    <div className={classes.home}>
      {display && (
        <Greeting onClick={props.onClick} onDisplay={onChangeDisplayHandler} />
      )}
      {!display && (
        <TreatmentText
          onClick={props.onClick}
          onDisplay={onChangeDisplayHandler}
        />
      )}
    </div>
  );
};

export default Home;
