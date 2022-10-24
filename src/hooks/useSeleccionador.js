import { useState } from "react";

export const useSeleccionador = () => {
  const [select, setSelect] = useState("");

  const optionchanged = (e, id) => {
    setSelect( select => ({ ...select, [id]: e.target.value })  );
  }; 
  
  return (
    <div className="App" style={{ "text-align": "left" }}>
      <label for="seleccionar">¿Qué quiere ver?</label>

      <select onChange={e => optionchanged(e)} name="seleccionar" id="seleccionar">
        <option value="all">All</option>
        <option value="movie">Peliculas</option>
        <option value="serie">Series</option>
      </select>
    </div>,
    select
  );
}