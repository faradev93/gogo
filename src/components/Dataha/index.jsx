import { useEffect, useState } from "react";

export default function Dataha() {
  const [user, setUser] = useState([]);

  async function getData() {
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const tabdil = await response.json();
      setUser(tabdil.data);
    } catch (error) {
      console.error(`Heyyyyyyyy:::` + error);
    }
  }

  // EFFECT
  useEffect(() => {
    getData();
  }, []);
  //
  return (
    <div>
      {user ? (
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>email</td>
            </tr>
          </thead>

          <tbody>
            {user.map((chiToz) => {
              return (
                <tr>
                  <td>{chiToz.id}</td>
                  <td>{chiToz.first_name ? chiToz.first_name : "لود نشد"}</td>
                  <td>{chiToz.email}</td>
                  <td>
                    <img src={chiToz.avatar} alt="No Pictue" />
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
