// // fetch("https://68ef93b4b06cc802829df654.mockapi.io/employee")
// //   .then(res => res.json())
// //   .then(data => console.log(data))


// fetch('https://68ef93b4b06cc802829df654.mockapi.io/employee', {
//   method: 'POST',
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify({
//     createdAt: '2082-06-29 - Wednesday',
//     name: 'Sita Pathak',
//     number: '325823985',
//     id : '16'
//   })
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     return fetch('https://68ef93b4b06cc802829df654.mockapi.io/employee')
//   })
//   .then(b => b.json())
//   .then(dat => console.log(dat))
  




// // fetch("https://68ee46f1df2025af7803110e.mockapi.io/employee", {
// //   method: 'POST',
// //   headers: { "content-type": "application/json" },
// //   body : JSON.stringify({createdAt : '2082-06-28 : Tuesday', name : 'Sita Pathak', number : '34764', id: '13'})
// // })
// //   .then(res => res.json())
// //   .then(data => {
// //     console.log(data)
// //     return fetch('https://68ee46f1df2025af7803110e.mockapi.io/employee')
// //   }
// // )
// //   .then(dataa => dataa.json())
// // .then(hehe => console.log(hehe))


// // fetch("https://www.apicountries.com/countries")
// //   .then(res => res.json())
// //   .then(data => {
// //     const afg = data[0]
// //     // console.log(afg);
// //     printObject(afg)
// //   })

// // function printObject(obj) {
// //   for (let key in obj) {
// //     const value = obj[key];
// //     if (typeof value === 'object' && value !== null) {
// //       console.log(`${key}:`);
// //       printObject(value); // recursion
// //     } else {
// //       console.log(`${key}: ${value}`);
// //     }
// //   }
// // }


const prompt = require("prompt-sync")();
let userInput = prompt("Please enter the id to search for employee record : ");
console.log('https://68ef93b4b06cc802829df654.mockapi.io/employee' + '/' + userInput)


