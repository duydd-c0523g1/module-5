import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((number) => number + 1);
  }

  return (
    <div>
      <h1>Đếm: {count}</h1>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
      }}>+2</button>
    </div>
  );
}
export default Counter