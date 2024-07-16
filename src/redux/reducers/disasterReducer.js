import {
  FETCH_DISASTERS_REQUEST,
  FETCH_DISASTERS_SUCCESS,
  FETCH_DISASTERS_FAILURE,
} from "../actions/disasterActions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const disasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISASTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DISASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DISASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default disasterReducer;