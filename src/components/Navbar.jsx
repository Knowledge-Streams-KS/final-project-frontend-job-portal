import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./NavigationMenu.css"; // Import the CSS file for styling
import logo from "../assets/logo.png"; // Import the logo image (adjust the path based on the folder structure)

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="nav-container">
      <div className="left-nav">
        <img src={logo} alt="Job Portal Logo" className="logo" />{" "}
        {/* Display the logo */}
        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">
          Job Portal
        </NavLink>
      </div>
      <div className="right-nav">
        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Job Listings
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/messages"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Messages
            </NavLink>
            <div className="nav-link profile-dropdown">
              Profile
              <div className="dropdown-content">
                <NavLink to="/profile" className="dropdown-link">
                  My Profile
                </NavLink>
                <NavLink to="/settings" className="dropdown-link">
                  Settings
                </NavLink>
                <NavLink to="/upload-resume" className="dropdown-link">
                  Upload Resume
                </NavLink>
                <button onClick={logout} className="dropdown-link">
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/jobseeker/signin"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Job Seeker Portal
            </NavLink>
            <NavLink
              to="/employer/signin"
              className="nav-link"
              activeClassName="active-nav-link"
            >
              Employer Portal
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
