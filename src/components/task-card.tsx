import { contract } from "@/utils/contract";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

type TaskProps = {
  taskId: number;
  task: string;
  isCompleted: boolean;
};

export const TaskCard = ({ taskId, task, isCompleted }: TaskProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "500px",
        border: "1px solid black",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <p style={{ fontSize: "12px" }}>{task}</p>
      {isCompleted ? (
        <p
          style={{
            fontSize: "12px",
            padding: "5px 10px",
            backgroundColor: "green",
            borderRadius: "8px",
          }}
        >
          Done!
        </p>
      ) : (
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract: contract,
              method: "completeTask",
              params: [BigInt(taskId)],
            })
          }
          onTransactionConfirmed={() => alert("Task completed!")}
          style={{ fontSize: "12px", padding: "5px 10px" }}
        >
          Complete Task
        </TransactionButton>
      )}
    </div>
  );
};
