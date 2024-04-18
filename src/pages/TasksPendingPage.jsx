import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskComponent from "../components/TaskComponent";

export default function TasksPendingPage() {
  const { getTasks, tasks } = useTask();
  const pendingTasks = tasks?.filter((task) => task.status === "pending");
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold text-zinc-300 py-6">
          Tasks pending ({pendingTasks?.length})
        </h1>
        <TaskComponent allTasks={pendingTasks} />
      </div>
    </div>
  );
}
