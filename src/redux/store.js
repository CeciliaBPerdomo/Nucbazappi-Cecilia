import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Persistencia
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore";

// Categorias
import categoriesReducer from "./categories/categoriesSlice"
// Productos
import productsReducer from "./products/productsSlice"
// Recomendados
import recommendedReducer from "./recommended/recommendedSlice"
// Cart
import cartReducer from "./cart/cartSlice"
// users
import userReducer from "./user/userSlice"
// orders
import ordersReducer from "./orders/orderSlice"

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"] // Lo que realmente quiero peristir
}

// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // para interactuar con la api externa
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // redux no guardaba bien los datos serializable
    })
})


export const persistor = persistStore(store)