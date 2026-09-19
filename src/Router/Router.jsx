import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import LandingPage from "../Pages/Home/LandingPage/LandingPage";
import About from "../Pages/Home/NavItem/About/About";
import Blog from "../Pages/Home/NavItem/Blog/Blog";
import Movies from "../Pages/Home/NavItem/Movies/Movies";
import MovieDetails from "../Pages/Home/LandingPage/MovieCardLP/MovieDetails";

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
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "movies",
        Component: Movies,
      },
      {
        path: "movies/:id",
        Component: MovieDetails,
      },
    ],
  },
]);
