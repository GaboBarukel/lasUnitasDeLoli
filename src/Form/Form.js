import { useState } from "react";

import TreatmentForm from "./TreatmentForm";
import UserDataForm from "./UserDataForm";
import Calendar from "./Calendar/Calendar";
import classes from "./Form.module.css";

const Form = (props) => {
  const [changeForm, setChangeForm] = useState("TREAT");
  const [treatmentSelect, setTreatmentSelect] = useState("KAPPING");
  const [inputData, setInputData] = useState({});

  const getTreatmentHandler = (treatment) => {
    setTreatmentSelect(treatment);
  };

  const getUserDataHandler = (uName, uTel) => {
    setInputData({ name: uName, tel: uTel });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      ...inputData,
      treatment: treatmentSelect,
    };
    console.log(userData);
  };

  const onChangeFormForwardHandler = () => {
    if (changeForm === "TREAT") {
      setChangeForm("USER");
    } else if (changeForm === "USER") {
      setChangeForm("CALEN");
    }
  };

  const onChangeFormBackHandler = () => {
    if (changeForm === "USER") {
      setChangeForm("TREAT");
    } else if (changeForm === "CALEN") {
      setChangeForm("USER");
    }
  };

  return (
    <div className={classes.form}>
      <form onSubmit={onSubmitHandler}>
        {changeForm === "TREAT" && (
          <TreatmentForm
            onForward={onChangeFormForwardHandler}
            onTreatment={getTreatmentHandler}
            onBack={props.onClick}
          />
        )}
        {changeForm === "USER" && (
          <UserDataForm
            onForward={onChangeFormForwardHandler}
            onUserData={getUserDataHandler}
            onBack={onChangeFormBackHandler}
          />
        )}
        {changeForm === "CALEN" && (
          <Calendar onBack={onChangeFormBackHandler} />
        )}
      </form>
    </div>
  );
};

export default Form;
