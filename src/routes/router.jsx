import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import PlantDetails from "../pages/PlantDetails";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import LogIn from "../pages/LogIn";
import PageNotFound from "../pages/PageNotFound";
import Plants from "../pages/Plants";
import PrivateRoute from "../providers/PrivateRoute";
import Attributions from "../pages/Attributions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "plants",
        Component: Plants,
      },
      {
        path: "plantdetails/:plantId",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "care-tips",
        Component: Home,
      },
      {
        path: "experts",
        Component: Home,
      },
      {
        path: "eco-decor",
        Component: Home,
      },
      {
        path: "about",
        Component: Home,
      },
      {
        path: "contact",
        Component: Home,
      },
      {
        path: "careers",
        Component: Home,
      },
      {
        path: "press",
        Component: Home,
      },
      {
        path: "terms",
        Component: Home,
      },
      {
        path: "privacy",
        Component: Home,
      },
      {
        path: "cookies",
        Component: Home,
      },
      {
        path: "attributions",
        Component: Attributions,
      },
    ],
  },
]);

export default router;
