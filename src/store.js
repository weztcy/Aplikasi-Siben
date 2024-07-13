// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Ubah sesuai dengan nama reducer Anda

const store = createStore(rootReducer); // Buat store dengan rootReducer

export default store;
