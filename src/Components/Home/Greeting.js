import Button from "../../UI/Button";

import classes from "./Greeting.module.css";

const Greeting = (props) => {
  return (
    <>
      <h1 className={classes.title}>LAS UÑITAS DE LOLI</h1>
      <p className={classes.presentation}>
        Soy Loli Gimenez, profesional de la salud, y cuento con un amplio
        conocimiento y experiencia en esmaltados y cuidados de uñas y manos. Mi
        propuesta se centra en ofrecer salud y belleza para tus manos en
        cada tratamiento que realizo.
      </p>
      <p className={classes.final}>
        <span>Las manos son símbolos, y a veces, revelaciones…</span>
      </p>
      <Button onClick={props.onDisplay}>VER TRATAMIENTOS</Button>
      <Button type="button" onClick={props.onClick}>
        PEDIR TURNO
      </Button>
    </>
  );
};

export default Greeting;
