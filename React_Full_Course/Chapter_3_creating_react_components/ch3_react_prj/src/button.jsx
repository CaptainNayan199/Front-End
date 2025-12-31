//function MyButton() {
//  return <button>Click me PLease</button>;
//}

//export default MyButton;

// Exporting can be done this way as well :

// export default function MyButton() {
//   return <button>Click Me</button>;
// }

// Suppose we have similar components(multiple components in a similar page, then we can use only export ) - IT is called named export.

export function MyButton() {
  return <button>Click Me</button>;
}

export function MySecondButton() {
  return <button>Second Click</button>;
}

// But while importing we should use curly braces to handle this import.

// What if i want both, normal default export as well, and also named export.

function MyButtonThird() {
  return <button>Third Button</button>;
}

export default MyButtonThird;

export function MyButtonFourth() {
  return <button>Fourth Button</button>;
}
