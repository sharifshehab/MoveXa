import AllParcels from "@/pages/Admin/AllParcels";
import AllUsers from "@/pages/Admin/AllUsers";
import Stats from "@/pages/Admin/Stats";
import { ISidebarItem } from "@/types";

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