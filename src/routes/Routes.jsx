import { createBrowserRouter } from "react-router-dom"
import MainLayouts from "../layout/MainLayouts"
import Home from "../pages/Home"
export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children :[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])