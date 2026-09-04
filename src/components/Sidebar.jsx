// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom"; 

const Sidebar = () => {
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    position: "fixed",
    right: 0, 
    top: 0,
    backgroundColor: "#0a0a23",
    zIndex: 1000, 
  };

  return (
    
    <div style={sidebarStyle} className="d-none d-lg-block">
      <br/>
      <h2>The Gate</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/gaming" style={{ color: "white" }}>
              Gaming
            </Link>
          </li>
          <li>
            <Link to="/tech" style={{ color: "white" }}>
              Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;