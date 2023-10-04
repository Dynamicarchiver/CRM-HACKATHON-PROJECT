import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import url from '../../utils/url';
import axios from 'axios';

const MembersForm = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [memberName, setMemberName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [assembly, setAssembly] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [isAdmin, setIsAdmin] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {

        const databody = {
            title,
            name: memberName,
            email,
            position,
            assembly,
            phoneNumber,
            dob: dateOfBirth,
            address,
            maritalStatus,
            role: isAdmin
        }

        console.log(databody);

      const response = await axios.post(`${url}/api/v1/members/createMember`, databody, {
        //AxiosRequestConfig parameter
        withCredentials: true //correct
      });
      console.log("create memeber", response?.data);
      setIsLoading(false);

      navigate('/members');

    } catch (error) {
      console.log("error create memeber", error.response);
      setIsLoading(false);
    }

  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Add a Member</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex space-x-4">
          <div className="flex flex-col flex-shrink-0 w-1/4">
            <label htmlFor="title" className="mb-1">Title</label>
            <select
              id="title"
              className="border p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              {/* <option value="Bro">Bro</option> */}
            </select>
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="memberName" className="mb-1">Member Name</label>
            <input
              type="text"
              id="memberName"
              className="border p-2 w-full"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label htmlFor="email" className="mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="border p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-1">Position Held</label>
            <input
              type="text"
              id="position"
              className="border p-2"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="assembly" className="mb-1">Assembly</label>
            <input
              type="assembly"
              id="assembly"
              className="border p-2"
              value={assembly}
              onChange={(e) => setAssembly(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              className="border p-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="mb-1">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="border p-2"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="maritalStatus" className="mb-1">Marital Status</label>
            <select
              id="maritalStatus"
              className="border p-2"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              required
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widower">Widower</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="isAdmin" className="mb-1">Is Admin</label>
            <select
              id="isAdmin"
              className="border p-2"
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="user">No</option>
              <option value="admin">Yes</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1">Address</label>
          <textarea
            id="address"
            className="border p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
            required
          />
        </div>
        <button type="submit" className=" bg-purple-800 rounded-xl w-[120px] py-[10px] text-white">
          {isLoading ? 'Loading...' : 'Add Member'}
        </button>
      </form>
    </div>
  );
};

export default MembersForm;
