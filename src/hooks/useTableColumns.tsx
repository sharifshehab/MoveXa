/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IParcel } from "@/types"
import { senderApi, useCancelParcelMutation } from "@/redux/features/sender/senderApi"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { useGetUserQuery } from "@/redux/features/user/userApi"
import { role } from "@/constants/role"
import { useReceiveParcelMutation } from "@/redux/features/receiver/receiverApi"


const useTableColumns = () => {
    const { data: user } = useGetUserQuery();
    const [receiveParcel] = useReceiveParcelMutation();


    const [cancelParcel] = useCancelParcelMutation()
    const dispatch = useDispatch();

    // Cancel parcel
    const handleCancelParcel = async (id: string) => {
        try {
            const res = await cancelParcel(id).unwrap();
            console.log(res);
            dispatch(senderApi.util.resetApiState())
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    // // Parcel payment
    // const handleCancelParcel = async (id: string) => {
    //     try {
    //         const res = await cancelParcel(id).unwrap();
    //         console.log(res);
    //         dispatch(senderApi.util.resetApiState())
    //         toast.success(res?.message)
    //     } catch (error: any) {
    //         console.log(error);
    //         toast.error(error?.data?.message)
    //     }
    // }

    // Receive parcel
    const handleReceiveParcel = async (parcelId: string, data: boolean) => {
        const updateData = { "receiveParcel": data }
        try {
            const res = await receiveParcel({ parcelId, updateData }).unwrap();
            console.log(res);
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    const columns: ColumnDef<IParcel>[] = [
        {
            accessorKey: "trackingID",
            header: "Tracking ID",
        },
        {
            accessorKey: "receiverEmail",
            header: "Receiver Email",
        },
        {
            accessorKey: "receiverAddress",
            header: "Receiver Address",
        },
        {
            accessorKey: "senderAddress",
            header: "Sender Address",
        },
        {
            accessorKey: "weight",
            header: "Weight",
        },
        {
            accessorKey: "type",
            header: "Type",
        },
        {
            accessorKey: "fee",
            header: "Parcel Fee",
        },
        {
            accessorKey: "payment",
            header: "Payment Status",
        },
        {
            accessorKey: "isApproved",
            header: "Approved",
        },
        {
            accessorKey: "currentStatus",
            header: "Current Status",
        },
        {
            accessorKey: "createdAt",
            header: "Created",
        },
        {
            accessorKey: "actions",
            header: "Action",
        },
        // Actions
        user?.role === role.sender ? {
            id: "actions",
            cell: ({ row }) => {
                const IParcel = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => handleCancelParcel(IParcel._id)}
                            >
                                Cancel Parcel
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => console.log(IParcel._id)}
                            >
                                Make Payment
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        } : {
            id: "action",
            cell: ({ row }) => {
                const IParcel = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => handleReceiveParcel(IParcel._id, true)}
                            >
                                Receive Parcel
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => handleReceiveParcel(IParcel._id, false)}
                            >
                                Return Parcel
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]
    return columns;
};

export default useTableColumns;