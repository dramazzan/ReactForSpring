import {Link, useLoaderData, useNavigate} from "react-router-dom";
import './styles/buycar.css'
import {repair} from "./api";

export default function Repair(){

    const car = useLoaderData()
    const navigate = useNavigate()



    const handleClick = async () => {
        const response = await repair(car.id)
        console.log(response)
        navigate('/cars' , {state:{message: `${car.brand} sent for repairs` , title: "Repair car"}})
    }


    return(
        <>
            <div className="buy_box">
                <h2>DO you really want to send your car in for Repairs?<b>{car.brand}</b></h2>
                <div className="buy_controllers">
                    <button>
                        <Link to={"/car/"+car.id}>Back</Link>
                    </button>
                    <button onClick={handleClick}>
                        Repair
                    </button>
                </div>
            </div>
        </>

    )
}