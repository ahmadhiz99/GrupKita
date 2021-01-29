import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import showReducer from '../reducers/showReducer';
const rootReducer = combineReducers(
    { test: countReducer },
    { text: showReducer },
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
