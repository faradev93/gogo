import { useEffect, useState } from "react";
import CardWrapper from "../CardWrapper";

export default function Data_with_card() {
  const [setting, setSetting] = useState([]);

  async function begir() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const Tabdil = await response.json();
      setSetting(Tabdil.data);
    } catch (error) {
      console.log(`نشد ک بشه:` + error);
    }
  }
  useEffect(() => {
    begir();
  }, []);

  return (
    <div className="flex flex-wrap gap-5">
      {setting.map((e) => {
        return (
          <div className="flex w-[350px] h-58 bg-slate-600 rounded-lg  p-2 flex flex-col justify-center items-center">
            <div className="bg-blue-100 w-[250px] h-56 flex  justify-center items-center rounded-3xl p-5">
              <img
                src={e.avatar}
                width={150}
                height={150}
                alt="No Picture Found"
              />
            </div>
            <p className="font-bold font-serif">
              First Name:<span className="bg-orange-300">{e.first_name}</span>
            </p>
            <p>
              Last Name:<span className="bg-orange-300">{e.last_name}</span>
            </p>
            <p>
              eMail:<span className="bg-orange-300">{e.email}</span>
            </p>
            <p>
              ID:<span className="bg-red-500">{e.id}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
