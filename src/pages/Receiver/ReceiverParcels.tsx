import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import useColumnsParcel from "@/hooks/useColumnsParcel";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { useReceiverParcelsQuery } from "@/redux/features/receiver/receiverApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const ReceiverParcels = () => {
    useEffect(() => {
        TabTitle('MoveXa | All Parcels');
    }, []);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchTerm") || undefined;
    const currentStatus = searchParams.get("currentStatus") || undefined;

    const { data: userData } = useGetUserQuery()
    const queryParams = { receiverEmail: userData?.email as string, page: currentPage, limit, searchTerm: searchTerm as string, currentStatus: currentStatus as string }
    const { data: receiverAllParcels, isLoading } = useReceiverParcelsQuery(queryParams, { skip: !userData?.email })
    const { parcels, meta } = receiverAllParcels || {};

    const totalPage = meta?.totalPage || 1;
    const page = { currentPage, setCurrentPage, totalPage }

    const columns = useColumnsParcel();

    if (isLoading || !parcels) {
        return (
            <div className="container mx-auto">
                <div className="mt-10">
                    {parcels?.map(skl => (<Skeleton key={skl._id} className="h-10 w--3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>))}
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

export default ReceiverParcels;