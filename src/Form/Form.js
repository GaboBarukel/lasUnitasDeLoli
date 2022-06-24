import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import TreatmentForm from "./TreatmentForm";
import UserDataForm from "./UserDataForm";
import Calendar from "./Calendar/Calendar";
import classes from "./Form.module.css";

const Form = (props) => {
  const [changeForm, setChangeForm] = useState("TREAT");
  const [treatmentSelect, setTreatmentSelect] = useState("RUSA");
  const [inputData, setInputData] = useState({});
  const [dayIndex, setDayIndex] = useState("lune");
  const [dateTime, setDateTime] = useState("");

  const dayDocRef = doc(db, "week", dayIndex);

  const getTreatmentHandler = (treatment) => {
    setTreatmentSelect(treatment);
  };
  const getUserDataHandler = (uName, uTel) => {
    setInputData({ name: uName, tel: uTel });
  };
  const getDateDataHandler = (time, ind) => {
    setDayIndex(ind);
    setDateTime(time);
  };

  const createNewDate = async (newDate) => {
    await updateDoc(dayDocRef, {
      [dateTime]: {
        disp: "busy",
        contact: newDate.tel,
        name: newDate.name,
        treat: newDate.treatment,
      },
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      ...inputData,
      treatment: treatmentSelect,
    };
    createNewDate(userData);
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
