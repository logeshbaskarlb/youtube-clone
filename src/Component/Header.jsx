import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Appsicon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  
  const [inputSearch,setInputSearch] = useState('')

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header_input">
        <input 
        value={inputSearch} 
        onChange={e=>setInputSearch(e.target.value)} 
        type="text" 
        placeholder="Search" />
        <Link to={`/search/${inputSearch}`}> 
        <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <Appsicon className="header_icon" />
        <NotificationIcon className="header_icon" />
        <Avatar alt="Remy Sharp" src="" />
      </div>
    </div>
  );
}

export default Header;
