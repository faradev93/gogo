import { useEffect, useState } from "react";

export default function Test(props) {
  const [show, setShow] = useState(false);
  console.log(show);

  console.log(props);
  useEffect(() => {
    console.log("ComponenetDidMount");

    return console.log("WillUnmount");
  }, []);
  return (
    <div className="bg-red-600 w-[140px] h-[75px] rounded-2xl border-2 border-black ">
      <p>name:{props.data}</p>
      <input type="checkbox" />
    </div>
  );
}
