import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import url from '../../utils/url';
import axios from 'axios';

const TaskForm = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('');

  const [membersList, setMembersList] = useState([]);
  

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
        const databody = {
            title,
            description,
            dueDate,
            assignedTo,
            status,
            priority
        }

        console.log(databody);

        const response = await axios.post(`${url}/api/v1/tasks/createTask`, databody, {
            //AxiosRequestConfig parameter
            withCredentials: true //correct
        });
        console.log("create memeber", response?.data);
        setIsLoading(false);

        navigate('/tasks');

    } catch (error) {
      console.log("error create task", error.response);
      setIsLoading(false);
    }

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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Add a Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex space-x-4">
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <label htmlFor="title" className="mb-1">Title</label>
            <input
              type="text"
              id="title"
              className="border p-2 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="memberName" className="mb-1">Description</label>
            <input
              type="text"
              id="memberName"
              className="border p-2 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="email" className="mb-1">Due Date</label>
            <input
              type="datetime-local"
              id="email"
              className="border p-2 w-full"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-1">Assigned To</label>
            <select
              id="maritalStatus"
              className="border p-2"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            >
              <option value="">Select Member</option>
              {
                membersList.map((item, i) => {
                    return(
                        <option value={item._id}>{item.name}</option>  
                    )
                })
              }
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-1">Priority</label>
            <select
              id="maritalStatus"
              className="border p-2"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <button type="submit" className=" bg-purple-800 rounded-xl w-[120px] py-[10px] text-white">
          {isLoading ? 'Loading...' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
