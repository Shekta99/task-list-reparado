function Task(props) {
  const { id, completed, taskname, onModificarElemento } = props;

  function handleClickDiscarded() {
    alert(`The task ${taskname} has been discarded.`);
  }

  return (
    <li>
      <input
        type="checkbox"
        name={taskname}
        onClick={() => {
          //modifica tanto el estado como el valor del local storage con esta función
          onModificarElemento(id);
        }}
        onChange={() => {
          //en el onChange no me hace falta hacer nada ya que modificar tambien
          //quedo actualizando el local storage
          console.log(completed);
        }}
        checked={completed}
      />
      <label>{taskname}</label>
      <button onClick={handleClickDiscarded}>Discard task</button>
    </li>
  );
}

export default Task;
