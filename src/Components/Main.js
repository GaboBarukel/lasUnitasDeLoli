import { useState } from "react";

import Home from "./Home/Home";
import Image from "./Image";
import Form from "../Form/Form";
import classes from "./Main.module.css";

const Main = () => {
  const [display, setDisplay] = useState(true);

  const onChangeDisplayHandler = () => {
    if (display) {
      setDisplay(false);
    } else if (!display) {
      setDisplay(true);
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.main}>
        {display && <Home onClick={onChangeDisplayHandler} />}
        {!display && <Form onClick={onChangeDisplayHandler} />}
        <Image />
      </div>
    </div>
  );
};

export default Main;
