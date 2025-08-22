import App from "@/App";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Homepage from "@/pages/HomePage";
import Login from "@/pages/Login";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { withAuth } from "@/utils/withAuth";
import About from "@/pages/About";
import Register from "@/pages/Register";

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
      {
        Component: About,
        path: "about",
      },
    ],
  }, // Common Layout route

  {
    Component: withAuth(DashboardLayout, role.admin as TRole, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/all-parcels" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },// super Admin and Admin dashboard 
  {
    Component: withAuth(DashboardLayout, role.sender as TRole),
    path: "/sender",
    children: [
      { index: true, element: <Navigate to="/sender/all-parcels" /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },// Sender dashboard 
  {
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    path: "/receiver",
    children: [
      { index: true, element: <Navigate to="/receiver/all-parcels" /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },// Receiver dashboard 
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },

]);
