import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { getOnRampTransactions } from "../transfer/page";

export default async function Page() {
    const transactions = await getOnRampTransactions();

    return (
        <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transactions
        </div>
        <div className="w-[90%] flex p-6 m-auto">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6">
                <OnRampTransactions transactions={transactions}
                //@ts-ignore
                title={<div className="text-center w-full text-[22px]">Wallet Transactions</div>} />
            </div>
        </div>
        </div>
    );
}
