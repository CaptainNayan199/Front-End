let Random = () => {
  // let firstNumber = (Math.random() * 9).toFixed(0);
  // let secondNumber = (Math.random() * 9).toFixed(0);
  // let thirdNumber = (Math.random() * 9).toFixed(0);
  // let fourthNumber = (Math.random() * 9).toFixed(0);
  // let fifthNumber = (Math.random() * 9).toFixed(0);
  // let sixthNumber = (Math.random() * 9).toFixed(0);
  return (
    <div>
      <span>
        Your OTPP is : {(Math.random() * 9).toFixed(0)}{" "}
        {(Math.random() * 9).toFixed(0)} {(Math.random() * 9).toFixed(0)}{" "}
        {(Math.random() * 9).toFixed(0)} {(Math.random() * 9).toFixed(0)}{" "}
        {(Math.random() * 9).toFixed(0)}{" "}
      </span>
    </div>
  );
  // <div>
  //   <label>Your OTP is : </label>
  //   <span>{firstNumber}</span> <span>{secondNumber}</span>{" "}
  //   <span>{thirdNumber}</span> <span>{fourthNumber}</span>{" "}
  //   <span>{fifthNumber}</span> <span>{sixthNumber}</span>{" "}
  // </div>

  // change in one component reflects on all the things.
};

export default Random;
