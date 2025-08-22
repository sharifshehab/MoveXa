import SenderParcels from "@/pages/Sender/SenderParcels";
import SendParcel from "@/pages/Sender/SendParcel";
import { ISidebarItem } from "@/types";

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