import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall"; 
import AppIcons from "@material-ui/icons/Apps";
import NotificationIcons from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
function Header() {
    return (
        <div className="header">
          <div className="header_left">
            <MenuIcon/>
            <img
             className="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />
          </div>
          <div className="header_input">
            <input placeholder="Search" type="text"/>
            <SearchIcon className="header_inputButton"/>
          </div>

          <div className="header_icons">
          <VideoCallIcon  className="header_icon"/>
            <AppIcons className="header_icon"/>
            <NotificationIcons className="header_icon"/>
            <Avatar
             alt="Deepak Singh"
             src="https://twitter.com/Dp_pk_s/photo" />
          </div>
    </div>
    )
}

export default Header
