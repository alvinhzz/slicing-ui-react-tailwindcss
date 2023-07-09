import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarBrand from "../assets/img/brand-logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-screen bg-[#F5F5F5] px-10">
      <nav className="flex justify-between">
        <img className="w-[9rem]" src={NavbarBrand} alt="Navbar-Brand" />

        <ul className="w-full justify-end hidden lg:flex py-3 m-3">
          <li>
            <a className="link-1" href="#">
              CATALOGUE
            </a>
          </li>
          <li>
            <a className="link-1" href="#">
              FASHION
            </a>
          </li>
          <li>
            <a className="link-1" href="#">
              FAVOURITE
            </a>
          </li>
          <li>
            <a className="link-1" href="#">
              LIFESTYLE
            </a>
          </li>
          <li>
            <a className="btn-1" href="#">
              SIGN UP
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className="lg:hidden z-10 py-4">
          {!nav ? <FaBars /> : <FaTimes className="text-white" />}
        </div>
      </nav>

      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black opacity-95 text-white py-8 flex flex-col justify-around"}>
        <li>
          <a href="#">CATALOGUE</a>
        </li>
        <li>
          <a href="#">FASHION</a>
        </li>
        <li>
          <a href="#">FAVOURITE</a>
        </li>
        <li>
          <a href="#">LIFESTYLE</a>
        </li>
        <li className="my-3">
          <a className="btn-2" href="#">
            SIGN UP
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
