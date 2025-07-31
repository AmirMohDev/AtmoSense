import { IoSearch } from "react-icons/io5";
import PersianDate from "../PersianDate/PersianDate";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import weatherinfo from "../../Redux/Action";
import { motion, AnimatePresence } from "framer-motion";

const Weather = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleGetData = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(weatherinfo(query.trim()));
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white px-4 sm:px-10 py-10 flex items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <PersianDate />

        <form onSubmit={handleGetData} className={`w-full  ${data.main ? '' : ''}`}>
          <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-full shadow-md">
            <IoSearch className="text-white text-xl" />
            <input
              className="bg-transparent placeholder-white w-full focus:outline-none text-base sm:text-lg"
              type="text"
              placeholder="Search for a city..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center mt-4 text-lg font-medium"
          >
            Loading...
          </motion.div>
        ) : data.main ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={data.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{data.name}</h2>
                  <p className="capitalize text-lg font-medium">{data.weather[0].description}</p>
                </div>
                <img
                  className="w-20 h-20"
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base">
                <p>🌡️ Temperature: <span className="font-semibold">{Math.round(data.main.temp)}°C</span></p>
                <p>🤒 Feels Like: <span className="font-semibold">{Math.round(data.main.feels_like)}°C</span></p>
                <p>⬇️ Min Temp: <span className="font-semibold">{Math.round(data.main.temp_min)}°C</span></p>
                <p>⬆️ Max Temp: <span className="font-semibold">{Math.round(data.main.temp_max)}°C</span></p>
                <p>💧 Humidity: <span className="font-semibold">{data.main.humidity}%</span></p>
                <p>🔼 Pressure: <span className="font-semibold">{data.main.pressure} hPa</span></p>
                <p>🌬️ Wind Speed: <span className="font-semibold">{data.wind.speed} m/s</span></p>
                <p>👁️ Visibility: <span className="font-semibold">{(data.visibility / 1000).toFixed(1)} km</span></p>
                <p>☀️ Sunrise: <span className="font-semibold">{formatTime(data.sys.sunrise)}</span></p>
                <p>🌇 Sunset: <span className="font-semibold">{formatTime(data.sys.sunset)}</span></p>
                <p>🧭 Longitude: <span className="font-semibold">{data.coord.lon}</span></p>
                <p>🗺️ Latitude: <span className="font-semibold">{data.coord.lat}</span></p>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center mt-6 text-base"
          >
            {error || "Enter the name of a city to get started"}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Weather;
