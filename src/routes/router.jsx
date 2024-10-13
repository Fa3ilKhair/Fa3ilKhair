import Index from "../pages/Index";
import Projects from "../pages/Projects";
import Galerie from "../pages/Galerie";
import NotFoundPage from "../pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

// Define the routes
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

export default router;
