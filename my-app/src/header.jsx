import React, { useState } from "react";
import "./header.css"; 

export default function Header({ labels }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="header">
        
        <div className="logo-container">
          <img src="download.png" alt="Logo" className="logo" />
          <h1 className="title">Chefity</h1>
        </div>

        
        <div className="search-container">
          <img src="kinhlup.png" alt="Search Icon" className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What would you like to cook?"
            className="search-input"
          />
        </div>

        
        <div>
          <ul className="nav">
            {labels.map((item, index) => (
              <li key={index} className="nav-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="recipe-box-container">
          <button className="recipe-box-button">Your Recipe Box</button>
          <img src="people.png" alt="User Avatar" className="avatar" />
        </div>
      </div>
      <br />
    </>
  );
}