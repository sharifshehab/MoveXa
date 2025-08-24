import { DataTable } from "@/components/ui/data-table";
import useColumnsParcel from "@/hooks/useColumnsParcel";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { useSenderParcelsQuery } from "@/redux/features/sender/senderApi";
import { useState } from "react";
import { useSearchParams } from "react-router";

const SenderParcels = () => {
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
        return "Loading..."
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={parcels} page={page} />
        </div>
    );
};
export default SenderParcels;

