import { Context } from "../../../DashBoardContext"


const Box3 = () => {

    const {open} = Context();

  return (
    <div className={open ? " 2xl:w-[386.26px] 2xl:h-[100%] md:w-[350px] md:h-[300px] border-solid border-2 border-purple-500 " : " 2xl:w-[425.3px] 2xl:h-[100%] md:w-[370px] md:h-[300px] border-solid border-2 border-slate-500 "} >
      
    </div>
  )
}

export default Box3
