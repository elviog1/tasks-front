import React from "react";
import TaskForm from "../components/TaskForm";

export default function TaskFormPage() {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="">
        <h2 className="text-center text-3xl font-bold text-zinc-300 py-6">New Task</h2>
        <TaskForm />
      </div>
    </div>
  );
}
