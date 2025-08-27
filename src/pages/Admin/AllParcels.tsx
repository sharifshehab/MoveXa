import Container from "@/components/Container";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import useColumnsParcel from "@/hooks/useColumnsParcel";

import { useAllParcelsQuery } from "@/redux/features/admin/adminApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const AllParcels = () => {
    useEffect(() => {
        TabTitle('MoveXa | All Parcels');
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("searchTerm") || undefined;
    const currentStatus = searchParams.get("currentStatus") || undefined;

    const queryParams = { page: currentPage, limit, searchTerm: searchTerm as string, currentStatus: currentStatus as string }
    const { data: AllParcels, isLoading } = useAllParcelsQuery(queryParams);
    const { parcels, meta } = AllParcels || {};


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
        <Container>
            <div className="mt-10">
                <DataTable columns={columns} data={parcels} page={page} />
            </div>
        </Container>

    );
};

export default AllParcels;