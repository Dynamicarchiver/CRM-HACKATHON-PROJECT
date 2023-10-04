import React from "react";
import { Icon } from "@iconify/react";

const DashBoard = () => {
  return (
    <div>
      <div className="mt-[80px] flex flex-row items-center gap-[20px] mx-[50px] text-[#e6f0f9]">
        {/* <button className="bg-[#ea9b12] text-left h-[150px] w-[300px] text-2xl  pl-8 pb-10 mr-3 rounded-xl">
          Total Member
          <Icon
            icon="fa6-solid:people-line"
            className=" text-6xl ml-[180px] mr-0 -mb-10"
          />
        </button>
        <button className="bg-[#46d6b2] text-left h-[150px] w-[300px] text-2xl  pl-8 pb-10 mr-3 rounded-xl">
          Total Announcement
          <Icon
            icon="icomoon-free:user-check"
            className=" text-6xl ml-[200px] mr-0 -mb-10"
          />
        </button> */}
        {/* <button className="bg-[#b5152a] text-left h-[150px] w-[300px] text-2xl  pl-8 pb-10mr-3 rounded-xl">
          Total Events
          <Icon
            icon="game-icons:wallet"
            className=" text-6xl ml-[200px] mr-0 -mb-10"
          />
        </button> */}
        {/* <button className='bg-[#f26000] text-left h-[150px] w-[300px] text-2xl  pl-8 pb-10 rounded-xl'>Total Tasks<Icon icon="mingcute:task-line" className=' text-6xl ml-[200px] mr-0 -mb-10'/></button> */}
        <div className="w-[25%] flex flex-col h-[200px]  bg-[#e47905] rounded-lg px-[20px] py-[15px]">
          <Icon icon="icomoon-free:user-check" className="text-6xl" />{" "}
          <div className="text-[1.6vw] leading-[1.7w] font-[700]">
            <h5 className="leading-[1.6vw] mt-[5px] text-black opacity-80">
              {" "}
              Total Announcement
            </h5>
            <p className="text-[2vw] leading-[2.1vw]">10</p>
          </div>
        </div>
        <div className="w-[25%] flex flex-col h-[200px]  bg-[#bb0b6d] rounded-lg px-[20px] py-[15px]">
          <Icon icon="game-icons:wallet" className="text-6xl" />{" "}
          <div className="text-[1.6vw] leading-[1.7w] font-[700]">
            <h5 className="text-black opacity-80">Total Events</h5>
            <p className="text-[2vw] leading-[2.1vw]">10</p>
          </div>
        </div>
        <div className="w-[25%] flex flex-col h-[200px]  bg-[#1BBC9B] rounded-lg px-[20px] py-[15px]">
          <Icon icon="mingcute:task-line" className="text-6xl" />{" "}
          <div className="text-[1.6vw] leading-[1.7w] font-[700]">
            <h5 className="text-black opacity-80">Total Tasks</h5>
            <p className="text-[2vw] leading-[2.1vw]">10</p>
          </div>
        </div>
        <div className="w-[25%] flex flex-col h-[200px]  bg-[#f26000] rounded-lg px-[20px] py-[15px]">
          <Icon icon="mingcute:task-line" className="text-6xl" />{" "}
          <div className="text-[1.6vw] leading-[1.7w] font-[700]">
            <h5 className="text-black opacity-80">Total Tasks</h5>
            <p className="text-[2vw] leading-[2.1vw]">10</p>
          </div>
        </div>
      </div>
      <div className="ml-12 mt-[100px] bg-[#eaeaea] w-[80%] p-[20px] border-2 border-black text-[30px] border-solid">
        <h1>Upcoming Event</h1>
        <table className="text-xl table-fixed">
          <thead>
            <th>START DATE</th>
            <th>EVENT NAME</th>
            <th>COORDINATOR</th>
            <th>END DATE</th>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
