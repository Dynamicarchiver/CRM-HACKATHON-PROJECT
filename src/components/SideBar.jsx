import { Icon } from "@iconify/react";
import { useGlobalContext } from '../context';


const SideBar = () => {
  const { user, logoutUser } = useGlobalContext();
  const { name, role, assembly, position } = user;
  // #779cc1
  // white = #f7f8ff
  //blue = #2e3190
  //red = #e1221f
  // gold = 
  return (
    <>
      <section className="w-[30%] h-full bg-[#2e3190] overflow-hidden py-[50px] pl-4 pr-[50px]">
        <div>
          <div className="text-white text-[25px] mb-4 ml-6 font-serif flex-row ">
            <a href="/">
              {" "}
              <Icon icon="il:dashboard" className="inline" /> Dashboard
            </a>
          </div>
          {role === "admin" && (
            <>
              <div className="text-white text-[25px] mb-4 ml-5 font-serif flex-row">
                <a href="/members">
                  <Icon icon="fa6-solid:users" className="inline" /> Members
                </a>
              </div>

              {/* <div className="text-white text-[25px] mb-4 ml-5 font-serif">
                <a href="/attendance">
                  <Icon icon="tdesign:user-checked-1" className="inline" />{" "}
                  Attendance
                </a>
              </div> */}
            </>
          )}
          {/* <div className="text-white text-[25px] mb-4 ml-5 font-serif">
                <a href="">
                  <Icon icon="mdi:user-plus" className="inline" /> Assign Member
                </a>
              </div> */}
          <div className="text-white text-[25px] mt-4 ml-5 font-serif">
            <a href="/tasks">
              <Icon icon="tdesign:task" className="inline" />
              Task
            </a>
          </div>
          <div className="text-white text-[25px] mt-4 ml-5 font-serif">
            <a href="/events">
              <Icon icon="mdi:calendar-time" className="inline" />
              Event
            </a>
          </div>
          {/* <div className="text-white text-[25px] mt-4 ml-5 font-serif">
                <a href="">
                  <Icon icon="clarity:list-line" className="inline" />
                  Donate
                </a>
              </div> */}
          <div className="text-white text-[25px] mt-4 ml-5 font-serif">
            <a href="/announcements">
              <Icon icon="mingcute:announcement-line" className="inline" />
              Announcement
            </a>
          </div>
          {/* <div className="text-white text-[25px] mt-4 ml-5 font-serif">
                <a href="">
                  <Icon icon="ic:outline-search" className="inline" />
                  Search
                </a>
              </div> */}
          <div className="text-white text-[25px] mt-4 ml-5 font-serif scroll-mb-11">
            <a href="#" onClick={logoutUser}>
              <Icon icon="carbon:logout" className="inline" />
              Log Out
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
