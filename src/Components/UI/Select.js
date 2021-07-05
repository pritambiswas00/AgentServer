import React from "react";

import Styles from "./Select.module.css";
const SelectOption = (props) => {
  return (
    <div className={Styles.select}>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        value={props.selectedOption}
        onChange={props.onSelectHandleChange}
        defaultValue="none"
      >
        <option value="none" disabled>
          Please select an Account
        </option>
        {props.options.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;
