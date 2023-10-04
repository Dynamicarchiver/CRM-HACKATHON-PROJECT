import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import url from "../utils/url";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const Members = () => {
  const [listOffset, setListOffset] = useState(0);
  const [membersList, setMembersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const listsPerPage = 10;
  const endOffset = listOffset + listsPerPage;
  const currentList = membersList.slice(listOffset, endOffset);
  const pageCount = Math.ceil(membersList.length / listsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * listsPerPage) % membersList.length;
    setListOffset(newOffset);
  };

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/members`, {
        withCredentials: true,
      });

      console.log("members", response?.data.member);
      setMembersList(response?.data.member);
    } catch (error) {
      console.log("err:", error.response?.data);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="w-full bg-[#f7f8ff] flex">
      <div className="bg-white w-[90%] min-h-[80vh] rounded-3xl mx-auto my-[35px] py-[25px]">
        <div className="flex flex-col w-[90%] mx-auto my-0 gap-[25px]">
          <div className="flex justify-between">
            <h4 className="text-[24px] self-center font-[700] text-purple-800">
              Members List
            </h4>
            <Link
              to="/add-member"
              className="px-[20px] py-[20px] text-white bg-purple-800 rounded-xl"
            >
              Add Member
            </Link>
          </div>
          <hr className="border-[2px]" />
          <div className="w-full flex justify-between text-[20px] font-[600]">
            <h5 className="w-[20%]">Name</h5>
            <div className="w-[20%]">Position Held</div>
            <div className="w-[20%]">Assembly</div>
            <div className="w-[20%] ">Status</div>
            <div className="w-[20%]">Action</div>
          </div>

          {currentList &&
            currentList.map((item, i) => {
              return (
                <div className="flex text-[20px]" key={i}>
                  <h5 className="w-[20%]">{item.name}</h5>
                  <div className="w-[20%]">{item.position}</div>
                  <div className="w-[20%]">{item.assembly}</div>
                  <div className="w-[20%]">
                    <button className="bg-green-500 text-white w-[120px] py-[5px] rounded-lg">
                      Active
                    </button>
                  </div>
                  <div className="w-[20%]">
                    {/* <button className="bg-purple-800 text-white w-[120px] py-[5px] rounded-lg">
                        Enable
                      </button> */}
                    <Link to={`/memberinfo/${item._id}`} className="mt-[8px]">
                      <BsEye />
                    </Link>
                  </div>
                </div>
              );
            })}

          <div className="flex flex-col">
            <ReactPaginate
              className="bg-purple-700 text-white font-[700] flex border border-purple-700 self-end"
              pageClassName="py-[10px] px-[25px]"
              previousClassName="py-[10px] px-[15px]"
              nextClassName="py-[10px] px-[15px]"
              activeClassName="bg-white text-purple-700"
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="< Previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
