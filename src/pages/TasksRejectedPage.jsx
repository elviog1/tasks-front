import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskComponent from "../components/TaskComponent";

export default function TasksRejectedPage() {
  const { getTasks, tasks } = useTask();
  const rejectedTasks = tasks?.filter(
    (task) => task.status === "rejected"
  );
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      <div className="py-10">
        <h1 className="text-center text-3xl font-bold text-zinc-300 py-6">
          Tasks rejected ({rejectedTasks?.length})
        </h1>
        <TaskComponent allTasks={rejectedTasks} />
      </div>
    </div>
  );
}
