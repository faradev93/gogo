import { useEffect, useState } from "react";

export default function Showmatn() {
  const [show, setShow] = useState(false);

  async function getdata() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const tabdil = await data.json();
      console.log(tabdil);
    } catch (error) {
      console.error(`یوخدی` + error);
    }
  }

  useEffect(() => {
    getdata();
  }, [show]);

  const taghier = (eX) => {
    setShow(eX.target.checked);
  };
  return (
    <div className="select-none bg-slate-600">
      <label htmlFor="sx">
        {show ? <p>salamzzz</p> : null}
        <input type="checkbox" onChange={taghier} id="sx" />
      </label>
    </div>
  );
}
