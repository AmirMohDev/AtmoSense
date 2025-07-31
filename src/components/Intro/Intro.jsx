import "./intro.css";
import weatherlogo from "../../assets/image/weathericon.png";
import { Link } from "react-router-dom";
import Introtext from "./Introtext";
import usetitle from "../hook/usetitle";
import { motion } from "framer-motion";

const Intro = () => {
  usetitle("Atmosense");

  return (
    <div className="background min-h-screen w-full flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-10 max-w-3xl">

        {/* Logo */}
        <motion.img
          src={weatherlogo}
          alt="weather logo"
          className="w-36 sm:w-44 md:w-56"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Atmosense
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Introtext />
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="/weather">
            <button className="mt-6 px-6 py-3 flex items-center gap-3 text-white text-lg sm:text-xl font-medium border border-white rounded-full hover:bg-blue-600 transition duration-500 shadow-lg backdrop-blur-lg bg-white/10">
              Start Exploring
              <img src={weatherlogo} alt="" className="w-8 sm:w-10 relative -mt-[2px]" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
