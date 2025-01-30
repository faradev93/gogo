import { useState } from "react";

export default function Counter2222() {
  const [counter, setCounter] = useState(0);
  let boro = (e) => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button className="outline-2 outline-dashed mb-3" onClick={boro}>
        اضافه شو بی ترببببببببیت
      </button>
      <p>{counter}</p>
    </div>
  );
}
