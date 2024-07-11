import { useState } from "react"
import { Context } from "../../DashBoardContext"
import Graph1 from "./Graph1"
import Graph2 from "./Graph2"
import DashCalender from "./DashCalender"



const MiddleComponent = () => {

  const [graph, setGraph] = useState(false);


    const {open} = Context()
  return (
    <main className={open ? "2xl:w-[1127px] 2xl:flex-nowrap md:flex-wrap 2xl:h-[295.71px] flex 2xl:gap-[30px] md:w-[100%] md:h-[250px] md:gap-[30px] md:justify-center" : "2xl:w-[1240.9px] 2xl:h-[325.59px] flex 2xl:gap-[33.03px] md:w-[100%] 2xl:flex-nowrap md:flex-wrap md:h-[280px] md:gap-[40px] md:justify-center"}>

      {/* Graph container / left side container */}
        <div className={open ? "2xl:w-[739px] flex flex-col shadow-lg rounded-lg bg-[#FFFFFF] gap-[15px] 2xl:h-[295px] md:w-[500px] md:h-[250px]" : "2xl:w-[813.69px] shadow-lg rounded-lg bg-[#FFFFFF] gap-[17px] flex flex-col 2xl:h-[324.81px] md:w-[550px] md:h-[275px]"} >
          {/* Top component inside graph with drop downs */}
          <div className={open ? "2xl:w-[698px] 2xl:h-[42px] 2xl:gap-[154px] flex place-items-center md:w-[100%] md:h-[30px] md:justify-between" : "2xl:w-[768.67px] 2xl:h-[45.82px] 2xl:gap-[169.56px] flex place-items-center md:w-[95%] md:h-[30px] md:justify-between"}>
            {/* graph top content */}
            <div className={open ? "2xl:w-[256px] 2xl:h-[24px] 2xl:text-[16px] 2xl:leading-[24px] font-[500] md:w-[20%] md:h-[100%] md:text-[12px] md:leading-[18px] md:text-nowrap" : "2xl:w-[282px] 2xl:h-[26px] 2xl:text-[17.62px] 2xl:leading-[26.43px] font-[500] md:w-[30%] md:h-[100%] md:text-nowrap md:text-[14px] md:leading-[20px]"} >Employee Availability Overview</div>

            <div className={open ? "2xl:w-[288px] 2xl:h-[42px] flex 2xl:gap-[10px] md:w-[200px] md:h-[100%] md:gap-[5px]" : "2xl:w-[317.11px] 2xl:h-[45.82px] flex 2xl:gap-[11.01px] md:w-[250px] md:h-[100%] md:gap-[5px]"} >
              {/* left drop down */}
              <div className={open ? "2xl:w-[108px] text-[#969696]  justify-center place-items-center border-solid border-[1px] border-[#E3EFF3] 2xl:h-[42px] flex flex-col 2xl:gap-[10px] md:w-[80px] md:h-[100%] " : "2xl:w-[118.91px] 2xl:h-[45.82px] justify-center place-items-center border-solid border-[1px] border-[#E3EFF3]  text-[#969696] flex flex-col 2xl:gap-[11.01px] md:w-[80px] md:h-[100%] "} >
                {/* left drop down select */}

                <select className=" outline-none " name="" id="">
                  <option value="Sale">Sale</option>
                  <option value="Nosale">No Sales</option>
                </select>
              </div>

              {/* right drop down */}

              <div className={open ? "2xl:w-[170px] flex flex-col justify-center place-items-center text-[#969696] 2xl:h-[42px] 2xl:gap-[10px] border-solid border-[1px] border-[#E3EFF3] md:w-[110px] md:h-[100%]" : "2xl:w-[187.18px] 2xl:h-[45.82px] 2xl:gap-[11.01px] border-solid flex flex-col justify-center place-items-center border-[1.1px] border-[#E3EFF3] text-[#969696] md:w-[110px] md:h-[100%]"} >
                {/* right drop down select */}

                <select  onChange={()=> setGraph((prev)=>!prev)} className=" outline-none" name="" id="">
                  <option value="Sale">jan-jun 2024</option>
                  <option value="Nosale">jul-dec 2024</option>
                </select>
              </div>


            </div>

          </div>

          {/* graph page */}

          <div className={open ? "w-full flex flex-col place-items-center" : "w-full flex flex-col place-items-center"}>
          <div className={open ? "2xl:w-[553.47px] border-l-[1px]  2xl:h-[230px] md:w-[450px] md:h-[200px]" : "2xl:w-[609.41px] border-l 2xl:h-[250px] md:w-[450px] md:h-[230px]"} >
            {graph ? <Graph2/> : <Graph1/>}
          </div>
          </div>

        </div>

        {/* Calender container */}

        <div className={open ? "2xl:w-[358px] bg-[#FFFFFF] shadow-lg 2xl:h-[295.71px] md:w-[300px] md:h-[100%]" : "2xl:w-[394.18px] bg-[#FFFFFF] 2xl:h-[325.59px] md:w-[330px] shadow-lg md:h-[100%]"}>
          <DashCalender/>
        </div>
      
    </main>
  )
}

export default MiddleComponent
