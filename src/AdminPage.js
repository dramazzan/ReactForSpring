import {useEffect, useState} from "react";
import {deleteCar, getCars} from "./api";
import {Link, useNavigate} from "react-router-dom";
import './styles/adminpage.css'

export default function AdminPage() {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const carsData = await getCars();
                setCars(carsData);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);


    const handleClick = async (id) => {

            const response = await deleteCar(id)
            console.log(response)
            navigate('/cars' , {state: {message: `Car deleted` , title: "Delete car" }})


    }

    return (
        <div className="admin_box">
            <div className="container">
                <Link className="back" to="profile">Back</Link>
                {cars.length > 0 ? (
                    cars.map(car => (
                        <div key={car.id}>
                            <div className="brand_box">
                                <p>{car.brand}</p>
                                <p>{car.model}</p>
                            </div>
                            <div className="car_controller">
                                <button><Link to={"/updatecar/" + car.id}>edit</Link></button>
                                <button onClick={() => { handleClick(car.id) }}>delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cars available</p>
                )}
            </div>
        </div>
    );
}
