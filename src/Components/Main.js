import { useState } from "react";

import Home from "./Home";
import Image from "./Image";
import Form from "../Form/Form";
import classes from "./Main.module.css";

const Main = () => {
  const [display, setDisplay] = useState(true);

  const onChangeDisplayHandler = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div className={classes.main}>
      {display && <Home onClick={onChangeDisplayHandler} />}
      {!display && <Form onClick={onChangeDisplayHandler} />}
      <Image />
    </div>
  );
};

export default Main;
