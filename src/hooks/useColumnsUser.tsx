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
import { IUser } from "@/types"
import { toast } from "sonner"
import { useAssignAdminMutation, useUserStatusMutation } from "@/redux/features/admin/adminApi"
import { role } from "@/constants/role"
import { useGetUserQuery } from "@/redux/features/auth/authApi"


const useColumnsUser = () => {
    const { data: userData } = useGetUserQuery();
    const [userStatus] = useUserStatusMutation();
    const [assignAdmin] = useAssignAdminMutation();

    // Change user status
    const handleUserStatus = async (userId: string, status: string) => {
        const updateData = { "userStatus": status }
        try {
            const res = await userStatus({ userId, updateData }).unwrap();
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }

    // Assign admin role
    const handleAdminRole = async (userId: string) => {
        try {
            const res = await assignAdmin(userId).unwrap();
            toast.success(res?.message)
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message)
        }
    }


    const columns: ColumnDef<IUser>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "role",
            header: "Role",
        },
        {
            accessorKey: "status",
            header: "Current Status",
        },
        // Actions
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Action</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">

                            <DropdownMenuItem
                                onClick={() => handleUserStatus(user._id as string, 'Blocked')}
                                className="justify-center" disabled={user.status === "Blocked"}>
                                Block User
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleUserStatus(user._id as string, "Active")}
                                className="justify-center" disabled={user.status === "Active"}>
                                Unblock User
                            </DropdownMenuItem>
                            {
                                userData?.role === role.superAdmin &&
                                <>
                                    <DropdownMenuSeparator />
                                    <Button className="w-full dark:bg-secondary" onClick={() => handleAdminRole(user._id as string)} disabled={user?.role === "Admin"}>Make Admin</Button>
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

export default useColumnsUser;