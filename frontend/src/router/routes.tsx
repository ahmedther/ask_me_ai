import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { startNewConv } from "../loaders/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: startNewConv,
  },

  // Add more routes here
]);

export { router };
