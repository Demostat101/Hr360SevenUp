import { NavLink } from "react-router-dom"
import { Paths } from "./SideBarArray"





const SideNavBar = ({open}) => {
  
  return (
    <ul className={open ? "w-[300px] pt-[70px] transition ease-in-out trans bg-purple-500 pl-4" : "w-[107px] pt-[70px] transit bg-purple-500 pl-2 "}>
        {
            Paths.map((path,index)=>{
                return <NavLink className="flex flex-col gap-2 pl-4 place-items-center" to={path.to} key={index }>
                <li className="w-full mb-2 flex h-[40px] place-items-center gap-8 text-md font-bold pl-3 pt-[5px] justify-left"><span id="icons" className={path.label === "SETTINGS" ? "text-white" : "text-black"}>{path.icons}</span> <span id="label" className={!open ? "pl-[10px] overflow-hidden" : "text-white"}>{path.label}</span></li>
              </NavLink>
            })
        }
      
    </ul>
  )
}

export default SideNavBar
