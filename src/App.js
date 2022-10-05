import { useState } from "react";
import OperatorButton from "./components/OperatorButton";
import NumberButton from "./components/NumberButton";

function App() {
  const [display, setDisplay] = useState(""); //change to result?
  const [expression, setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };

  const handleClear = () => {
    setDisplay("");
  };
  return (
    <div className="container">
      {/*  results and inputs */}
      <div className="result">
        {/* <input type="text" value="" disabled /> */}
        <span className="value">{display}</span>
        <span className="expression">{expression}</span>
      </div>

      {/* calculator keys */}
      <form>
        <div className="row">
          {[7, 8, 9].map((item) => (
            <NumberButton handleClick={handleClick} number={item} key={item} />
          ))}
          <OperatorButton handleClick={handleClick} operator={"*"} />
        </div>

        <div className="row">
          {[4, 5, 6].map((item) => (
            <NumberButton handleClick={handleClick} number={item} key={item} />
          ))}
          <OperatorButton handleClick={handleClick} operator={"-"} />
        </div>

        <div className="row">
          {[1, 2, 3].map((item) => (
            <NumberButton handleClick={handleClick} number={item} key={item} />
          ))}
          <OperatorButton handleClick={handleClick} operator={"+"} />
        </div>

        <div className="row">
          <OperatorButton handleClick={handleClear} operator={"C"} />
          {[0, "."].map((item) => (
            <NumberButton handleClick={handleClick} number={item} key={item} />
          ))}
          <OperatorButton handleClick={handleResult} operator={"="} />
        </div>
      </form>
    </div>
  );
}

export default App;
