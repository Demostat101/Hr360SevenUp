import { Context } from "../../../DashBoardContext"


const Box3 = () => {

    const {open} = Context();

  return (
    <div className={open ? " 2xl:w-[386.26px] bg-white 2xl:h-[100%] md:w-[350px] md:h-[300px] border-solid border-2 border-purple-500 " : " 2xl:w-[425.3px] 2xl:h-[100%] bg-white md:w-[370px] md:h-[300px] border-solid border-2 border-slate-500 "} >

      {/* top bar */}

      <div className={open ? " 2xl:w-[357px] 2xl:h-[31px] p-[15px] md:w-[300px]  md:h-[25px] flex justify-between place-items-center " : " 2xl:w-[393.48px] flex justify-between p-[15px] 2xl:h-[34.13px] md:w-[350px]  md:h-[30px] "}>
        {/* top bar left */}
        <div className={open ? "2xl:w-[95px] 2xl:h-[24px] 2xl:font-[500] 2xl:text-[16px] 2xl:leading-[24px] md:w-[85px] md:h-[20px] md:font-[500] md:text-[12px] md:leading-[18px] " : "2xl:[105px] 2xl:h-[26px] 2xl:font-[500] 2xl:text-[17.63px] 2xl:leading-[26.43px] md:w-[95px] md:h-[23px] md:font-[500] md:text-[14px] md:leading-[23px] "}>
        Celebration
        </div>

        {/* top right bar */}

        <div className={open ? "2xl:w-[128px] 2xl:h-[31px] md:w-[120px] md:h-[25px] " : "2xl:w-[140.94px] 2xl:h-[34.13px] md:w-[125px] md:h-[30px] "}>
          <select className=" outline-none" name="" id="">
            <option value="">This week</option>
            <option value="">Last week</option>
          </select>
        </div>



      </div>

      <div className={open ? "2xl:w-[100%]  2xl:h-[21px] gap-[30px] flex place-items-center justify-center  md:w-[100%] md:h-[18px]  " :  "2xl:w-[100%] pt-[20px]  2xl:h-[23px] justify-center flex place-items-center  md:w-[100%] md:h-[20px] "}>
       <div className="w-full flex justify-between pl-[50px]">
       <div className={open ? "2xl:w-[67px] 2xl:h-[21px] birth 2xl:font-[400] 2xl:text-[14px] 2xl:leading-[21px] md:w-[60px] md:h-[18px] md:font-[400] md:text-[10px] md:leading-[18px] " : "2xl:w-[74px] birth 2xl:h-[23px] 2xl:font-[400] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:w-[70px] md:h-[20px] md:font-[400] md:text-[12px] md:leading-[20px] "}>Birthday</div>

<div className={ open ? "2xl:w-[136px] 2xl:h-[21px] 2xl:font-[400] 2xl:text-[14px] 2xl:leading-[21px] md:w-[130px] md:h-[18px] md:font-[400] md:text-[10px] md:leading-[18px] " : "2xl:w-[149px] 2xl:h-[23px] 2xl:font-[400] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:w-[140px] md:h-[20px] md:font-[400] md:text-[12px] md:leading-[20px] "}>Anniversary</div>
       </div>
      </div>

      
    </div>
  )
}

export default Box3
