import { NavLink } from "react-router-dom";
import { Paths } from "./SideBarArray";
import SevenUpLogo from "../../../assets/SevenUpLogo.jfif";

const SideNavBar = ({ open }) => {
  return (
    <nav
      className={
        open
          ? "w-[250px] md:max-w-[250px] h-[1024px] md:max-h-[100vh] transition ease-in-out trans bg-[#176B87] text-[#FFFFFF] 2xl:pt-[120px] md:pt-[60px] flex flex-col justify-between 2xl:pb-[30px] md:pb-[20px]"
          : "w-[130px] md:max-w-[130px] h-[1024px] md:max-h-[100vh] transit bg-[#176B87] place-items-center text-white 2xl:pt-[120px] md:pt-[60px] flex flex-col justify-between 2xl:pb-[30px] md:pb-[20px]"
      }
    >
      <ul
        className={
          open
            ? "w-[250px] md:max-w-[250px] transition ease-in-out trans bg-[#176B87] pl-8 md:pl-4"
            : "w-[130px] md:max-w-[130px] transit bg-[#176B87] flex flex-col place-items-center "
        }
      >
        {open ? (
          <h1 className=" relative w-[149px] md:max-w-[149px] h-[60px] md:max-h-[60px] text-[40px] md:text-[30px] font-[600] mb-[40px] md:mb-[30px] pl-2">
            HR 360{" "}
            <sup className=" absolute top-1 right-[-1] text-[20px]">
              <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
            </sup>
          </h1>
        ) : (
          ""
        )}

        {Paths.map((path, index) => {
          return (
            <NavLink
              className={
                path.label === "Dashboard" && !open
                  ? "pl-0"
                  : !open
                  ? "pl-0 m-2"
                  : "flex flex-col gap-2 mb-6 md:mb-auto pl-4  md:pl-auto place-items-center"
              }
              to={path.to}
              key={index}
            >
              <li
                className={ 
                    !open
                    ? "w-[80px]  h-[80px] flex flex-col justify-center place-items-center"
                    : "w-[221px] mb-2 flex h-[50px] place-items-center gap-3 text-md font-bold pl-3 pt-[5px] justify-left"
                }
              >
                <span
                  className={
                    path.label === "Dashboard" && !open
                      ? " text-white icon "
                      : open
                      ? "text-[#FFF] icon"
                      : "text-[#FFFFFF] icon"
                  }
                >
                  {!open ? path.icons[0] : path.icons[1]}
                </span>{" "}
                <span
                  id="label"
                  className={
                    !open ? " hidden" : "text-[#FFFFFF] text-[18px] font-[400]"
                  }
                >
                  {path.label}
                </span>
              </li>
            </NavLink>
          );
        })}
      </ul>

      <footer className="w-full flex flex-col place-items-center text-center">
        <img className="w-[34px] h-[50px] " src={SevenUpLogo} alt="" />
        {open ? (
          <div className="text-[#DDE2E3] font-[600] text-[11px] w-[171px] h-[24px] flex justify-center place-items-center">
            {" "}
            <span className=" text-[24px]">&copy;</span>2024. All Rights
            Reserved.
          </div>
        ) : (
          ""
        )}
      </footer>
    </nav>
  );
};

export default SideNavBar;
