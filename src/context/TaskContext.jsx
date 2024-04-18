import { createContext, useContext, useEffect, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  updateTasksRequest,
  getTaskRequest,
} from "../api/tasks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [errors,setErrors] = useState([])
  const navigate = useNavigate()
  const toastMessage = (message) =>
  toast.success(`Task ${message} successfully !`, { autoClose: 5000 });
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error)
      setErrors(error.response.data)
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTasksRequest(task);
      navigate("/tasks")
      toastMessage("created")
    } catch (error) {
      console.log(error)
      setErrors(error.response.data);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      toastMessage("deleted")
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async(id,task) =>{
    try {
      const res = await updateTasksRequest(id,task)
      navigate("/tasks")
      toastMessage("updated")
    } catch (error) {
      console.log(error)
      setErrors(error.response.data);
    }
  }

  useEffect(()=>{
    if(errors.length>0){
      const timer = setTimeout(() => {
        setErrors([])
      }, 3000);
      return ()=> clearTimeout(timer)
    }
  },[errors])
  return (
    <TaskContext.Provider
      value={{ tasks, createTask, getTasks, deleteTask, getTask,updateTask,errors }}
    >
      {children}
    </TaskContext.Provider>
  );
}
