import { useEffect, useState } from "react";

export default function Buttontest() {
  const [neshan, setNeshan] = useState("سلام فرامرز");
  const handle = (e) => {
    setNeshan("خدافظظظظظظ ");
  };

  return (
    <div>
      <p>{neshan}</p>
      <button clas onClick={handle}>
        +
      </button>
    </div>
  );
}
