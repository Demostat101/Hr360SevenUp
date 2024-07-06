import { NavLink } from "react-router-dom"
import { Paths } from "./SideBarArray"
import { useState } from "react"




const SideNavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <ul className={!open ? "w-[300px] border-solid border-2 pt-8" : "w-[80px] border-solid border-2 pt-8"}>
        {
            Paths.map((path,index)=>{
                return <NavLink className="flex flex-col gap-2 pl-12" to={path.to} key={index }>
                <li className="w-full border-solid border-red-500 border-2 mb-2 flex h-[50px] place-items-center gap-6 text-md font-bold">{path.icons}{path.label}</li>
              </NavLink>
            })
        }
      
    </ul>
  )
}

export default SideNavBar
