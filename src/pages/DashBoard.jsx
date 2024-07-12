import { Context } from "../DashBoardContext";
import BottomComponent from "./dashBoardComponents/BottomComponent";
import MiddleComponent from "./dashBoardComponents/MiddleComponent";
import TopComponent from "./dashBoardComponents/TopComponent";

const DashBoard = () => {
  const { open, name } = Context();
  return (
    <main className="w-full flex flex-col place-items-center h-screen">
      <div
        className={
          open
            ? "2xl:w-[1128px] md:w-[95%] 2xl:h-[978.82px]  md:max-h-[978.82px] 2xl:pt-[15px] "
            : "2xl:w-[1242px] md:w-[95%]  md:max-h-[1077.8px] 2xl:h-[1077.8px] 2xl:pt-[5px] "
        }
      >
        <h1
          className={
            !open
              ? "font-[600] text-[28.63px] md:text-[20px] leading-[42.94px]"
              : "font-[600] text-[26px] md:text-[18px] leading-[39px]"
          }
        >
          Good Morning, {name}{" "}
        </h1>
        {/* container holding all contents */}
        <div
          className={
            open
              ? "w-[100%] 2xl:h-[914.82px] md:h-full mt-[50px] flex flex-col 2xl:gap-[25px] md:gap-[15px]"
              : "w-[100%] 2xl:h-[1007.28px] md:h-full mt-[50px] flex flex-col 2xl:gap-[27.53px] md:gap-[18px]"
          }
        >
          <TopComponent />
          <MiddleComponent />
          <BottomComponent />
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
