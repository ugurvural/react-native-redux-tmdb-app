import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;
