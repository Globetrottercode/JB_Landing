import Logo from "../images/jobbox_logo.jpeg";
import Image from "next/image";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="h-[70vh] lg:h-[50vh] bg-[#394867]">
      <div className="flex flex-wrap justify-evenly items-center w-full h-[90%] lg:h-[85%] ">
        <div className="flex flex-col justify-between text-center lg:text-left order-2 lg:order-1 h-[40%] lg:h-1/2  w-[80%] lg:w-[40%]  mb-0 lg:mb-2 ">
          <p>
            {" "}
            <Image
              src={Logo}
              width={50}
              height={50}
              alt={"Reference Image"}
              className="object-fit mr-2 mix-blend-multiply inline"
            />
            <span className="font-bold text-white">JOBBOX</span>
          </p>
          <p className="font-bold text-white">
            Headquarters : 62/63, The Pavilion, Church street, Bangalore 560001
          </p>
          <p className="text-white font-bold">
            <InstagramOutlined className="text-3xl pr-[5%]" />{" "}
            <TwitterOutlined className="text-3xl pr-[5%]" />{" "}
            <YoutubeOutlined className="text-3xl pr-[5%]" />{" "}
            <MailOutlined className="text-3xl pr-[5%]" />
          </p>
        </div>
        <div className=" text-white order-1 text-center lg:order-2 h-[40%] lg:h-[70%] w-[30%] lg:w-[15%] ">
          <p className="font-bold lg:mb-4">Links</p>
          <p className="font-light lg:text-md mb-1 lg:mb-2 text-[0.5rem]">
            Download App
          </p>
          <p className="font-light lg:text-md mb-1 lg:mb-2 text-[0.5rem]">
            Free Job Alerts
          </p>
          <p className="font-light lg:text-md mb-1 lg:mb-2  text-[0.5rem]">
            Careers
          </p>
          <p className="font-light lg:text-md mb-1 lg:mb-2 text-[0.5rem]">
            Vulnerability Disclosure Policy
          </p>
          <p className="font-light lg:text-md text-[0.5rem]">
            International Jobs
          </p>
        </div>
        <div className="text-center text-white order-1 lg:order-2 h-[40%] lg:h-[70%] w-[30%] lg:w-[15%] ">
          {/* <div className="  h-[70%]  w-full  "> */}
          <p className="font-bold lg:mb-4">Legal</p>
          <p className="font-light mb-1 lg:mb-2  lg:text-md text-[0.5rem]">
            Privacy Policy
          </p>
          <p className="font-light mb-1 lg:mb-2 lg:text-md text-[0.5rem]">
            User T&C
          </p>
          <p className="font-light mb-1 lg:mb-2 lg:text-md text-[0.5rem]">
            Employer Term of Service
          </p>
          <p className="font-light mb-1 lg:mb-2 lg:text-md text-[0.5rem]">
            Employer FAQ
          </p>
          <p className="font-light mb-1 lg:mb-2 lg:text-md text-[0.5rem]">
            Community Guidelines
          </p>
          {/* </div> */}
          {/* <div className="  h-[30%]  w-full  ">
            <p className="font-bold  lg:mb-4">Resources</p>
            <p className="font-light lg:text-md text-xs">Sitemap</p>
          </div> */}
        </div>
        <div className=" text-white order-1 text-center lg:order-2 h-[40%] lg:h-[70%] w-[30%] lg:w-[15%] ">
          <p className="font-bold  lg:mb-4">Resources</p>
          <p className="font-light lg:text-md text-[0.5rem]">Sitemap</p>
        </div>
      </div>
      <p className="text-[#abb1bc] text-center mt-3 md:mt-6 lg:mt-5 ">
        © 2023 JOBBOX. All rights reserved.
      </p>
    </div>
  );
}
