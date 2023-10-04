import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { BsEye } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import url from '../utils/url';
import axios from 'axios';

const EventList = ({currentList}) => {

  return (
    <>
      {currentList &&
        currentList.map((event, i) => (
          <div className="flex text-[20px] gap-[10px] pr-[20px]" key={i}>
            <h5 className="w-[20%]">{event.title}</h5>
            <div className="w-[30%]">{new Date(event.dateTime).toLocaleString('en-US')}</div>
            <div className="w-[10%]">{event.location}</div>
            <div className="w-[25%]">{event.status}</div>
            <div className="w-[15%] flex ml-[20px] gap-[20px]">
            <Link to={`/event/${event._id}`}  className='mt-[8px]'><BsEye /></Link>
            </div>
          </div>
        ))}
    </>
  );
}
const Events = ({listsPerPage}) => {

    const { user } = useGlobalContext();

    const [listOffset, setListOffset] = useState(0)
    const [eventList, setEventList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const endOffset = listOffset + listsPerPage;
    const currentList = eventList.slice(listOffset, endOffset);
    const pageCount = Math.ceil(eventList.length / listsPerPage)

    const handlePageClick = (event) => {
      const newOffset = (event.selected * listsPerPage) %  eventList.length;
      setListOffset(newOffset);
    }


    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${url}/api/v1/events` , {
          withCredentials: true
        });

        console.log("events", response?.data.allevent);
        setEventList(response?.data.allevent);
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
    <div className="w-full  flex">
      <div className="bg-white w-[90%] min-h-[80vh] rounded-3xl mx-auto my-[35px] py-[25px]">
        <div className="flex flex-col w-[90%] mx-auto my-0 gap-[25px]">
          <div className="flex justify-between">
            <h4 className="text-[24px] self-center font-[700] text-purple-800">
              Events List
            </h4>
            {user.role === "admin" &&
              <Link to={'/add-event'} className="w-[130px] py-[10px] px-[10px] text-white bg-purple-800 rounded-xl">
                Create Event
              </Link>
            }
          </div>
          <hr className="border-[2px]" />
          <div className="w-full flex justify-between text-[20px] gap-[10px]  font-[600]">
            <div className="w-[20%]">Title</div>
            <div className="w-[30%]">Date/Time</div>
            <div className="w-[10%]">Venue</div>
            <div className="w-[25%]">Status</div>
            <div className="w-[15%]"></div>
          </div>
          <EventList currentList={currentList} />
          <div className="flex flex-col">
            <ReactPaginate
              className="bg-purple-700 text-white font-[700] flex border border-purple-700 self-end"
              pageClassName="py-[10px] px-[25px]"
              previousClassName="py-[10px] px-[15px]"
              nextClassName="py-[10px] px-[15px]"
              activeClassName='bg-white text-purple-700'
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
}
export default Events