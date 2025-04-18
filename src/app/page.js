"use client"

import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import HeartImg from "@/../public/heart.png"
import { useState } from "react";
import BlurText from "../component/BlurText";


export default function Home() {

  const [heart, setHeart] = useState(0);

  const addHeart = function(){
    setHeart(heart+1);
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="flex w-full h-full bg-red justify-center items-center rounded-2xl">
      

      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <div className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHeart}
      >
        <Image src={
          HeartImg} className="w-[68px]" alt="heart" />
        <div className=" text-2xl "> { heart } </div>
      </div>
      
    </div>
  );
}
