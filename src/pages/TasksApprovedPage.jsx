import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskComponent from "../components/TaskComponent";

export default function TasksApprovedPage() {
  const { getTasks, tasks } = useTask();
  const approvedTasks = tasks?.filter(
    (task) => task.status === "approved"
  );
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold text-zinc-300 py-6">
          Tasks approved ({approvedTasks?.length})
        </h1>
        <TaskComponent allTasks={approvedTasks} />
      </div>
    </div>
  );
}
