import React from "react";
import Styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={Styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        id={props.input.id}
        {...props.input}
        onChange={props.change}
        value={props.value}
      />
    </div>
  );
};

export default Input;
