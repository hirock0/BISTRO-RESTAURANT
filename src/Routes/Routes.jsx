import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import App from "../App";
import Our_Menu from "../pages/Our_Menu/Our_Menu";
import Our_Shop from "../pages/Our_Shop/Our_Shop";
import Contact_Us from "../pages/Contact_Us/Contact_Us";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/our_menu",
          element: <Our_Menu />,
        },
        {
          path: "/our_shop",
          element: <Our_Shop />,
        },
        {
          path: "/contact_us",
          element: <Contact_Us />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
