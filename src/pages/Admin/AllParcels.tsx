import { DataTable } from "@/components/ui/data-table";
import useColumnsParcel from "@/hooks/useColumnsParcel";

import { useAllParcelsQuery } from "@/redux/features/admin/adminApi";
import { useState } from "react";
import { useSearchParams } from "react-router";

const AllParcels = () => {
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
        return "Loading..."
    }
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={parcels} page={page} />
        </div>
    );
};

export default AllParcels;