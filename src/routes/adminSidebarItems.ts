import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Stats = lazy(() => import("@/pages/Admin/Stats"));
const AllParcels = lazy(() => import("@/pages/Admin/AllParcels"));
const AllUsers = lazy(() => import("@/pages/Admin/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Stats",
                url: "/admin/stats",
                component: Stats,
            },
            {
                title: "All Parcels",
                url: "/admin/all-parcels",
                component: AllParcels,
            },
            {
                title: "All Users",
                url: "/admin/all-users",
                component: AllUsers,
            },
        ],
    },
];