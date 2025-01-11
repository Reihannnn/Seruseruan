import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PageUseEffect from "./pages/PageUseEffect.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import TimerEnd from "./pages/TimerEnd.jsx";
import FormPage from "./pages/Form.jsx";
import ThemePage from "./pages/ThemePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/useEffect",
    element: <PageUseEffect />,
  },
  {
    path: "/tambah-data",
    element: <App />,
  },
  {
    path: "/timer-end",
    element: <TimerEnd />,
  },
  {
    path: "/theme-page",
    element: <ThemePage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
