// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      <main style={{ marginRight: '250px', padding: '20px', width: '100%' }}>
        <Outlet />
      </main>
      
      <Sidebar />
    </div>
  );
};

export default Layout;