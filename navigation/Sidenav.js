import React from "react";
import "./Sidenav.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExploreIcon from "@mui/icons-material/Explore";
// import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logoutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav_logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram-logo"
      />
      <div className="sidenav_buttons">
        <button className="sidenav_button">
          <HomeRoundedIcon />
          <span>Home</span>
        </button>
        <button className="sidenav_button">
          <SearchRoundedIcon />
          <span>Search</span>
        </button>
        <button className="sidenav_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav_button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav_button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav_button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button className="sidenav_button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}
            <button onClick={handleLogout} className="logout_button">
              Log out
            </button>
          </span>
        </button>
      </div>
      <div className="sidenav_more">
        <button className="sidenav_button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
