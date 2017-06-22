'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var tampung = []
  var nilai = Math.min(...arr)
  var index = arr.indexOf(nilai)
  while (arr.length > 0) {
    nilai = Math.min(...arr)
    index = arr.indexOf(nilai)
    tampung.push(nilai);
    arr.splice(index,1)

  }
  return tampung
}


function binary_search (search, array) {
  for (let i = 0; i < array.length; i++) {
    if (search == array[i]) {
      return "Nilai tersebut berada di index " +i

    }
}
return "Maaf nilai tersebut tidak ada di index";
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
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
