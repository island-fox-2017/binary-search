'use strict'//ini buat apa?

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];
var testArrayBaru = [1, 3, 4, 5, 7, 8 ,9];

function ownSort(arr) {
  // Your sorting code
  var length = arr.length;

  for (let i = 1; i < length; i++){
    var value = arr[i];
    for (var j = i -1; j >= 0 && arr[j] > value; j--){
      arr[j+1] = arr[j];
    }//nester for
    arr[j+1] = value;
  }//for
  return arr;
}//function

// //testing pribadi
console.log('Hasil dari insertion sort:');
console.log(ownSort([40, 18, 22, 32, 90, 10, 10, 22, 8]));
console.log(ownSort([3, 31, 89, 53, 53, 85, 77, 21, 55]));
console.log('------------------------------');

function binary_search(search, array) {
  // Your searching code
  var start = 0;
  var end = array.length-1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var midValue = array[mid];

    if (search === midValue) {
      return mid;
    }
    else if (search < midValue){
      end = mid -1;
    }
    else if (search > midValue){
      start = mid +1;
    }
  }
  return -1;
  // return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log('Genap:');
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log('Ganjil:');
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

//test pribadi
console.log('Pribadi: ');
console.log(binary_search(4, testArrayBaru))

module.exports = {
  binary_search
}
