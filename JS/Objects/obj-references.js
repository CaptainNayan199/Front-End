// Objects work on based on references, not actual data.
// Copying an object copies the reference, not the actual object.
// Changes to one references affects all copies.
// Comparing with either == or === (doesnt matter in case of an object), we are comparing the references so always we will get false even though there are two same object.


let first = { age: 22 }

let second = first

console.log(`first = ${first.age} & Second = ${second.age}`)

first.age = 23 // this chganges to the actual data, not the reference, hence we get second.age also as 23 because the change is done on the actual data.

console.log(`first = ${first.age} & Second = ${second.age}`)




let one = { age: 23 }
let two = { age: 23 }


console.log(one == two);
// this will give me false, surfacely we can see both has same value, but one and two holds reference(memory address - which are some distinct numbers) data, so we will get false. Comparing can be done by accessing individual memory distinctively.
