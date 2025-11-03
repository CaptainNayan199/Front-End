// Some shortcuts in js objects.

let obj = {
  name: 'Ujjwal',
  age: 23,
  isMarried: false,
  address: 'Earth'
}


// *************De structuring : extracting properties from objects

// In place of :
let naaam = obj.name
console.log(naaam);

// we can do this
let { name } = obj
// but the variable name should be same as that in object. we can alter the varibale as that will not allow obj to find for that value.
console.log(name);

let { age, address, isMarried } = obj
console.log(age, address, isMarried)

// ***********Short Hand property : We can just write the key and value of that key will be the same key. But key should be from outside.

let price = prompt('Please enter the price : ')
let obj2 = {
  name: 'Gold',
  symbol: 'Au',
  price // so here, theres only price, that means it is actually like this (price: price), but we can only write price in this case. This is shorthand property of object.
}
