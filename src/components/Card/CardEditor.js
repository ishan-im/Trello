import React, { useState } from "react";

import EditButton from "../EditButton/EditButton";

import classes from "./../../styles/Card.module.css";

function CardEditor({ onSave, onCancel, adding }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      //console.log(text);
      onSave(text);
    }
  };

  const handleSubmitText = (e) => {
    e.preventDefault();
    onSave(text);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className={classes.New__TaskCard__Input__Card}
          placeholder="Enter a title for this card..."
          value={text}
          onKeyDown={onEnter}
          onChange={handleChangeText}
          required
        />
        <EditButton
          handleSave={handleSubmitText}
          saveLabel={adding ? "Add card" : "Add List"}
          handleCancel={onCancel}
        />
      </form>
    </div>
  );
}

export default CardEditor;
