// - - - - LOCAL STORAGE - - - - //

// obtener del productos local storage
export const handleGetProductLocalStorage = () => {

    const product = JSON.parse(localStorage.getItem("products"))
    if(product) {
        return product
    } else {
        return []
    }
}


//guardar productos en local storage
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        // traer elementos
        let productsInLocal = handleGetProductLocalStorage()
        const existingIndex = productsInLocal.findIndex((localProducts) =>
            localProducts.id === productIn.id
        )

        // varificar si el producto existe
        if (existingIndex !== -1) {
            // si: reemplazarlo
            productsInLocal[existingIndex] = productIn

        } else {
            // no: agregarlo
            productsInLocal.push(productIn)
        }

        // setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal))
    }
}