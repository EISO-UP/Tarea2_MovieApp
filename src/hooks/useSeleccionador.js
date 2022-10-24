import "./styles.css";
import { useEffect, useState } from "react";
import { getTrending } from "../helpers/getTrending";

export default function App() {
  const [select, setSelect] = useState("");

  const optionchanged = (e) => {
    setSelect(e.target.value);
  }; 

  const getSeleccion = async (time_window) => {
    const results = await getTrending(setSelect.value, time_window);
    setSelect(results);
  }
  useEffect(() => {
    getSeleccion();
  }, []);
  
  return (
    <div className="App" style={{ "text-align": "left" }}>
      <label for="seleccionar">¿Qué quiere ver?</label>

      <select onChange={optionchanged} name="seleccionar" id="seleccionar">
        <option value="all">All</option>
        <option value="movie">Peliculas</option>
        <option value="serie">Series</option>
      </select>
    </div>,
    select
  );
}