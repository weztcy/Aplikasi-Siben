import axios from "axios";

export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeather = () => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });

  try {
    const response = await axios.get(
      "https://ibnux.github.io/BMKG-importer/cuaca/501262.json"
    );
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
  }
};