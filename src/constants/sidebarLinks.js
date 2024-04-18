import { GoAlertFill } from "react-icons/go";
import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
export const sidebarLinks = [
    {
        icon: FaTasks,
        route: "/tasks",
        label: "All Tasks",
        color:"white"
    },
    {
        icon: GoAlertFill,
        route: "/tasks/pending",
        label: "Pending Tasks",
        color:"orange"
    },
    {
        icon: GoCheckCircleFill,
        route: "/tasks/approved",
        label: "Approved Tasks",
        color:"green"
    },
    {
        icon: GoXCircleFill,
        route: "/tasks/rejected",
        label: "Rejected Tasks",
        color:"red"
    },
]