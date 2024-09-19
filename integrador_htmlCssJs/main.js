import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { openModal } from "./src/views/popUp.js";
import { handleGetProductToStore } from "./src/views/store.js";
import "./style.css";




// - - - - APLICACION - - - - //
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn
}

handleGetProductToStore()
renderCategories();

// HEADER
const addButton = document.getElementById("addButton") 
addButton.addEventListener("click", ()=>{
    openModal()
})

//button search
const buttonSearch = document.getElementById("buttonSearch")
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName()
})