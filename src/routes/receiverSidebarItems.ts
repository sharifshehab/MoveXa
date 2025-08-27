import { ISidebarItem } from "@/types";
import { lazy } from "react";

const ReceiverParcels = lazy(() => import("@/pages/Receiver/ReceiverParcels"));
const DeliveryHistory = lazy(() => import("@/pages/Receiver/DeliveryHistory"));

export const receiverSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "All Parcels",
                url: "/receiver/all-parcels",
                component: ReceiverParcels,
            },
            {
                title: "Delivery History",
                url: "/receiver/delivery-history",
                component: DeliveryHistory,
            },
        ],
    },
];