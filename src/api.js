import axios from "axios";



export const getCars = async () => {
    const response = await axios.get('http://localhost:8081/cars' )
    return response.data;
}


export const getCar = async (id) => {
    const response = await axios.get(`http://localhost:8081/car/${id}`  )
    return response.data;
}

export const addCar = async (car) => {
    const response = await axios.post('http://localhost:8081/addcar', car  )
    return response.data;
}

export const updateCar = async (id, car) => {
    const response = await axios.post(`http://localhost:8081/updatecar/${id}`, car , )
    return response.data;
}

export const deleteCar = async (id) => {
    const response = await axios.get(`http://localhost:8081/deletecar/${id}`  )
    return response.data;
}


export const buyCar = async (carId) => {
    const response = await axios.get(`http://localhost:8081/buy/${carId}`)
    return response.data;
}


export const testDrive = async(carId) => {
    const response = await axios.get(`http://localhost:8081/testdrive/${carId}`)
    return response.data;
}

export const repair = async(carId) => {
    const response = await axios.get(`http://localhost:8081/repair/${carId}`)
    return response.data;
}

