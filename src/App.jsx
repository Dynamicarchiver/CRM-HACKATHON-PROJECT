import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./context";
import Members from "./components/Members";
import Announcement from "./components/Annoucement";
import Task from "./components/Task";
import { Route, Routes, Navigate, Router } from "react-router-dom";
import MemberInfo from "./components/MemberInfo";
import Navbar from "./components/Navbar";
import DashBoard from "./components/DashBoard";
import Events from "./components/Events";
import SideBar from "./components/SideBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Event from "./components/Form/Event";
import Homepage from "./Homepage";
import AnnouncementInfo from "./components/Form/Annoucements";
import MembersForm from "./components/Form/membership";
import Profile from "./components/Profile";
import TaskForm from "./components/Form/Task";
import CreateTaskForm from "./components/Form/CreateTask";
import CreateEventForm from "./components/Form/CreateEvent";
import AnnouncementCreateForm from "./components/Form/CreateAnnouncemments";

const LoadingComponent = () => {
  let circleCommonClasses = "h-[100px] w-[100px]  rounded-full";

  return (
    <div className="w-[100%] h-[100vh] flex">
      <div className="w-[20%] h-[30%] mx-auto my-auto ">
        <div className="flex mx-auto my-auto">
          <div
            className={`${circleCommonClasses} bg-[gold] mr-1 animate-bounce`}
          ></div>
          <div
            className={`${circleCommonClasses} bg-[brown] mr-1 animate-bounce200`}
          ></div>
          <div
            className={`${circleCommonClasses} bg-[black] animate-bounce400`}
          ></div>
        </div>
        <p className="text-[20px] font-[500]">Loading please wait</p>
      </div>
    </div>
  );

  // Replace with your loading UI
};

function App() {
  const { user, isLoading } = useGlobalContext();
  //  const {name, role, assembly, position } = user;
  const [count, setCount] = useState(0);

  console.log("loading", isLoading);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col font-poppins">
        {user && <Navbar />}
        <div className="flex w-full h-full">
          {/* <div className="w-[25%] bg-slate-500"></div> */}
          {user && <SideBar />}
          <div className="w-[100%] h-[100%]] bg-[#f7f8ff]">
            <Routes>
              {!user && <Route path="/" element={<Homepage />} />}
              <Route
                path="/"
                element={
                  <ProtectedRoute user={user}>
                    <DashBoard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tasks"
                element={
                  <ProtectedRoute user={user}>
                    <Task />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/add-task"
                element={
                  <ProtectedRoute user={user}>
                    <CreateTaskForm />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/task/:taskId"
                element={
                  <ProtectedRoute user={user}>
                    <TaskForm />
                  </ProtectedRoute>
                }
              />

              {/* <Route path="login" element={<Login />} /> */}
              <Route
                path="/members"
                element={
                  <ProtectedRoute user={user}>
                    <Members />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/memberinfo"
                element={
                  <ProtectedRoute user={user}>
                    <MemberInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events"
                element={
                  <ProtectedRoute user={user}>
                    <Events listsPerPage={5} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-event"
                element={
                  <ProtectedRoute user={user}>
                    <CreateEventForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/announcements"
                element={
                  <ProtectedRoute user={user}>
                    <Announcement listsPerPage={5} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-announcement"
                element={
                  <ProtectedRoute user={user}>
                    <AnnouncementCreateForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/event/:eventId"
                element={
                  <ProtectedRoute user={user}>
                    <Event />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/announcement/:announcementId"
                element={
                  <ProtectedRoute user={user}>
                    <AnnouncementInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-member"
                element={
                  <ProtectedRoute user={user}>
                    <MembersForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/memberinfo/:memberId"
                element={
                  <ProtectedRoute user={user}>
                    <MemberInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute user={user}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
