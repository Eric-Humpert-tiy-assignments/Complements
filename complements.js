// Write a method complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(arr, number){
  for (var val of arr) {
    for (var val2 of arr) {
      if (val + val2 === number){
        return true;
      }      
    }
  }
  return false;
}



var odds = [1, 3, 5, 7, 9, 11]
var ints = [-11, 40, 17, -5, -1, -11, 2, 9]

console.assert( complements(odds, 4) === true, "first" )
console.assert( complements(odds, 1) === false, "second" )
console.assert( complements(ints, -22) === true, "third" )
console.assert( complements(ints, 16) === true, "fourth" )
console.assert( complements(ints, 40) === false, "fifth" )
