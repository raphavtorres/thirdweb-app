"use client";

import { contract } from "@/utils/contract";
import { useState } from "react";
import {
  prepareContractCall,
  sendAndConfirmTransaction,
  toWei,
} from "thirdweb";
import { TransactionButton, useActiveAccount } from "thirdweb/react";
import { Button } from "./ui/button";

export const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState(0);

  // const account = useActiveAccount();

  const transaction = prepareContractCall({
    contract: contract,
    method: "depositFunds",
    value: toWei(depositAmount.toString()),
  });

  // async function handleDepositFunds() {
  //   try {
  //     console.log("transactionResult");
  //     console.log("transaction value: ", transaction.value);

  //     const transactionResult = await sendAndConfirmTransaction({
  //       transaction,
  //       account: account!,
  //     });
  //     console.log("transactionResult: ", transactionResult);

  //     if (transactionResult) {
  //       alert(transactionResult);
  //     }
  //   } catch (e) {
  //     console.log("error: ", e);
  //   }
  // }

  return (
    <div>
      <h3>Deposit</h3>
      <p>Please deposit the funds to hold</p>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(Number(e.target.value))}
        placeholder="0.0"
        step={0.01}
      />
      {/* <Button onClick={() => handleDepositFunds()}>Deposit Funds</Button> */}
      <TransactionButton
        transaction={() => transaction}
        disabled={false}
        // unstyled
        // className="bg-white text-black rounded-md p-4 flex items-center justify-center"
        onTransactionConfirmed={() => {
          alert("success");
          console.log("transaction value: ", transaction?.value);
        }}
      >
        Deposit
      </TransactionButton>
    </div>
  );
};
