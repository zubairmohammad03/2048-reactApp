import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      await signOut(auth);
      navigate("/");
    }
  };

  return (
    <nav className="bg-blue-600 text-white py-3 px-6 flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Kheliyo</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/game" className="hover:underline">
            How to Play
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:underline">
            AboutUs
          </Link>
        </li>

        <li>
          <Link to="/contactus" className="hover:underline">
            ContactUs
          </Link>
        </li>
        <li>
          <Link to="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="hover:underline">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/term" className="hover:underline">
            Term
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </li>
        <h2 className="text-3xl text-black" onClick={toggleDropdown}>
          ˅
        </h2>
      </ul>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-40 w-48 bg-white rounded-lg shadow-lg z-10 text-black"
        >
          <ul className="py-2">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
              <span className="mr-2" />
              Profile
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ">
              AboutUs
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
