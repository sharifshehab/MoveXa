import { DataTable } from "@/components/ui/data-table";
import useColumnsUser from "@/hooks/useColumnsUser";
import { useAllUsersQuery } from "@/redux/features/admin/adminApi";

const AllUsers = () => {
    const { data: AllUsers, isLoading } = useAllUsersQuery();
    const columns = useColumnsUser();

    if (isLoading || !AllUsers) {
        return "Loading..."
    }
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={AllUsers} />
        </div>
    );
};

export default AllUsers;