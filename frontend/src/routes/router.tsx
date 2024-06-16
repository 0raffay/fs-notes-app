import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login } from "@/pages"; 
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
];

const router = createBrowserRouter(routes);

export default router;
