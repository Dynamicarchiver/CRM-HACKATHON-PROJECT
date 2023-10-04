import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import url from "../../utils/url";
import axios from "axios";

const Label = (props) => {
  return (
    <label htmlFor={props.for} className={props.className}>
      {props.name}
    </label>
  );
};

const AnnouncementInfo = () => {
  const navigate = useNavigate();

  const { announcementId } = useParams();
  const { user } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    title: "",
    content: "",
    visibility: "y",
  });

  const isAdmin = user.role === "admin" ? true : false;

  const additionalClasses = isAdmin
    ? "px-3 py-2 border border-gray-300"
    : "px-3 py-2 border-none bg-gray-100";

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateSingleAnnouncement = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(
        `${url}/api/v1/announcements/${announcementId}`,
        values,
        {
          //AxiosRequestConfig parameter
          withCredentials: true, //correct
        }
      );
      console.log("update event", response?.data);
      setIsLoading(false);

      navigate("/announcements");
    } catch (error) {
      console.log("error event update", error.response);
      setIsLoading(false);
    }
  };

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/announcements/${announcementId}`, {
        withCredentials: true,
      });

      console.log("announcements", response?.data);
      let announcement = response?.data.announcement;
      setValues({ ...values, ...announcement });
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
    <div className="h-full">
      <div className="w-full bg-[#f7f8ff] h-full flex">
        <div className="bg-white w-[90%] min-h-[80%] rounded-3xl mx-auto my-[35px] py-[25px]">
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
                name="content"
                type="text"
                value={values.content}
                className={`${additionalClasses} w-[70%] h-[205px] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <div className="flex px-[20px] ">
              <Label
                className="w-[30%] py-[10px]  text-[20px] font-[600]"
                name="Visibility"
                for="status"
              />
              <input
                name="visibility"
                type="text"
                value={values.visibility}
                className={`${additionalClasses} w-[50%] py-[10px] bg-inherit text-gray-700`}
                readOnly={!isAdmin}
                onChange={handleChange}
              />
            </div>
            <hr />
            {isAdmin && (
              <div className="w-full flex flex-col">
                <button
                  className="w-[180px] py-[10px] mt-[15px] text-white bg-purple-800 rounded-xl self-end"
                  onClick={updateSingleAnnouncement}
                >
                  {isLoading ? "Updating..." : "Update"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementInfo;