import React, {useEffect, useState} from "react";
import {getCars} from "./api";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import './styles/carlist.css'

export default function CarList() {
    const [cars, setCars] = useState([]);

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

    return (
        <>
            <NavBar/>
            <div className="car_list_box">
                <div className="container">
                    <table>
                        <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cars.map((car) => (
                            <tr key={car.id}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.amount}</td>
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
