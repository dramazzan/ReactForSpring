import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {buyCar} from "./api";
import './styles/buycar.css'

export default function BuyCar(){

    const car = useLoaderData()
    const navigate = useNavigate()

    const handleClick = async () => {
        const response = await buyCar(car.id)
        console.log(response)
        navigate('/cars')
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