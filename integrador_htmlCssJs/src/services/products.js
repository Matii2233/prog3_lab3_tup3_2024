import Swal from "sweetalert2"
import { productoActivo } from "../../main"
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage"
import { closeModal} from "../views/popUp"
import { handleGetProductToStore, handleRenderList } from "../views/store"



// PRODUCTS
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements()
    closeModal()
})

// funcion guardar o modificar elementos
const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
     imagen = document.getElementById("img").value,
     precio = document.getElementById("precio").value,
     categoria = document.getElementById("categoria").value;

    let object = null

    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria
        }

    } else {

        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        }
    }

    setInLocalStorage(object)
    handleGetProductToStore()
    closeModal()

    Swal.fire({
        title: "Correcto!",
        text: "Producto correctamente guardado!",
        icon: "success"
      });
}




//Eliminar elemento
export const handleDeleteProduct = () => {

    Swal.fire({

        title: "¿Desea eliminar elemento?",
        text: "¡No podras revertir esta accion luego!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(196, 40, 40, 0.925)",
        cancelButtonColor: "rgb(51, 51, 51)",
        confirmButtonText: "Eliminar!"

    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage()
            const result = products.filter((el) => el.id !== productoActivo.id)

            // setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage()

            handleRenderList(newProducts)
            closeModal()
        }
    });
}