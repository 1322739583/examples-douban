import React from "react";

const Discover = React.lazy(() => import("../views/discover"));
const About = React.lazy(() => import("../views/about"));
const Home = React.lazy(() => import("../views/home"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
