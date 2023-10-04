import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import url from "../utils/url";
import axios from "axios";

const EventList = ({ currentList }) => {
  return (
    <>
      {currentList &&
        currentList.map((announcement, i) => (
          <div className="flex text-[20px] gap-[10px] w-[80%] justify-between" key={i}>
            <h5 className="">{announcement.title}</h5>
            <div className="">{announcement.content}</div>
            {/* <div className="w-[20%]">All {announcement.visibility}</div> */}
            <div className="w-[10%] flex ml-[20px] gap-[20px]">
              <Link to={`/announcement/${announcement._id}`} className="mt-[8px]">
                <BsEye />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};
const Announcement = ({ listsPerPage }) => {
  const { user } = useGlobalContext();

  const [listOffset, setListOffset] = useState(0);
  const [announcementList, setAnnouncementList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   const endOffset = listOffset + listsPerPage;
   const currentList = announcementList.slice(listOffset, endOffset);
   const pageCount = Math.ceil(announcementList.length / listsPerPage);

  const handlePageClick = (announcement) => {
    const newOffset = (announcement.selected * listsPerPage) % announcementList.length;
    setListOffset(newOffset);
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/announcements`, {
        withCredentials: true,
      });

      console.log("announcements", response?.data.allannouncement);
      setAnnouncementList(response?.data.allannouncement);
    } catch (error) {
      console.log("err:", error.response?.data);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="w-full bg-[#f7f8ff] flex">
      <div className="bg-white w-[90%] min-h-[80vh] rounded-3xl mx-auto my-[35px] py-[25px]">
        <div className="flex flex-col w-[90%] mx-auto my-0 gap-[25px]">
          <div className="flex justify-between">
            <h4 className="text-[24px] self-center font-[700] text-purple-800">
              Announcement List
            </h4>
            {user.role === "admin" && (
              <Link
                to={"/add-announcement"}
                className="w-[190px] py-[10px] px-[10px] text-white bg-purple-800 rounded-xl"
              >
                Add Announcement
              </Link>
            )}
          </div>
          <hr className="border-[2px]" />
          <div className="w-[80%] flex justify-between text-[20px] gap-[10px]  font-[600]">
            <div className="">Title</div>
            <div className="">Content</div>
            <div className=""></div>
          </div>
          <EventList currentList={currentList} />
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
export default Announcement;

{/* <div className="w-full flex text-[20px] gap-[15px] font-[600]">
  <h5 className="w-[25%]">Title</h5>
  <div className="w-[30%]">From</div>
  <div className="w-[20%]">To</div>
  <div className="w-[10%] ">Date</div>
  <div className="w-[10%]">Action</div>
</div>; */}
