import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
import {newStart} from './actions/course';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(newStart());


export default store;