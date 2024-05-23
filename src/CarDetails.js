import {Link, Outlet, useLoaderData} from "react-router-dom";
import NavBar from "./NavBar";
import './styles/cardetails.css'

export default function CarDetails() {
    const car = useLoaderData()

    return (
        <>
        <NavBar/>
        <div className="car_details_box">
            <div className="container">
                <div className="car_box">
                    <div className="image_box">

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
                    <div className="controllers">
                        <button>
                            {car.amount > 0 ? (
                                <Link to="buy">Buy</Link>
                            ) : (
                                <Link to="/cars">Back</Link>
                            )}
                        </button>
                        <button>
                            <Link to={"/updatecar/" + car.id}>Edit</Link>
                        </button>
                        <button>
                            <Link to={"confirm"}>Delete</Link>
                        </button>
                    </div>
                </div>
                <div className="confirm_box">
                    <Outlet/>
                </div>
            </div>

        </div>
</>
)
}