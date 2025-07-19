import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/Home"));


export const HOME_PAGE = "/";

export const ROUTES_NAV = [
  { path: HOME_PAGE, element: <Home />, name: "Домой" },
];
