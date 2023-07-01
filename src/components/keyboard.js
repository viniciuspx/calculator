import React from "react";

import Button from "./button";

import './keyboard.css';

function Keyboard(props) {
  const reallySetDisplay = (value) => {
    props.setDisplay(value);
  };
  const reallyGetOperation = (op) => {
    props.getOperation(op);
  };
  return (
    <div className="keyboard">
      <Button name="1" setDisplay={reallySetDisplay} />

      <Button name="2" setDisplay={reallySetDisplay} />

      <Button name="3" setDisplay={reallySetDisplay} />

      <Button name="+" type="Operation" getOperation={reallyGetOperation}/>

      <Button name="4" setDisplay={reallySetDisplay} />

      <Button name="5" setDisplay={reallySetDisplay} />

      <Button name="6" setDisplay={reallySetDisplay} />

      <Button name="-" type="Operation" getOperation={reallyGetOperation}/>
      
      <Button name="7" setDisplay={reallySetDisplay} />

      <Button name="8" setDisplay={reallySetDisplay} />

      <Button name="9" setDisplay={reallySetDisplay} />
      
      <Button name="*" type="Operation" getOperation={reallyGetOperation}/>

      <Button name="0" setDisplay={reallySetDisplay} />

      <Button name="." setDisplay={reallySetDisplay} />

      <Button name="/" type="Operation" getOperation={reallyGetOperation}/>
      
      <Button name="=" type="Operation" getOperation={reallyGetOperation}/>
    
      <Button name="AC" type="Operation" getOperation={reallyGetOperation}/>
    </div>
  );
}

export default Keyboard;
