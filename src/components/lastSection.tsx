import { Carousel } from "antd";

export default function LastSection() {
  return (
    <div className=" flex justify-center items-center   h-[30vh] lg:h-[70vh] bg-[#E2E7E9]">
      <div className="flex flex-col justify-evenly h-[55%] w-[88%] bg-white rounded-3xl pl-[10%]">
        <div>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="text-lg    lg:text-5xl">Trending Job Roles</h1>
        </div>
        <div className="  h-2/4 w-[100%] ">
          <Carousel slidesToShow={3} className=" w-full  " autoplay>
            <div className="carousel_item h-[4rem] md:h-[6rem] lg:h-[9rem] w-10  ">
              <div className="c-item h-[65%] w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200"></div>
            </div>
            <div className="carousel_item h-[4rem] md:h-[6rem] lg:h-[9rem] w-10  ">
              <div className="c-item h-[65%] w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200"></div>
            </div>
            <div className="carousel_item h-[4rem] md:h-[6rem] lg:h-[9rem] w-10  ">
              <div className="c-item h-[65%] w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200"></div>
            </div>
            <div className="carousel_item h-[4rem] md:h-[6rem] lg:h-[9rem] w-10  ">
              <div className="c-item h-[65%] w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200"></div>
            </div>
            <div className="carousel_item h-[4rem] md:h-[6rem] lg:h-[9rem] w-10  ">
              <div className="c-item h-[65%] w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200"></div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

{
  /* <Carousel slidesToShow={3} className="w-1/2 h-1/6 bg-red-300" autoplay>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</Carousel> */
}
