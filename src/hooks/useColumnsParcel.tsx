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
import { senderApi, useCancelParcelMutation, useMakePaymentMutation } from "@/redux/features/sender/senderApi"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { role } from "@/constants/role"
import { useReceiveParcelMutation } from "@/redux/features/receiver/receiverApi"
import { useApproveParcelMutation } from "@/redux/features/admin/adminApi"
import PopupSelect from "@/components/ui/popup-select"
import { useGetUserQuery } from "@/redux/features/auth/authApi"

const useColumnsParcel = () => {
    const { data: user } = useGetUserQuery();
    // receiver
    const [receiveParcel] = useReceiveParcelMutation();
    // sender
    const [makePayment] = useMakePaymentMutation();
    const [cancelParcel] = useCancelParcelMutation();
    const dispatch = useDispatch();
    // admin
    const [approveParcel] = useApproveParcelMutation();

    // Cancel parcel
    const handleCancelParcel = async (id: string) => {
        try {
            const res = await cancelParcel(id).unwrap();
            dispatch(senderApi.util.resetApiState())
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    // Make parcel payment
    const handleParcelPayment = async (parcelId: string) => {
        try {
            const res = await makePayment(parcelId).unwrap();
            if (res.success) {
                window.open(res.data.paymentUrl)
            }
            dispatch(senderApi.util.resetApiState())
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    // Receive parcel
    const handleReceiveParcel = async (parcelId: string, data: boolean) => {
        const updateData = { "receiveParcel": data }
        try {
            const res = await receiveParcel({ parcelId, updateData }).unwrap();
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    // Approve parcel
    const handleApproveParcel = async (id: string) => {
        try {
            const res = await approveParcel(id).unwrap();
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
            header: "Delivery Fee",
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

        // Actions
        {
            id: "actions",
            cell: ({ row }) => {
                const parcel = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {/* Sender */}
                            {
                                user?.role === role.sender &&
                                <>

                                    <DropdownMenuItem onClick={() => handleCancelParcel(parcel._id)} disabled={parcel.currentStatus === "CANCELLED"}>
                                        Cancel Parcel
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => handleParcelPayment(parcel._id)} disabled={parcel.payment === "PAID"}>
                                        Make Payment
                                    </DropdownMenuItem>
                                </>
                            }

                            {/* Receiver */}
                            {
                                user?.role === role.receiver &&
                                <>
                                    <DropdownMenuItem
                                        onClick={() => handleReceiveParcel(parcel._id, true)}
                                    >
                                        Receive Parcel
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => handleReceiveParcel(parcel._id, false)}
                                    >
                                        Return Parcel
                                    </DropdownMenuItem>
                                </>
                            }

                            {/* Admin & Super Admin */}
                            {
                                (user?.role === role.admin || user?.role === role.superAdmin) &&
                                <>
                                    <PopupSelect parcelId={parcel._id} parcelCurrentStatus={parcel.currentStatus}></PopupSelect>
                                </>
                            }
                            {/* Super Admin */}
                            {
                                user?.role === role.superAdmin &&
                                <>
                                    <DropdownMenuItem
                                        onClick={() => handleApproveParcel(parcel._id)}
                                    >
                                        Approve Parcel
                                    </DropdownMenuItem>
                                </>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]
    return columns;
};

export default useColumnsParcel;