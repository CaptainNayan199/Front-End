// A pattern to accumulate values through looping
// Commong scenarios : sum of all the numbers in an array, create a modified copy of an array


let num = [1, 2, 4, 5, 6, 7, 8]
let sum = 0
for (let i = 0; i < num.length; i++) {
  sum = sum + num[i]
}
console.log(sum)