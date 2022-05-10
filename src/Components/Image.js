import pic from "../Resources/nails5.jpg";
import classes from "./Image.module.css";

const Image = () => {
  return (
    <div className={classes.imgCard}>
      <img src={pic} alt="uñas" className={classes.img} />
    </div>
  );
  // PEDIR UNA DESCRIPCIÓN DE LA IMG
};

export default Image;
