import {useLoaderData, useNavigate} from "react-router-dom";
import {deleteCar} from "./api";

export default function  CarInfo(){
    const navigate = useNavigate()
    const car = useLoaderData()

    const handleClick = async () => {
        const response = await deleteCar(car.id)
        console.log(response)
        navigate('/cars')
    }


    return(
        <div>{
            car.brand
        }
        <button onClick={handleClick}>delete</button>
        </div>
    )
}