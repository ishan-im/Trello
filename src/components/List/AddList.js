import React, { useState } from "react";
import { connect } from "react-redux";
import ListEditor from "./ListEditor";
import shortid from "shortid";

import EditButton from "../EditButton/EditButton";

import classes from "./../../styles/List.module.css";

function AddList({ dispatch, toggleAddingList }) {
  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const createList = async () => {
    try {
      toggleAddingList();

      let nonSpaceRegex = /\S/g;

      let lengt = title.match(nonSpaceRegex).length;

      if (lengt > 0) {
        dispatch({
          type: "ADD_LIST",
          payload: { listId: shortid.generate(), listTitle: title },
        });
      }
    } catch (err) {
      alert("Field should not be empty");
    }
  };

  return (
    <div className={classes.Add__List__Editor}>
      <ListEditor
        title={title}
        handleChangeTitle={handleChangeTitle}
        onClickOutside={toggleAddingList}
        saveList={createList}
      />

      <EditButton
        handleSave={createList}
        saveLabel={"Add list"}
        handleCancel={toggleAddingList}
      />
    </div>
  );
}

export default connect()(AddList);
