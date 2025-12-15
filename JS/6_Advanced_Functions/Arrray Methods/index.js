// There are several array methods.

// Filter - synatx :
// array.filter((value, index) => return true/false)


let newArr = [2, 4, 5, 7, 9, 10, 13, 15, 18]

let odd = newArr.filter((num, index) => {
  if (num % 2 === 1) {
    return true
  } else {
    return false
  }
})



let even = newArr.filter((num, index) => num % 2 === 0)
console.log(even)

console.log(odd)




// Map : synatx :
// Array.map((value) => return newValue)

let square = newArr.map(num => num * num)
console.log(square)