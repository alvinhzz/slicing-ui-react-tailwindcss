import React from "react";
import NavbarBrand from "../assets/img/brand-logo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-screen bg-[#F5F5F5] px-10">
      <nav className="flex justify-between">
        <div className="px-3 py-3 flex justify-start">
          <img className="w-3/6" src={NavbarBrand} alt="" />
        </div>

        <div className="select-point">
          <ul className="flex justify-end py-3 mx-3">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
