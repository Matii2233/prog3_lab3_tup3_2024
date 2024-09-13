"use strict";
// <---- Ejercicio 3 ----> //
const nombre = "Matias";
const edad = 21;
const esMayor = true;
const nacimiento = new Date(2002, 9, 21);
mostrarDatos();
// <---- Ejercicio 4 ----> //
const convertirNumString = (num) => {
    const stringNum = num.toString();
    const numElement = document.getElementById("numToString");
    if (numElement)
        numElement.textContent = `Numero convertido a cadena: ${stringNum}`;
};
convertirNumString(10);
// <---- Ejercicio 5 ----> //
let array = [1, 1, 2, 3, 5, 8, 13];
totalArray(array);
// <--- Ejercicio 6 ----> //
let persona = {
    estudiante: "Juan",
    edad: 20,
    curso: "Matematica"
};
mostrarPersona();
let direccion = {
    calle: "Avenida Siempre Viva",
    ciudad: "Springfield",
    codigoPostal: 1989
};
mostrarDireccion();
let usuario = {
    nombre: "Matias",
    correo: "Matias+salinaS@gmail.com",
    saludar() {
        return `Hola, soy ${nombre}`;
    }
};
mostrarSaludo();
// <--- Ejercicio 9 ----> //
class Persona {
    constructor() {
        this.nombre = "Matias";
        this.edad = 21;
    }
    presentacion() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
}
mostrarPresentacion();
// <--- Ejercicio 10 ----> //
class Caja {
    constructor() { }
    setAtributo(atributo) {
        this.atributo = atributo;
    }
    getArtibuto() {
        return this.atributo;
    }
}
mostrarCaja();
// <--- Ejercicio 11 ----> //
const devolverValorGenerico = (valorGenerico) => {
    return valorGenerico;
};
mostrarFuncionGenerica();
// <--- Ejercicio 11 ----> //
var colores;
(function (colores) {
    colores["ROJO"] = "rojo";
    colores["AZUL"] = "azul";
    colores["AMARILLO"] = "amarillo";
    colores["MORADO"] = "morado";
    colores["NARANJA"] = "naranja";
    colores["VERDE"] = "verde";
    colores["BLANCO"] = "blanco";
    colores["NEGRO"] = "negro";
    colores["ROSADO"] = "rosado";
    colores["CELESTE"] = "celeste";
    colores["MARRON"] = "marron";
})(colores || (colores = {}));
mostrarColorFavorito();
// <====== FUNCIONES ======>
function mostrarColorFavorito() {
    const colorFavorito = colores.VERDE;
    const elementoColorFavorito = document.getElementById("colorFav");
    if (elementoColorFavorito)
        elementoColorFavorito.textContent =
            `Color favorito: ${colorFavorito}`;
}
function mostrarFuncionGenerica() {
    const elementoSalidaTexto = document.getElementById("salidaTexto");
    const elementoSalidaNumero = document.getElementById("salidaNumero");
    if (elementoSalidaTexto)
        elementoSalidaTexto.textContent =
            `Identidad del texto: ${devolverValorGenerico("}!Ey, Buenas a todos¡")}`;
    if (elementoSalidaNumero)
        elementoSalidaNumero.textContent =
            `Identidad del numero: ${devolverValorGenerico(777)}`;
}
function mostrarCaja() {
    const elementoTexto = document.getElementById("atributoTexto");
    const elementoNumero = document.getElementById("atributoNumero");
    const cajaTexto = new Caja();
    const cajaNumero = new Caja();
    cajaTexto.setAtributo(`Mensaje secreto`);
    cajaNumero.setAtributo(100);
    if (elementoTexto)
        elementoTexto.textContent = `El texto de la caja es: "${cajaTexto.getArtibuto()}"`;
    if (elementoNumero)
        elementoNumero.textContent = `El numero de la caja es: ${cajaNumero.getArtibuto()}`;
}
function mostrarPresentacion() {
    const presentacionElement = document.getElementById("presentacion");
    const persona = new Persona();
    if (presentacionElement)
        presentacionElement.textContent = persona.presentacion();
}
function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo");
    if (saludoElement)
        saludoElement.textContent = `${usuario.saludar()}`;
}
function mostrarDireccion() {
    const dirElement = document.getElementById("dir");
    if (dirElement) {
        dirElement.textContent =
            `Direccion: ${direccion.calle}, ${direccion.ciudad}, ${direccion.codigoPostal}`;
    }
}
function mostrarPersona() {
    const estudianteElement = document.getElementById("estudiante");
    const edadElement = document.getElementById("edadEstudiante");
    const cursoElement = document.getElementById("cursoEstudiante");
    if (estudianteElement)
        estudianteElement.textContent = `Estudiante: ${persona.estudiante}`;
    if (edadElement)
        edadElement.textContent = `Edad: ${persona.edad}`;
    if (cursoElement)
        cursoElement.textContent = `Curso: ${persona.curso}`;
}
function totalArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    const totalElement = document.getElementById("total");
    if (totalElement)
        totalElement.textContent = `Suma del array: ${total}`;
}
function mostrarDatos() {
    const h_nombre = document.getElementById("nombre");
    const h_edad = document.getElementById("edad");
    const h_esMayor = document.getElementById("esMayor");
    const h_nacimiento = document.getElementById("nacimiento");
    if (h_nombre)
        h_nombre.textContent = `Nombre: ${nombre}`;
    if (h_edad)
        h_edad.textContent = `Edad: ${edad}`;
    if (h_esMayor)
        h_esMayor.textContent = `Mayoria de edad: ${esMayor}`;
    if (h_nacimiento)
        h_nacimiento.textContent = `Fecha de nacimiento: ${nacimiento}`;
}
