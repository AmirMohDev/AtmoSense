import "./intro.css";
import weatherlogo from "../../assets/image/weathericon.png";
import { Link } from "react-router-dom";
import Introtext from "./Introtext";
const Intro = () => {
  return (
    <>
      <div className="background w-screen h-screen">
        <div className="flex justify-center flex-col items-center">
          <div className="w-[200px] lg:w-[250px] flex justify-center ml-[50px]  top-[60px]">
            <img src={weatherlogo} alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className="font-[600] mt-[40px] text-[60px] lg:text-[70px] text-white flex justify-center">
            Atmosense
            </h2>

            <div>
              <Introtext/>
            </div>
          </div>
        </div>
        <Link className="flex justify-center items-end mt-[100px]" to={"/weather"}>
          <button className="  justify-center w-fit px-[10px] text-white text-[20px] flex items-center border-[1px] border-white rounded-[500px] mt-[50px] gap-[10px] transition-all duration-[1000ms] hover:bg-[#0e8df4]">
            Start Exploring the
            <img className="w-[60px] relative bottom-[3px]" src={weatherlogo} alt="" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Intro;
