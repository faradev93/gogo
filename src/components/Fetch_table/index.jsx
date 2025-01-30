import { useEffect, useState } from "react";
import Table from "../Table";

export default function Fetch_Table() {
  const [users, setUsers] = useState([]);

  async function getData() {
    //
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const convert = await response.json();
    setUsers(convert);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="select-none">
      Hello
      {users.length ? (
        <table className="border-2 border-teal-800 items-center text-center">
          <tr>
            <td className="border-2 border-red-800 m-2 p-6">ID</td>
            <td className="border-2 border-red-800 m-2 p-6">Title</td>
            <td className="border-2 border-red-800 m-2 p-6">Body</td>
          </tr>

          {users.map((any) => {
            return (
              <tr className="border-2 border-gray-500 m-2 p-6">
                <td className="bg-gray-400">{any.id}</td>
                <td className="bg-gray-600 rounded-xl">{any.title}</td>
                <td>{any.body}</td>
                <td>{any.userid}</td>
              </tr>
            );
          })}
        </table>
      ) : null}
    </div>
  );
}
