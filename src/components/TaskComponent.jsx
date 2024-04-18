import { useState } from "react";
import StatusComponent from "./StatusComponent";
import { FcCalendar } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Modal from "./Modal";
dayjs.extend(utc);
export default function TaskComponent({ allTasks }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {allTasks?.map((task) => (
        <div
          key={task._id}
          className="bg-zinc-800 max-w-xs w-full p-5 rounded-md"
        >
          <div className="flex justify-between items-center">
            <p className="font-bold text-zinc-400 my-2">
              {new Date(task.createdAt).toLocaleDateString()}
            </p>
            <div className="flex gap-4">
              <FaPencilAlt
                onClick={() => navigate(`/tasks/${task._id}`)}
                className="hover:text-gray-300 cursor-pointer text-gray-500 duration-200 text-2xl"
              />
              <Modal id={task._id} />
            </div>
          </div>
          <h2 className="text-center font-bold bg-zinc-700 rounded-md p-2 text-zinc-300 truncate">
            {task.title}
          </h2>
          <p className="text-zinc-400 p-2 rounded-md my-2 h-36 overflow-y-auto border-dashed border-2">
            {task.description}
          </p>
          <div className="flex justify-between items-center  p-3 rounded-md">
            <StatusComponent status={task.status} />
            <p className="flex gap-1 items-center text-zinc-400 hover:text-zinc-300 duration-200 font-bold">
              <FcCalendar style={{ fontSize: "35px" }} />
              {new Date(task.date).toLocaleDateString(undefined, {
                timeZone: "UTC",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
