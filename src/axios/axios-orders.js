import axios from "axios"
import { fetchOrderFail, fetchOrdersStart } from "../redux/orders/orderSlice"
import { BASE_URL } from "../utils"

//  no se pueden utilizar hooks fuera de componentes
export const getOrders = async (dispatch) => {
    dispatch(fetchOrdersStart())
    try {
        const orders = await axios.get(`${BASE_URL}/orders`)
    } catch (error) {
        console.log(error)
        dispatch(fetchOrderFail("Upss, algo salió mal. No hay órdenes sin usuario, es como querer jugar al fútbol sin una pelota."))
    }
}