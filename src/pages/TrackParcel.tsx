import Container from "@/components/Container";
import ParcelTrackForm from "@/components/modules/ParcelTrackForm";
import { HistoryDataTable } from "@/components/ui/history-data-table";
import useColumnsTracking from "@/hooks/useColumnsTracking";
import { useTrackParcelQuery } from "@/redux/features/sender/senderApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

import { useSearchParams } from "react-router";

const TrackParcel = () => {
    const [searchParams] = useSearchParams();
    const trackingID = searchParams.get("trackingId") || undefined;
    const { data: parcelStatus, isLoading } = useTrackParcelQuery(trackingID as string, { skip: !trackingID })

    const columns = useColumnsTracking();
    useEffect(() => {
        TabTitle('MoveXa | Track Parcel');
    }, []);

    if (isLoading) {
        return "Loading..."
    }
    return (
        <Container>
            <div className="mt-20">
                <ParcelTrackForm></ParcelTrackForm>
                {parcelStatus &&
                    <HistoryDataTable columns={columns} data={parcelStatus!} />
                }
            </div>
        </Container>
    );
};

export default TrackParcel;