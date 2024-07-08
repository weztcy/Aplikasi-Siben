// src/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; // Ubah sesuai dengan nama reducer Anda

const rootReducer = combineReducers({
  data: dataReducer // Sesuaikan dengan nama state dan reducer Anda
  // Tambahkan reducers lain jika diperlukan
});

export default rootReducer;
