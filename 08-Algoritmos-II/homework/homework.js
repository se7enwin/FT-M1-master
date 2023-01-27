"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array; // [2] > caso base, ya esta ordenado

  // 1er. [1,7,5,66,2,90,87,54]     > seleccionamos un pivote aleatorio
  //         i
  //       1
  // [1]       [7]

  let pivot = array[0]; // tambien podria ser > array[Math.floor(Math.random() * array.length)]
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      // es mayor
      right.push(array[i]);
    }
  }
  // array = left ORDENADA + pivot + right ORDENADA
  // return quickSort(left).concat([pivot]).concat(quickSort(right))
  // version ES6
  return [...quickSort(left), pivot, ...quickSort(right)];
  // [1,2,5,7, 7, 54,66,87,90]
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array; // caso base > [5]

  let div = split(array); // [left, right]
  let left = div[0]; // left [x,x]
  let right = div[1]; // right [x,x,x]
  // [1,7,5,66,2,90,87,54]

  // return combinacion (ORDENADO left) + (ORDENADO right)

  //               newArray[2,4,10, 15]
  // voy a recorrer mientras pueda
  // cuando ya no pueda recorrer, agrego los "restos"
  //         i                         x
  //    [2,4,20,43]            [10,15]
  // [43] > [2]         | [10] [15]

  return combine(mergeSort(left), mergeSort(right));
}

function combine(izq, der) {
  let i = 0;
  let x = 0;
  let newArray = [];
  // mergeando/mezclando/concatenando hacia arriba, cuando sube la recursividad
  while (i < izq.length && x < der.length) {
    if (izq[i] < der[x]) {
      newArray.push(izq[i]);
      i++;
    } else {
      newArray.push(der[x]);
      x++;
    }
  }
  // [2,4,10, 15,20,43]

  return newArray.concat(izq.slice(i)).concat(der.slice(x));
}

function split(arr) {
  // dividir el arreglo en 2
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle); // [15,10]
  let right = arr.slice(middle); // [2,7,6]

  return [left, right]; // [ [15,10], [2,7,6] ]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};