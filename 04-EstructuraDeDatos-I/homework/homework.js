"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

// ----------------------------

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.






Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// Recursion:

// Casos base:
// Donde corta la recursividad?
// Donde ya tengo una respuesta?

// Return total
// Return que llama a la recursion!
// Respuesta simple:
// !53 = 53 x 52! > return de la recursion!
// return n * nFactorial(n-1)

function nFactorial(n) {
  if (n < 0) return "Ingresa un numero desde cero";
  if (n >= 0 && n < 2) return 1; // caso base o caso de corte
  return n * nFactorial(n - 1);
}

// console.log(nFactorial(20));

/*

Recursion fibonacci:

Secuencia:    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

  Casos base: 
  Ok

  Respuesta simple (return de la recursividad)
                          f(27) =
                        fi(26) + fi(25)
                        =         =
                  f(24)+f(25) /  f(24) + f(23)

// */

//  function padre() {
//   // var cache = {}; // para intentar hacer! <<<<<<<<<<<<
//   return function nFibonacci(n, obj) {
//     if (n < 0) return "Ingresa el numero 0 o uno positivo";
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     return nFibonacci(n - 1) + nFibonacci(n - 2);
//   };
// }

function nFibonacci(n) {
  if (n < 0) return "Ingresa el numero 0 o uno positivo";
  if (n === 0) return 0;
  if (n === 1) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// console.log(nFibonacci(8));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que
ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(value) {
    this.elements.push(value);
  }
  dequeue() {
    return this.elements.shift();
  }
  size() {
    return this.elements.length;
  }
}

const queue1 = new Queue(); // { elements: [] }

queue1.enqueue(10); // value = 10, elements le pusheo  [10]
queue1.enqueue("hola"); // value = "hola", elements le pusheo [10, "hola"]
queue1.enqueue(function () {
  console.log("hi");
}); // value = fn, elements le pusheo [10, "hola", function]

console.log(queue1.size());
console.log(queue1.dequeue()); // 10
console.log(queue1.dequeue()); // "hola"

console.log([, , 2].shift());
console.log([, , 2]);

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};