import { DataTable } from "@/components/ui/data-table";
import useColumnsParcel from "@/hooks/useColumnsParcel";

import { useAllParcelsQuery } from "@/redux/features/admin/adminApi";

const AllParcels = () => {
    const { data: AllParcels, isLoading } = useAllParcelsQuery();
    const columns = useColumnsParcel();

    if (isLoading || !AllParcels) {
        return "Loading..."
    }
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={AllParcels} />
        </div>
    );
};

export default AllParcels;