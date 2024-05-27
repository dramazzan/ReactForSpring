import axios from "axios";

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return {Authorization: `Bearer ` + user.token};
    } else {
        return {};
    }
}




export const getCars = async () => {
    const response = await axios.get('http://localhost:8888/cars' , {headers: authHeader()})
    return response.data;
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8888/users`, { headers: authHeader() });
        return response.data
    } catch (error) {
        return "error"
    }
};


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
    const response = await axios.get(`http://localhost:8888/deletecar/${id}`  , {headers:authHeader()})
    return response.data;
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8888/user/${id}`, { headers: authHeader() });
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error);
        throw error;
    }
};

export const buyCar = async (carId) => {
    const response = await axios.get(`http://localhost:8888/buy/${carId}` , {headers:authHeader()})
    return response.data;
}
export const getOrders = async () => {
    const response = await axios.get(`http://localhost:8888/orders` , {headers:authHeader()})
    return response.data;
}

export const logout = async () =>{
    try {
        const response = await axios.get(`http://localhost:8888/auth/logout`, {headers: authHeader()})
        return {success: true , error: response.data}
    }catch(error){
        return {success: false, error: "Logout failed"}
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
        return {success: false, error: "Registration failed"}
    }
}




