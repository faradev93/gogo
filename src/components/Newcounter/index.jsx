import { useState } from "react";
import Test from "../Test";

export default function Newcounter() {
  const [count, setCount] = useState(0);
  const Increment = (e) => {
    setCount(count + 1);
  };

  const Decrement = (e) => {
    count >= 1 ? setCount(count - 1) : count;
  };

  const Reset = (e) => {
    count >= 10 ? setCount(0) : count;
  };
  return (
    <div className="flex flex-col bg-lime-300 w-[300px] h-[300px] rounded-3xl justify-center items-center border-cyan-700 border-spacing-3 border-2 ">
      <button
        className="border-green-400 border-2 p-4 hover:bg-green-950 transition duration-[1s]"
        onClick={Increment}
      >
        ++
      </button>
      <h1 className="text-2xl bg-black p-5 m-2 rounded-md h-[50px] text-center flex justify-center items-center text-white font-bold">
        {count === 15 ? <Test data={"ali"}/> : count}
      </h1>
      <button
        className="border-red-400 border-2 p-5 hover:bg-red-700 transition duration-[1s]"
        onClick={Decrement}
      >
        --
      </button>
      <button className="border-pink-400 border-2 p-2 mt-2" onClick={Reset}>
        RST
      </button>
      
    </div>
  );
}
