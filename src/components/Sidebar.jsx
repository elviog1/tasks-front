import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebarLinks";
import { CiSquarePlus } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import bull from "../assets/bull.png";
export default function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  return (
    <div className="bg-zinc-800 text-zinc-300 font-bold md:max-w-xs w-32 md:w-full flex flex-col items-center h-screen justify-center gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <img src={bull} alt="Bull logo" className="w-10" />
          <h1 className=" text-2xl md:text-4xl duration-100 hidden md:block">Bull Tasks</h1>
        </div>
        <p className=" text-sm hidden md:block">
          Welcome <span className="text-indigo-500">{user?.username}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2  ">
        {sidebarLinks.map((item) => (
          <Link
            className={`${
              location.pathname === item.route ? "bg-zinc-700" : ""
            } flex items-center text-xl w-full p-2 rounded-md gap-4 hover:bg-zinc-700 duration-200`}
            key={item.label}
            to={item.route}
          >
            {
              <item.icon
                style={{ fontSize: "40px", color: item.color, opacity: 0.6 }}
              />
            }
            <span className="hidden md:block">{item.label}</span>
          </Link>
        ))}
      <Link
        to="/tasks/new"
        className={`${
          location.pathname === "/tasks/new" && "bg-zinc-700"
        } flex text-xl gap-4 items-center justify-start  p-2 rounded-md hover:bg-zinc-700 duration-200`}
      >
        <CiSquarePlus style={{ fontSize: "40px", color: "skyblue" }} />
        <span className="hidden md:block">New Task</span>
      </Link>
      <Link
        to="/"
        onClick={() => logout()}
        className="flex text-xl gap-4 items-center justify-start  p-2 rounded-md hover:bg-zinc-700 duration-200"
      >
        <TbLogout2 style={{ fontSize: "40px", color: "white" }} />
        <span className="hidden md:block">Log out</span>
      </Link>
      </div>
    </div>
  );
}
