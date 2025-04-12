import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { FaCartPlus, FaPhone, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 3, text: "Parts", link: "/Parts" },
    { id: 2, text: "Build", link: "/Build" },
    { id: 4, text: "AI Build", link: "/AI" },
  ];

  const navIcons = [
    { id: 1, icon: <FaInfoCircle size={20} /> },
    { id: 2, icon: <FaPhone size={20} /> },
    { id: 3, icon: <FaCartPlus size={20} /> },
  ];

  return (
    <div className="relative flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black">
      {/* Left: Logo and Title */}
      <div className="flex items-center gap-2 bg-blue-600 text-white p-4 rounded-xl">
        <img src={Logo} alt="Logo" className="w-12" />
        <h1 className="text-2xl font-bold">PickMy<span className="text-red-600">PC.</span></h1>
      </div>

      {/* Center: Nav Links */}
      <ul className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-2 font-medium hover:bg-blue-600 rounded-xl cursor-pointer duration-300 hover:text-white"
            Link={Link}
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Right: Icons */}
      <div className="hidden md:flex items-center gap-4 ">
        {navIcons.map((icon) => (
          <div
            key={icon.id}
            className=" p-2 hover:bg-blue-600 rounded-xl cursor-pointer duration-300 hover:text-white "
          >
            {icon.icon}
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className=" text-3xl border-b-2 max-w-40 font-bold text-blue-600 m-4">
        PickMy<span className="text-red-600">PC.</span>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-blue-600 duration-300 text-white cursor-pointer border-gray-600"
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}

        {/* Mobile Icons */}
        {navIcons.map((icon) => (
          <li
            key={icon.id}
            className="p-4 border-b rounded-xl hover:bg-blue-600 duration-300 text-white cursor-pointer border-gray-600"
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
