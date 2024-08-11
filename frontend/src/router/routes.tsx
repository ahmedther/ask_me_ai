import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { deleteConversation } from "../api/api";
// import { startNewConv } from "../loaders/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: deleteConversation,
  },

  // Add more routes here
]);

export { router };
