import { useEffect, useState } from "react";

export default function Fetch() {
  const [bia, setBia] = useState([]);
  //  GET DATA
  async function getData() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const tabdil = await response.json();
      setBia(tabdil.data);
    } catch (error) {
      console.log(`Rid:` + error);
    }
    getData();
  }
  //    EFFECTIVITY
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {bia ? (
        <table border={1}>
          <thead>
            <tr key={1}>
              <td>id</td>
              <td>name</td>
              <td>image</td>
            </tr>
          </thead>

          <tbody>
            {bia.map((asw) => {
              return (
                <tr key={asw.id}>
                  <td>{asw.id}</td>
                  <td>{asw.first_name}</td>
                  <td>
                    <img
                      src={asw.avatar}
                      width={150}
                      height={150}
                      className="rounded-2xl hover:border-2 border-blue-950"
                      alt="No Picture"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
