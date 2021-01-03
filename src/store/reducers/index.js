import { combineReducers } from 'redux';
import {
  RENDER_TRIVIA,
  LOAD_TRIVIA
} from '../actions';

const initialState = {
};

function trivia(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case RENDER_TRIVIA:
      return {
        ...state,
        loading: false,
        answer: payload[0].answer,
        question: payload[0].question,
        value: payload[0].value,
        airdate: payload[0].airdate,
        category: payload[0].category.title,
      }
    case LOAD_TRIVIA:
      return {
        ...state,
        loading: true
      }
    default:
    return state
  }
}

const reducers = combineReducers({
  trivia
});

export default reducers