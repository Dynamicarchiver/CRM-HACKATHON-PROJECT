import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import url from '../../utils/url';
import axios from 'axios';

const AnnouncementForm = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('');

  const [positionList, setPositionsList] = useState([]);


  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
        const databody = {
            title,
            content,
            visibility,
        }

        console.log(databody);

        const response = await axios.post(`${url}/api/v1/announcements/createAnnouncement`, databody, {
            //AxiosRequestConfig parameter
            withCredentials: true //correct
        });
        console.log("create announcement", response?.data);
        setIsLoading(false);

        navigate('/announcements');

    } catch (error) {
      console.log("error create announcement", error.response);
      setIsLoading(false);
    }

  };


  const fetchPositions = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/members/positions/list`, {
        withCredentials: true,
      });

      console.log("positions", response?.data.positions);
      setPositionsList(response?.data.positions);
    } catch (error) {
      console.log("err:", error.response?.data);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Add an Announcement</h2>

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
            <label htmlFor="email" className="mb-1">Visibility</label>
            <select
              id="maritalStatus"
              className="border p-2"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              required
            >
              <option value="">Select Visibility</option>
              <option value="all">All</option>
              {
                positionList.map((item, i) => {
                    return(
                        <option value={item}>{item}</option>  
                    )
                })
              }
            </select>
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="memberName" className="mb-1">Content</label>
            <textarea
                id="address"
                className="border p-2"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="3"
                required
            />
          </div>
        </div>
        <button type="submit" className=" bg-purple-800 rounded-xl w-[120px] py-[10px] text-white">
          {isLoading ? 'Loading...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default AnnouncementForm;
