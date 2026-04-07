import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Apps from "./pages/homepage/apps/Apps";
import InstallApps from "./pages/installApps/InstallApps";
import NotFound from "./pages/notFoundPage/NotFound";
import Homepage from "./pages/homepage/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage></Homepage>,
        loader: ()=> fetch("/data.json")
      },
      {
        path: "/apps",
        element: <Apps></Apps>
      },
      {
        path: "/installedApps",
        element: <InstallApps></InstallApps>
      },
    ],
    errorElement: <NotFound></NotFound>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
