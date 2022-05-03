import { useState } from "react";

import classes from "./UserDataForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const UserDataForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputTel, setInputTel] = useState("");
  const getInputNameHandler = (event) => {
    setInputName(event.target.value);
  };
  const getInputTelHandler = (event) => {
    setInputTel(event.target.value);
  };

  const onForwardHandler = () => {
    props.onUserData(inputName, inputTel);
    props.onForward();
  };

  return (
    <div className={classes.userData}>
      <Input
        id="name"
        type="text"
        label="Nombre"
        onChange={getInputNameHandler}
      />
      <Input
        id="tel"
        type="tel"
        label="Teléfono"
        onChange={getInputTelHandler}
      />
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
      <Button type="button" onClick={onForwardHandler}>
        SIGUIENTE
      </Button>
    </div>
  );
};

export default UserDataForm;
