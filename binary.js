'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
// var arrayGenapSorted = sorted;
// var arrayGanjilSorted = sorted;
function ownSort(arr) {


//yg dilakukan
  //buat perulangan sebanyak isi array
  //bandingkan isi array, yang paling kecil push duluan
  //return hasil sortir

  var sorted = [];
// for(var i = 0; i < arr.length; i++){
while(arr.length > 0){
  var minimum = Math.min(...arr);
  //console.log(minimum);
  sorted.push(minimum);
  var indeks = arr.indexOf(Math.min(...arr));
  //console.log(indeks);
  arr.splice(indeks,1);
  // console.log(arr.splice(indeks));
}
//console.log(sorted);
  return sorted;
}

function binary_search (search, array) {
  // Your searching code
  for(let i = 0; i < array.length; i++){
    if(search == array[i]){
      return array.indexOf(search)
    }
  }
  return -1
  //return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil)
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
