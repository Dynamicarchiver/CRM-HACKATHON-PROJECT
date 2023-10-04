import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import url from './utils/url';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/members/showMe` , {
        withCredentials: true
      });
      console.log("context", response?.data)
      saveUser(response?.data.user);
    } catch (error) {
      console.log("err:", error.response?.data);
      setIsLoading(false);
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      await axios.delete(`${url}/api/v1/auth/logout` , {
        withCredentials: true
      });
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };