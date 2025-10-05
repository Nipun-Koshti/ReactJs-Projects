import React from "react";
import { Link, NavLink } from "react-router-dom"; // Optional, if you're using React Router
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../Context/userSlice";

const Navbar = () => {
  const active = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(
      logout()

    )
  } 

  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          {active ? (
            <NavLink
              to="/"
              onClick={handleLogout}
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              Login
            </NavLink>
          )}
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-bold ${isActive ? "text-blue-500" : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
