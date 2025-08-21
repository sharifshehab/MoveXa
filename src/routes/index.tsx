import App from "@/App";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
// import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Homepage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";

// const About = lazy(() => import("@/pages/About"));

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      // {
      //   Component: About,
      //   path: "about",
      // },
    ],
  }, // Common Layout route

  // {
  //   Component: withAuth(DashboardLayout, role.superAdmin as TRole),
  //   path: "/admin",
  //   children: [
  //     { index: true, element: <Navigate to="/admin/analytics" /> },
  //     ...generateRoutes(adminSidebarItems),
  //   ],
  // }, // Admin Dashboard route

  // {
  //   Component: withAuth(DashboardLayout, role.user as TRole),
  //   path: "/user",
  //   children: [
  //     { index: true, element: <Navigate to="/user/bookings" /> },
  //     ...generateRoutes(userSidebarItems),
  //   ],
  // }, // User Dashboard route

  {
    Component: Registration,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },

]);
