"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  // si es mayor
  if (value > this.value) {
    // a la derecha
    if (this.right) {
      // si existe la derecha
      this.right.insert(value);
    } else {
      // no existe derecha, creamos el nodo(arbol) alli
      this.right = new BinarySearchTree(value);
    }
  }

  // si es menor
  if (value < this.value) {
    // a la izquierda
    if (this.left) {
      // si existe la izquierda
      this.left.insert(value);
    } else {
      // no existe derecha, creamos el nodo(arbol) alli
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (!this.right && !this.left) return 1; // Caso base, no tengo hijos
  if (this.right && !this.left) return 1 + this.right.size(); // solo existe derecha
  if (this.left && !this.right) return 1 + this.left.size(); // solo existe izquierda
  if (this.right && this.left) return 1 + this.right.size() + this.left.size(); // existen ambas (izq y der)
};

BinarySearchTree.prototype.contains = function (value) {
  // Caso base
  if (value === this.value) return true;

  // caso mayor, voy a la derecha
  if (value > this.value) {
    // no tiene hijo
    if (!this.right) return false;
    // tiene hijo
    else return this.right.contains(value);
  } else {
    // caso menor, voy a la izquierda
    if (!this.left) return false;
    else return this.left.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (callback, order) {
  if (order === "post-order") {
    // izq - der - root
    if (this.left) this.left.depthFirstForEach(callback, order);
    if (this.right) this.right.depthFirstForEach(callback, order);
    callback(this.value);
  } else if (order === "pre-order") {
    // root - izq - der
    callback(this.value);
    if (this.left) this.left.depthFirstForEach(callback, order);
    if (this.right) this.right.depthFirstForEach(callback, order);
  } else {
    // "in-order"
    // izq - root - der
    if (this.left) this.left.depthFirstForEach(callback, order);
    callback(this.value);
    if (this.right) this.right.depthFirstForEach(callback, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (
  callback,
  array = []
) {
  // array [ arbol{3} ]

  // pusheando cosas (agrego los hijos a la queue)
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  callback(this.value); // console log 1

  if (array.length > 0) {
    // si hay elementos a recorrer, llamo a la recursividad
    let element = array.shift(); // arbol{2}
    element.breadthFirstForEach(callback, array); // arbol{2}.breadthFirstForEach(callback, [ arbol{3} ])
  }
};

// X vs value

/*

Cual es el tamaño del arbol?

1 + izquierda + derecha

Caso base: 
    si no hay izq y tampoco der, entonces mi valor es 1
*/

const arbol = new BinarySearchTree(20);
arbol.insert(36);
arbol.insert(15);
arbol.insert(10);
arbol.breadthFirstForEach(function (val) {
  console.log(val);
});

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};