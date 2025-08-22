import DeliveryHistory from "@/pages/Receiver/DeliveryHistory";
import ReceiverParcels from "@/pages/Receiver/ReceiverParcels";
import { ISidebarItem } from "@/types";

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