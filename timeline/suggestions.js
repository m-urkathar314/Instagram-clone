import React from "react";
import "./suggestions.css";
import { Avatar } from "@mui/material";

function suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions_title">Suggestions for you</div>
      <div className="suggestions_usernames">
        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Aami_monjolika</span>
              <span className="relation">Followed by prajktaa__+2 more</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Circuit_Bhay</span>
              <span className="relation">Followed by m_urkathar314</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Melodi</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>T</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Tapuke_pappa</span>
              <span className="relation">
                Followed by m_urkathar314+18 more
              </span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggestions_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>T</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Tatya_Vichu</span>
              <span className="relation">Followed by prajktaa__</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default suggestions;
