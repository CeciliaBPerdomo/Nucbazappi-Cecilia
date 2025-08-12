import { products } from "../data/Products"

export const pickRandomProducts = (cantidad) => {
    const nuevoArray = []

    while (nuevoArray.length < cantidad) {
        const indexRandom = Math.floor(Math.random() * products.length)

        if(!nuevoArray.length) {
            nuevoArray.push(products[indexRandom])
        }
        
        const productExistente = nuevoArray.find((newProduct) => {
            return newProduct.id === products[indexRandom].id
        })

        if(!productExistente) {
            nuevoArray.push(products[indexRandom])
        }
    }
    return nuevoArray
}