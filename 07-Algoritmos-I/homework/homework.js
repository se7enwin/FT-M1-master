'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:


   
  var resultado = [1];
  for (var i = 2; i < num+1; i++) {
  //console.log("probar factor: ",i);
  if (num % i === 0) {
    //console.log("agregar factor: ",i);
    
    resultado.push(i);
    num/=i;
    i-=1;
  }
  }
  return resultado;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  var n, i, k, aux;
  n = array.length;
  console.log(array); // Mostramos, por consola, la lista desordenada
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
      for (i = 0; i < (n - k); i++) {
          if (array[i] > array[i + 1]) {
              aux = array[i];
              array[i] = array[i + 1];
              array[i + 1] = aux;
          }
      }
  }

  return array; // Mostramos, por consola, la lista ya ordenada


}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i]
      let j
      for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
        array[j + 1] = array[j]
      }
      array[j + 1] = currentValue
    }
    return array
  
  //console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]
  




}


function selectionSort(arr) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:



  
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;




}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
