import { setProductoActivo } from "../../main"
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { openModal } from "./popUp"



/* - - - - STORE - - - - */
// se encarag de traer los elementos al store y llamar al render
export const handleGetProductToStore = ()=>{
    const products = handleGetProductLocalStorage()

    handleRenderList(products)
}

// se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productsIn) => {

  // filtrado de array por categorias
  const hamburguesas = productsIn.filter((el) => el.categoria === "Hamburguesas")
  const papas = productsIn.filter((el) => el.categoria === "Papas")
  const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas")

  // se encarga de renderizar los elementos de la seccion
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {

      const productsHTML = products.map((producto, index) => {
        return `
            <div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
              <div>
                <div>
                  <img src=${producto.imagen} />
                </div>

                <div class="productName">
                  <h2>${producto.nombre}</h2>
                </div>

                <div class="targetProps">
                  <p><b>Precio:</b> $${producto.precio}</p>
                </div>
              </div>
            </div>`
      })

      // se retorna la seccion con los elementos dentro
      return `
        <section class='sectionStore'>
          <div class="containerTitleSection">
            <h3>${title}</h3>
          </div>
          <div' class="containerProductStore">
            ${productsHTML.join("")}
          </div>
        </section>
        `

    } else {

      return ""
    }
  }

  // se encarga de renderizar cada uno de los prouctos dentro de su categoria
  const appContainer = document.getElementById("storeContainer")
  appContainer.innerHTML = `
    ${renderProductGroup(hamburguesas, "HAMBURGUESAS")}
    ${renderProductGroup(papas, "PAPAS")}
    ${renderProductGroup(gaseosas, "GASEOSAS")}
    `

  // se añaden los eventos a los elementos de manera dinamica
  const addEvents = (productsIn) => {
    if(productsIn){
      productsIn.forEach((element, index) => {

        const productContainer = document.getElementById(`product-${element.categoria}-${index}`)
        
        productContainer.addEventListener("click", ()=>{
          setProductoActivo(element)
          openModal()
        })
      });
    }
  }

  addEvents(hamburguesas)
  addEvents(papas)
  addEvents(gaseosas)
}