import { Context } from "../../DashBoardContext"
import Graph from "./Graph"


const MiddleComponent = () => {

    const {open} = Context()
  return (
    <main className={open ? "2xl:w-[1127px] 2xl:h-[295.71px] flex 2xl:gap-[30px] md:w-[100%] md:h-[100%] border-solid border-2 border-red-500" : "2xl:w-[1240.9px] 2xl:h-[325.59px] flex 2xl:gap-[33.03px] md:w-[100%] md:h-[100%] border-solid border-2 border-yellow-500"}>
        <Graph/>
      
    </main>
  )
}

export default MiddleComponent
