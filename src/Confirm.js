import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {deleteCar} from "./api";
import "./styles/confirm.css"
import {useEffect, useState} from "react";

export default function Confirm(){
    const car = useLoaderData()
    const navigate = useNavigate()
    const [token, setToken] = useState(null)

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setToken(user.token)
        }
    } , [])

    const handleClick = async () => {
        if(token){
            const response = await deleteCar(car.id)
            console.log(response)
            navigate('/cars' , {state: {message: `${car.brand} deleted` , title: "Delete car" }})
        }else{
            navigate('/login')
        }


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

