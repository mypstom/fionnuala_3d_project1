"use client"
import Image from "next/image";
import FallingText from "../../component/FallingText";



export default function About() {
  return (
    <div className="w-full h-full bg-blue-100 flex justify-center items-center rounded-2xl">
      
      <FallingText
          text={`Hello, This is Fionnuala's page.`}
          highlightWords={["Hello", "Fionnuala's"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      
    </div>
  );
}
