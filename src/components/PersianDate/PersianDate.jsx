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
    <div className="flex items-center justify-between">
      <h2 className="text-[25px]">{WeekDay}</h2>
      <h2 className=" text-[25px]">{Time}</h2>
    </div>
    </>
  );
};

export default PersianDate;
