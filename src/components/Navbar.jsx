import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../components/NavigationMenu.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMessages = () => {
    setMessagesOpen(!messagesOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="left-nav">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        <NavLink to="/" className="text-lg font-semibold text-blue-600">
          Job Portal
        </NavLink>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger-menu"
        onClick={toggleMenu}
      />
      <div className={`right-nav ${menuOpen ? "open" : ""}`}>
        {!user && (
          <>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/jobs" className="nav-link">
              Jobs
            </NavLink>
          </>
        )}
        {user && user.type === "jobseeker" && (
          <>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/jobs" className="nav-link">
              Jobs
            </NavLink>
          </>
        )}
        {user && (
          <>
            <div
              className="profile-dropdown"
              onMouseEnter={toggleMessages}
              onMouseLeave={toggleMessages}
            >
              <FontAwesomeIcon icon={faEnvelope} className="nav-link" />
              {messagesOpen && (
                <div className="dropdown-content">
                  <NavLink to="/messages" className="dropdown-link">
                    Message 1
                  </NavLink>
                  <NavLink to="/messages" className="dropdown-link">
                    Message 2
                  </NavLink>
                </div>
              )}
            </div>
            <div
              className="profile-dropdown"
              onMouseEnter={toggleNotifications}
              onMouseLeave={toggleNotifications}
            >
              <FontAwesomeIcon icon={faBell} className="nav-link" />
              {notificationsOpen && (
                <div className="dropdown-content">
                  <NavLink to="/notifications" className="dropdown-link">
                    Notification 1
                  </NavLink>
                  <NavLink to="/notifications" className="dropdown-link">
                    Notification 2
                  </NavLink>
                </div>
              )}
            </div>
            <div
              className="profile-dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <FontAwesomeIcon icon={faUser} className="nav-link" />
              {dropdownOpen && (
                <div className="dropdown-content">
                  {user.type === "jobseeker" ? (
                    <>
                      <NavLink
                        to="/jobseeker/dashboard"
                        className="dropdown-link"
                      >
                        Jobseeker Dashboard
                      </NavLink>
                      <NavLink to="/settings" className="dropdown-link">
                        Settings
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/employer/dashboard"
                        className="dropdown-link"
                      >
                        Employer Dashboard
                      </NavLink>
                      <NavLink
                        to="/employer/createjob"
                        className="dropdown-link"
                      >
                        Create Jobs
                      </NavLink>
                      <NavLink to="/settings" className="dropdown-link">
                        Settings
                      </NavLink>
                    </>
                  )}
                  <button onClick={handleLogout} className="dropdown-link">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
        {!user && (
          <>
            <NavLink
              to="/jobseeker/signin"
              className="nav-link jobseeker-signin"
            >
              Jobseeker Sign In
            </NavLink>
            <NavLink to="/employer/signin" className="nav-link employer-signin">
              Employer Sign In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
