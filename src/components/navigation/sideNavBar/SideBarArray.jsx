import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';



 export const Paths = [
        {
            to: '/settings',
            icons : <AiFillSetting/>,
            label:'SETTINGS'
        },
        {
            to: '/home',
            icons : <FaHome/>,
            label:'HOME'
        },
        {
            to: '/user',
            icons : <FaUser/>,
            label:'USERS'
        },
        {
            to: '/admin',
            icons : <RiAdminFill/>,
            label:'ADMIN'
        }

    ]