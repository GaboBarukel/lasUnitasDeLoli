import Button from "../../../UI/Button";

const AssignSelector = (props) => {
  return (
    <>
      <h1>SELECCIONE QUE DESEA HACER</h1>
      <Button onClick={props.onCalendar}>
        ASIGNAR TURNOS DISPONIBLES DE ESTA SEMANA
      </Button>
      <Button onClick={props.onDates}>
        VER LOS TURNOS PEDIDOS DE ESTA SEMANA
      </Button>
    </>
  );
};

export default AssignSelector;
