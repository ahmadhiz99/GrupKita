import { COUNTER_CHANGE, SHOW_TEXT } from '../constants';
const initialState = {
  test: 0,
  text: 'adasdad',
};
const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        test:action.payload
      };
    case SHOW_TEXT:
      return {
        ...state,
        text:action.payload
      };
    default:
      return state;
  }
}
export default countReducer;