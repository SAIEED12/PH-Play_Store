import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/apps",
            text: "Apps"
        },
        {
            path: "/installedApps",
            text: "Installation"
        },
        {
            path: "/dashboard",
            text: "Dashboard"
        },
    ]

  return (
    <nav className="shadow">
      <div className="flex justify-between gap-4 items-center bg-white py-[8px]">
        <img src={logo} alt="logo" className="w-[50px]" />
        <ul className="flex justify-between gap-2 items-center">
            {
                navItems.map((item, ind)=> <MyNavLink key={ind} to={item.path}>{item.text}</MyNavLink>
                )
            }

            {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}

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
