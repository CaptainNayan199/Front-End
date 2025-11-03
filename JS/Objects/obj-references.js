// Objects work on based on references, not actual data.
// Copying an object copies the reference, not the actual object.
// Changes to one references affects all copies.


let first = { age: 22 }

let second = first

console.log(`first = ${first.age} & Second = ${second.age}`)

first.age = 23 // this chganges to the actual data, not the reference, hence we get second.age also as 23 because the change is done on the actual data.

console.log(`first = ${first.age} & Second = ${second.age}`)