import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase-config";

import TreatmentForm from "./TreatmentForm";
import UserDataForm from "./UserDataForm";
import Calendar from "./Calendar/Calendar";
import classes from "./Form.module.css";

const Form = (props) => {
  const [changeForm, setChangeForm] = useState("TREAT");
  const [treatmentSelect, setTreatmentSelect] = useState("RUSA");
  const [inputData, setInputData] = useState({});
  const [dateData, setDateData] = useState({});
  // const datesCollectionRef = collection(db, "turnos");

  const getTreatmentHandler = (treatment) => {
    setTreatmentSelect(treatment);
  };
  const getUserDataHandler = (uName, uTel) => {
    setInputData({ name: uName, tel: uTel });
  };
  const getDateDataHandler = (date) => {
    setDateData({ day: date.day, time: date.time });
  };

  // const createNewDate = async (newDate) => {
  //   await addDoc(datesCollectionRef, { ...newDate });
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      ...dateData,
      ...inputData,
      treatment: treatmentSelect,
    };
    // createNewDate(userData);
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
          <Calendar
            onBack={onChangeFormBackHandler}
            onDateData={getDateDataHandler}
          />
        )}
      </form>
    </div>
  );
};

export default Form;
