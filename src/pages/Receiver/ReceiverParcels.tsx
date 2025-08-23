import { DataTable } from "@/components/ui/data-table";
import useColumnsParcel from "@/hooks/useColumnsParcel";
import { useReceiverParcelsQuery } from "@/redux/features/receiver/receiverApi";
import { useGetUserQuery } from "@/redux/features/user/userApi";

const ReceiverParcels = () => {
    const { data: userData } = useGetUserQuery()
    const { data: receiverAllParcels, isLoading } = useReceiverParcelsQuery(userData?.email as string, { skip: !userData?.email })

    const columns = useColumnsParcel();

    if (isLoading || !receiverAllParcels) {
        return "Loading..."
    }
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={receiverAllParcels} />
        </div>
    );
};

export default ReceiverParcels;