import Image from "next/image";
import Logo from "../images/jobbox_logo.jpeg";

export default function MidSection() {
  return (
    <div className="flex justify-evenly items-center h-[30vh] lg:h-[80vh] w-full bg-[#E2E7E9]">
      <div className="flex flex-col justify-evenly h-4/6 w-[50%] ">
        <h1 className="font-bold md:font-semibold text-[0.8rem] md:text-[2rem] lg:text-[3rem] ">
          Why Choose Jobbox ?
        </h1>
        <p className="font-semibold md:font-normal text-[0.45rem] md:text-[0.8rem] lg:text-[1.5rem] ">
          Welcome to your one-stop hub for verified Talent and Trusted
          Companies. Unleash our potential with exclusive oppurtunities, all
          backed by a secure and transparent platform. Join today and take a
          confident stride towards your dream career.
        </p>
        <button
          type="button"
          className="flex justify-center items-center w-[35%] h-[15%] text-white text-[0.2rem] md:text-[0.6rem] lg:text-[1rem] bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download Brochure
        </button>
      </div>
      <div className="flex items-center justify-center h-4/6 w-[30%] ">
        <Image
          src={Logo}
          alt={"Reference Image"}
          className="h-[85%] w-[90%] object-fit mr-2 "
        />
      </div>
    </div>
  );
}
