import { createBrowserRouter } from "react-router-dom";
import { LandingPage, Login, Form, Layout } from "@/pages";
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
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Form />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
