import "./App.css";
import Tabs from "./pages/auth/Tabs";
import NavBar from "./pages/NavBar.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tabs/>
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
      hie
      <NavBar/>
    </>
  );
}

export default App;