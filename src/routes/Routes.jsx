import { createBrowserRouter } from "react-router-dom"
import MainLayouts from "../layout/MainLayouts"
import Home from "../pages/Home"
import Search from "../pages/Search"
import Ondemand from "../pages/Ondemand"
import Discover from "../pages/Discover"
import Signin from "../pages/Signin"
export const Router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayouts/>,
        children :[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/search',
                element: <Search/>
            },
            {
                path: '/ondemand',
                element: <Ondemand/>
            },
            {
                path: '/discover',
                element: <Discover/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            
        ]
    }
])