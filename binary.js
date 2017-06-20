'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  //menggunakan selection sort
  var temp = [];
  while (arr.length > 0) {
    var min = Math.min(...arr);
    var indexMin = arr.indexOf(min);
    temp.push(min);
    arr.splice(indexMin,1);
  }
  return temp;
}

function binary_search (search, array) {
  var awal = 0;
  var akhir = array.length-1;
  var tengah = Math.floor((awal + akhir)/2);
  // debugger;
  while (awal <= akhir) {
    tengah = Math.floor((awal + akhir)/2);
    if (search == array[tengah]) {
      return tengah;
    } else if (search < array[tengah]){
      akhir = tengah - 1;
    } else if (search > array[tengah]){
      awal = tengah + 1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
