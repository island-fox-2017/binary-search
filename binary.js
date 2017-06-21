'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


function ownSort(arr) {
  //hint: bikin nested for dimana for yang pertama index nya bernilai 1, for yang kedua indexnya bernilai 0
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if(arr[j]>arr[i]) {
        var tampung = arr[j];
        arr[j] = arr[i];
        arr[i] = tampung;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  var begin = 0;
  var end = array.length-1;
  var mid = Math.floor((begin+end)/2);
  while(begin <= end) {
    mid = Math.floor((begin+end)/2);
    if(array[mid]>search) {
      end = mid-1;
    }
    if(array[mid]<search) {
      begin = mid+1;
    }
    if(array[mid]==search) {
      return mid
    }

  }
  // Your searching code
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil);
console.log(arrayGanjilSorted);
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
