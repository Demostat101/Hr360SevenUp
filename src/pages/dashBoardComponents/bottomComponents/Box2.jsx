import { Context } from "../../../DashBoardContext"



const Box2 = () => {

    const {open} = Context()
  return (
    <div className={open ? "2xl:w-[349.55px] 2xl:h-[311.1px] bg-[#FFFFFF] rounded-lg shadow-lg md:w-[300px] md:h-[300]" :"2xl:w-[384.88px] rounded-lg shadow-lg 2xl:h-[342.55px] bg-[#FFFFFF] md:w-[310px] md:h-[305]"}>

      {/* top container */}
      <div className={open ? "2xl:w-[349px] border-[1.17px]  border-[#ECEEF6] 2xl:h-[55px] flex place-items-center justify-between 2xl:gap-[10px] pl-[20px] pr-[20px] md:w-[100%] md:h-[35px] md:gap-[7px]" : "2xl:w-[384.53px] 2xl:h-[60.44px] flex place-items-center justify-between 2xl:gap-[11.01px] pr-[20px] pl-[20px] md:w-[100%] border-[1.18px] border-[#ECEEF6] md:h-[38px] md:gap-[8px] "} >
        <h2 className={open ? " 2xl:w-[136px]  2xl:h-[24px] font-[500] 2xl:text-[16px] 2xl:leading-[24px] md:w-[130px] md:h-[20px] md:text-[10px] md:leading-[18px] " : " 2xl:w-[150px] 2xl:h-[26px] font-[500] 2xl:text-[17.62px] 2xl:leading-[26.43px] md:w-[120px] md:h-[22px] md:text-[12px] md:leading-[20] "} >Announcement</h2>
        <button className={open ? "2xl:w-[110px] 2xl:h-[31px] rounded-lg border-[#E3EFF3] border-solid border-2  md:w-[90px] md:h-[26] " : "2xl:w-[121.12px] 2xl:h-[34.01px] rounded-lg md:w-[100px] border-solid border-[#E3EFF3] border-[2px] md:h-[28] "}>Create</button>
      </div>

      
    </div>
  )
}

export default Box2
