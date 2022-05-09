import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./TreatmentForm.module.css";

const TreatmentForm = (props) => {
  const selectTreatmentHandler = (event) => {
    props.onTreatment(event.target.value);
  };

  return (
    <div className={classes.treatments}>
      <h2>TRATAMIENTOS:</h2>
      <Input
        id="RUSA"
        type="radio"
        name="AB"
        label="MANICURÍA RUSA"
        value="RUSA"
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
      {/* <h3>MANICURÌA RUSA:</h3>
      <p>
        Desde el punto de vista técnico, la manicura rusa se realiza con torno y
        consigue una limpieza profunda de la uña quitando totalmente la
        cutícula. Se retira la cutícula suavemente y se aplica el esmalte lo más
        cerca posible de ésta. Al hacerlo en el modo seco y aplicando de esta
        manera el esmalte, la manicura dura más tiempo y se pueden llevar las
        uñas perfectas durante más de tres semanas.
      </p>
      <h3>ESMALTADO SEMIPERMANENTE:</h3>
      <p>
        El concepto “manicura semipermanente” suele hacer referencia a manicuras
        con esmaltado de larga duración, esta se logra gracias a la aplicación
        de geles esmaltes que secan en cabina uv/led. Tiene una duración de
        entre 7 – 14 días, dependiendo de la actividad que realice la clienta.
      </p>
      <h3>KAPPING:</h3>
      <p>
        El Kapping es una técnica que consiste en aplicar una fina capa de
        acrílico o gel fortificador sobre la uña que actuará como una barrera
        protectora. Este baño en gel kapping no alarga la uña natura, sino que
        acompaña el crecimiento de la misma y dura hasta 20 días.
      </p> */}
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
