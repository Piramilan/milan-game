import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "games/:slug", element: <GameDetailPage /> },
      //   { path: "contact", element: <ContactPage /> },
    ],
  },
  //   {
  //     element: <PrivateRoutes />,
  //     children: [
  //       {
  //         path: "users",
  //         element: <UsersPage />,
  //         children: [{ path: ":id", element: <UserDetail /> }],
  //       },
  //     ],
  //   },
]);

export default router;
