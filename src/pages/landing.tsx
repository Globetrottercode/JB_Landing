import Navbar from "@/components/navbar";
import MidSection from "@/components/midSection";
import LastSection from "@/components/lastSection";
import { Carousel } from "antd";
import Footer from "@/components/Footer";

export default function check() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className=" h-[40vh] lg:h-[90vh] w-full bg-red-200"></div>
      <MidSection />
      <LastSection />
      <Footer />
    </div>
  );
}
