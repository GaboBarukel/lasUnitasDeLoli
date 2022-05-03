import { Fragment, useState } from "react";

import Home from "./Home";
import Image from "./Image";
import Form from "../Form/Form";

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
    <Fragment>
      {display && <Home onClick={onChangeDisplayHandler} />}
      {!display && <Form onClick={onChangeDisplayHandler} />}
      <Image />
    </Fragment>
  );
};

export default Main;
