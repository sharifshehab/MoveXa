import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import useColumnsParcel from "@/hooks/useColumnsParcel";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { useSenderParcelsQuery } from "@/redux/features/sender/senderApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const SenderParcels = () => {
    useEffect(() => {
        TabTitle('MoveXa | All Parcels');
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchTerm") || undefined;
    const currentStatus = searchParams.get("currentStatus") || undefined;

    const { data: userData } = useGetUserQuery()
    const queryParams = { senderID: userData?._id as string, page: currentPage, limit, searchTerm: searchTerm as string, currentStatus: currentStatus as string }
    const { data: senderAllParcels, isLoading } = useSenderParcelsQuery(queryParams, { skip: !userData?._id });
    const { parcels, meta } = senderAllParcels || {};

    const totalPage = meta?.totalPage || 1;
    const page = { currentPage, setCurrentPage, totalPage }

    const columns = useColumnsParcel();

    if (isLoading || !parcels) {
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
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={parcels} page={page} />
        </div>
    );
};
export default SenderParcels;

