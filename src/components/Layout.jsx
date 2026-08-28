// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <main style={{ padding: "20px", width: "100%" }}>
          <div>
            <Navbar />
            <Outlet />
          </div>
        </main>

        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
