import { useEffect } from "react";

export default function Checkbox(props) {
  useEffect(() => {
    console.log("ComponentDidMount.");
    return console.log("componentWillUnmount..");
  }, []);
  return (
    <div className="select-none">
      <label htmlFor={props.data.id}>{props.data.label}</label>
      <input type="checkbox" id={props.data.id} name="" value="" />
    </div>
  );
}
