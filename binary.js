'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) { //cara selection sort
  // Your sorting code
  let arrSorted = [];
  let minVal;
  while (arr.length > 0) {
    minVal = Math.min(...arr);
    arrSorted.push(minVal);
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    // console.log(arrSorted);
  }
  return arrSorted;
}


function binary_search (search, array) {
  // Your searching code
  var start = 0;
  var end = array.length-1;
  var mid = Math.floor((start+end)/ 2);
  while (start <= end) {
    mid = Math.floor((start+end)/ 2);
    if (search < array[mid]) {
      end = mid - 1;
    }
    else if (search > array[mid]) {
      start = mid + 1;
    }
    else if (search === array[mid]) {
      return mid;
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log(arrayGenapSorted);

console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
