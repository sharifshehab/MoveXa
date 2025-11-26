import App from "@/App";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Homepage from "@/pages/HomePage";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { withAuth } from "@/utils/withAuth";
import About from "@/pages/About";
import TrackParcel from "@/pages/TrackParcel";
import Contact from "@/pages/Contact";
import { lazy } from "react";
import Services from "@/pages/Services";

const Register = lazy(() => import("@/pages/Register"));
const Login = lazy(() => import("@/pages/Login"));


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
      {
        Component: Services,
        path: "services",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: TrackParcel,
        path: "track-parcel",
      },
    ],
  }, // Common Layout route

  {
    Component: withAuth(DashboardLayout, role.admin as TRole, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/stats" /> },
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
