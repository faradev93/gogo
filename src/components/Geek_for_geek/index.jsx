import { useEffect, useState } from "react";

export default function Geek_for_geek() {
  const [user, setUser] = useState([]);

  async function get_DATA() {
    try {
      const ResponsE = await fetch("https://reqres.in/api/users?page=1");
      const ConverT = await ResponsE.json();
      setUser(ConverT.data);
    } catch (error) {
      console.log(`NOT ` + error);
    }
  }
  get_DATA();
  useEffect(() => {
    get_DATA;
  }, []);

  return (
    <div>
      {user ? (
        <table border={1}>
          <thead>
            جدول فضولی
            <tbody className="bg-red-500">کصشریجات</tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Last Name</td>
              <td>Mail</td>
              <td>Aks</td>
            </tr>
          </thead>
          {user.map((KGB) => {
            return (
              <tr>
                <td>{KGB.id}</td>
                <td>{KGB.first_name}</td>
                <td>{KGB.last_name}</td>
                <td>{KGB.email}</td>
                <td>
                  <img src={KGB.avatar} alt="Picture NOT FOUND" />
                </td>
              </tr>
            );
          })}
        </table>
      ) : null}
    </div>
  );
}
