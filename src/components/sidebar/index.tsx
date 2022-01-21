import {
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineSetting,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="sidebar fixed min-h-screen  w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-800">
      <div className="sidebar-header flex items-center justify-center py-6">
        <div className="inline-flex">
          <Link to="/home" className="inline-flex flex-row items-center">
            <span className="leading-10 text-gray-100 text-3xl font-bold ml-1 uppercase">
              FITSHIPPER
            </span>
          </Link>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:text-gray-700 ${
                  isActive ? "text-gray-700 bg-gray-100" : "text-gray-300"
                }`
              }
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <AiOutlineHome />
              </span>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
              App
            </span>
          </li>
          <li className="my-px">
            <NavLink
              to="/addresses"
              className={({ isActive }) =>
                `flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:text-gray-700 ${
                  isActive ? "text-gray-700 bg-gray-100" : "text-gray-300"
                }`
              }
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <AiOutlineProfile />
              </span>
              <span className="ml-3">Addresses</span>
            </NavLink>
          </li>
          <li className="my-px">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:text-gray-700 ${
                  isActive ? "text-gray-700 bg-gray-100" : "text-gray-300"
                }`
              }
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <AiOutlineSetting />
              </span>
              <span className="ml-3">Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
