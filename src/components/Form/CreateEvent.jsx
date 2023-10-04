import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import url from '../../utils/url';
import axios from 'axios';

const EventForm = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [status, setStatus] = useState('Upcoming');
  const [eventType, setEventType] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
        const databody = {
            title,
            description,
            dateTime,
            location,
            status,
            eventType,
        }

        console.log(databody);

        const response = await axios.post(`${url}/api/v1/events/createEvent`, databody, {
            //AxiosRequestConfig parameter
            withCredentials: true //correct
        });
        console.log("create events", response?.data);
        setIsLoading(false);

        navigate('/events');

    } catch (error) {
      console.log("error create events", error.response);
      setIsLoading(false);
    }

  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Add an Event</h2>

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
            <label htmlFor="email" className="mb-1">Date</label>
            <input
              type="datetime-local"
              id="email"
              className="border p-2 w-full"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-1">Event Type</label>
            <input
              type="text"
              id="email"
              className="border p-2 w-full"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-1">Location</label>
            <input
              type="text"
              id="email"
              className="border p-2 w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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

export default EventForm;
