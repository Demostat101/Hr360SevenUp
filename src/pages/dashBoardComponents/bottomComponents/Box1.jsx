import { Context } from "../../../DashBoardContext";

const Box1 = () => {
  const { open } = Context();

  return (
    <div
      className={
        open
          ? "2xl:w-[349.55px] bg-[#FFFFFF] rounded-lg 2xl:h-[311.1px] md:w-[320px] md:h-[300px] shadow-lg "
          : "2xl:w-[384.88px] bg-[#FFFFFF] 2xl:h-[342.55px]  rounded-lg md:w-[340px] md:h-[300px] shadow-lg"
      }
    >
      {/* top box */}
      <div
        className={
          open
            ? "2xl:w-[349.55px] 2xl:h-[57.68px] 2xl:leading-[24px] 2xl:font-[500] 2xl:text-[16] md:text-[12px] md:leading-4 md:font-[500] border-[1.17px] border-[#ECEEF6] md:w-[100%] md:h-[35px] flex flex-col justify-center pl-[15px] "
            : "2xl:w-[384.88px] 2xl:h-[63.51px] border-[1.28px] border-[#ECEEF6] md:w-[100%] md:h-[40px] flex flex-col justify-center 2xl:leading-[26.43px] 2xl:font-[500] 2xl:text-[17.62] md:text-[15px] md:leading-5 md:font-[500] pl-[15px]"
        }
      >
        Upcoming Events
      </div>

      {/* Boxes */}
      <div>
        {/* 1st box */}
        <div
          className={
            open
              ? " 2xl:w-[309.36px] 2xl:h-[56.51px] flex md:w-[80%] md:h-[50px] border-[1.17px] border-[#ECEEF6]"
              : " 2xl:w-[340.62px] 2xl:h-[62.22px] flex md:w-[80%] md:h-[55px] border-[1.17px] border-[#ECEEF6]"
          }
        >
          {/* small box */}
          <div
            className={
              open
                ? " 2xl:w-[28px] 2xl:h-[42px] md:w-[20px] md:h-[100%] "
                : " 2xl:w-[31px] 2xl:h-[46px] md:w-[23px] md:h-[100%] "
            }
          >
            <span>18</span> <span>mar</span>{" "}
          </div>

          {/* 2nd Box */}
          <div
            className={
              open
                ? " 2xl:w-[113px] 2xl:h-[39px] md:w-[100px] md:h-[100%]"
                : " 2xl:w-[124px] 2xl:h-[43px] md:w-[110px] md:h-[100%]"
            }
          >
            <span
              className={
                open
                  ? " 2xl:text-[14px] 2xl:leading-[21px] 2xl:font-[500] md:text-[10px] md:leading-[15px] md:font-[500] "
                  : " 2xl:text-[15.4px] 2xl:leading-[23.12px] 2xl:font-[500] md:text-[13px] md:leading-[17px] md:font-[500] "
              }
            >
              Sabi Cafe Event
            </span>{" "}
            <span
              className={
                open
                  ? " 2xl:text-[12px] 2xl:leading-[18px] 2xl:font-[400] md:text-[8px] md:leading-[12px] md:font-[400] "
                  : " 2xl:text-[13.21px] 2xl:leading-[19.82px] 2xl:font-[400] md:text-[10px] md:leading-[15px] md:font-[400] "
              }
            >
              2:00pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box1;
