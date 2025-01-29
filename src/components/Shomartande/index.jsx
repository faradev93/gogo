import { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import Eventcompo from "../Eventcopmp";

const formha = [
  { label: "متاهل هستم", id: 1, value: "Married" },
  { label: "خدمت رفته ام ", id: 2, value: "Military" },
  { label: "قوانین را می پذیرم", id: 3, value: "AgreeRules" },
];

export default function Shomarande() {
  const [Beshmar, setBeshamr] = useState(0);

  //
  const Increase = (e) => {
    setBeshamr(Beshmar + 1);
  };

  const Decrease = (e) => {
    if (Beshmar >= 1) {
      setBeshamr(Beshmar - 1);
    }
  };
  const Reset = (e) => {
    if (Beshmar > 20) {
      setBeshamr(2);
    } else {
      setBeshamr(1);
    }

    console.log("reset shod");
  };
  //
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500 flex flex-col :hoverfirst-letter:bg-red-500">
      <div className="w-[640px] h-[640px] bg-slate-400 rounded-2xl flex gap-6 flex-col justify-center items-center">
        <button
          onClick={Increase}
          className="border-red-600 size-20 shadow-xl font-serif hover:bg-green-500"
        >
          PLUS
        </button>
        <p className="bg-lime-500 w-40 h-40 rounded-xl flex justify-center items-center text-5xl">
          {Beshmar === 10 ? <Eventcompo /> : Beshmar}
        </p>
        <button
          onClick={Decrease}
          className="border-red-600 size-20 shadow-xl font-serif hover:bg-red-500"
        >
          MiNUS
        </button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

// function Updater(input) {
//   function setUpdater(newInput) {
//     return newInput;
//   }
//   return [input, setUpdater];
// }

// const lpg = Updater(0);
// console.log(lpg);
