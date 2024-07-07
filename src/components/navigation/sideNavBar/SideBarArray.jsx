import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';



 export const Paths = [
        {
            to: '/settings',
            icons : <AiFillSetting size={30} />,
            label:'SETTINGS'
        },
        {
            to: '/home',
            icons : <FaHome size={30}/>,
            label:'HOME'
        },
        {
            to: '/user',
            icons : <FaUser size={30}/>,
            label:'USERS'
        },
        {
            to: '/admin',
            icons : <RiAdminFill size={30}/>,
            label:'ADMIN'
        }

    ]