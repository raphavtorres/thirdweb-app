import { contract } from "@/utils/contract";
import { useState } from "react";
import { useReadContract } from "thirdweb/react";

export const TaskList = () => {
  const [task, setTask] = useState("");

  const { data: tasks, isLoading: isLoadingTasks } = useReadContract({
    contract: contract,
    method: "getTasks",
  });

  return (
    <div>
      {!isLoadingTasks && tasks!.length > 0 ? (
        <></>
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
        </div>
      )}
    </div>
  );
};
