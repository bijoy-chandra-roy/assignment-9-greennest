import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "/images/greennest-logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((err) => toast.error(err));
  };

  const pages = (
    <>
      <NavLink to="/" className="menu-horizontal px-1">
        {({ isActive }) => (
          <li
            className={
              isActive
                ? "font-bold text-primary text-lg"
                : "hover:text-primary text-lg"
            }
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink to="/plants" className="menu-horizontal px-1 py-3 lg:py-0">
        {({ isActive }) => (
          <li
            className={
              isActive
                ? "font-bold text-primary text-lg"
                : "hover:text-primary text-lg"
            }
          >
            Plants
          </li>
        )}
      </NavLink>
      <NavLink to="/profile" className="menu-horizontal px-1">
        {({ isActive }) => (
          <li
            className={
              isActive
                ? "font-bold text-primary text-lg"
                : "hover:text-primary text-lg"
            }
          >
            My Profile
          </li>
        )}
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6 lg:px-8 relative">
      {/* Navbar Start */}
      <div className="navbar-start item-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {pages}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img src={logo} alt="GreenNest" className="w-8 mb-2" />
          GreenNest
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">{pages}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex gap-2 items-center">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="relative dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt={user.displayName || "User"}
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 p-2 shadow w-auto min-w-max"
            >
              <li>
                <Link to="/profile">
                  <span className="font-semibold  text-lg">
                    {user.displayName || "Profile"}
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left hover:font-bold hover:text-red-500 text-lg mt-3"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-primary hover:bg-green-600 transition"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="btn btn-neutral hover:bg-gray-600 transition"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
