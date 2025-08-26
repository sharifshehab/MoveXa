import Container from "@/components/Container";
import { HistoryDataTable } from "@/components/ui/history-data-table";
import useColumnsUser from "@/hooks/useColumnsUser";
import { useAllUsersQuery } from "@/redux/features/admin/adminApi";

const AllUsers = () => {
    const { data: AllUsers, isLoading } = useAllUsersQuery();
    const columns = useColumnsUser();

    if (isLoading || !AllUsers) {
        return "Loading..."
    }
    return (
        <Container>
            <div className="mt-14">
                <HistoryDataTable columns={columns} data={AllUsers} />
            </div>
        </Container>

    );
};

export default AllUsers;