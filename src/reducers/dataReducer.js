// src/reducers/dataReducer.js
const initialState = {
    data: [], // Atur initial state sesuai kebutuhan
    loading: false,
    error: null
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default dataReducer;