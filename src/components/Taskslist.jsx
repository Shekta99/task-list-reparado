import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props) {
  const { list } = props;
  const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
  //operador ternario, si existe cargaAuxilar se usa ese valor como valor inicial del estado
  //si no existe se usa el valor de la lista por defecto como valor inicial del estado
  const [miLista, setMiLista] = useState(cargaAuxiliar ? cargaAuxiliar : list);

  const modificarElemento = (id) => {
    const listaModificada = miLista.map((iteracion) => {
      if (iteracion.id === id) {
        return { ...iteracion, completed: !iteracion.completed };
      } else {
        return iteracion;
      }
    });
    setMiLista(listaModificada);
    //cuando se modifique no solo seteo el estado con el valor modificado
    //tambien actualizo el valor del local storage con ese valor modificado
    window.localStorage.setItem("lista", JSON.stringify(listaModificada));
  };

  return (
    <ul>
      {
        //utilizo miLista para renderizar porque es mi estado y en mi estado esta la
        //información actualizada de como están mis tareas actualmente
        miLista.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            taskname={task.taskname}
            completed={task.completed}
            onModificarElemento={modificarElemento}
          />
        ))
      }
    </ul>
  );
}

export default Taskslist;
