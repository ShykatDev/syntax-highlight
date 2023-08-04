import "./App.css";
import { useState } from "react";

function App() {
  const [inp, setInp] = useState("");
  const [hints, setHints] = useState("");

  let hint;

  const options = ["tomato", "tom cruise", "tetul", "technology"];

  const handleInp = (e) => {
    setInp(e.target.value);

    //autocomplete
  };

  const lwords = inp.toLowerCase().split(" ");

  //tomato 🍅 highlight
  lwords.forEach((el, ind) => {
    lwords[ind] = ` ${el} `;
    

    if (el === "tomato") {
      lwords[ind] = (
        <span key={ind} className="tomato">
          tomato
        </span>
      );
    }

    if (el.includes("tomato")) {
      const word = el.split("tomato").join("");

      lwords[ind] = (
        <span key={ind}>
          <span className="tomato">tomato</span>
          {word}
        </span>
      );
    }

    hint = options
      .filter((item) => {
        return el && item.includes(el);
      })
      .map((o) => {
        return <li>{o}</li>;
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-field">
          <input
            type="text"
            style={{ width: "40rem", height: "2.3rem", borderRadius: "0.3rem" }}
            value={inp}
            onChange={handleInp}
            maxLength="64"
          />
          <span className="fake">{lwords}</span>
          <ul className="hints">{hint}</ul>
        </div>
      </header>
    </div>
  );
}

export default App;
