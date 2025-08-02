import { StrictMode, useEffect } from "react";
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
      { path: "*", element: <NotFound /> },
      { path: "auth/success", element: <AuthSuccess /> },
    ],
  },
]);

useEffect(() => {
  fetch("http://localhost:3000/me", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Logged in user:", data.user);
      // Save to context or state
    });
}, []);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={blogRouter} />
  </StrictMode>
);
