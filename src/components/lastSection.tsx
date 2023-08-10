import { Carousel } from "antd";
import { RightOutlined } from "@ant-design/icons";

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
            <div className="carousel_item h-[4rem]  md:h-[6rem] lg:h-[9rem] lg:w-10   ">
              <div className="c-item justify-around items-center w-[85%] flex h-[65%] md:w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200">
                <div className="flex items-center w-[70%] h-[70%]  ml-[10%]">
                  <div className="w-[40%] md:w-[35%] h-[90%] bg-gray-200 rounded-full"></div>
                  <div className="w-[60%] md:w-[65%] h-full  flex flex-col justify-between pl-[2%]">
                    <p className="text-[0.3rem] md:text-[1rem] font-bold md:font-normal">
                      Marketing
                    </p>
                    <p className="text-[0.25rem] md:text-[1rem] font-bold md:font-normal">
                      201 openings
                    </p>
                  </div>
                </div>
                <RightOutlined className="  lg:pr-0 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] " />
              </div>
            </div>

            <div className="carousel_item h-[4rem]  md:h-[6rem] lg:h-[9rem] lg:w-10   ">
              <div className="c-item justify-around items-center w-[85%] flex h-[65%] md:w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200">
                <div className="flex items-center w-[70%] h-[70%]  ml-[10%]">
                  <div className="w-[40%] md:w-[35%] h-[90%] bg-gray-200 rounded-full"></div>
                  <div className="w-[60%] md:w-[65%] h-full  flex flex-col justify-between pl-[2%]">
                    <p className="text-[0.3rem] md:text-[1rem] font-bold md:font-normal">
                      Development
                    </p>
                    <p className="text-[0.25rem] md:text-[1rem] font-bold md:font-normal">
                      201 openings
                    </p>
                  </div>
                </div>
                <RightOutlined className="  lg:pr-0 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] " />
              </div>
            </div>

            <div className="carousel_item h-[4rem]  md:h-[6rem] lg:h-[9rem] lg:w-10   ">
              <div className="c-item justify-around items-center w-[85%] flex h-[65%] md:w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200">
                <div className="flex items-center w-[70%] h-[70%]  ml-[10%]">
                  <div className="w-[40%] md:w-[35%] h-[90%] bg-gray-200 rounded-full"></div>
                  <div className="w-[60%] md:w-[65%] h-full  flex flex-col justify-between pl-[2%]">
                    <p className="text-[0.3rem] md:text-[1rem] font-bold md:font-normal">
                      Accounting
                    </p>
                    <p className="text-[0.25rem] md:text-[1rem] font-bold md:font-normal">
                      201 openings
                    </p>
                  </div>
                </div>
                <RightOutlined className="  lg:pr-0 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] " />
              </div>
            </div>

            <div className="carousel_item h-[4rem]  md:h-[6rem] lg:h-[9rem] lg:w-10   ">
              <div className="c-item justify-around items-center w-[85%] flex h-[65%] md:w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200">
                <div className="flex items-center w-[70%] h-[70%]  ml-[10%]">
                  <div className="w-[40%] md:w-[35%] h-[90%] bg-gray-200 rounded-full"></div>
                  <div className="w-[60%] md:w-[65%] h-full  flex flex-col justify-between pl-[2%]">
                    <p className="text-[0.3rem] md:text-[1rem] font-bold md:font-normal">
                      Finance
                    </p>
                    <p className="text-[0.25rem] md:text-[1rem] font-bold md:font-normal">
                      201 openings
                    </p>
                  </div>
                </div>
                <RightOutlined className="  lg:pr-0 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] " />
              </div>
            </div>

            <div className="carousel_item h-[4rem]  md:h-[6rem] lg:h-[9rem] lg:w-10   ">
              <div className="c-item justify-around items-center w-[85%] flex h-[65%] md:w-[70%]  mx-[15%] my-[5%]  border-2 rounded-xl border-gray-200">
                <div className="flex items-center w-[70%] h-[70%]  ml-[10%]">
                  <div className="w-[40%] md:w-[35%] h-[90%] bg-gray-200 rounded-full"></div>
                  <div className="w-[60%] md:w-[65%] h-full  flex flex-col justify-between pl-[2%]">
                    <p className="text-[0.3rem] md:text-[1rem] font-bold md:font-normal">
                      Marketing
                    </p>
                    <p className="text-[0.25rem] md:text-[1rem] font-bold md:font-normal">
                      201 openings
                    </p>
                  </div>
                </div>
                <RightOutlined className="  lg:pr-0 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] " />
              </div>
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
