import React, { Fragment } from "react";

import classes from "./../../styles/Notification.module.css";

import { MdClear } from "react-icons/md";

import { useState } from "react";

function Notification() {
  const [show, setShow] = useState(true);

  return (
    <div className={classes.BoardPage_TopStrip}>
      {show && (
        <Fragment>
          <div>
            <img
              className={classes.BoardPage_EarthIcon}
              src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg"
              alt="Earth Green"
            />
            <span className={classes.BoardPage_Message}>
              This board is set to public. Board admins can change its
              visibility setting at any time.
            </span>
            <a
              className={classes.BoardPage_KnowMore}
              href="https://reactjs.org"
              target="_#"
            >
              Learn more here
            </a>
          </div>
          <span className={classes.icons}>
            <MdClear onClick={() => setShow(false)} />
          </span>
        </Fragment>
      )}
    </div>
  );
}

export default Notification;
