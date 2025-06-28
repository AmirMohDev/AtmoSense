import {
  RECIVE_WEATHER_ERROR,
  RECIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./Type";

const init = {
  loading: false,
  data: {},
  error: "",
};
const Reducer = (state = init, action) => {
  switch (action.type) {
    case SEND_WEATHER_REQUEST:
      return { ...state, loading: true };
    case RECIVE_WEATHER_RESPONSE:
      return { ...state, data: action.payload, error: "", loading: false };
    case RECIVE_WEATHER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export default Reducer