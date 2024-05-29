import React, {useEffect, useState} from "react";
import {getCars} from "./api";
import {Link, useLocation} from "react-router-dom";
import NavBar from "./NavBar";
import './styles/carlist.css'
import 'react-notifications/lib/notifications.css'
import {NotificationManager , NotificationContainer} from "react-notifications";

export default function CarList() {
    const [cars, setCars] = useState([]);
    const location = useLocation()

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const carsData = await getCars();
                const carsArray = Array.from(carsData)
                setCars(carsArray);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();


    }, []);

    useEffect(() => {
        if (location.state) {
            NotificationManager.success(location.state.message, location.state.title, 2000)
        }
    }, [location])



    return (
        <>
            <NavBar/>
            <div className="car_list_box">
                <NotificationContainer/>
                <div className="container">
                    <table>
                        <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>State</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.state}</td>
                                <td>
                                    <Link to={"/car/" + car.id}>Details</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )


}
