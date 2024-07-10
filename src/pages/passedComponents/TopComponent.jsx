
import { IoIosPeople } from "react-icons/io";
import { Context } from "../../DashBoardContext";


const TopComponent = () => {
    const {open} = Context();
  return (
    <>
        {/* container holding all cards */}
        <div className={open ? "w-full 2xl:h-[228.01px] md:h-full border-solid border-2 border-red-600" : "w-full 2xl:h-[251.06px] md:h-full border-solid border-2 border-yellow-600"}>
             {/* single container inside container holding all cards */}
            <div className={open ? "2xl:w-[358px] md:w-[250px] 2xl:h-[228.01px] md:h-[228.01px] border-solid border-2 border-yellow-600" :"2xl:w-[394.18px] md:w-[200px] 2xl:h-[251.06px] md:h-[228.01px] border-solid border-2 border-red-600" }>

               {/* container inside single container */}

               <div className={open ? "2xl:w-[100%] relative 2xl:h-[202.44px] md:w-[100%] md:h-[199px] bg-[#FFFFFF] border-solid border-2 border-green-600 pl-[16px] mt-[25.57px] flex flex-col justify-center" : " 2xl:w-[100%] bg-[#FFFFFF] relative 2xl:h-[222.9px] md:w-[100%] flex flex-col justify-center md:h-[199px] border-solid border-2 border-black  mt-[28.16px] pl-[16px]"}>
                {/* top small box */}
                <div className={open ? "2xl:w-[78.85px] bg-white absolute top-[-25px] left-5 2xl:h-[64.99px] md:w-[70px] md:h-[60px] box" :"2xl:w-[86.81px] bg-white absolute top-[-25px] left-5 2xl:h-[71.56px] md:w-[75px] md:h-[65px] box"}>
                  {/* inner box holding the image */}
                  <div className={open ? "2xl:w-[69.26px] flex justify-center place-items-center  rounded-lg 2xl:h-[50.08px] md:w-[60px] md:h-[45px] bg-[#176B87]" : "2xl:w-[76.26px] flex justify-center place-items-center  rounded-lg 2xl:h-[54.14px] md:w-[70px] md:h-[50px] bg-[#176B87]"}>
                    <IoIosPeople className={open ? "2xl:w-[23.3px] 2xl:h-[21.31px] md:w-[20px] bg-[#176B87] text-[#FFFFFF] md:h-[18px]" : "2xl:w-[35.19px] bg-[#176B87] text-[#FFFFFF] 2xl:h-[35.19px] md:w-[30px] md:h-[30px]"}/>
                  
                  </div>

                </div>

                    {/* text box under the image container */}
                  <div className={open ? "2xl:w-[193.92px] 2xl:h-[116.14px] flex flex-col justify-evenly md:w-[190px] md:h-[110px]" : "2xl:w-[213.51px] 2xl:h-[127.87px] flex flex-col justify-evenly md:w-[210px] md:h-[121px]"}>
                    {/* box holding employee and figure */}

                    <div className={open ? "2xl:w-[150px] flex flex-col gap-[5px] 2xl:h-[57px] md:w-[145px] md:h-[50px]" : "2xl:w-[165px] 2xl:h-[63px] md:w-[160px] md:h-[60px] flex flex-col gap-[5px]"}>
                      <span className={open ? "2xl:text-[20px] 2xl:leading[30px] 2xl:font-[600] md:text-[15px] md:leading-[25px] md:font-[500]" : "2xl:text-[22.02px] 2xl:leading[33.03px] 2xl:font-[600] md:text-[18px] md:leading-[30px] md:font-[500]"}>69,560</span>
                      <span className={open ? "2xl:text-[18px] 2xl:leading[27px] 2xl:font-[400] md:text-[10px] md:leading-[20px] md:font-[400]" : "2xl:text-[19.82px] 2xl:leading[29.73px] 2xl:font-[400] md:text-[15px] md:leading-[25px] md:font-[400]"}>Total Employees</span>
                    </div>

                    {/* paragraph text under employee and figure */}

                    <p className={open ? "2xl:text-[12px] 2xl:leading[18px] 2xl:font-[400] text-nowrap md:text-[8px] md:leading-[10px] md:font-[400] text-[#969696]" : "2xl:text-[13.21px] 2xl:leading[19.82px] 2xl:font-[400] 2xl:text-nowrap md:text-[8px] md:leading-[12px] md:font-[400] text-[#969696]"}>Last Updated Fri, 8 Mar 2024 at 2:30pm</p>

                  </div>

               </div>




            </div>

          </div>

      
    </>
  )
}

export default TopComponent
