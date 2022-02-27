import { useState } from "react";
import UserRow from "./UserRow";

const originalUsersArr = [
  { name: "kenny", email: "kenny@gmail.com", password: "1234", id: 1 },
  { name: "eden", email: "eden@gmail.com", password: "1234", id: 2 },
  { name: "shai", email: "shai@gmail.com", password: "1234", id: 3 },
  { name: "din", email: "din@gmail.com", password: "1234", id: 4 },
];

const UsersTable = () => {
  const [userArr, setUserArr] = useState(originalUsersArr);
  const handleDeleteUser = (id) => {
    let newUsersArr = userArr.filter((item) => {
      return item.id !== id;
    });
    setUserArr(newUsersArr);
    console.log("newUsersArr", newUsersArr);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {userArr.map((item) => {
          return (
            <UserRow
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              password={item.password}
              onDelete={handleDeleteUser}
            ></UserRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
