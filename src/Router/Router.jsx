import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";
import About from "../Pages/Home/NavItem/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
