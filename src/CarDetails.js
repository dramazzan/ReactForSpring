import {Link, Outlet, useLoaderData} from "react-router-dom";
import NavBar from "./NavBar";
import './styles/cardetails.css'
import {useEffect, useState} from "react";

export default function CarDetails() {
    const car = useLoaderData()
    const [token , setToken] = useState(null)
    const [role , setRole] = useState(false)

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
        setToken(user)
        if(user.role === "ROLE_ADMIN"){
            setRole(true)
        }
        }
    } , [])

    return (
        <>
            <NavBar />
            <div className="car_details_box">
                <div className="container">
                    <div className="car_box">
                        <div className="image_box">
                            {/* Add image tag if necessary */}
                        </div>
                        <div className="brand_box">
                            <p>{car.brand}</p>
                            <p>{car.model}</p>
                        </div>
                        <div className="year_box">
                            <p>{car.year}</p>
                        </div>
                        <div className="price_box">
                            <p>{car.price} $</p>
                        </div>

                        {!token ? (
                            <div className="link_box">
                                <Link to="/login">To manage you need to log in</Link>
                            </div>
                        ) : (
                            <div className="controllers">
                                <button>
                                    {car.amount > 0 ? (
                                        <Link to="buy">Buy</Link>
                                    ) : (
                                        <Link to="/cars">Back</Link>
                                    )}
                                </button>
                                {role ? (
                                    <div className="admin_controller">
                                        <button>
                                            <Link to={`/updatecar/${car.id}`}>Edit</Link>
                                        </button>
                                        <button>
                                            <Link to="confirm">Delete</Link>
                                        </button>
                                    </div>
                                ) : null }

                            </div>
                        )}

                    </div>
                    <div className="confirm_box">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}