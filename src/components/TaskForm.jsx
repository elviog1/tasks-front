import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createTask, errors: errorsTask } = useTask();

  const onSubmit = handleSubmit((data) => {
    const transformTitle = data.title.trim();
    const transformDescription = data.description.trim();
    createTask({
      ...data,
      title: transformTitle,
      description: transformDescription,
      date: dayjs.utc(data.date).format(),
    });
  });
  return (
    <form
      className="bg-zinc-700 max-w-md w-full p-5 rounded-md"
      onSubmit={onSubmit}
    >
      <input
        className="w-full p-2 my-2 rounded-md "
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
        className="p-2 my-2 w-full rounded-md"
        {...register("date", { required: true })}
      />
      {errors.date && (
        <p className="text-red-500 max-w-md w-full">Date is required.</p>
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
