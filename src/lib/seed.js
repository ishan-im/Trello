import shortid from "shortid";


// manage list and card  stste here to storage (only add function)

export default function seed(store) {

  //console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "To Do" },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call AAA999",
    },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call BBB999",
    },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call CCC999",
    },
  });

  //console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Development" },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call DDD999",
    },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call EEE999",
    },
  });

  //console.log("Insert third list");
  const thirdListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: thirdListId, listTitle: "Testing" },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call FFF999",
    },
  });

  //console.log("Insert fourth list");
  const fourthListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: fourthListId, listTitle: "Done" },
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: fourthListId,
      cardId: shortid.generate(),
      cardText: "Help Desk Call GGG999",
    },
  });
}
