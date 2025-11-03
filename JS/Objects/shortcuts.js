// Some shortcuts in js objects.

let obj = {
  name: 'Ujjwal',
  age: 23,
  isMarried: false,
  address: 'Earth'
}


// De structuring : extracting properties from objects
// In place of :

let naaam = obj.name

// we can do this

let { name } = obj
// but the variable name should be same as that in object. we can alter the varibale as that will not allow obj to find for that value.
