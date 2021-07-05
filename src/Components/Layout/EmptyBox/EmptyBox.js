import React from "react";
import Styles from "./EmptyBox.module.css";
function EmptyBox(props) {
  return (
    <div className={Styles.Empty}>
      <section>
        <h4>Please select a conversation to see the messages</h4>
      </section>
    </div>
  );
}

export default EmptyBox;
