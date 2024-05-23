import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {deleteCar} from "./api";
import "./styles/confirm.css"

export default function Confirm(){
    const car = useLoaderData()
    const navigate = useNavigate()
    const handleClick = async () => {
        const response = await deleteCar(car.id)
        console.log(response)
        navigate('/cars')
    }
    return(
        <>
            <div className="confirm_box">
                <h2>You definitely want to delete <b>{car.brand}</b></h2>
                <div className="delete_controller">
                    <button>
                        <Link to={"/car/"+car.id}>Back</Link>
                    </button>
                    <button onClick={handleClick}>Delete</button>

                </div>
            </div>
        </>
    )
}

