import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import url from '../../utils/url';
import axios from 'axios';

const Label = (props) => {
  return (
    <label htmlFor={props.for} className={props.className} >{props.name}</label>
  )
}


const Event = () => {

  const navigate = useNavigate();

  const { eventId } = useParams();
  const { user } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    title: '',
    description: '',
    dateTime: '',
    location: '',
    status: '',
    eventType: ''
  });


  const isAdmin = user.role === 'admin' ? true : false;

  const additionalClasses = isAdmin
    ? 'px-3 py-2 border border-gray-300'
    : 'px-3 py-2 border-none bg-gray-100';

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateSingleEvent = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(`${url}/api/v1/events/${eventId}`, values, {
        //AxiosRequestConfig parameter
        withCredentials: true //correct
      });
      console.log("update event", response?.data);
      setIsLoading(false);

      navigate('/events');

    } catch (error) {
      console.log("error event update", error.response);
      setIsLoading(false);
    }



  };


  const fetchEvent = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/events/${eventId}` , {
        withCredentials: true
      });

      console.log("events", response?.data);
      let event = response?.data.event;
      setValues({...values, ...event});
    } catch (error) {
      console.log("err:", error.response?.data);
      setIsLoading(false);
    }
    setIsLoading(false);
  };


  useEffect(() => {
    fetchEvent();
  }, []);
  

  return (
    <div>
      <div className="w-full bg-blue-400 flex">
        <div className="bg-white w-[90%] min-h-[80vh] rounded-3xl mx-auto my-[35px] py-[25px]">
          <div className="flex flex-col w-[90%] mx-auto my-0 gap-[15px]">
            <div className="flex w-full justify-center">
              <input
                type="text"
                name="title"
                value={values.title} 
                className={`${additionalClasses} text-purple-600 font-[700] text-center text-[24px] py-[10px]`} 
                onChange={handleChange}
                readOnly={!isAdmin} 
              />

            </div>

            <hr />
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Description"
                for="description"
              />
              <textarea
                name="description"
                type="text"
                value={values.description}
                className={`${additionalClasses} w-[70%] h-[205px] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Date/Time"
                for="dateTime"
              />
              <input
                name="dateTime"
                type="datetime-local"
                value={values.dateTime ? new Date(values.dateTime).toISOString().slice(0, 16) : ''}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Location"
                for="location"
              />
              <input
                name="location"
                type="text"
                value={values.location}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            {/* <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Organizer"
                for="organizer"
              />
              <input
                name="organizer"
                type="text"
                value="The Executives"
                className="w-[50%] py-[10px] bg-inherit text-gray-700 "
              />
            </div> */}
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Status"
                for="status"
              />
              <input
                name="status"
                type="text"
                value={values.status}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Event Type"
                for="eventType"
              />
              <input
                name="eventType"
                type="text"
                value={values.eventType}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <hr />
            {isAdmin &&
              <button  
                className="w-[120px] py-[10px] text-white bg-purple-800 rounded-xl"
                onClick={updateSingleEvent}
              >
                
                {isLoading ? 'Updating...' : 'Update'}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event