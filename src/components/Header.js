import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth'
import logo from '../images/live.png'


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" >
        <img alt='logo' src={logo} style={{ width: 60 }}></img>

      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
