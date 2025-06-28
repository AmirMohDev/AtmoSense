import { IoSearch } from "react-icons/io5";
import weatherlogo from "../../assets/image/weathericon.png";
import "./weather.css";
import PersianDate from "../PersianDate/PersianDate";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import weatherinfo from "../../Redux/Action";

const Weather = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  
  const handlegetdata = (e) => {
    e.preventDefault();
    dispatch(weatherinfo(query));
    console.log(data);
  };
  return (
    <>
      <div className=" h-screen w-screen background text-white px-[13%] flex flex-col gap-[20px]">
        <div>
          <PersianDate />
        </div>

        <form onSubmit={handlegetdata}>
          <div className="flex items-center gap-[5px] p-[10px] bg-white/10 backdrop-blur-md w-[300px] rounded-[100px] ">
            <IoSearch />

            <input
              className=" placeholder-white w-full h-full focus:outline-0"
              type="text"
              placeholder="Search for a city"
              onChange={(e) => setquery(e.target.value)}
            />
          </div>
        </form>
        {loading ? (
          <div className="text-white text-center mt-4">Loading...</div>
        ) : data.main ? (
          <div className="bg-white/10 rounded-[20px] p-[15px]">
            <h2 className="text-[30px] font-[600] ">{data.name}</h2>
            <div className=" flex justify-between items-center">
              <img className="w-[80px] h-[60px]" src={weatherlogo} alt="" />
              <div className="">
              <h2 className="text-[50px]">{Math.round(data.main.temp)}°C</h2>
                <h3>{data.weather[0].description}</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white text-center mt-4">
            {error || "Enter name of cpintry or city"}
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
