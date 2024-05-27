import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {buyCar} from "./api";
import './styles/buycar.css'
import {useEffect, useState} from "react";

export default function BuyCar(){

    const car = useLoaderData()
    const navigate = useNavigate()
    const [user  , setUser] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setUser(user)
        }
    }, []);

    const handleClick = async () => {
        const response = await buyCar(car.id)
        console.log(response)
        navigate('/cars' , {state:{message: `${car.brand} purchased` , title: "Buy car"}})
    }


    return(
        <>
            <div className="buy_box">
                <h2>You definitely want to buy <b>{car.brand}</b></h2>
                <div className="buy_controllers">
                    <button>
                        <Link to={"/car/"+car.id}>Back</Link>

                    </button>
                    <button onClick={handleClick}>
                        Buy
                    </button>
                </div>
            </div>
        </>

    )
}