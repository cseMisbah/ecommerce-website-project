import React from "react";
import logo from "/images/logo.png";
import { Search } from "lucide-react";
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

//import search from "/images/search.png";
const Header = () => {
  return (
    <div>
      <div className="bg-[url(/images/header.jpg)]  bg-cover bg-center bg-fixed h-28">
        <div className="flex items-center">
          {" "}
          <div className="pt-3  mx-auto mt-5">
            <a href="#">
              {" "}
              <img src={logo} className="h-12 " />
            </a>
          </div>
          <div className="flex items-center mr-33 gap-5 mt-5">
            <a href="#" className="flex items-center mt-5 hover:bg-slate-400">
              <IoSearchOutline className="mr-1" />
              <span>Search</span>
            </a>
            <a href="#" className="flex items-center hover:bg-slate-400 mt-5">
              <IoMdContact className="mr-1" />
              <span>SIGN IN</span>
            </a>
            <a href="#" className="flex items-center hover:bg-slate-400 mt-5">
              <IoBagOutline className="mr-1" />
              <span>0</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
