'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let sort =[];
  var pembanding;
  while (arr.length != 0){
        var minimumArray = Math.min(...arr)
        sort.push(minimumArray)
        arr.splice(arr.indexOf(minimumArray),1)
  }
  return sort;
}

function binary_search (search, array) {
  // Your searching code
  var start = array[0];
  var end = array[array.length-1];
  while(start <= end){
    var mid =Math.floor((array.indexOf(end)+ array.indexOf(start))/2)
    if (array[mid] == search) {
        return mid;
    }else if (array[mid] < search){
      start = array[mid+1]
    }else if (array[mid] > search){
     end = array[mid-1]
   }
  }
  return -1;
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

module.exports = {
  binary_search
}
