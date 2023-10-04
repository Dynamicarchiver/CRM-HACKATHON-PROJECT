import React, { useState } from 'react';
import { useGlobalContext } from '../context';



const Profile = () => {

  const { user } = useGlobalContext();

  return (
    <div className="pb-[30px] overflow-scroll no-scrollbar h-[88vh]">
      <div className="flex flex-col gap-[20px] ">
        <div className="flex gap-[15px] px-[20px] py-[25px] mx-[10px] bg-blue-50 mt-[15px] rounded-lg">
          <img
            src="/images/download.jpeg"
            alt="profile-picture"
            className="rounded-full w-[100px]"
          />
          <div className="flex flex-col py-[15px]">
            <h5 className="text-[25px] font-[700]">
              {user.title}{" "}{user.name}
            </h5>
            <p>Member</p>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg p-[15px]">
          <div className="text-[20px] font-[600] flex flex-col gap-[5px] px-[40px]">
            <h4 className="text-[24px] font-[700] text-gray-800 ">
              Personal Info
            </h4>
            <hr className="border-[2px] border-slate-800 my-[10px]" />
            <div className="flex px-[20px] ">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Title
              </label>
              <input
                id="name"
                name='title'
                type="text"
                value={user.title}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            <div className="flex px-[20px] ">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name='name'
                type="text"
                value={user.name}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            <div className="flex px-[20px] ">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Email Address
              </label>
              <input
                id="name"
                type="email"
                name='email'
                value={user.email}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300 "
                readOnly
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Phone Number
              </label>
              <input
                id="name"
                name='phoneNumber'
                type="text"
                value={user.phoneNumber}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            {/* <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Bio
              </label>
              <textarea
                id="name"
                type="text"
                value="Elder Adeyemi has spent his life using his personal and career experiences to help his clients overcome post-traumatic stress disorder and provide them with the support they need when their life seems to be more than they can handle. As the son of a Vietnam veteran, he knows how post-traumatic stress can affect every facet of one’s life as well as the lives of their loved ones. "
                className="w-[50%] h-[230px] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
              />
            </div> */}
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Date Of Birth
              </label>
              <input
                id="name"
                name='dob'
                type="date"
                value={user.dob}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Marital Status
              </label>
              <input
                id="maritalStatus"
                name='maritalStatus'
                type="text"
                value={user.maritalStatus}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                name='address'
                type="text"
                value={user.address}
                className="w-[50%] h-[230px] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-lg p-[15px]">
          <div className="text-[20px] font-[600] flex flex-col gap-[5px] px-[40px]">
            <h4 className="text-[24px] font-[700] text-gray-800 ">
              Other Info
            </h4>
            <hr className="border-[2px] border-slate-800 my-[10px]" />
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Assembly/District{" "}
              </label>
              <input
                id="assembly"
                name='assembly'
                type="text"
                value={user.assembly}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="position">
                Position Held{" "}
              </label>
              <input
                id="position"
                name='position'
                type="text"
                value={user.position}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;