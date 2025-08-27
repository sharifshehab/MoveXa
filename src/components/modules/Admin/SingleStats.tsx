import { IStats } from "@/types";

interface ISingleStats {
    statsName: string,
    total: number,
    byStatus: IStats[]
}


const SingleStats = ({ statsName, total, byStatus }: ISingleStats) => {
    return (
        <article className="flex flex-col gap-8 rounded-lg bg-secondary p-6">

            <div className="inline-flex justify-center gap-2 bg-primary p-2 rounded-sm text-card">
                <h2 className="text-2xl font-yantramanav">Total {statsName}: {total}</h2>
            </div>
            <div className="flex-center flex-wrap justify-between gap-8">
                {byStatus?.map(item => <div key={item?._id} className="text-center">
                    <strong className="block text-sm font-medium text-card dark:text-white"> {item?._id} </strong>

                    <p>
                        <span className="text-2xl font-medium text-primary">{item?.count} </span>
                    </p>
                </div>)}
            </div>

        </article>
    );
};

export default SingleStats;