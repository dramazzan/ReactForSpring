import {createBrowserRouter, RouterProvider, useLocation} from "react-router-dom"
import CreateCarForm from "./CreateCarForm"
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import {getCar} from "./api";
import EditCarForm from "./EditCarForm";
import Home from "./Home";
import Confirm from "./Confirm";
import BuyCar from "./BuyCar";
import Login from "./Login";
import Register from "./Register";
import {useEffect, useState} from "react";
import MyCars from "./MyCars";
import Profile from "./Profile";

export default function App() {
    const [token , setToken] = useState(null)


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setToken(user.token)
        }
    } ,[])






    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path: '/addcar',
            element: token  ? <CreateCarForm/> : <Login/>
        },
        {
            path: '/cars',
            element: <CarList/>,
        },
        {
            path: '/orders',
            element: <MyCars/>,
        },
        {
            path: '/car/:id',
            element:<CarDetails />,
            loader: async ({ params }) => {
                return getCar(params.id);
            },
            children: [
                {
                    path: 'confirm',
                    element: <Confirm />,
                    loader: async ({ params }) => {
                        return getCar(params.id);
                    }
                },
                {
                    path: 'buy',
                    element: <BuyCar />,
                    loader: async ({ params }) => {
                        return getCar(params.id);
                    }
                }
            ]
        },
        {
            path:'/updatecar/:id',
            element: token  ? <EditCarForm/> : <Login/>,
            loader: async ({params})=>{
                return  getCar(params.id);
            }
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}
