import {Link, Outlet, useLoaderData, useLocation} from "react-router-dom";
import NavBar from "./NavBar";
import './styles/cardetails.css';
import {useEffect} from "react";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function CarDetails() {
    const car = useLoaderData();
    const location = useLocation();


    useEffect(() => {
        if (location.state && location.state.message && location.state.title) {
            NotificationManager.success(location.state.message, location.state.title, 2000);
        }
    }, [location.state]);

    return (
        <>
            <NavBar/>
            <div className="car_details_box">
                <NotificationContainer/>
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
                                <Link to="buy">Buy</Link>
                            </button>
                            <button>
                                <Link to={`/updatecar/${car.id}`}>Edit</Link>
                            </button>
                            <button>
                                <Link to="confirm">Delete</Link>
                            </button>
                            <button>
                                <Link to="test">TestDrive</Link>
                            </button>
                            <button>
                                <Link to="repair">Repair</Link>
                            </button>
                        </div>

                    </div>
                    <div className="confirm_box">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}
