import axios from "axios";

export const getCars = async () => {
    const response = await axios.get('http://localhost:8888/cars')
    return response.data;
}

export const getCar = async (id) => {
    const response = await axios.get(`http://localhost:8888/car/${id}`)
    return response.data;
}

export const addCar = async (car) => {
    const response = await axios.post('http://localhost:8888/addcar', car)
    return response.data;
}

export const updateCar = async (id , car) => {
    const response = await axios.post(`http://localhost:8888/updatecar/${id}`, car)
    return response.data;
}

export const deleteCar = async (id) => {
    const response = await axios.post(`http://localhost:8888/deletecar/${id}`)
    return response.data;
}

export const buyCar = async (id) => {
    const response = await axios.post(`http://localhost:8888/buycar/${id}`)
    return response.data;
}