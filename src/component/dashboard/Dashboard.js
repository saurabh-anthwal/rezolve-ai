import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TfiTime } from "react-icons/tfi";
import { HiOutlineUsers } from "react-icons/hi";
import DashboardMain from "./DashboardMain";
import { getUsers } from "../../services/userServices";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [dashboardState, setDashboardState] = useState({
    showAddedUser: false,
    showOverTime: false,
    showNoOfUsers: false,
  });

  function handleInfo(type) {
    if (type === "showAddedUser") {
      setDashboardState({
        showAddedUser: true,
        showOverTime: false,
        showNoOfUsers: false,
      });
    } else if (type === "showOverTime") {
      setDashboardState({
        showAddedUser: false,
        showOverTime: true,
        showNoOfUsers: false,
      });
    } else if (type === "showNoOfUsers") {
      setDashboardState({
        showAddedUser: false,
        showOverTime: false,
        showNoOfUsers: true,
      });
    }
  }

  useEffect(() => {
    (async () => {
      const res = await getUsers();
      setUsers(res);
    })();
  }, []);

  return (
    <div className="grid p-4 ">
      <h1 className="font-semibold text-xl text-gray-800 text-left my-5">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between text-gray-700 border-b p-2 shadow shadow-slate-100">
        <div
          onClick={() => handleInfo("showAddedUser")}
          className="flex gap-2 bg-indigo-100 py-5 px-10 cursor-pointer hover:bg-indigo-200"
        >
          <AiOutlineUserAdd className="mt-1" />
          <p>Added User: {users.length}</p>
        </div>
        <div
          onClick={() => handleInfo("showOverTime")}
          className="flex gap-2 bg-red-100 py-5 px-10 cursor-pointer hover:bg-red-200"
        >
          <TfiTime className="mt-1" />
          <p>Users createdAt</p>
        </div>
        <div
          onClick={() => handleInfo("showNoOfUsers")}
          className="flex gap-2 bg-yellow-100 py-5 px-10 cursor-pointer hover:bg-yellow-200"
        >
          <HiOutlineUsers className="mt-1" />
          <p>Users by type</p>
        </div>
      </div>
      <DashboardMain dashboardState={dashboardState} users={users} />
    </div>
  );
};

export default Dashboard;
