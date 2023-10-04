import React from 'react'
import { Link } from 'react-router-dom'
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Member = () => {
  const { user } = useGlobalContext();
  const { name, role, assembly, position, phoneNumber } = user;

  return (
    <div className="h-[80vh] flex">
      <div className="w-[50%] h-[400px] border-[15px] border-blue-200 bg-blue-100 mx-auto my-auto rounded-3xl">
        <div className="w-[90%] mx-auto py-[40px] flex gap-[10px]">
          <div className="w-[20%] ">
            <img
              src="/images/download.jpeg"
              alt="profile-picture"
              className="rounded-full w-[100px]"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-[10px] pt-[10px]">
            <h5 className="text-[25px] font-[700]">{name}</h5>
            <p>
              {" "}
              <span className="font-[700]">Position : </span>
              {position}
            </p>
            <p>
              <span className="font-[700]">Assembly/District :</span> {assembly}
            </p>
            {/* <p>
              An active member of the mens movement and also a member of the
              choir unit
            </p> */}
            <p>
              <span className="font-[700]">Phone number :</span> {phoneNumber}
            </p>
            <div className="mt-[20px]">
              <Link
                to="/profile"
                className="bg-blue-700 text-white px-[15px] py-[10px] rounded-xl "
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;