import React from "react";

import "./button.css";

function Button(props) {
  const handleClick = () => {
    if (props.type === "Operation") {
      props.getOperation(props.name);
    } else {
      props.setDisplay(props.name);
    }
  };

  return (
    <button
      className={props.name === "AC" ? "button-ac" : "button"}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
