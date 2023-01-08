import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import { GiBoxUnpacking } from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className=" w-96 p-4 border bg-slate-100 md:h-screen md:w-80">
      <div>
        <h1 className="text-4xl p-4 font-serif">SideBar</h1>
        <ul className="text-lg font-medium cursor-pointer">
          <li className="px-6 py-1 m-2 bg-gray-900 text-white rounded-sm flex justify-arround gap-3">
            <RxDashboard className="mt-1" /> Dashboard
          </li>
          <li className="px-6 py-1 m-2 text-gray-500 rounded-sm flex justify-arround gap-3">
            <BsCartCheck className="mt-1" />
            Order
          </li>
          <li className="px-6 py-1 m-2 text-gray-500 rounded-sm flex justify-arround gap-3">
            <GiBoxUnpacking className="mt-1" />
            Product
          </li>
          <li className="px-6 py-1 m-2 text-gray-500 rounded-sm flex justify-arround gap-3">
            <GrStackOverflow className="mt-1" />
            overview
          </li>
          <li className="px-6 py-1 m-2 text-gray-500 rounded-sm flex justify-arround gap-3">
            <HiOutlineUsers className="mt-1" />
            customer
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
