import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="lg:mx-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/login">All toys</Link>
              </li>
              <li>
                <Link to="/login">Blogs</Link>
              </li>
              {user ? (
                <div className="flex flex-col gap-2 ">
                  <Link className="btn-outline btn ">Add a Toy</Link>
                  <Link className="btn-outline btn ">My Toys</Link>
                  <button onClick={handleLogout} className="btn-error btn ">
                    Logout
                  </button>
                </div>
              ) : (
                <Link className="btn-secondary btn" to="/login">
                  Login
                </Link>
              )}
            </ul>
          </div>
          <Link to="/" className="btn-ghost btn text-xl normal-case">
            Toy-Car Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">All toys</Link>
            </li>
            <li>
              <Link to="/login">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="flex items-center justify-center gap-4 ">
              <img
                className="w-10 rounded-full"
                title={user.displayName}
                src={user?.photoURL}
                alt=""
              />
              <div className=" hidden gap-4 lg:flex">
                <Link className="btn-outline btn">Add a Toy</Link>
                <Link className="btn-outline btn">My Toys</Link>
                <button onClick={handleLogout} className="btn-error btn">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link className="btn-secondary btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
