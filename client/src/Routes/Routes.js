import {createBrowserRouter} from 'react-router-dom'
import MainRoot from '../Components/MainRoot'
import Home from '../Pages/Home/Home'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Detail from '../Pages/Detail/Detail'

export const Routes = createBrowserRouter([
    {
        path:'',
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            }
        ]
    }
])

