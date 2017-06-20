'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


/*
for i = 1 to length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for
*/
function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i] ) {
        var tam = arr[j];
        arr[j] = arr[i];
        arr[i] = tam;
      }

    }
  }
  return arr
}



function binary_search (search, array) {
  // Your searching code
  var awal = 0;
  var akhir = array.length-1;
  var tengah = Math.floor((awal + akhir) / 2);

  while (awal <= akhir) {

    tengah = Math.floor((awal + akhir) / 2);

    if (search == array[tengah]) {
      return tengah;
    }

    else if (search > array[tengah]) {
      awal = tengah +1;
    }
    else if (search < array[tengah]) {
      akhir = tengah -1;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);

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
