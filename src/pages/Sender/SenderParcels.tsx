// import { columns } from "@/components/ui/table/columns";
import useTableColumns from "@/hooks/useTableColumns";
import { DataTable } from "@/components/ui/data-table";
import { useSenderParcelsQuery } from "@/redux/features/sender/senderApi";
import { useGetUserQuery } from "@/redux/features/user/userApi";

const SenderParcels = () => {
    const { data: userData } = useGetUserQuery()
    const { data: senderAllParcels, isLoading } = useSenderParcelsQuery(userData?._id as string, { skip: !userData?._id });

    const columns = useTableColumns();

    if (isLoading || !senderAllParcels) {
        return "Loading..."
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={senderAllParcels} />
        </div>
    );
};
export default SenderParcels;

