import React from "react";

function Header() {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center bg-[#FBEBB5]">
        <div className="flex items-center">
          <div>
            <h1 className="text-[#000000] text-[64px]">
              Rocket single <br />
              seater
            </h1>
            <p className="text-[#000000] text-[24px] border-b-[2px] w-[121px] border-[#000000] text-center">
              Shop Now
            </p>
          </div>
        </div>
        <div>
          <img
            src="/Rocket single seater 1.svg"
            alt=""
            className="w-[853px] h-[700px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
