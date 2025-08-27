import { HistoryDataTable } from "@/components/ui/history-data-table";
import { Skeleton } from "@/components/ui/skeleton";
import useColumnsHistory from "@/hooks/useColumnsHistory";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { useDeliveryHistoryQuery } from "@/redux/features/receiver/receiverApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

const DeliveryHistory = () => {
    useEffect(() => {
        TabTitle('MoveXa | Delivery History');
    }, []);
    const { data: user } = useGetUserQuery();
    const { data: deliveryHistory, isLoading } = useDeliveryHistoryQuery(user?.email as string)

    const columns = useColumnsHistory();

    if (isLoading || !deliveryHistory) {
        return (
            <div className="container mx-auto">
                <div className="mt-10">
                    {deliveryHistory?.map(skl => (<Skeleton key={skl.trackingID} className="h-10 w--3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>))}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10">
            <HistoryDataTable columns={columns} data={deliveryHistory!} />
        </div>
    );
};

export default DeliveryHistory;