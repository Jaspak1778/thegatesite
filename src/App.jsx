// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gaming from './pages/Gaming';
import Tech from './pages/Tech';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "gaming", element: <Gaming /> },
      { path: "tech", element: <Tech /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;