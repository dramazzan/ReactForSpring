import axios from "axios";

export const getCars = async () => {
    const response = await axios.get('http://localhost:8888/cars' , {headers: authHeader()})
    return response.data;
}

export const getCar = async (id) => {
    const response = await axios.get(`http://localhost:8888/car/${id}` , {headers: authHeader()})
    return response.data;
}

export const addCar = async (car) => {
    const response = await axios.post('http://localhost:8888/addcar', car , {headers: authHeader()})
    return response.data;
}

export const updateCar = async (id, car) => {
    const response = await axios.post(`http://localhost:8888/updatecar/${id}`, car , {headers: authHeader()})
    return response.data;
}

export const deleteCar = async (id) => {
    const response = await axios.post(`http://localhost:8888/deletecar/${id}`  , null, {headers:authHeader()})
    return response.data;
}

export const buyCar = async (id) => {
    const response = await axios.post(`http://localhost:8888/buycar/${id}` , null,{headers:authHeader()})
    return response.data;
}

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return {Authorization: `Bearer ` + user.token};
    } else {
        return {};
    }
}


export const loginUser = async (user) => {
    try {
        const response = await axios.post(`http://localhost:8888/auth/login`,
            user, {headers: authHeader()}
        )
        if(response !== null){
            localStorage.setItem('user', JSON.stringify(response.data))
            return {success: true, data: "User was login successful"}
        }else{
            return {success: false, data: "User not found"}
        }

    } catch (error) {
        return {success: false, error: "User not found"}
    }
}

export const registerUser = async (user) => {
    try {
        const response = await axios.post('http://localhost:8888/auth/register',
            user
            )
        if(response){
            return {success: true, data: "User was registered"}
        }

    } catch (error) {
        return {success: false, error: error.response.data.error}
    }
}

