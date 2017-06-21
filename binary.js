'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i=1; i<arr.length; i++) {
    for (let j=0; j<i; j++) {
      if (arr[i] < arr[j]) {
        let singgah = arr[j];
        arr[j] = arr[i];
        arr[i] = singgah;
      }
    }
  }
  // console.log(arr);
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  var awal = 0;
  var akhir = array.length-1;
  var tengah = Math.floor((akhir + awal)/2);

  if (search == array[tengah]) {
    return tengah;
  }

  while (search != array[tengah]) {
    while (search < array[tengah]) {
      akhir = tengah;
      tengah = Math.floor((akhir + awal)/2);

      if (search == array[tengah]) { return tengah; }
      else if (tengah == akhir) {return -1};
    }

    while (search > array[tengah]) {
      awal = tengah;
      tengah = Math.round((akhir + awal)/2);

      if (search == array[tengah]) { return tengah; }
      else if (tengah == akhir) {return -1};
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(10, arrayGenapSorted)) // 2
console.log(binary_search(33, arrayGenapSorted)) // -1

console.log(binary_search(53, arrayGanjilSorted)) // 4
console.log(binary_search(3, arrayGanjilSorted)) // 0
console.log(binary_search(2, arrayGanjilSorted)) // -1


module.exports = {
  binary_search
}
