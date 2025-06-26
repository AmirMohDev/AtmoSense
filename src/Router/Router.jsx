import { createBrowserRouter } from "react-router-dom";
import Intro from "../components/Intro/Intro";
import Weather from "../components/Weather/Weather";

export const router = createBrowserRouter([{
    path:"/",
    element:<Intro/>
},
{
    path:"/weather",
    element:<Weather/>
}])
