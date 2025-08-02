import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import Post from "./pages/Post.tsx";
import NotFound from "./pages/NotFound.tsx";

import AuthSuccess from "./pages/AuthSuccess.tsx";

const blogRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <Post /> },
      { path: "auth/success", element: <AuthSuccess /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={blogRouter} />
  </StrictMode>
);
