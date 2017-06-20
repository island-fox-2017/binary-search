'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8] // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55] // [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

function ownSort(arr) {
  let swap = 0;
  for (var i = 1; i <=arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
    console.log(arr);
    return arr
  }

function binary_search (search, array) {
  let awal = 0;
  let akhir = array.length-1;
  // let tamp = 0;

  while (awal<=akhir) {
    let tengah = Math.floor(akhir-awal/2)
     if (array[tengah]<search) {
       awal = tengah + 1
     }else if(array[tengah]>search){
       akhir = tengah -1
     }else {
       return tengah
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
