import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    const pageTitle = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `GATE | ${pageTitle}`;
  }, [location]);
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <main style={{ padding: "20px", width: "100%"}}>
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
