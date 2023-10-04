import { Icon } from '@iconify/react';

const Sidebar  = () => {
    return (
    <>
      <section>
        <div className='flex flex-row w-full mt-[100px]'>
          <div>
            <div className='bg-[#23b7ed] h-full overflow-hidden py-[50px] pl-4 pr-[50px]'>
              <div className='text-white text-[25px] mb-4 ml-6 font-serif flex-row '><a href=""> <Icon icon="fontisto:nav-icon-a" className='inline'/>  Dashboard</a></div>
              <div className='text-white text-[25px] mb-4 ml-5 font-serif flex-row'><a href=""><Icon icon="fa6-solid:users" className='inline'/>  Member</a></div>
              <div className='text-white text-[25px] mb-4 ml-5 font-serif'><a href=""><Icon icon="tdesign:user-checked-1" className='inline' />  Attendace</a></div>
              <div className='text-white text-[25px] mb-4 ml-5 font-serif'><a href=""><Icon icon="mdi:user-plus" className='inline' />  Assign Member</a></div>          
              <div className='text-white text-[25px] mt-4 ml-5 font-serif'><a href=""><Icon icon="tdesign:task" className='inline'/>Task</a></div>
              <div className='text-white text-[25px] mt-4 ml-5 font-serif'><a href=""><Icon icon="mdi:calendar-time" className='inline'/>Event</a></div>
              <div className='text-white text-[25px] mt-4 ml-5 font-serif'><a href=""><Icon icon="clarity:list-line" className='inline'/>Donate</a></div>
              <div className='text-white text-[25px] mt-4 ml-5 font-serif'><a href=""><Icon icon="mingcute:announcement-line" className='inline'/>Announcement</a></div>
              <div className='text-white text-[25px] mt-4 ml-5 font-serif'><a href=""><Icon icon="ic:outline-search" className='inline'/>Search</a></div>
              <div className='text-white text-[25px] mt-4 ml-5 font-serif scroll-mb-11'><a href=""><Icon icon="carbon:logout" className='inline'/>log Out</a></div>
            </div>
          </div>
          <div>
            <div className='mt-[80px] flex flex-row justify-left items-center flex-wrap gap-[20px] mx-[50px] '>
              <button className='bg-[#ea9b12] text-left h-[150px] w-[300px] text-2xl text-white pl-8 pb-10 mr-3'>Total Member<Icon icon="fa6-solid:people-line" className=' text-6xl ml-[180px] mr-0 -mb-10'/></button>
              <button className='bg-[#46d6b2] text-left h-[150px] w-[300px] text-2xl text-white pl-8 pb-10 mr-3'>Total Attendance<Icon icon="icomoon-free:user-check" className=' text-6xl ml-[200px] mr-0 -mb-10'/></button>
              <button className='bg-[#b5152a] text-left h-[150px] w-[300px] text-2xl text-white pl-8 pb-10mr-3'>Total Donation<Icon icon="game-icons:wallet" className=' text-6xl ml-[200px] mr-0 -mb-10'/></button>
              <button className='bg-[#f26000] text-left h-[150px] w-[300px] text-2xl text-white pl-8 pb-10'>Total Tasks<Icon icon="mingcute:task-line" className=' text-6xl ml-[200px] mr-0 -mb-10'/></button>
              

            </div>
            <div className='ml-12 mt-[100px] bg-[#eaeaea] w-[80%] p-[20px] border-2 border-black text-[30px] border-solid'>
              <h1>Upcoming Event</h1>
              <table className='text-xl table-fixed'>
                <thead>
                  <th>START DATE</th>
                  <th>EVENT NAME</th>
                  <th>COORDINATOR</th>
                  <th>END DATE</th>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
      
    </>
    )
}

export default Sidebar
