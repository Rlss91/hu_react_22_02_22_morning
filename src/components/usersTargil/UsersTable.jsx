import { useState, Fragment } from "react";
import UserEditPopup from "./UserEditPopup/UserEditPopup";
import UserRow from "./UserRow";

const originalUsersArr = [
  { name: "kenny", email: "kenny@gmail.com", password: "1234", id: 1 },
  { name: "eden", email: "eden@gmail.com", password: "1234", id: 2 },
  { name: "shai", email: "shai@gmail.com", password: "1234", id: 3 },
  { name: "din", email: "din@gmail.com", password: "1234", id: 4 },
];

const UsersTable = () => {
  const [userArr, setUserArr] = useState(originalUsersArr);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleDeleteUser = (id) => {
    let newUsersArr = userArr.filter((item) => {
      return item.id !== id;
    });
    setUserArr(newUsersArr);
    console.log("newUsersArr", newUsersArr);
  };

  const handleEditUser = (id) => {
    console.log("id to be edit", id);
    //option 1
    /*
    let newUserArr = userArr.filter((item) => {
      return item.id === id;
    });
    console.log("newUserArr", newUserArr);
    if (newUserArr.length > 0) {
      setSelectedUser({...newUserArr[0]});
    }*/
    //option2
    let newUser = userArr.find((item) => {
      return item.id === id;
    });
    console.log("newUser", newUser);
    //! newUser.name = "111111";
    //! console.log("userArr", userArr);
    if (newUser) {
      setSelectedUser({ ...newUser });
    }
  };

  const handleUpdateUser = (name, email, password, id) => {
    //copy by reference
    // let newUserArr = [...userArr];
    //real copy
    let newUserArr = userArr.map((item) => {
      return { ...item };
    });
    let newUser = newUserArr.find((item) => {
      return item.id === id;
    });
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    setUserArr(newUserArr);
    setSelectedUser(null);
  };

  return (
    <Fragment>
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
                onEdit={handleEditUser}
              ></UserRow>
            );
          })}
        </tbody>
      </table>
      {selectedUser !== null && (
        <UserEditPopup
          name={selectedUser.name}
          email={selectedUser.email}
          password={selectedUser.password}
          id={selectedUser.id}
          onUpdateUser={handleUpdateUser}
        ></UserEditPopup>
      )}
    </Fragment>
  );
};

export default UsersTable;
