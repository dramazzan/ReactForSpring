import {Link, useLoaderData, useNavigate} from "react-router-dom";
import './styles/buycar.css'
import {testDrive} from "./api";

export default function TestDrive(){

    const car = useLoaderData()
    const navigate = useNavigate()



    const handleClick = async () => {
        const response = await testDrive(car.id)
        console.log(response)
        navigate('/cars' , {state:{message: `${car.brand} purchased` , title: "Buy car"}})
    }


    return(
        <>
            <div className="buy_box">
                <h2>DO you really want to test the car<b>{car.brand}</b></h2>
                <div className="buy_controllers">
                    <button>
                        <Link to={"/car/"+car.id}>Back</Link>
                    </button>
                    <button onClick={handleClick}>
                        Test
                    </button>
                </div>
            </div>
        </>

    )
}