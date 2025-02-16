import { contract } from "@/utils/contract";
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { TransactionButton } from "thirdweb/react";
import { TaskCard } from "./task-card";

export const TaskList = () => {
  const [task, setTask] = useState("");

  const { data: tasks, isLoading: isLoadingTasks } = useReadContract({
    contract: contract,
    method: "getTasks",
  });

  return (
    <div>
      {!isLoadingTasks && tasks!.length > 0 ? (
        tasks?.map((task, index) => (
          <TaskCard
            key={index}
            taskId={index}
            task={task.description}
            isCompleted={task.isCompleted}
          />
        ))
      ) : (
        <div>
          <h3>Create Task</h3>
          <p>Please crete the first task to complete</p>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
          />
          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract: contract,
                method: "createTask",
                params: [task],
              })
            }
            onTransactionConfirmed={() => {
              setTask("");
              alert("Task created succesfully");
            }}
          >
            Add Task
          </TransactionButton>
        </div>
      )}
    </div>
  );
};
