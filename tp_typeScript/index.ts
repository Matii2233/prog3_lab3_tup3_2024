// <---- Ejercicio 3 ----> //

const nombre: string = "Matias"
const edad: number = 21
const esMayor: boolean = true
const nacimiento: Date = new Date(2002,9,21)

mostrarDatos()




// <---- Ejercicio 4 ----> //
const convertirNumString = (num: number) => {
    const stringNum: string = num.toString()
    const numElement = document.getElementById("numToString")

    if(numElement) numElement.textContent = `Numero convertido a cadena: ${stringNum}`
}

convertirNumString(10)




// <---- Ejercicio 5 ----> //
let array: number[] = [1,1,2,3,5,8,13]
totalArray(array)




// <--- Ejercicio 6 ----> //
let persona = {
    estudiante: "Juan",
    edad: 20,
    curso: "Matematica"
}

mostrarPersona()




// <--- Ejercicio 7 ----> //
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}

let direccion: Direccion = {
    calle: "Avenida Siempre Viva",
    ciudad: "Springfield",
    codigoPostal: 1989
}

mostrarDireccion()




// <--- Ejercicio 8 ----> //
interface Usuario {
    nombre: string,
    correo: string,
    saludar(): void
}

let usuario: Usuario = {
    nombre: "Matias",
    correo: "Matias+salinaS@gmail.com",
    saludar() {
        return `Hola, soy ${nombre}`
    }
}

mostrarSaludo()




// <--- Ejercicio 9 ----> //
class Persona{
    nombre?: string = "Matias";
    edad?: number = 21;

    presentacion() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
    }
}

mostrarPresentacion()




// <--- Ejercicio 10 ----> //
class Caja<T>{
    private atributo?: T;

    constructor(){}

    setAtributo(atributo: T){
        this.atributo = atributo
    }
    getArtibuto() {
        return this.atributo
    }
}

mostrarCaja()




// <--- Ejercicio 11 ----> //
const devolverValorGenerico = <T>(valorGenerico: T): T => {
    return valorGenerico
}

mostrarFuncionGenerica()




// <--- Ejercicio 11 ----> //
enum colores {
    ROJO = 'rojo',
    AZUL = 'azul',
    AMARILLO = 'amarillo',
    MORADO = 'morado',
    NARANJA = 'naranja',
    VERDE = 'verde',
    BLANCO = 'blanco',
    NEGRO = 'negro',
    ROSADO = 'rosado',
    CELESTE = 'celeste',
    MARRON = 'marron'
}

mostrarColorFavorito()








// <====== FUNCIONES ======>
function mostrarColorFavorito() {
    const colorFavorito = colores.VERDE

    const elementoColorFavorito = document.getElementById("colorFav")
    if(elementoColorFavorito) elementoColorFavorito.textContent =
    `Color favorito: ${colorFavorito}`
}


function mostrarFuncionGenerica() {
    const elementoSalidaTexto = document.getElementById("salidaTexto")
    const elementoSalidaNumero = document.getElementById("salidaNumero")

    if(elementoSalidaTexto) elementoSalidaTexto.textContent =
    `Identidad del texto: ${devolverValorGenerico("}!Ey, Buenas a todos¡")}`

    if(elementoSalidaNumero) elementoSalidaNumero.textContent = 
    `Identidad del numero: ${devolverValorGenerico(777)}`
}


function mostrarCaja() {
    const elementoTexto = document.getElementById("atributoTexto")
    const elementoNumero = document.getElementById("atributoNumero")

    const cajaTexto = new Caja<string>()
    const cajaNumero = new Caja<number>()

    cajaTexto.setAtributo(`Mensaje secreto`)
    cajaNumero.setAtributo(100)


    if(elementoTexto)
        elementoTexto.textContent = `El texto de la caja es: "${cajaTexto.getArtibuto()}"`
    if(elementoNumero)
        elementoNumero.textContent = `El numero de la caja es: ${cajaNumero.getArtibuto()}`
}


function mostrarPresentacion() {
    const presentacionElement = document.getElementById("presentacion")
    const persona = new Persona()

    if(presentacionElement) presentacionElement.textContent = persona.presentacion()
}


function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo")

    if(saludoElement) saludoElement.textContent = `${usuario.saludar()}`
}


function mostrarDireccion() {
    const dirElement = document.getElementById("dir")

    if(dirElement) {
        dirElement.textContent =
        `Direccion: ${direccion.calle}, ${direccion.ciudad}, ${direccion.codigoPostal}`
    }
}


function mostrarPersona() {
    const estudianteElement = document.getElementById("estudiante")
    const edadElement = document.getElementById("edadEstudiante")
    const cursoElement = document.getElementById("cursoEstudiante")

    if(estudianteElement)
        estudianteElement.textContent = `Estudiante: ${persona.estudiante}`
    if(edadElement)
        edadElement.textContent = `Edad: ${persona.edad}`
    if(cursoElement)
        cursoElement.textContent = `Curso: ${persona.curso}`

}


function totalArray(arr: number[]) {
    let total = 0

    for (let i=0; i<arr.length; i++) {
        total = total + arr[i]
    }

    const totalElement = document.getElementById("total")

    if(totalElement)
        totalElement.textContent = `Suma del array: ${total}`
}


function mostrarDatos() {
    
    const h_nombre = document.getElementById("nombre")
    const h_edad = document.getElementById("edad")
    const h_esMayor = document.getElementById("esMayor")
    const h_nacimiento = document.getElementById("nacimiento")

    if (h_nombre)
        h_nombre.textContent = `Nombre: ${nombre}`

    if (h_edad)
        h_edad.textContent = `Edad: ${edad}`

    if (h_esMayor)
        h_esMayor.textContent = `Mayoria de edad: ${esMayor}`

    if (h_nacimiento)
        h_nacimiento.textContent = `Fecha de nacimiento: ${nacimiento}`
}