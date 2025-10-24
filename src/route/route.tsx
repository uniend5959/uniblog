import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "pages/home";
import Posts from "pages/posts";
import PostsNew from "pages/posts/new";
import PostsEdit from "pages/posts/edit";
import Profile from "pages/profile";
import MainLayout from "components/layout";
import DetailPage from "pages/posts/detail";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <DetailPage />,
      },
      {
        path: "/posts/new",
        element: <PostsNew />,
      },
      {
        path: "/posts/edit/:id",
        element: <PostsEdit />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
export default route;
