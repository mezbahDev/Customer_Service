import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full gap-[60px] p-[20px] md:p-[40px] lg:p-[80px] bg-[#000000] text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-center lg:justify-between lg:items-start gap-[40px] w-full max-w-[1200px]">
        {/* Left Side (Brand + Company) */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center md:items-start">
          {/* Brand */}
          <div className="flex flex-col gap-[20px] items-center md:items-start text-center md:text-left max-w-[320px]">
            <h1 className="text-[18px] md:text-[22px] lg:text-[28px] font-[700]">
              CS - Ticket System
            </h1>
            <p className="text-[10px] md:text-[14px] lg:text-[16px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-[16px] items-center md:items-start">
            <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-[700]">
              Company
            </h1>
            <ul className="flex flex-col gap-[12px] text-[10px] md:text-[14px] lg:text-[16px]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle (Services + Info) */}
        <div className="flex flex-col md:flex-row gap-[40px] items-center md:items-start">
          {/* Services */}
          <div className="flex flex-col gap-[16px] items-center md:items-start">
            <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-[700]">
              Services
            </h1>
            <ul className="flex flex-col gap-[12px] text-[10px] md:text-[14px] lg:text-[16px]">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-[16px] items-center md:items-start">
            <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-[700]">
              Information
            </h1>
            <ul className="flex flex-col gap-[12px] text-[10px] md:text-[14px] lg:text-[16px]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side (Social Links) */}
        <div className="flex flex-col gap-[16px] items-center md:items-start">
          <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-[700]">
            Social Links
          </h1>
          <ul className="flex flex-col gap-[12px] text-[10px] md:text-[14px] lg:text-[16px]">
            <li className="flex gap-2 items-center">
              <i className="ri-twitter-x-line"></i>
              <a href="#">@CS - Ticket System</a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="ri-linkedin-fill"></i>
              <a href="#">@CS - Ticket System</a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="ri-facebook-circle-line"></i>
              <a href="#">@CS - Ticket System</a>
            </li>
            <li className="flex gap-2 items-center">
              <i className="ri-mail-line"></i>
              <a href="mailto:support@cst.com">support@cst.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-[10px] md:text-[14px] lg:text-[16px] text-center">
        <p>© 2025 CS - Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
