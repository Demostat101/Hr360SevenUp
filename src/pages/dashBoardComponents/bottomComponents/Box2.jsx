import { Context } from "../../../DashBoardContext"



const Box2 = () => {

    const {open} = Context()
  return (
    <div className={open ? "2xl:w-[349.55px] 2xl:h-[311.1px] border-solid border-2 border-red-800" :"2xl:w-[384.88px] 2xl:h-[342.55px] border-solid border-2 border-blue-400"}>

      
    </div>
  )
}

export default Box2
