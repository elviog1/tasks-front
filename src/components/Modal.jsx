import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useTask } from "../context/TaskContext";
const Modal = ({ id }) => {
  const { deleteTask } = useTask();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <RiDeleteBin5Line
        onClick={() => setShowModal(true)}
        className="hover:text-gray-300 text-gray-500 cursor-pointer duration-200 text-2xl"
      />
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">You're sure?</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p>The task is completely removed</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-4">
                  <button
                    className="text-zinc-300 bg-red-500 hover:bg-red-600 duration-200 font-bold py-3 px-6 rounded-md"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-zinc-300 bg-green-500 hover:bg-green-600 duration-200 font-bold py-3 px-6 rounded-md"
                    type="button"
                    onClick={() => deleteTask(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
