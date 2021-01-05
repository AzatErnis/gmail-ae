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
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
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
        <Avatar
          className="header__avatar"
          src={user?.photoUrl}
          onClick={signOut}
        />
      </div>
    </div>
  );
};
export default Header;
