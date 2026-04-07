import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between gap-4 items-center bg-white py-[8px]">
        <img src={logo} alt="logo" className="w-[50px]" />
        <ul className="flex justify-between gap-2 items-center">
          <li>
            <NavLink to={"/"} className={({isActive})=> `${isActive ? "text-purple-500 border-b border-purple-500" : ""}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"} className={({isActive})=> `${isActive ? "text-purple-500 border-b border-purple-500" : ""}`}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/installedApps"} className={({isActive})=> `${isActive ? "text-purple-500 border-b border-purple-500" : ""}`}>Installation</NavLink>
          </li>
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
