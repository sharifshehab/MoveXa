import ParcelForm from "@/components/modules/Sender/ParcelForm";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";

const SendParcel = () => {
    useEffect(() => {
        TabTitle('MoveXa | Send Parcel');
    }, []);
    return (
        <div className="container mx-auto py-10">
            <ParcelForm></ParcelForm>
        </div>
    );
};

export default SendParcel;
