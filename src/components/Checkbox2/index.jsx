import { useState } from "react";

export default function Checkbox2() {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setShow(e.target.checked);
  };
  return (
    <div>
      <label htmlFor="CheckBox">{show ? <p>Gooz</p> : null}</label>
      <input type="checkbox" id="CheckBox" onChange={handleChange} />
    </div>
  );
}
