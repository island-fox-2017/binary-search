'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temporary;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        temporary = arr[i];
        arr[i] = arr[j];
        arr[j] = temporary;
      }
    }
  }
  return arr;
}

function binary_search(search, arr, start = 0, end = arr.length - 1) {
  // Your sorting code
  if (start > end)
    return -1;

  let mid  = Math.floor( (start + end) / 2 );
   
  if (search > arr[mid])
    return binary_search(search, arr, (mid + 1), end);
  else if (search < arr[mid])
    return binary_search(search, arr, start, (mid - 1));
  else
    return mid;
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

// Test Case - release 0
let test_array = [];
test_array = [1, 2, 3, 4, 5];
console.log(binary_search(3, test_array) === 2);

test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binary_search(35, test_array) === -1);

test_array = [100, 120, 130, 135, 150, 170];
console.log(binary_search(135, test_array) === 3);
//

module.exports = {
  binary_search
}
