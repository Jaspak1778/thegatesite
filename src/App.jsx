import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gaming from './pages/Gaming';
import Tech from './pages/Tech';
import News from './pages/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "gaming", element: <Gaming /> },
      { path: "tech", element: <Tech /> },
      { path: "news/:articleId?", element: <News /> }  //muista id articles_1 tiedostoon
    ],
  },
],
  {
    basename: "/thegatesite", // Lisää tämä toiseksi argumentiksi
  });

function App() {
  return <RouterProvider router={router} />;
}

export default App;