import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from  './reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

export default Store;