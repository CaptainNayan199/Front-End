function ButtonComponent() {
  return (
    <>
      <button
        style={{
          backgroundColor: "aqua",
          color: "red",
          border: "2px solid black",
          width: "150px",
          height: "80px",
          borderRadius: "20px",
          margin: "100px",
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default ButtonComponent;

export function SecondButton() {
  return <button>I am Second Button</button>;
}

export function ThirdButton() {
  return <button>I am third Button</button>;
}

export let LastButton = () => {
  return (
    <div
      style={{
        display: "inline",
      }}
    >
      I am a container
    </div>
  );
};





