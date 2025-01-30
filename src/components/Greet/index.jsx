import { useState } from "react";

export default function Greet() {
  const [show, setShow] = useState(false);
  const handleChanges = (e) => {
    setShow(e.target.checked);
  };
  return (
    <div className="bg-lime-500 w-[250px] h-full rounded-lg">
      <input type="checkbox" id="SX" onChange={handleChanges} />
      <label className="select-none" htmlFor="SX">
        {show ? "آیا میخواهید بیشتر تمرین کنید" : null}
      </label>
    </div>
  );
}
