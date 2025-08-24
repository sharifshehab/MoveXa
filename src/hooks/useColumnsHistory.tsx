/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IDeliveryHistory } from "@/types"
import PopupScroll from "@/components/ui/popup-scrollable"


const useColumnsHistory = () => {

    const columns: ColumnDef<IDeliveryHistory>[] = [
        {
            accessorKey: "trackingID",
            header: "Tracking ID",
        },
        {
            accessorKey: "senderName",
            header: "Sender Name",
        },
        {
            accessorKey: "senderEmail",
            header: "Sender Email",
        },
        {
            accessorKey: "receiverName",
            header: "Receiver Name",
        },
        {
            accessorKey: "receiverEmail",
            header: "Receiver Email",
        },
        {
            accessorKey: "sendFrom",
            header: "Send From",
        },
        {
            accessorKey: "receivedFrom",
            header: "Receive From",
        },
        {
            accessorKey: "parcelType",
            header: "Parcel Type",
        },
        {
            accessorKey: "deliveryFee",
            header: "Delivery Fee",
        },

        // Actions
        {
            id: "actions",
            cell: ({ row }) => {
                const deliveryHistory = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">See History</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <PopupScroll status={deliveryHistory.statusHistory}></PopupScroll>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]
    return columns;
};

export default useColumnsHistory;