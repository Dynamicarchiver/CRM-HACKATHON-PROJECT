import React, { useState } from "react";
import axios from 'axios';
import url from '../utils/url';
import { useGlobalContext } from '../context';

import { FaTimes } from 'react-icons/fa'
const Login = ({visible, setVisibility}) => {
  // const [visible, setVisibility] = useState(true);

  const { saveUser } = useGlobalContext();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    
    const { email, password } = values;
    const loginUser = { email, password };

    console.log(loginUser);

    try {
      const { data } = await axios.post(`${url}/api/v1/auth/login`,  loginUser, {
        //AxiosRequestConfig parameter
        withCredentials: true //correct
      });
      setValues({email: '', password: '' });
      console.log("login data", data.user);
      setLoading(false);
      saveUser(data.user);

      history.push('/');

    } catch (error) {
      console.log("error login", error.response.data.error);
      alert(error.response?.data.error)

      setLoading(false);
    }
  }



  return (
   <div className={!visible ? "bg-black bg-opacity-40 backdrop-blur-lg  text-white h-[70%] w-[60%] flex absolute top-[20%] left-[20%] rounded-3xl" : "hidden"}>
      <div className="w-[90%] mx-auto my-auto flex flex-col gap-[15px]">
        <div className='w-full flex flex-col'><FaTimes onClick={() => setVisibility(true)} className="self-end text-[2vw] mr-[5%]"/> </div>
        <div className="flex flex-col gap-[5px]">
          <p>Welcome sir,</p>
          <p className="font-[700] text-[20px]">
            Please login to see your profile
          </p>
        </div>
        <div className="flex flex-col gap-[10px] font-[700] text-[20px] text-black">
          <label htmlFor="email" className="text-white">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="w-[70%] px-[25px] py-[15px] rounded-lg"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-[10px] font-[700] text-[20px] text-black">
          <label htmlFor="password"  className="text-white">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-[70%] px-[25px] py-[15px] rounded-lg"
            value={values.password}
            onChange={handleChange}
          />
          {/* <div className="flex w-[70%] gap-[10px] mt-[20px] justify-between">
            <div className='flex gap-[10px]'>
              <input
                type="checkbox"
                id="show_password"
                className="w-[20px] h-[20px] rounded-xl mt-[5px]"
              />
              <label htmlFor="show_password" className='text-center'>Show Password</label>{" "}
            </div>
            <div className="">Forget Password?</div>
          </div> */}
        </div>
        <div className="flex flex-col w-[70%] font-[600] text-[18px] mt-[20px]">
          <button 
            className="w-[120px] bg-white text-black px-[25px] py-[10px] rounded-lg self-end"
            onClick={onSubmit}
            disabled={(values.email && values.password) && loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
