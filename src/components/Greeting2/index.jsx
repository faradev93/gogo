import { useState } from "react";

export default function Greeting2(props) {
  const [show, setShow] = useState(false);
  const change = (e) => {
    setShow(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="check11">{show ? <p>تست من</p>: null}</label>
      <input type="checkbox" id="check11" onChange={change} />
      <p>{props.name ? props.name : "nabod"}</p>
    </div>
  );
}
