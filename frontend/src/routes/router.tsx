import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login, Dashboard } from "@/pages"; 
import ROUTES from "@/routes";

const routes = [
  {
    path: ROUTES.landingPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.login,
    element: <Login />,
  },
  {
    path: ROUTES.dashboard,
    element: <Dashboard />,
  },
];

const router = createBrowserRouter(routes);

export default router;
