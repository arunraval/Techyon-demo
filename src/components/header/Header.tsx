import React from "react";
import "./Header.scss";
import {
  notification,
  proArrow,
  search,
  setting,
  sound,
} from "../common/commonImage";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">TECHYON</h1>
      </div>

      <div className="header-right">
        <img src={search} alt="" />
        <img src={setting} alt="" />
        <img src={sound} alt="" />
        <div className="notification">
          <img src={notification} alt="" />
          <span>+99</span>
        </div>
        <div className="profile-card">
          <div className="profile-content">
            <img
              src="https://storage.googleapis.com/a1aa/image/x9iDfwGn98ji_7lgkn8FyyrDHQvGKY4MgJiV3kAefts.jpg"
              alt="Portrait of a smiling person in a light blue shirt"
              className="profile-image"
            />
            <img src={proArrow} alt="" className="profile-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
