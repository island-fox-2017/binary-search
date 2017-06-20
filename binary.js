'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let simpansementara = 0;
    for(let i = 1;i<=arr.length-1;i++){
      for(let j = 0;j<=arr.length-1;j++){
        if (arr[i] < arr[j]){
          simpansementara = arr[i];
          arr[i] = arr[j];
          arr[j] = simpansementara;
        }
      }
    }
  return arr;
}


function binarySearch (search, array) {
  // Your searching code
  let nilaiawal = 0;
  let nilaiakhir = array.length;
    while(nilaiawal <= nilaiakhir){                  // while akan berhenti ketika search == array[nilaitengah] return nilaitengah
    let nilaitengah = Math.floor((nilaiawal+nilaiakhir)/2);
      if(search > array[nilaitengah]){
        nilaiawal = nilaitengah + 1
      }else if (search < array[nilaitengah]){
        nilaiakhir = nilaitengah - 1
      }else{
        return nilaitengah
      }
    }return - 1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)
// Driver code
console.log(binarySearch(32, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))
//
// module.exports = {
//   binary_search
// }
