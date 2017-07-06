// binary tata's recursive https://jsbin.com/kenuyafavo/1/edit?js,console
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
for (j=1; j<arr.length; j++) {
  for (i=0; i<j; i++)
  {
    var temp = 0;
    if (arr[j]<arr[i])
    {
      temp = arr[j];
      arr[j] = arr[i]
      arr[i]= temp;
    }
  }
}
return arr;
}


function binary_search (search, arr) {

  var middle = Math.floor(arr.length/2);
  if (search == arr[middle])
  {
      return middle;
  }
  if (arr.length == 1 && search != arr[middle])
  {
      return '-1';
  }
   if (search > arr[middle])
  {
      return binary_search(search, arr.slice(middle));
  }
   if (search < arr[middle])
  {
      return binary_search(search, arr.slice(0, middle));
  }

}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// arr.sort(function(value1, value2) { return value1 > value2 ;});
// return arr;  // sort for digits

// binary people's logic
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let temp;
  for(let i = 1; i <= arr.length-1; i++ )
  {
    for(let j =0; j <= i-1; j++)
    {
      if(arr[i] < arr[j])
      {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  var start = 0;
  var end = array.length-1;
  var middle = Math.floor((start+end)/2);
  debugger
  while (start<= end) {
    middle = Math.floor((start+end)/2);
    if (search == array[middle]) {
      return middle;
    }
    else if (search < array[middle]){
      end = middle -1;
    }
    else if (search > array[middle]){
      start = middle + 1;
    }
  }
  return -1;
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
