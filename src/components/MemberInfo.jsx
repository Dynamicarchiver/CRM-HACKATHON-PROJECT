import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import url from "../utils/url";
import axios from "axios";

const MemberInfo = () => {
  const navigate = useNavigate();

  const { memberId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    name: "",
    email: "",
    position: "",
    assembly: "",
    phoneNumber: "",
    dob: "",
    address: "",
    maritalStatus: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateMemebrInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(values);

    try {
      const response = await axios.put(
        `${url}/api/v1/members/${memberId}`,
        values,
        {
          withCredentials: true,
        }
      );
      console.log("update member", response?.data);
      setIsLoading(false);

      navigate("/members");
    } catch (error) {
      console.log("error event member", error.response);
      setIsLoading(false);
    }
  };

  const fetchMember = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/members/${memberId}`, {
        withCredentials: true,
      });

      console.log("member", response?.data);
      let member = response?.data.member;
      setValues({ ...values, ...member });
    } catch (error) {
      console.log("member err:", error.response);
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

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
              {values.title} {values.name}
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
                name="title"
                type="text"
                value={values.title}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Email Address
              </label>
              <input
                id="name"
                type="email"
                name="email"
                value={values.email}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300 "
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Phone Number
              </label>
              <input
                id="name"
                name="phoneNumber"
                type="text"
                value={values.phoneNumber}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
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
                name="dob"
                type="date"
                value={values.dob}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px]">
              <label className="w-[50%] text-[20px] font-[600]" htmlFor="name">
                Marital Status
              </label>
              <input
                id="maritalStatus"
                name="maritalStatus"
                type="text"
                value={values.maritalStatus}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px]">
              <label
                className="w-[50%] text-[20px] font-[600]"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                type="text"
                value={values.address}
                className="w-[50%] h-[230px] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
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
                name="assembly"
                type="text"
                value={values.assembly}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px]">
              <label
                className="w-[50%] text-[20px] font-[600]"
                htmlFor="position"
              >
                Position Held{" "}
              </label>
              <input
                id="position"
                name="position"
                type="text"
                value={values.position}
                className="w-[50%] py-[10px] bg-inherit text-gray-700 px-3 border border-gray-300"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className="w-[150px] py-[10px] text-white bg-purple-800 rounded-xl"
          onClick={updateMemebrInfo}
        >
          {isLoading ? "Updating..." : "Update Member"}
        </button>
      </div>
    </div>
  );
};

export default MemberInfo;
