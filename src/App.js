import { useState } from "react";
import OperatorButton from "./components/OperatorButton";
import NumberButton from "./components/NumberButton";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleResult = () => {
    setResult(eval(result));
  };

  const handleClear = () => {
    setResult("");
  };

  return (
    <div className="container">
      {/* result */}
      <div className="result">
        <span className="value">{result}</span>
      </div>

      {/* calculator keys */}
      <div className="row">
        {[7, 8, 9].map((item) => (
          <NumberButton
            handleClick={handleClick}
            number={item}
            key={item}
            name={item}
          />
        ))}
        <OperatorButton handleClick={handleClick} operator={"*"} name={"*"} />
      </div>

      <div className="row">
        {[4, 5, 6].map((item) => (
          <NumberButton
            handleClick={handleClick}
            number={item}
            key={item}
            name={item}
          />
        ))}
        <OperatorButton handleClick={handleClick} operator={"-"} name={"-"} />
      </div>

      <div className="row">
        {[1, 2, 3].map((item) => (
          <NumberButton
            handleClick={handleClick}
            number={item}
            key={item}
            name={item}
          />
        ))}
        <OperatorButton handleClick={handleClick} operator={"+"} name={"+"} />
      </div>

      <div className="row">
        <OperatorButton handleClick={handleClear} operator={"C"} />
        {[0, "."].map((item) => (
          <NumberButton
            handleClick={handleClick}
            number={item}
            key={item}
            name={item}
          />
        ))}
        <OperatorButton handleClick={handleResult} operator={"="} />
      </div>
    </div>
  );
}

export default App;
