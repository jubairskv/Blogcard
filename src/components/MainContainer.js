import React from "react";
import img from "../../src/assets/cactus_img.jpg";

const MainContainer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30rem] h-[30rem] rounded-lg p-4 shadow-md bg-white">
        <div className="flex flex-col justify-end text-center">
          <img src={img} alt="" className="rounded-xl" />
          <label className="p-1 mt-5 font-sans font-semibold text-color-dark-blue w-[5rem] h-8 bg-color-light-blue rounded-3xl ">
            design
          </label>
        </div>
        <div>
          <div className="pt-5">
            <h2 className="font-sans font-bold text-lg">
              Embracing Minimalism
            </h2>
            <p className="max-w-[25rem] text-color-dark-gray text-lg">
              From minimalist sculptures to minimalist paintings, this blog will
              inspire you to appreciate the beauty that lies in simplicity.
            </p>
          </div>

          <p className=" pt-8 font-sans text-lg text-color-dark-gray">
            Annie Spratt
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
