import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
import logo from "../images/gmail.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img className="header__left-img" src={logo} alt="gmail-logo" />
      </div>

      <div className="header__middle">
        <Search className="header__middle-search" />
        <input
          className="header__middle-input"
          type="text"
          placeholder="Search mail"
        />
        <ArrowDropDown className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};
export default Header;
