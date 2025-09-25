import React from "react";

const Navbar = () => {
  return (
    <div className="font-inter px-[10px] md:px-[20px] lg:px-[80px] py-[5px] md:py-[15px]  flex items-center justify-between">
      <p className="text-[16px] md:text-[20px] lg:text-[24px] font-[700] text-[#130B2D]">
        CS - Ticket System
      </p>

      <div className="flex items-center gap-[32px]">
        <div className="hidden md:flex ">
          <ul className="flex md:text-[12px] md:gap-[12px] lg:gap-[30px] lg:text-[16px] font-[400] text-black">
            <li className="hover:scale-[1.1]">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-[1.1]">
              <a href="#">FAQ</a>
            </li>
            <li className="hover:scale-[1.1]">
              <a href="#">Changelog</a>
            </li>
            <li className="hover:scale-[1.1]">
              <a href="#">Blog</a>
            </li>
            <li className="hover:scale-[1.1]">
              <a href="#">Download</a>
            </li>
            <li className="hover:scale-[1.1]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <button className="btn text-[#ffff] rounded bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] border-none flex items-center justify-center gap-2">
          <i className="ri-add-line"></i>
          <p>New Ticket</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
