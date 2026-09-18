import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
    ],
  },
]);
