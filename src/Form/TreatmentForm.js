import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./TreatmentForm.module.css";

const TreatmentForm = (props) => {
  const selectTreatmentHandler = (event) => {
    props.onTreatment(event.target.value);
  };

  return (
    <div className={classes.treatments}>
      <h2>Elegí tu tratamiento:</h2>
      <Input
        id="KAPPING"
        type="radio"
        name="AB"
        label="KAPPING"
        value="KAPPING"
        onChange={selectTreatmentHandler}
      />
      <Input
        id="SEMIPER"
        type="radio"
        name="AB"
        label="ESMALTADO SEMIPERMANENTE"
        value="SEMIPER"
        onChange={selectTreatmentHandler}
      />
      <Button type="button" onClick={props.onBack}>
        VOLVER
      </Button>
      <Button type="button" onClick={props.onForward}>
        SIGUIENTE
      </Button>
    </div>
  );
};

export default TreatmentForm;
