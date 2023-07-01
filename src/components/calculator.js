import React, { useEffect, useState } from "react";
import Keyboard from "./keyboard";
import Display from "./display";
import Calculate from "./utils";

import "./calculator.css";

var valueA, valueB;
let flag = true;

function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const reset = () => {
    valueA = valueB = 0;
    setResult(0);
    setCurrentDisplay("");
    setCurrentOperation("");
    flag = true;
  };

  const updateDisplay = (value) => {
    if (resultDisplayed) {
      setCurrentDisplay(value);
      setResultDisplayed(false);
    } else if (!(value === "." && currentDisplay.includes("."))) {
      currentDisplay === ""
        ? setCurrentDisplay(value)
        : setCurrentDisplay(currentDisplay + value);
    }
  };

  useEffect(() => {
    setCurrentDisplay(result);
  }, [result]);

  const getOperation = (op) => {
    if (op === "AC") {
      reset();
    } else {
      if (op !== "=") setCurrentOperation(op);

      flag
        ? (valueA = Number(currentDisplay))
        : (valueB = Number(currentDisplay));

      setCurrentDisplay("");

      flag = !flag;

      if (valueA && valueB && op === "=") {
        const partialResult = Calculate(valueA, valueB, currentOperation);
        setResult(partialResult);
        setResultDisplayed(true);
      }
    }

    // [DEBUG]
    //  console.log(
    //   "Value A: " +
    //     valueA +
    //     " Value B: " +
    //     valueB +
    //     " Current OP: " +
    //     currentOperation
    // );
  };

  return (
    <div className="calculator">
      <Display content={currentDisplay} />
      <Keyboard setDisplay={updateDisplay} getOperation={getOperation} />
    </div>
  );
}

export default Calculator;
