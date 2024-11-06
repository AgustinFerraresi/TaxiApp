import React, { useState } from "react";

const DataItem = ({ index, user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleSave = () => {
    if (editedName && editedEmail) {
      onEdit(user.email, { name: editedName, email: editedEmail });
      setIsEditing(false);
    }
  };

  return (
    <tr className="user-item">
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}/> ) : (user.name)}
      </td>

      <td>
        {isEditing ? (
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />) : (user.email)}
      </td>
      <td>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>Guardar</button>) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>Editar</button>
        )}

        <button className="delete-button" onClick={() => onDelete(user.email)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default DataItem;
