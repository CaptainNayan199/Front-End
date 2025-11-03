let obj = {
  name: "Nayan",
  age: 23,
  address: 'Earth'
}

// This above is an classic example of an Object. Used to keep related propoerties of any things(objects). Kept in key value way.
// Can be accessed by using . operator. Or by using sa square bracket as well.

console.log(obj.address)
console.log(obj['name']);

// We can add or modify the current value in an object as well, that is object is mutable.

obj.name = "Ujjwal"
console.log(obj.name)

obj.isMarried = false
console.log(obj['isMarried']);

// Items can be deleted using delete keywords

delete obj.isMarried
console.log(obj.isMarried)

