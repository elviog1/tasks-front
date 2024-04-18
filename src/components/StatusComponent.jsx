import { GoAlertFill } from "react-icons/go";
import { GoCheckCircleFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
export default function StatusComponent({status}) {

        // if(status === "pending"){
        //     return <GoAlertFill style={{color:"orangered",fontSize:"35px"}} />
        // }else if(status === "approved"){
        //     return <GoCheckCircleFill style={{color:"green",fontSize:"35px"}} />
        // }else if(status === "rejected"){
        //     return <GoXCircleFill style={{color:"red",fontSize:"35px"}} />
        // }
        if(status === "pending"){
            return <p className="bg-amber-500 hover:bg-amber-400 duration-200 text-white py-2 px-6 rounded-md font-bold">Pending</p>
        }else if(status === "approved"){
            return <p className="bg-green-500 hover:bg-green-400 duration-200 text-white py-2 px-6 rounded-md font-bold">Approved</p>
        }else if(status === "rejected"){
            return <p className="bg-red-500 hover:bg-red-400 duration-200 text-white py-2 px-6 rounded-md font-bold">Rejected</p>
        }

  return (
    <div></div>
  )
}
