import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { getCars} from "./api";

export default function BrandList() {
    const [carBrands, setCarBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const cars = await getCars();
                setCarBrands(cars);
            } catch (error) {
                console.error("Error fetching car brands:", error);
            }
        };

        fetchBrands();
    }, [carBrands]);

    return (
        <>
            <div className="carList">
                {carBrands.length > 0 ? (
                    carBrands.map((car) =>
                        car.id !== 0 &&
                        (
                            <div key={car.id}>
                                <Link to={`/car/${car.id}`}>
                                    {car.brand}
                                </Link>
                            </div>
                        ))
                ) : (
                    <span></span>
                )}
            </div>
        </>
    );
}
