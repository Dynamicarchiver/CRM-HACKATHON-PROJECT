import React from 'react'
import Login from './components/Login';

import { MdLogin } from 'react-icons/md'
import { useState } from 'react';

const Homepage = () => {
    const [visible, setVisibility] = useState(true)
  return (
    <div className="w-full h-full flex bg-[url('/images/background.jpg')] bg-cover">
       {<Login visible={visible} setVisibility={setVisibility} /> }
      <div className="w-[60%] h-[50%] mx-auto my-auto text-white flex flex-col gap-[20px] text-[1.6vw]">
        {/* <img src='/public/images/samuel-martins-3U7HcqkIbb4-unsplash (1).jpg' */}
        <div className="flex flex-col font-[700] gap-[5px] ">
          <h5 className="text-[2vw] text-white uppercase">Welcome to</h5>
          <h4 className="text-[2.8vw] text-[gold] leading-[3vw]">
            The Apostolic Church Nigeria
            <br />
            Agbelekale Men's Movement
          </h4>
          <p className="mt-[10px] pr-[20px]">
            Welcome to a congregation of people truly helped by God,
            fireful, energetic and men of noble influence
          </p>
        </div>
        <div className="flex flex-col mt-[20px]">
          <button onClick={() => setVisibility(false)} className="self-center flex px-[35px] py-[10px] rounded-full bg-red-700">
            Login <span><MdLogin className='mt-[10px]'/></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage