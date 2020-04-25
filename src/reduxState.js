import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

var logger = createLogger({
  collapsed: true
})

var defaultState = {
  fields: Array(9).fill(false),
  player1: "x",
  player2: "o",
  currentPlayer: 1
};

function game(state = defaultState, action) {
  switch (action.type) {
    case ('RESET_FIELDS'):
      return {
        ...state,
        fields: Array(9).fill(false) // start with array of 9 with false filled in
      }
    case ('MARK_FIELD'):
      var piece = state['player' + state.currentPlayer]; //x or o

      var newFields = state.fields.slice(); // clone fields array so it's immutable
      newFields[action.data.fieldIndex] = piece; // mark the played field with the proper mark

      return {
        ...state,
        fields: newFields,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
      }
  }

  return state;
}

var store = createStore(game, applyMiddleware(logger));

export default store;
