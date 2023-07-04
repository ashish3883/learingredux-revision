import { createStore } from 'redux';
import { loginReducer } from './reducer';
//creating store

const store = createStore(loginReducer)

export default store;