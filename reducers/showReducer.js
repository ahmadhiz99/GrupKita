import { SHOW_TEXT } from '../constants';
const initialState = {
  text: 0
};
const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_TEXT:
      return {
        ...state,
        text:action.payload
      };
    default:
      return text;
  }
}
export default countReducer;