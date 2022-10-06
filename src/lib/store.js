import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash.throttle";
import seed from "./seed";
// import logger from 'redux-logger'

// add move and delete card and list

// applying only addding of card , list and moving of card  for this project only

const board = (state = { lists: [] }, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const { listId } = action.payload;
      return { lists: [...state.lists, listId] };
    }

    default:
      return state;
  }
};

// store list state

const listsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, cards: [] },
      };
    }

    case "ADD_CARD": {
      const { listId, cardId } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], cards: [...state[listId].cards, cardId] },
      };
    }

    case "MOVE_CARD": {
      const { oldCardIndex, newCardIndex, sourceListId, destListId } =
        action.payload;
      // Move within the same list

      if (sourceListId === destListId) {
        const newCards = Array.from(state[sourceListId].cards);
        const [removedCard] = newCards.splice(oldCardIndex, 1);
        newCards.splice(newCardIndex, 0, removedCard);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], cards: newCards },
        };
      }
      // Move card from one list to another
      const sourceCards = Array.from(state[sourceListId].cards);
      const [removedCard] = sourceCards.splice(oldCardIndex, 1);
      const destinationCards = Array.from(state[destListId].cards);
      destinationCards.splice(newCardIndex, 0, removedCard);
      return {
        ...state,
        [sourceListId]: { ...state[sourceListId], cards: sourceCards },
        [destListId]: { ...state[destListId], cards: destinationCards },
      };
    }

    default:
      return state;
  }
};

const cardsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CARD": {
      const { cardText, cardId } = action.payload;
      return { ...state, [cardId]: { text: cardText, _id: cardId } };
    }

    default:
      return state;
  }
};

const reducers = combineReducers({
  board,
  listsById,
  cardsById,
});

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
    //console.log("Saved state to local storage");
  } catch (err) {
    // ignore write errors
    //console.log(err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }

    //console.log("returning from local storage ",JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);

// I don't know why it is not working, :( so I had to use old way :)

// const store = configureStore({
//   reducer:reducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   persistedState
// })

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

//console.log(store.getState());
if (!store.getState().board.lists.length) {
  //console.log("SEED");
  seed(store);
}

export default store;
