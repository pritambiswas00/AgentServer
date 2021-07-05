import React from "react";
import Styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import ReactDOM from "react-dom";

function ModalOverlay(props) {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>
        <h1>Error</h1>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay/>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
}

export default Modal;