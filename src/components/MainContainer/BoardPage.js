import React from "react";

import classes from "./../../styles/BoardPage.module.css";

import { MdStarOutline } from "react-icons/md";

import { RiEarthLine } from "react-icons/ri";

function BoardPage() {
  return (
    <div className={classes.BoardPage_TitleWrapper}>
      <h1 className={classes.BoardPage_BoardTitle}>Kanban Board</h1>

      <div className={classes.BoardPage_StarWrapper}>
        <MdStarOutline className={classes.Star} />
      </div>

      <div className={classes.BoardPage_Separator}></div>

      <button
        className={`${classes.Button_ButtonWrapper} ${classes.Button_Secondary}`}
      >
        <RiEarthLine className={classes.Button_Icon} />
        <span className={classes.Button_Label}>Public</span>
      </button>

      <div className={classes.BoardPage_Separator}></div>

      <span className={classes.UserAvatar_DefaultAvatar}>AH</span>
    </div>
  );
}

export default BoardPage;
