import {useLoaderData,  useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {updateCar} from "./api";
import './styles/createeditform.css'

export default function EditCarForm(){

    const car = useLoaderData();
    const navigate = useNavigate()
    const [role, setRole] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            if (user.role !== "ROLE_ADMIN") {
                navigate('/');
            } else {
                setRole(true);
            }
        } else {
            navigate('/');
        }
    }, [navigate]);

    const [updatedCar , setUpdatedCar] = useState({
        brand:car.brand,
        model:car.model,
        year:car.year,
        price:car.price,
    })

    const handleBrand = (e) => {
        setUpdatedCar({...updatedCar , brand: e.target.value})
    }
    const handleModel = (e) => {
        setUpdatedCar({...updatedCar, model: e.target.value})
    }
    const handleYear = (e) => {
        setUpdatedCar({...updatedCar, year: e.target.value})
    }
    const handlePrice = (e) => {
        setUpdatedCar({...updatedCar, price: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateCar(car.id , updatedCar)
        console.log(response)
        navigate('/car/' + car.id ,{ state: { message: `${car.brand} updated`, title: "Update Good" } } )
    }

    if (!role) {
        return null;
    }

    return(
        <>
            <div className="create_edit_box">
                <div className="container">
                    <h1>Edit Car</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="brand_box">
                            <label htmlFor="brand">Brand</label>
                            <input value={updatedCar.brand} onChange={handleBrand} type="text" id="brand" name="brand" required/>
                        </div>
                        <div className="model_box">
                            <label htmlFor="model">Model</label>
                            <input value={updatedCar.model} onChange={handleModel} type="text" id="model" name="model" required/>
                        </div>
                        <div className="year_box">
                            <label htmlFor="year">Year</label>
                            <input value={updatedCar.year} onChange={handleYear} type="number" id="year" name="year" required/>
                        </div>
                        <div className="price_box">
                            <label htmlFor="price">Price</label>
                            <input value={updatedCar.price} onChange={handlePrice} type="number" id="price" name="price" required/>
                        </div>
                        <div className="submit_box">
                            <button type="submit">Edit</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}