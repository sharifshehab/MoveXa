import Container from "@/components/Container";
import { HistoryDataTable } from "@/components/ui/history-data-table";
import { Skeleton } from "@/components/ui/skeleton";
import useColumnsUser from "@/hooks/useColumnsUser";
import { useAllUsersQuery } from "@/redux/features/admin/adminApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

const AllUsers = () => {
    useEffect(() => {
        TabTitle('MoveXa | All Users');
    }, []);
    const { data: AllUsers, isLoading } = useAllUsersQuery();
    const columns = useColumnsUser();

    if (isLoading || !AllUsers) {
        return (
            <div className="container mx-auto">
                <div className="mt-10">
                    <Skeleton className="h-10 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>
                    <Skeleton className="h-10 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>
                    <Skeleton className="h-10 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>
                    <Skeleton className="h-10 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>
                    <Skeleton className="h-10 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>
                </div>
            </div>
        );
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