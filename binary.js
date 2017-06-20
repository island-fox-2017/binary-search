'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0 ; i < arr.length ; i++){
    let key = arr[i];
    let j = i-1;
    while(j>=0 && key < arr[j]){
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1] = key
  }
  return arr;
}

function binarySearch(search, array) {
  // Your searching code
  let indeksAwal = 0;
  let indeksAkhir = array.length-1;


  while (indeksAwal <= indeksAkhir){
    let indeksTengah = Math.floor((indeksAwal + indeksAkhir) / 2) ;
    if (array[indeksTengah] > search){
        indeksAkhir = indeksTengah-1;
    }else if (array[indeksTengah] < search) {
        indeksAwal = indeksTengah + 1;
    }else {
      return indeksTengah;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
