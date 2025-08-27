import { ISidebarItem } from "@/types";
import { lazy } from "react";

const SenderParcels = lazy(() => import("@/pages/Sender/SenderParcels"));
const SendParcel = lazy(() => import("@/pages/Sender/SendParcel"));

export const senderSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "All Parcels",
                url: "/sender/all-parcels",
                component: SenderParcels,
            },
            {
                title: "Send Parcel",
                url: "/sender/send-parcel",
                component: SendParcel,
            },
        ],
    },
];