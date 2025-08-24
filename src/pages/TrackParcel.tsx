import ParcelTrackForm from "@/components/modules/ParcelTrackForm";
import { HistoryDataTable } from "@/components/ui/history-data-table";
import useColumnsTracking from "@/hooks/useColumnsTracking";
import { useTrackParcelQuery } from "@/redux/features/sender/senderApi";
import { useSearchParams } from "react-router";

const TrackParcel = () => {
    const [searchParams] = useSearchParams();
    const trackingID = searchParams.get("trackingId") || undefined;
    const { data: parcelStatus, isLoading } = useTrackParcelQuery(trackingID as string, { skip: !trackingID })

    const columns = useColumnsTracking();
    if (isLoading) {
        return "Loading..."
    }
    return (
        <>
            <ParcelTrackForm></ParcelTrackForm>
            {parcelStatus &&
                <HistoryDataTable columns={columns} data={parcelStatus!} />
            }
        </>
    );
};

export default TrackParcel;