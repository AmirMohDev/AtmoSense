import moment, { weekdays } from "moment-jalaali";
import { useEffect, useState } from "react";
const PersianDate = () => {
  const days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let m = moment();
  const [Time, setTime] = useState("");
  const [WeekDay, SetWeekDay] = useState("");
  useEffect(() => {
    const finaltime = m.format("H:mm");
    const finalDate = `${days[m.day()]},${months[m.jMonth()]} ${[m.date()]}`;
    setTime(finaltime);
    SetWeekDay(finalDate);
  }, []);
  return (
    <>
      <h2 className=" text-[35px]">{Time}</h2>
      <h3 className="text-[17px]">{WeekDay}</h3>
    </>
  );
};

export default PersianDate;
