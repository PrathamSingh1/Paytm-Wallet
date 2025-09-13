import { SendCard } from "../../../components/SendCard";

export default function Page() {
    return (
        <div className="w-screen">
          
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                P2P Transfer
            </div>

           
            <div className="w-full flex items-center justify-center">
                <div className="-mt-[10%]">
                    <SendCard />
                </div>
            </div>
        </div>
    );
}
