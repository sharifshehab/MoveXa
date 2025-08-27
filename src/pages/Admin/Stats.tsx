import Container from "@/components/Container";
import SingleStats from "@/components/modules/Admin/SingleStats";
import { Skeleton } from "@/components/ui/skeleton";
import { useParcelStatsQuery, usePaymentStatsQuery, useUserStatsQuery } from "@/redux/features/stats/statsApi";
import { TabTitle } from "@/utils/DynamicTitle";
import { useEffect } from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


const Stats = () => {
    useEffect(() => {
        TabTitle('MoveXa | Stats');
    }, []);
    const { data: parcelStats, isLoading: isParcelStatsLoading } = useParcelStatsQuery(undefined);
    const { totalParcel, parcelByStatus } = parcelStats || {}

    const { data: userStats, isLoading: isUserStatsLoading } = useUserStatsQuery(undefined);
    const { totalUsers, userByRole } = userStats || {}

    const { data: paymentStats, isLoading: isPaymentStatsLoading } = usePaymentStatsQuery(undefined);
    const { totalPayment, paymentByStatus } = paymentStats || {}

    if (isParcelStatsLoading || isUserStatsLoading || isPaymentStatsLoading) {
        return (
            <div className="container mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-14 mt-14">
                    {[1, 2, 3].map(skl => (<Skeleton key={skl} className="h-60 w-3/4 mx-auto rounded-none bg-gray-200 mb-1.5"></Skeleton>))}
                </div>
            </div>
        );
    }

    return (
        <Container>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-14 mt-14">
                <SingleStats statsName={"User"} total={totalUsers ?? 0} byStatus={userByRole ?? []} />
                <SingleStats statsName={"Parcel"} total={totalParcel ?? 0} byStatus={parcelByStatus ?? []} />
                <SingleStats statsName={"Payment"} total={totalPayment ?? 0} byStatus={paymentByStatus ?? []} />
            </div>

            <div className="w-full h-[500px] mt-20">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={parcelByStatus}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="_id" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="count" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="count" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="count" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </Container>
    );
};

export default Stats;