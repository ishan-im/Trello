import React from "react";

import classes from "./../../styles/ListEditor.module.css";

function ListEditor({ title, handleChangeTitle, saveList }) {
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      saveList();
    }
  };

  return (
    <form>
      <input
        type="text"
        className={classes.New__TaskCard__Input__Card}
        placeholder="Enter List Title"
        value={title}
        onKeyDown={onEnter}
        onChange={handleChangeTitle}
        required
      />
    </form>
  );
}

export default ListEditor;
