import { NavLink } from "react-router-dom";
import { Paths } from "./SideBarArray";
import SevenUpLogo from "../../../assets/SevenUpLogo.jfif";

const SideNavBar = ({ open }) => {
  return (
    <nav
      className={
        open
          ? "w-[250px] h-[1024px] transition ease-in-out trans bg-[#176B87] text-[#FFFFFF] pt-[100px] flex flex-col justify-between pb-[30px]"
          : "w-[130px] h-[1024px] transit bg-[#176B87] place-items-center text-white pt-[100px] flex flex-col justify-between pb-[30px]"
      }
    >
      <ul
        className={
          open
            ? "w-[250px] transition ease-in-out trans bg-[#176B87] pl-8"
            : "w-[130px] transit bg-[#176B87] flex flex-col place-items-center "
        }
      >
        {open ? (
          <h1 className=" relative w-[149px] h-[60px] text-[40px] font-[600] mb-[40px] pl-2">
            HR 360{" "}
            <sup className=" absolute top-2 right-[-1] text-[20px]">
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
                  : "flex flex-col gap-2 mb-6 pl-4 place-items-center"
              }
              to={path.to}
              key={index}
            >
              <li
                className={
                  path.label === "Dashboard" && !open
                    ? "w-[80px] h-[80px] bg-[#F6F7FA] flex flex-col justify-center place-items-center rounded-md"
                    : !open
                    ? "w-[80px] h-[80px] flex flex-col justify-center place-items-center"
                    : "w-[221px] mb-2 flex h-[50px] place-items-center gap-3 text-md font-bold pl-3 pt-[5px] justify-left"
                }
              >
                <span
                  className={
                    path.label === "Dashboard" && !open
                      ? "text-[#176B87]"
                      : open
                      ? "text-[#FFF] icon"
                      : "text-[#FFFFFF] icons"
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
