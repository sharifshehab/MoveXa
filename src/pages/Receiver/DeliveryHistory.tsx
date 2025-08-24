import { HistoryDataTable } from "@/components/ui/history-data-table";
import useColumnsHistory from "@/hooks/useColumnsHistory";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { useDeliveryHistoryQuery } from "@/redux/features/receiver/receiverApi";

const DeliveryHistory = () => {

    const { data: user } = useGetUserQuery();
    const { data: deliveryHistory, isLoading } = useDeliveryHistoryQuery(user?.email as string)

    const columns = useColumnsHistory();
    if (isLoading || !deliveryHistory) {
        return "Loading..."
    }
    return (
        <div className="container mx-auto py-10">
            <HistoryDataTable columns={columns} data={deliveryHistory!} />
        </div>
    );
};

export default DeliveryHistory;