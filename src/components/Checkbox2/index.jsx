import { use, useState } from "react";

export default function Checkbox2() {
  const [show, setShow] = useState(false);

  const handle = (e) => {
    setShow(e.target.checked);
  };

  return (
    <div className="select-none">
      <label htmlFor="check">{show ? "salam" : "KOskesh Tahmineh"}</label>
      <input type="checkbox" id="check" onChange={handle} />
    </div>
  );
}
