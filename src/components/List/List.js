import classes from "./../../styles/List.module.css";

import React, { useState } from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import Card from "../Card/Card";
import CardEditor from "../Card/CardEditor";

import { BsThreeDots } from "react-icons/bs";

import { IoMdAdd } from "react-icons/io";
import shortid from "shortid";

function List({ list, listId, index, dispatch }) {
  const [state, setState] = useState({
    editingTitle: false,
    title: list.title,
    addingCard: false,
  });

  const { editingTitle, addingCard } = state;

  const toggleAddingCard = () =>
    setState({ ...state, addingCard: !addingCard });

  const cardId = shortid.generate();


// add new card abd store

  const addCard = async (cardText) => {
    try {
      toggleAddingCard();

      let nonSpaceRegex = /\S/g;

      let lengt = cardText.match(nonSpaceRegex).length;

      //console.log(lengt, " ", cardId, " ", listId, " ", cardText);

      if (lengt > 0) {
        dispatch({
          type: "ADD_CARD",
          payload: { cardText, cardId, listId },
        });
      }
    } catch (err) {
      alert("Field should not be empty");
    }
  };

  const toggleEditingTitle = () => setState({ editingTitle: !editingTitle });

  return (
    <div className={classes.ListCard_MainContainer}>
      <div
        className={classes.ListCard_TitleWrapper}
        onClick={toggleEditingTitle}
      >
        <h3 className={classes.ListCard_Title}>{list.title}</h3>
        <BsThreeDots size={"1.3em"} />
      </div>

      <Droppable droppableId={list._id} index={index} key={list._id}>
        {(provided, _snapshot) => (
          <div ref={provided.innerRef} className={classes.Task__List__Wrapper}>
            {list.cards &&
              list.cards.map((cardId, index) => (
                <Card
                  key={cardId}
                  cardId={cardId}
                  index={index}
                  listId={list._id}
                  title={list.title}
                />
              ))}

            {provided.placeholder}

            {addingCard ? (
              <div>
                <div>
                  <CardEditor
                    onSave={addCard}
                    onCancel={toggleAddingCard}
                    adding
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <div
                    className={classes.New__Task__Add__Wrapper}
                    onClick={toggleAddingCard}
                  >
                    <IoMdAdd className={classes.icons} />
                    Add a card
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  list: state.listsById[ownProps.listId],
});

export default connect(mapStateToProps)(List);
