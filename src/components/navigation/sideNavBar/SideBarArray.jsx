import { GrAnnounce } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPersonAdd } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

export const Paths = [
  {
    to: "/",
    icons: [<LuLayoutDashboard size={40} />, <LuLayoutDashboard size={23} />],

    label: "Dashboard",
  },

  {
    to: "/employee",
    icons: [<IoIosPeople size={40} />, <IoIosPeople size={30} />],
    label: "Employee",
  },

  {
    to: "/add-employee",
    icons: [<BsPersonAdd size={40} />, <BsPersonAdd size={28} />],
    label: "Add Employee",
  },
  {
    to: "/analytics",
    icons: [<TbReportAnalytics size={40} />, <TbReportAnalytics size={28} />],
    label: "Analytics",
  },
  {
    to: "/announcement",
    icons: [<GrAnnounce size={40} />, <GrAnnounce size={28} />],
    label: "Announcement",
  },
];
