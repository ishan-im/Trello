import React from "react";
import classes from "./../../styles/EditButton.module.css";
import { MdClear } from "react-icons/md";

function EditButton({ handleSave, saveLabel, handleCancel }) {
  return (
    <div className={classes.New__TaskCard__Button_Wrapper}>
      <button
        className={`${classes.Button__btn__Wrapper}  ${classes.button__Primary}`}
        onClick={handleSave}
      >
        <span className={classes.Button_Label}>{saveLabel}</span>
      </button>

      <MdClear className={classes.cross__icons} onClick={handleCancel} />
    </div>
  );
}

export default EditButton;
