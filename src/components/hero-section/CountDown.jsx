import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {      const now = new Date();
      const targetDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        13,
        24,
        0,
        0
      );

      const timeDifference = targetDate - now;
      const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
    };

    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" flex bg-gray-50/10 backdrop-blur-[2px]  gap-2 border-t-4 border-r-4 border-gray-600/60 rounded-3xl p-4 text-center skew-y-[24deg]">
      <h1 className="font-goodtimes-hv text-sm text-gray-50">
        Days
        <span className=" text-2xl block mt-1">
          {days >= 10 ? days : `0${days}`}
        </span>
      </h1>
      <span className=" font-goodtimes-hv text-[40px] text-gray-50 ">:</span>
      <h1 className="font-goodtimes-hv text-sm text-gray-50">
        Hours
        <span className=" text-2xl block mt-1">
          {hours >= 10 ? hours : `0${hours}`}
        </span>
      </h1>
      <span className=" font-goodtimes-hv text-gray-50 text-[40px]">:</span>
      <h1 className="font-goodtimes-hv text-sm text-gray-50">
        Minutes
        <span className=" text-2xl block mt-1">
          {minutes >= 10 ? minutes : `0${minutes}`}
        </span>
      </h1>
    </div>
  );
};

export default CountDown;
