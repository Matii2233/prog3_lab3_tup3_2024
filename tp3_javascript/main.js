/*// 1. INTRODUCCION A JAVASCRIPT
console.log(" - - - - - - - - BLOQUE 1 - - - - - - - -");
console.log("************ EJERCICIO 2 ************");

let numero_a = 5;
let numero_b = 7;
let numero_c = numero_a + numero_b; 

console.log("La suma de " +numero_a+ " + " +numero_b+ " es: " +numero_c);
console.log("");




console.log("************ EJERCICIO 3 ************");

let nombre = prompt("Escriba su primer nombre: ");
console.log("Hola " +nombre+ ". ¡Que tengas un buen dia hoy!");
console.log("");
console.log("");








// 2. OPERADORES LOGICOS Y CONDICIONALES
console.log(" - - - - - - - - BLOQUE 2 - - - - - - - -");
console.log("************ EJERCICIO 1 ************");
numero_a = 33;
numero_b = 21;

if (numero_a >= numero_b) {
  numero_c = numero_a;
} else {
  numero_c = numero_b;
}

console.log("El numero mayor entre " +numero_a+ " y " +numero_b+ " es: " +numero_c);
console.log("");




console.log("************ EJERCICIO 2 ************");
numero_a = prompt("Ingrese un numero: ");

if (numero_a%2 == 0) {
  console.log("El numero '" +numero_a+ "' es par")
} else {
  console.log("El numero '" +numero_a+ "' es impar")
}
console.log("");
console.log("");









// 3. Operaciones de asignacion y bucles
console.log(" - - - - - - - - BLOQUE 3 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");

console.log("Cuenta regresiva:");
numero_a = 10;
while(numero_a <= 10 && numero_a >=1) {
  console.log(" " +numero_a);
  numero_a = numero_a - 1;
}
console.log("")




console.log("************ EJERCICIO 2 ************");

do{
  numero_a = prompt("Ingrese un numero mayor a 100")
  if (numero_a<=100) {
    console.log("¡Numero incorrecto! El numero debe ser 101 o superior. Por favor intentelo denuevo")
  }
} while(numero_a<=100)
console.log("!Bucle superado¡")
console.log("")








// 4. FUNCIONES
console.log(" - - - - - - - - BLOQUE 4 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");

numero_a = 7;
console.log(" - La funcion recibe el numero " +numero_a+ " y retornara true(par) o false(impar)")

function esPar (numero_a){
  if(numero_a%2 == 0){
    return true
  }
  if (numero_a%2 != 0){
    return false
  }
}

console.log(" - La funcion devolvio " +esPar(numero_a))
console.log("")




console.log("************ EJERCICIO 2 ************");
numero_a = 30

const convertirCelciusAfarenheit = (numero) => {
  return numero*1.8 + 32
}

console.log(numero_a+ "°C son equivalentes a " +convertirCelciusAfarenheit(numero_a)+ "°F")
console.log("")








// 5. Objetos en javascript
console.log(" - - - - - - - - BLOQUE 5 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");
let persona1 = {
  edad : 21,
  nombre : "Marcela",
  ciudad : "Mendoza",
  cambiarCiudad : function (nueva_ciudad) {
    this.ciudad = nueva_ciudad
  }
}

console.log("persona 1:")
console.log(" nombre: '" +persona1.nombre+ "', edad: '" +persona1.edad+ "', ciudad: '" +persona1.ciudad+ "'")

persona1.cambiarCiudad("Cordoba")
console.log("Persona actualizada:")
console.log(" nombre: '" +persona1.nombre+ "', edad: '" +persona1.edad+ "', ciudad: '" +persona1.ciudad+ "'")
console.log("")




console.log("************ EJERCICIO 2 ************");
let libro = {
  titulo: "El Quijote",
  autor: "Miguel De Cervantes",
  año: 1616,
  esAntiguo : function () {
    if (2024 - this.año >= 10) {
      return true
    } else {
      return false
    }
  }
}

console.log("El libro '" +libro.titulo+ "' es antiguo: " +libro.esAntiguo())
console.log("")








// 6. ARRAYS..
console.log(" - - - - - - - - BLOQUE 6 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");
let numeros = [1,2,3,4,5,6,7,8,9,10]
let tabla_dos = []
let contador = 0;

numeros.forEach((elemento, numero) => {
  tabla_dos[elemento-1] = numeros[elemento-1]*2
});

console.log(" arreglo 1: [" +numeros+ "]")
console.log(" arreglo 2: [" +tabla_dos+ "]")
console.log("")




console.log("************ EJERCICIO 2 ************");
let pares = []
let indice_array = 0

for (let i=0; i<=20; i++) {
  if (i%2==0 && i!=0) {
    pares[indice_array] = i
    indice_array++
  }
}

console.log(" arreglo pares: [" +pares+ "]")








// 7. INTRODUCCION DOM..
console.log(" - - - - - - - - BLOQUE 7 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");
const button = document.getElementById("button")
const el1 = document.getElementById("element1")
const el2 = document.getElementById("element2")
const el3 = document.getElementById("element3")

const hadStyleElements = ()=>{ //funcion 'tener estilo de los elementos
  el1.classList.add("elements")
  el2.classList.add("elements")
  el3.classList.add("elements")
}

button.addEventListener("click",()=>{
  hadStyleElements() //llamamos a la funcion anterior
})




console.log("************ EJERCICIO 2 ************");
const buttonInput = document.getElementById("buttonInput")

const getDataInput = ()=>{
  const input1 = document.getElementById("input1").value
  alert(input1)
}

buttonInput.addEventListener("click", ()=>{
  getDataInput()
})








// 8. EVENTOS DOM..
console.log(" - - - - - - - - BLOQUE 8 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");
const e1 = document.getElementById("e1")
const e2 = document.getElementById("e2")
const e3 = document.getElementById("e3")
const e4 = document.getElementById("e4")

const getElementData = (element)=>{
  console.log(element.textContent)
}

e1.addEventListener("click",()=>{
  getElementData(e1)
})
e2.addEventListener("click",()=>{
  getElementData(e2)
})
e3.addEventListener("click",()=>{
  getElementData(e3)
})
e4.addEventListener("click",()=>{
  getElementData(e4)
})




console.log("************ EJERCICIO 2 ************");
const disabler_button = document.getElementById("disButton")
const abler_button = document.getElementById("ablButton")

const disableInputText = ()=>{
  const text_input = document.getElementById("textInput")
  text_input.disabled=true
}
const ableInputText = ()=>{
  const text_input = document.getElementById("textInput")
  text_input.disabled=false
}

disabler_button.addEventListener("click", ()=>{
  disableInputText()
})
abler_button.addEventListener("click", ()=>{
  ableInputText()
})*/








// 8. LOCAL STORAGE..
console.log(" - - - - - - - - BLOQUE 8 - - - - - - - -")
console.log("************ EJERCICIO 1 ************");
const save_button = document.getElementById("saveButton");
const delete_button = document.getElementById("deleteButton")

save_button.addEventListener("click", ()=>{
  saveDataInput();
  const dates = localStorage.getItem("datos");

  if (dates) {
      console.log(dates);
      document.getElementById("mostrarEmail").textContent = `Email guardado: ${dates}`;
  } else {
      console.log("Los datos no existen");
  }
});

delete_button.addEventListener("click", ()=>{
  const dates = localStorage.getItem("datos");
  if (dates) {
    localStorage.removeItem("datos")
  } else {
    console.log("No se encontraron datos para borrar")
  }
})

// guardar elemento..
const saveDataInput = ()=>{
  const email_input = document.getElementById("emailInput").value;
  localStorage.setItem("datos", email_input);
}

// mostrar elemento guardado luego de recargar la pagina..
window.onload = ()=>{
  const dates = localStorage.getItem("datos");

  if (dates) {
      document.getElementById("mostrarEmail").textContent = `Email guardado: ${dates}`;
  }
}