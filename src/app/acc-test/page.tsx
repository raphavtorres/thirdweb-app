"use client";

import { AddTask } from "@/components/add-task";
import { AppLayout } from "@/components/app-layout";
import { Deposit } from "@/components/deposit";
import { TaskList } from "@/components/tasklist";
import { contract } from "@/utils/contract";
import { toEther } from "thirdweb";
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

  const { data: lockedFundsAmount, isLoading: isLoadingLockedFundsAmount } =
    useReadContract({
      contract: contract,
      method: "getDeposit",
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
          <>
            {!isLoadingLockedFundsAmount && (
              <div style={{ marginTop: "20px" }}>
                <h3>Locked Funds: {toEther(lockedFundsAmount!)}</h3>
                <p style={{ fontSize: "12px" }}>
                  Funds will be returned once eall tasks are completed.
                </p>
                <AddTask />
                <TaskList />
              </div>
            )}
          </>
        )}
      </div>
    </AppLayout>
  );
}
