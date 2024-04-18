import React from "react";
import Sidebar from "../components/Sidebar";

export default function Layout(props) {
  return (
    <div className="flex max-h-screen bg-zinc-900">
      <Sidebar />
      {props.children}
    </div>
  );
}
