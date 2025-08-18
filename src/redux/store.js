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

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer, 
    cart: cartReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"] // Lo que realmente quiero peristir
}

// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})


export const persistor = persistStore(store)