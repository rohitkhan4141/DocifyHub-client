import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  let isTrue = isAuthenticated();
  const navigate = useNavigate();
  const logOutHandler = () => {
    logout();
    navigate("/");
  };
  const listItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {isTrue ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar sticky top-0 z-20 justify-between bg-opacity-50 glassnav">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <Link to={"/"}>
          <p className="ms-4 normal-case text-xl font-bold">DocifyHub</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{listItems}</ul>
      </div>
      <label
        htmlFor="chat-drawer"
        tabIndex={0}
        className="btn lg:hidden btn-sm btn-accent"
      >
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg> */}
        Drawer
      </label>
    </div>
  );
};

export default Navbar;
