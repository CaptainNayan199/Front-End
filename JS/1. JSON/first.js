// JSON stands for JavaScript Object Notation. It is not the same as JS object, but similar.
// JSON is highyl common in network calls, api calls, and data storage.
// There are two popular methods :
// 1. JSON.stringfy() -> converts JSON objects to JS object.
// 2. JSON.parse() -> converts JS objects to JSON objects.
// JSON is data format, where as JS object is a data structure.

// This below is JS object.
let jsObj = {
  firstName: 'Nayan',
  lastName: 'Mars'
}

// This below is JSON object. Key value all should be enclosed in a double quotation.
let jsonObj = {
  "name": "Nayan",
  "thar": "Mars"
}


let newStr = JSON.stringify(jsObj) // converting to normal object(string)
console.log(newStr);
console.log(typeof newStr);


let newObj = JSON.parse(newStr) // converting string back to object.
console.log(newObj);
console.log(typeof newObj);

