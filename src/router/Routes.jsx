import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/homepage";
import Apps from "../pages/homepage/apps/Apps";
import InstallApps from "../pages/installApps/InstallApps";
import NotFound from "../pages/notFoundPage/NotFound";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
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
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installedApps",
        element: <InstallApps></InstallApps>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ],
    errorElement: <NotFound></NotFound>
  },
]);
