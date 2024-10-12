import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Galerie from "./pages/Galerie";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Fa3ilKhair",
    element: <Index />,
  },
  {
    path: "/Fa3ilKhair/projects",
    element: <Projects />,
  },
  {
    path: "/Fa3ilKhair/galerie",
    element: <Galerie />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
