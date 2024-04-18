import { useEffect, useState } from "react";
import { useTask } from "../context/TaskContext";
import { useParams } from "react-router-dom";
import TaskFormUpdate from "../components/TaskFormUpdate";

export default function TaskUpdatePage() {
  const { getTask } = useTask()
  const params = useParams()
  const [task,setTask] = useState({})

  useEffect(()=>{
    async function loadTask(){
      if(params.id){
       const task = await getTask(params.id)
       setTask(task)
      }
    }
    loadTask()
  },[])
  return (
    <div className="flex justify-center w-full items-center">
      <div className="">
        <h2 className="text-center text-3xl font-bold text-zinc-300 py-6">Task update</h2>
        <TaskFormUpdate task={task} />
      </div>
    </div>
  );
}
