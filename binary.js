'use strict'
//PSEUDO CODE
// Buat sebuah fungsi yang melooping parameter itu sendiri untuk menjadi array baru
// Looping arr.length nya.
// deklarasikan indexnya dengan sebuah variabel
// buat looping array baru dari looping sebelumnya dengan ketentuan index array lama+1
// kondisikan jika array baru lebih kecil dari array lama maka aray lama akan digantikan oleh array baru
// buat variabel baru tampung untuk menampung array lama
// masukan hasil loop ke dalam variabel tampung tersebut
// return hasil looping barunya

// Buat fungsi yang akan menunjukan index dari array baru
// looping array baru
// Buat Kondisi jika array baru sama dengan parameter searchnya maka tampilkan indexnya
// jika tidak sesuai maka return -1

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length;i++){
    let min = i;
    //console.log(arr[i]);
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[min] ){
        min = j;
      }
    }
    var result = arr[i];
    arr[i] = arr[min];
    arr[min] = result;
  }
  return arr
}
console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));

function binary_search (search, array) {
  var start = 0;
  var end = array.length - 1;
  var middle = Math.floor((start+end)/2);

  while(start <= end){
    middle = Math.floor((start+end)/2);
    if(search < array[middle]){
      end = middle - 1 ;
    }
    if(search > array[middle]){
      start = middle + 1;
    }
    if(search == array[middle]){
       return middle ;
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
