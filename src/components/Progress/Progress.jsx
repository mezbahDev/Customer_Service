import React from "react";
import vector1 from "../../assets/vector1.png";
import "./Progress.css";

const Progress = ({ inProgress, resolved }) => {
  return (
    <div className="bg-[#F5F5F5] font-inter py-[5px] md:py-[10px] lg:px-[80px]  mx-auto  flex flex-col md:flex-row items-center progress-container gap-4">
      {/* in progress */}
      <div className="progress-card w-[300px] lg:w-[750px] md:w-[500px] h-[250px] mx-auto flex flex-col  items-center justify-center">
        <div className="vector-wrapper">
          <img src={vector1} alt="vector 1" className="vector1 w-full " />
          <img src={vector1} alt="vector 2" className="vector2" />
        </div>
        <div className="text-content text-[#fff]">
          <p className="text-[24px]">In-Progress</p>
          <span className="text-[60px] font-[600]">{inProgress}</span>
        </div>
      </div>

      {/* Resolved */}
      <div className="resolved-card w-[300px] lg:w-[750px] md:w-[500px] h-[250px] mx-auto flex flex-col items-center justify-center">
        <div className="vector-wrapper">
          <img src={vector1} alt="vector 1" className="vector1" />
          <img src={vector1} alt="vector 2" className="vector2" />
        </div>
        <div className="text-content text-[#fff]">
          <p className="text-[24px]">Resolved</p>
          <span className="text-[60px] font-[600]">{resolved}</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
