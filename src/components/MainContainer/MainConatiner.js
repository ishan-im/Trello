import React, { useState } from "react";

import BoardPage from "./BoardPage";

import { connect } from "react-redux";

import { DragDropContext } from "react-beautiful-dnd";

import classes from "./../../styles/MainContainer.module.css";

import List from "../List/List";

import AddList from "../List/AddList";

import { IoMdAdd } from "react-icons/io";

function MainConatiner({ dispatch, board }) {
  const [addingList, setAddingList] = useState(false);

  const toggleAddingList = () => setAddingList(!addingList);

  //drag card and drop card and return its new position to store

  const handleDragEnd = ({ source, destination, type }) => {
    // dropped outside the allowed zones
    if (!destination) return;

    // Move card
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      dispatch({
        type: "MOVE_CARD",
        payload: {
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          oldCardIndex: source.index,
          newCardIndex: destination.index,
        },
      });
    }
  };

  return (
    <div className={classes.MainConatiner__Wrapper}>
      <BoardPage />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.MainContainer__List__rappper}>
          {board.lists.map((listId, index) => {
            return <List listId={listId} key={listId} index={index} />;
          })}
          {addingList ? (
            <div className={classes.NewListCard__Button__Wrapper}>
              <div className={classes.Add__list}>
                <AddList toggleAddingList={toggleAddingList} />
              </div>
            </div>
          ) : (
            <div className={classes.NewListCard__Wrapper}>
              <div
                onClick={toggleAddingList}
                className={classes.NewListCard_AddMoreWrapper}
              >
                <IoMdAdd className={classes.icons} size={"1em"} />
                Add another list
              </div>
            </div>
          )}
        </div>
      </DragDropContext>
    </div>
  );
}

const mapStateToProps = (state) => ({ board: state.board });

export default connect(mapStateToProps)(MainConatiner);
