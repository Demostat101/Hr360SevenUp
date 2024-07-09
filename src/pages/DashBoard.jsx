import { Context } from "../DashBoardContext";



const DashBoard = () => {
  const {open, name} = Context();
  return (
    <main className='w-full flex flex-col place-items-center'>
      <div className={open ? "2xl:w-[1128px] md:w-[95%] 2xl:h-[978.82px] md:max-h-[978.82px] 2xl:pt-[20px] " : "2xl:w-[1242px] md:w-[95%] md:max-h-[1077.8px] 2xl:h-[1077.8px] 2xl:pt-[5px] " }>
        <h1 className={!open ? "font-[600] text-[28.63] leading-[42.94px]" : "font-[600] text-[26px] leading-[39px]"}>Good Morning, {name} </h1>
        {/* container holding all contents */}
        <div className={open ? "w-[100%] 2xl:h-[914.82px] md:h-full mt-[50px]" : "w-[100%] 2xl:h-[1007.28px] md:h-full mt-[50px]"}>
          {/* container holding all cards */}
          <div className={open ? "w-full 2xl:h-[228.01px] md:h-full border-solid border-2 border-red-600" : "w-full 2xl:h-[251.06px] md:h-full border-solid border-2 border-yellow-600"}>
             {/* single container inside container holding all cards */}
            <div className={open ? "2xl:w-[358px] md:w-[250px] 2xl:h-[228.01px] md:h-[228.01px] border-solid border-2 border-yellow-600" :"2xl:w-[394.18px] md:w-[200px] 2xl:h-[251.06px] md:h-[228.01px] border-solid border-2 border-red-600" }>

               {/* container inside single container */}

               <div className={open ? "2xl:w-[100%] 2xl:h-[202.44px] md:w-[100%] md:h-[199px] border-solid border-2 border-green-600 mt-[25.57px]" : " 2xl:w-[100%] 2xl:h-[222.9px] md:w-[100%] md:h-[199px] border-solid border-2 border-black  mt-[28.16px]"}>

               </div>




            </div>

          </div>

        </div>

      </div>
      
    </main>
  )
}

export default DashBoard
