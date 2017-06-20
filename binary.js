'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let arr2 = arr;

  for (var i = 0; i <= arr2.length - 1; i++){
    for (var j = i + 1; j <= arr2.length - 1; j++){
      if (arr2[j] < arr2[i]){
        var temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  }

  return arr2;
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));

function binarySearch (search, array) {
  var first = 0;
  var last = array.length - 1;

  while (first <= last) {
    var middle = Math.floor((first + last) / 2);
    if (array[middle] == search) {
      if (array[middle] == array[middle - 1]) return middle - 1;
      else return middle;
    }
    else if (array[middle] > search) last = middle - 1;
    else if (array[middle] < search) first = middle + 1;
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))  // 0
console.log(binarySearch(10, arrayGenapSorted))  // 1
console.log(binarySearch(33, arrayGenapSorted))  // -1

console.log(binarySearch(53, arrayGanjilSorted))  // 3
console.log(binarySearch(3, arrayGanjilSorted))  // 0
console.log(binarySearch(2, arrayGanjilSorted))  // -1

module.exports = {
  binarySearch
}
