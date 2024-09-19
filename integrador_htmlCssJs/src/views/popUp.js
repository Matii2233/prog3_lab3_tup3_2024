import { productoActivo, setProductoActivo } from "../../main"
import { handleDeleteProduct } from "../services/products"

// - - - - POPUP - - - -  //
const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener("click", ()=>{
    handleCancelButton()
})

const handleCancelButton = ()=>{
    closeModal()
}

// - - - - FUNCIOENES: ABRIR Y CERRAR POPUP - - - - //
export const openModal = ()=>{
    const modal = document.getElementById("modalPopup")
    if(modal.style.display = "none") modal.style.display = "flex";

    const deleteButton = document.getElementById("deleteButton")
    if(productoActivo){

    } else {
        deleteButton.style.display = "none"
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");

        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen
        precio.value = productoActivo.precio
        categoria.value = productoActivo.categoria
    }
}
export const closeModal = ()=>{
    const modal = document.getElementById("modalPopup")
    if(modal.style.display === "flex") modal.style.display = "none";
    setProductoActivo(null)
    resetModal()
}

const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
     imagen = document.getElementById("img"),
     precio = document.getElementById("precio"),
     categoria = document.getElementById("categoria");

     nombre.value=""
     imagen.value=""
     precio.value=0
     categoria.value= ""

    const deleteButton = document.getElementById("deleteButton")
    const buttonsContainer = document.getElementById("buttonsContainer")
    deleteButton.style.display = "flex"
    buttonsContainer.style.display = "flex"
}

// creamos el boton eliminar y usamos la funcion eliminar producto al hacer click
const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", ()=>{
    handleDeleteButton()
})

const handleDeleteButton = () => {
    handleDeleteProduct()
}