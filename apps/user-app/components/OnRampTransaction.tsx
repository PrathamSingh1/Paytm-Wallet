import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
    transactions,
    title = "Recent Transactions"  
}: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[],
    title?: string
}) => {
    if (!transactions.length) {
        return (
            <Card title={title}>
                <div className="text-center pb-8 pt-8">
                    No Recent transactions
                </div>
            </Card>
        );
    }

    return (
        <Card title={title}>
            <div className="pt-2">
                {transactions.map((t, index) => {
                    let statusClasses = "";

                    if (t.status === "Success") {
                        statusClasses = "bg-green-100 text-green-700";
                    } else if (t.status === "Processing") {
                        statusClasses = "bg-yellow-100 text-yellow-700";
                    } else if (t.status === "Failure") {
                        statusClasses = "bg-red-100 text-red-700";
                    }

                    return (
                        <div key={index} className="flex justify-between border-b py-2">
                            <div>
                                <div className="text-sm">Received INR</div>
                                <div className="text-slate-600 text-xs">
                                    {t.time.toDateString()}
                                </div>
                            </div>
                            <div
                                className={`text-xs flex items-center mt-3 rounded-[15px] px-2 py-1 ${statusClasses}`}
                            >
                                {t.status}
                            </div>
                            <div className="flex flex-col justify-center">
                                + Rs {t.amount / 100}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};
