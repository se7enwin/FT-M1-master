"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  
*/
function LinkedList() {
  this.head = null;
  this._size = 0;
}

const lista = new LinkedList(); // {}
// lista.add(10)
// lista.add("0")
function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
  let newNode = new Node(data);

  if (!this.head) this.head = newNode;
  else {
    // si existe Head:
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  this._size++;
  return newNode;
};

// lista.remove()
//
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) return null;
  // Alternativa: Consultar si la lista esta vacia, a partir de su _size.
  // if(this._size === 0) return null
  else if (!current.next) {
    // Alternativa al else if(this._size === 1)
    let aux = current.value;
    this.head = null;
    this._size--;
    return aux;
  }

  while (current.next.next) {
    current = current.next;
  }

  let aux = current.next.value;
  current.next = null;
  this._size--;
  return aux;
};

// - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
//   EJEMPLO
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.

LinkedList.prototype.search = function (data) {
  // Alternativa if(this._size === 0) return null
  if (!this.head) return null;
  let current = this.head;
  while (current) {
    // Mientras existan nodos busco/evaluo el valor.
    // Siempre evaluo si el valor del nodo es la data
    // Independientemente si es un valor o un callback
    if (current.value === data)
      return current.value; // Alternativa: return data (ya que son lo mismo, no?:)
    else if (typeof data === "function") {
      let resultado = data(current.value); // true/false
      if (resultado) {
        return current.value;
      }
    }

    current = current.next;
  }
  return null;
};

/*

// HEAD > Node 1 (fn) > Node 2 (fn) > Node 3(fn) > null
//                                                current                           

1. Recibo un valor:
lista.search(10) // 10

2. Recibo un callback: 
function decide(value){}

lista.search(decide)

*/

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) {
  let sum = 0; // 2340
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (prop, value) {
  if (typeof prop !== "string") throw TypeError("Keys must be strings"); // < AHORA LO VEMOS
  //  {instructora (prop): 'Ani'(value)}
  let position = this.hash(prop);
  // MANEJAR COLISIONES
  if (!this.buckets[position]) {
    this.buckets[position] = {};
  }

  this.buckets[position][prop] = value;
  // [ , , {instructora: "Ani"} , , ]
};

HashTable.prototype.get = function (prop) {
  let position = this.hash(prop);
  return this.buckets[position][prop];
};

HashTable.prototype.hasKey = function (prop) {
  let position = this.hash(prop);
  return this.buckets[position].hasOwnProperty(prop);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};