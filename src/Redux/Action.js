import axios from "axios";
import {
  RECIVE_WEATHER_ERROR,
  RECIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./Type";

const sendWeatherRequest = () => ({
  type: SEND_WEATHER_REQUEST
});

const receiveWeatherResponse = (data) => ({
  type: RECIVE_WEATHER_RESPONSE,
  payload: data
});

const receiveWeatherError = (error) => ({
  type: RECIVE_WEATHER_ERROR,
  payload: error.message 
});

const weatherinfo = (query) => {
  return async (dispatch) => { 
    dispatch(sendWeatherRequest());
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=f6f3883d288441625514b0f21e53e59e&units=metric` 
      );
      
      
      const weatherData = {
        ...response.data,
        main: {
          ...response.data.main,
          temp: Math.round(response.data.main.temp), 
          temp_min: Math.round(response.data.main.temp_min),
          temp_max: Math.round(response.data.main.temp_max)
        }
      };
      
      dispatch(receiveWeatherResponse(weatherData));
    } catch (error) {
      dispatch(receiveWeatherError({
        message: error.response?.data?.message || error.message,
        status: error.response?.status
      }));
    }
  };
};

export default weatherinfo;