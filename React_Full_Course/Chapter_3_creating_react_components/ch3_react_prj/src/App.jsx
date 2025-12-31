import { MyButton } from "./button";
import { MySecondButton } from "./button";
import MyButtonThird from "./button";
import { MyButtonFourth } from "./button";

// Second part :
import Hello from "./hello_dynamic";

// Random import

import Random from "./Random";

function App() {
  return (
    <div>
      <h1>Nayan Pathak</h1>
      <MyButton></MyButton>
      <MySecondButton></MySecondButton>
      <MyButtonThird></MyButtonThird>
      <MyButtonFourth></MyButtonFourth>
      <br></br>

      <Hello></Hello>
      <br></br>
      {/* <Random></Random> */}
      {/* This random number can be used multiple times as well - classic reusability, create once, use multiple times. */}

      {/* Suppose I want to make a OTP like number. */}
      {/* <br></br>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random> */}
      <Random></Random>
    </div>
  );
}

export default App;
