import "./styles.css";
import { useState } from "react";

export default function App() {
  const [select, setSelect] = useState("");

  const optionchanged = (e) => {
    setSelect(e.target.value);
  };

  const questions = [
    {
      id: 1,
      qst: "which country you are from",
      options: ["select", "USA", "UK", "Australia", "India"]
    },
    {
      id: 2,
      qst: "What is your country code",
      options: ["select", "+1", "+44", "+61", "+91"]
    }
  ];
  return (
    <div className="App" style={{ "text-align": "left" }}>
      {questions.map((quest) => (
        <div>
          {/* displaying the question */}
          <p>
            {" "}
            {quest.id}. {quest.qst}
          </p>
          {/* showing the options */}
          <select onChange={optionchanged}>
            {quest.options.map((option) => (
              <>
                <option> {option}</option>
              </>
            ))}
          </select>
          {/* selected option showing next to the dropdown */}
          &nbsp;&nbsp;
          <span style={{ color: "blue" }}>{select} </span>
        </div>
      ))}
    </div>
  );
}