// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    position: "fixed",
    right: 0, 
    top: 0,
    backgroundColor: "#0a0a23",
    
  };

  return (
    <div style={sidebarStyle}>
      <h2>The Gate</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <a href="#gaming" style={{ color: "white" }}>
              Gaming
            </a>
          </li>
          <li>
            <a href="#tech" style={{ color: "white" }}>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
