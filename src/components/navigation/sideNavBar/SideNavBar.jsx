import { NavLink } from "react-router-dom"
import { Paths } from "./SideBarArray"



const SideNavBar = () => {
  return (
    <ul className="w-[300px] border-solid border-2 pt-8">
        {
            Paths.map((path,index)=>{
                return <NavLink className="flex flex-col gap-2 pl-4" to={path.to} key={index }>
                <li className="w-full border-solid border-red-500 border-2 mb-2 flex">{path.icons}{path.label}</li>
              </NavLink>
            })
        }
      
    </ul>
  )
}

export default SideNavBar
