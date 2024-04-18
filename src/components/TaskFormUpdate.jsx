import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
export default function TaskFormUpdate({ task }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { updateTask, errors: errorsTask } = useTask();
  const onSubmit = handleSubmit((data) => {
    updateTask(task._id, data);
  });

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("status", task.status);
      const fechaFormateada = dayjs.utc(task.date).format("YYYY-MM-DD");
      setValue("date", fechaFormateada);
    }
  }, [task]);
  return (
    <form className="bg-zinc-700 max-w-md p-5 rounded-md" onSubmit={onSubmit}>
      <input
        className="w-full p-2 my-2 rounded-md"
        type="text"
        placeholder="Title"
        {...register("title", { required: true })}
        maxLength={20}
      />
      {errors.title && (
        <p className="text-red-500 max-w-md w-full">Title is required.</p>
      )}
      <textarea
        className="w-full p-2 my-2 rounded-md resize-none"
        placeholder="Description"
        rows={3}
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && (
        <p className="text-red-500 max-w-md w-full">Description is required.</p>
      )}
      <input
        type="date"
        {...register("date", { required: true })}
        className="p-2 my-2 w-full rounded-md"
      />
      {errors.date && (
        <p className="text-red-500 max-w-md w-full">Date is required.</p>
      )}
      <select
        className="p-2 my-2 w-full rounded-md"
        {...register("status", { required: true })}
      >
        <option value="pending">Pending</option>
        <option value="approved">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
      {errors.status && (
        <p className="text-red-500 max-w-md w-full">Status is required.</p>
      )}
      <button className="bg-indigo-600 hover:bg-indigo-500 duration-200 text-xl font-bold text-zinc-300 w-full py-2 rounded-md">
        Save
      </button>
      {errorsTask.map((error, index) => (
        <div className="text-red-500" key={index}>
          {error}
        </div>
      ))}
    </form>
  );
}
