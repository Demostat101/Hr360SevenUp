import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Error from "./pages/Error";



const Routers = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,

        children: [
            {
                index:true,
                element:<Login/>
            },

            {
                path:'/home',
                element:<Home/>
            },

            {
                path:'/settings',
                element: <Settings/>
            },

            {
                path:'/user',
                element:<User/>
            },

            {
                path:'/admin',
                element:<Admin/>
            },

            {
                path:'/*',
                element:<Error/>
            }
        ]
    }
])

export default Routers