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


const Task = () => {

  const navigate = useNavigate();

  const { taskId } = useParams();
  const { user } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    title: '',
    description: '',
    dueDate: '',
    assignedTo: '',
    status: '',
    priority: ''
  });


  const isAdmin = user.role === 'admin' ? true : false;

  const additionalClasses = isAdmin
    ? 'px-3 py-2 border border-gray-300'
    : 'px-3 py-2 border-none bg-gray-100';

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateSingleTask = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(`${url}/api/v1/tasks/${taskId}`, values, {
        //AxiosRequestConfig parameter
        withCredentials: true //correct
      });
      console.log("update task", response?.data);
      setIsLoading(false);

      navigate('/tasks');

    } catch (error) {
      console.log("error task update", error.response);
      setIsLoading(false);
    }



  };


  const fetchEvent = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/tasks/${taskId}` , {
        withCredentials: true
      });

      console.log("tasks", response?.task);
      let task = response?.data.task;
      setValues({...values, ...task});
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
                name="Due Date"
                for="dateTime"
              />
              <input
                name="dueDate"
                type="datetime-local"
                value={values.dueDate ? new Date(values.dueDate).toISOString().slice(0, 16) : ''}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
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
                name="Priority"
                for="eventType"
              />
              <input
                name="priority"
                type="text"
                value={values.priority}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <hr />
            {isAdmin &&
              <button  
                className="w-[120px] py-[10px] text-white bg-purple-800 rounded-xl"
                onClick={updateSingleTask}
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

export default Task