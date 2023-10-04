import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#2e3190aa] text-[#d6e5f4] h-[15%] ">
      <nav className=" border-zinc-950 w-[85%] h-full mx-auto my-0 py-[10px]  flex justify-between">
        <div className="flex">
          <img
            src="/images/logo.jpeg"
            alt="logos"
            className="w rounded-full "
          />
        </div>
        <div className="font-[700] text-center pt-[8px] pb-[20px]">
          <h5 className="text-[2vw] leading-[2vw] uppercase">
            The Apostolic Church Nigeria
          </h5>
          <h4 className="text-[1.8vw] leading-[1.8vw]  uppercase">
            Agblekale Area Men's Movemnt
          </h4>
        </div>
        <div className="flex">
          <img
            src="/public/images/download.jpeg"
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar