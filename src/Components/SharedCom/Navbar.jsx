import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/alltoys"
                >
                  All toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              {user ? (
                <div className="flex flex-col gap-2 ">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending btn-outline btn"
                        : isActive
                        ? "btn-outline active btn"
                        : " btn-outline btn"
                    }
                    to="/addtoy"
                  >
                    Add a Toy
                  </NavLink>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending btn-outline btn"
                        : isActive
                        ? "btn-outline active btn"
                        : "btn-outline btn"
                    }
                  >
                    My Toys
                  </NavLink>
                  <button onClick={handleLogout} className="btn-error btn ">
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending btn-secondary btn mt-2"
                      : isActive
                      ? "btn-secondary active btn mt-2"
                      : "btn-outline btn mt-2"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn-ghost btn text-xl normal-case">
            Toy-Car Store
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/alltoys"
              >
                All toys
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
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
                <Link to="/addtoy" className="btn-outline btn">
                  Add a Toy
                </Link>
                <Link to="/mytoys" className="btn-outline btn">
                  My Toys
                </Link>
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
