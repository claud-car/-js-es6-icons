// const myFunction = (array, a, b) => {
//   const newArray = array.slice(a, b+1);
//   return newArray;
// }
//
// // creo array e applico funzione
// const myArray = [1,2,3,4,5,6,7];
//
// let result = myFunction(myArray,1,4);
// console.log(result);

 const myArray = [1,2,3,4,5,6,7];
 let numeriRange = [];

 const newArray = (numeriRange, a, b) => {
   numeriRange = myArray.filter((num,i) => i >= a && i <= b);
  console.log(numeriRange);
}

newArray(numeriRange,3,6);
