"use client";

import { AppLayout } from "@/components/app-layout";
import { Deposit } from "@/components/deposit";
import { TaskList } from "@/components/tasklist";
import { contract } from "@/utils/contract";
import { useReadContract } from "thirdweb/react";

export default function Accountability() {
  const { data: depositAmount } = useReadContract({
    contract: contract,
    method: "getDeposit",
  });

  const { data: taskCount } = useReadContract({
    contract: contract,
    method: "getTaskCount",
  });

  return (
    <AppLayout>
      <div>
        {depositAmount?.toString() === "0" && taskCount?.toString() === "0" ? (
          <Deposit />
        ) : depositAmount?.toString() !== "0" &&
          taskCount?.toString() === "0" ? (
          <TaskList />
        ) : (
          <></>
        )}
      </div>
    </AppLayout>
  );
}
