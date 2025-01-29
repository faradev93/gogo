import { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(false);

  const handleCC = (e) => {
    setShow(e.target.checked);
  };

  return (
    <div>
      <input type="checkbox" id="check-one" onClick={handleCC} />
      {show ? <p>Test3</p> : null}
    </div>
  );
}
