import classes from "./Home.module.css";

import Button from "../UI/Button";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <h1 className={classes.title}>LAS UÑITAS DE LOLI</h1>
      <p className={classes.presentation}>
        Soy Loli Gimenez. Soy profesional de la salud y cuento con un amplio
        conocimiento y experiencia en esmaltados y cuidados de uñas y manos. Mi
        propuesta se centra en poder ofrecer salud y belleza para tus manos en
        cada tratamiento que realizo.{" "}
      </p>
      <p className={classes.final}>
        <span>Las manos son símbolos, y a veces, revelaciones…</span>
      </p>
      <Button type="button" onClick={props.onClick}>
        SIGUIENTE
      </Button>
    </div>
  );
};

export default Home;
