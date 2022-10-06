import classes from "./../../styles/Card.module.css";

import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, cardId, listId, index, title }) {

  const [state, setState] = useState({
    hover: false,
    editing: false,
  });

  const startHover = () => setState({  hover: true });
  const endHover = () => setState({  hover: false });

  return (
    <Draggable draggableId={card._id} index={index} key={card._id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="Card"
          onMouseEnter={startHover}
          onMouseLeave={endHover}
        >
          <div className={classes.Task__Card__Main__Container}>
            <div
              className={classes.TaskCrd__TaskLabel__Wrapper}
              style={
                title === "To Do"
                  ? { backgroundColor: "#0079BF" }
                  : title === "Development"
                  ? { backgroundColor: "#ff595e" }
                  : title === "Testing"
                  ? { backgroundColor: "#ffca3a" }
                  : title === "Done"
                  ? { backgroundColor: "#8ac926" }
                  : {
                      backgroundColor: `#${Math.floor(
                        Math.random() * 16777215
                      ).toString(16)}`,
                    }
              }
            ></div>
            <h3 className={classes.TaskCard__Message}>{card.text}</h3>
          </div>
        </div>
      )}
    </Draggable>
  );
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardsById[ownProps.cardId],
});

export default connect(mapStateToProps)(Card);
