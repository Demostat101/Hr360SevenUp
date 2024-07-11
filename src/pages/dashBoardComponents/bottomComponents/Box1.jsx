import { Context } from "../../../DashBoardContext"


const Box1 = () => {

    const {open} = Context()

  return (
    <div className={open ? "2xl:w-[349.55px] 2xl:h-[311.1px] md:w-[320px] md:h-[300px] border-solid border-2 border-yellow-400 " :  "2xl:w-[384.88px] 2xl:h-[342.55px] md:w-[340px] md:h-[300px] border-solid border-2 border-orange-500 "}>

      
    </div>
  )
}

export default Box1
