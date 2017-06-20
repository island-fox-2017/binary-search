'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = arr.length-1 ; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  let indexAwal = 0;
  let indexAkhir = array.length-1;
  
  while (indexAwal <= indexAkhir) {
    let indexTengah = Math.floor((indexAwal+indexAkhir) / 2);
    let angkaTengah = array[indexTengah];
    
    if (angkaTengah < search) {
      indexAwal = indexTengah + 1;
    } else if (angkaTengah > search) {
      indexAkhir = indexTengah - 1;
    } else {
      return indexTengah;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
