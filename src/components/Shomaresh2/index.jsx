import { useEffect, useState } from "react"; 

export default function Shomaresh2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("ComponenetDidMount");
    // alert("مطمئنی میخای این پنجره رو ببندی؟");
    return console.log("WillUnmount");
  }, []);

  const Increase = (e) => {
    setCount(count + 1);
  };
  const Decrease = (e) => {
    setCount(count - 1);
  };
  const Reset = (e) => {
    setCount(1);
    console.log(e.target);
    console.dir(Element);
  };

  return (
    <div className="">
      <button className="outline-double ml-4" onClick={Increase}>
        Plus
      </button>
      <button className="outline-double ml-4" onClick={Decrease}>
        Minus
      </button>
      <button className="outline-double ml-4" onClick={Reset}>
        Reset
      </button>
      <p className="outline-double mt-6">{count} </p>
    </div>
  );
}
