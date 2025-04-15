import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../stores/state';

function Countdown ({target}) {
  const {data} = useLanguage();
  const formatNumber = (num) => num < 10 ? '0' + num : '' + num;

  const calculateTimeLeft = () => {
    const difference = +new Date(target) - +new Date(); // compare with now
    if (difference <= 0) return null;

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60))
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      if (!updatedTimeLeft) {
        clearInterval(timer);
      }
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer); // clear on unmount
  }, [target, timeLeft]);

  return (
    <div className="bg-white pt-[10px] pb-[24px] px-[26px] rounded-[21px] lg:max-w-[756px] lg:mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-center lg:w-[80px] w-[50px]">
          <h6 className="lg:text-[60px] lg:tracking-[4.8px] text-[36px] heading-[45px] font-playfair font-black">{timeLeft.days}</h6>
          <h6 className="lg:text-[16px] text-[12px] font-bold tracking-[-0.65px]">{data.countdown.d}</h6>
        </div>
        <h6 className="text-[65px] tracking-[-0.65px] font-normal">:</h6>
        <div className="text-center lg:w-[80px] w-[50px]">
          <h6 className="lg:text-[60px] lg:tracking-[4.8px] text-[36px] heading-[45px] tracking-[4.8px] font-playfair font-black">{timeLeft.hours}</h6>
          <h6 className="lg:text-[16px] text-[12px] font-bold tracking-[-0.65px]">{data.countdown.h}</h6>
        </div>
        <h6 className="text-[65px] tracking-[-0.65px] font-normal">:</h6>
        <div className="text-center lg:w-[80px] w-[50px]">
          <h6 className="lg:text-[60px] lg:tracking-[4.8px] text-[36px] heading-[45px] tracking-[4.8px] font-playfair font-black">{timeLeft.minutes}</h6>
          <h6 className="lg:text-[16px] text-[12px] font-bold tracking-[-0.65px]">{data.countdown.m}</h6>
        </div>
        <h6 className="text-[65px] tracking-[-0.65px] font-normal">:</h6>
        <div className="text-center lg:w-[80px] w-[50px]">
          <h6 className="lg:text-[60px] lg:tracking-[4.8px] text-[36px] heading-[45px] tracking-[4.8px] font-playfair font-black">{timeLeft.seconds}</h6>
          <h6 className="lg:text-[16px] text-[12px] font-bold tracking-[-0.65px]">{data.countdown.s}</h6>
        </div>
      </div>
    </div>
  )
}

export default Countdown