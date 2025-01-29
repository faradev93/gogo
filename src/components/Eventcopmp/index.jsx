import { useEffect } from "react";

const numbers = [1, 2, 3, 4, 5];
export default function Eventcompo() {
  useEffect(() => {
    console.log("ComponentDidMount.");
    return () => {
      console.log("ComponentWillUnmounT....");
    };
  }, []);
  return <li className="list-none">{numbers}</li>;
}
