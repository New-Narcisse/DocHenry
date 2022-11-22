'use strict'
// No cambies los nombres de las funciones.


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if (array.length < 2) {
    return array;
  }
  let pivot = array[Math.floor(Math.random() * array.length)];

  let left = [];
  let right = [];
  let equal = [];

  for(let i = 0; i < array.length; i++){
    if( array[i] < pivot){
      left.push(array[i])
    }else if( array[i] > pivot){
      right.push(array[i])
    }else {
      equal.push(array[i])
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function merge(left, right) {
    let ordenado = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into ordenado
      if (left[0] < right[0]) {
        ordenado.push(left.shift())
      } else {
        ordenado.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...ordenado, ...left, ...right]
  }
  // Base case
  if (array.length <= 1) return array
  let mid = Math.floor(array.length / 2)
  // Recursive calls
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))
  return merge(left, right)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
