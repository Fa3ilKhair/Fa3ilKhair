import Index from "../pages/Index";
import NotFoundPage from "../pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";
import MaintenancePage from "../pages/MaintenancePage";

const router = createBrowserRouter([
  {
    path: "/Fa3ilKhair",
    element: <Index />,
  },
  {
    path: "/Fa3ilKhair/projets",
    element: <MaintenancePage />,
  },
  {
    path: "/Fa3ilKhair/galerie",
    element: <MaintenancePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
