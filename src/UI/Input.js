import { Fragment } from "react";

// import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

export default Input;
