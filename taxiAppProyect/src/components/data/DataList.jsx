import React, { useState } from "react";
import DataItem from "./DataItem";
import "./DataList.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import useTranslation from "../custom/useTranslation/UseTranslation";

const DataList = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [users, setUsers] = useState([
    { name: "pepito", email: "pepito@gmail.com" },
    { name: "juancito", email: "juancito@gmail.com" },
    { name: "lupita", email: "lupita@gmail.com" },
    { name: "Sofia", email: "sofia@gmail.com" },
    { name: "Isabella", email: "isabella@gmail.com" },
  ]);

  const handleDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const handleEdit = (email, updatedUser) => {
    setUsers(users.map((user) => (user.email === email ? updatedUser : user)));
  };

  const handleAdd = () => {
    if (newName && newEmail) {
      setUsers([...users, { name: newName, email: newEmail }]);
      setNewName("");
      setNewEmail("");
      setShowAddForm(false);
    }
  };

  const navigate = useNavigate()
  const translate = useTranslation();
  const HandleAddUser = () =>{
    navigate("/registerAdmin")
  }
  return (
    <div className="contenedor-principal">
      <header className="header-nav">
        <Navbar/>
      </header>
    <div className="user-list">
      <h1>{translate("user")}</h1>
      <button
        className="add-button"
        onClick={HandleAddUser}
      >{translate("add User")}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{translate("name")}</th>
            <th>{translate("email")}</th>
            <th>{translate("action")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <DataItem
              key={user.email}
              index={index}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataList;
