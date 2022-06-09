const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.label}
      </label>
      <input
        className={props.inputClassName}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
