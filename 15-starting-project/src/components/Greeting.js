import { useState } from "react";

const Greeting = () => {
  const [isMorning, setIsMorning] = useState(false);

  const handleClick = () => {
    setIsMorning(true);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      {!isMorning && <p>Good day!</p>}
      {isMorning && <p>Good morning!</p>}
      <button onClick={handleClick}>Make it morning</button>
    </div>
  );
};

export default Greeting;
