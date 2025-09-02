import axios from "axios";
import { BASE_URL } from "../utils";

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            email,
            password,
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
        return alert(error.response.data.errors[0].msg)
    }
} 