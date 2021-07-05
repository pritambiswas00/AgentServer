import React from "react";
import Styles from "./Backdrop.module.css";

function Backdrop(props) {
  return <div className={Styles.backdrop} onClick={props.onClose} />;
}

export default Backdrop;
