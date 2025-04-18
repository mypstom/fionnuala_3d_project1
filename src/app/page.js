"use client"

import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import LolipopImg from "@/../public/lolipop.png";
import { useState } from "react";
import BlurText from "../component/BlurText";

export default function Home() {
  const [lolipop, setLolipop] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false); // 新增動畫狀態

  const addLolipop = function () {
    setLolipop(lolipop + 1);

    // 觸發動畫
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 200); // 動畫持續時間
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
      <div className="flex w-full h-full bg-blue-100 justify-center items-center rounded-2xl">
      <BlurText
        text="Do you want some lolipop?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-12 text-rose-300" // ⬅️ 加上馬卡龍文字色
      />

      <div
        className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addLolipop}
      >
        <Image
          src={LolipopImg}
          alt="lolipop"
          className={`w-[68px] transition-transform duration-200 ease-in-out ${isBouncing ? "scale-125" : "scale-100"}`}
        />
        <div className="text-2xl">{lolipop}</div>
      </div>
    </div>
  );
}
