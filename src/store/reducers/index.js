import { combineReducers } from 'redux';
import {
  SET_UI,
  RENDER_TRIVIA
} from '../actions';

const initialState = {
};

function trivia(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case RENDER_TRIVIA:
      return {
        ...state,
        answer: payload[0].answer,
        question: payload[0].question,
        value: payload[0].value,
        airdate: payload[0].airdate,
        category: payload[0].category.title,
      }
      default:
      return state
  }
}

const reducers = combineReducers({
  trivia
});

export default reducers