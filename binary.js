'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 28, 8]
var testArrayGanjil = [3, 31, 89, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temporary;
  for(let i = 1; i <= arr.length-1; i++ )
  {
    for(let j = 0; j <= i-1; j++)
    {
      if(arr[i] < arr[j])
      {
        temporary = arr[i];
        arr[i] = arr[j];
        arr[j] = temporary;
      }
    }
  }
  return arr;
}



function binarySearch(search, array, start, end) {

  // Your searching code

  if(start == undefined)
  {
    start = 0;
  }
  if(end == undefined)
  {
    end = array.length-1;
  }

  let mid = Math.floor((start + end)/2);
  if(end < start)
  {
    return -1;
  }
  else if(search > array[mid])
  {
    return binarySearch(search, array, mid+1, end);
  }
  else if(search < array[mid])
  {
    return binarySearch(search, array, start, mid-1);
  }
  else
  {
      return mid;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted), 'find index 8')
console.log(binarySearch(10, arrayGenapSorted), 'find index 10')
console.log(binarySearch(33, arrayGenapSorted), 'find index 33')

console.log(binarySearch(53, arrayGanjilSorted), 'find index 53')
console.log(binarySearch(3, arrayGanjilSorted), 'find index 3')
console.log(binarySearch(2, arrayGanjilSorted), 'find index 2')

//test case
const test_array1 = [13, 19, 24, 29, 32, 37, 43];
console.log(binarySearch(35, test_array1) === -1);

const test_array2 = [1, 2, 3, 4, 5];
console.log(binarySearch(3, test_array2) === 2);

const test_array3 = [100, 120, 130, 135, 150, 170];
console.log(binarySearch(135, test_array3) === 3);

const test_array4 = [13, 19, 24, 29, 32, 37, 43];
console.log(binarySearch(32, test_array4) === 4);

module.exports = {
  binarySearch
}
