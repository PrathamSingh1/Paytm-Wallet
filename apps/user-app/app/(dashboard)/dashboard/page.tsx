import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { getBalance } from "../transfer/page";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const balance = await getBalance();

  if (!session?.user?.id) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">
          Please log in to view your dashboard.
        </div>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(session.user.id) },
    select: {
      name: true,
      Balance: {
        select: { amount: true },
      },
    },
  });

  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  return (
    <div className="w-screen min-h-[calc(100vh-80px)] bg-[#f5f7fb]">
      {/* Greeting */}
      <div className="px-6 pt-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          {greeting}, <span className="text-[#00baf2]">{user?.name || "User"}</span> 👋
        </h1>
      </div>

      {/* Wallet Card */}
      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-600">Your Wallet Balance</h2>
            <span className="text-sm bg-[#e6f7fb] text-[#00baf2] px-3 py-1 rounded-full font-medium">
              PayTM Wallet
            </span>
          </div>

          <div className="mt-4 text-5xl font-bold text-gray-900">
            <span className="text-[#00baf2]">₹</span> {balance.amount}
          </div>
        </div>
      </div>
    </div>
  );
}
