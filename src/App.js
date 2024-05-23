import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CreateCarForm from "./CreateCarForm"
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import {getCar} from "./api";
import EdirCarForm from "./EditCarForm";
import Home from "./Home";
import Confirm from "./Confirm";
import BuyCar from "./BuyCar";

export default function App() {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/addcar',
            element: <CreateCarForm/>
        },
        {
            path: '/cars',
            element: <CarList/>,
        },
        {
            path: '/car/:id',
            element: <CarDetails />,
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
            element: <EdirCarForm/>,
            loader: async ({params})=>{
                return  getCar(params.id);
            }
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}
