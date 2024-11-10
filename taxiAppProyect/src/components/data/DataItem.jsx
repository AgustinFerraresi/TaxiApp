import { useState } from "react";
import useTranslation from "../custom/useTranslation/UseTranslation";
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
  const translate = useTranslation();
  return (
    <tr className="user-item">
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          user.name
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type="email"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>
            {translate("save")}
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            {translate("edit")}
          </button>
        )}
        <button className="delete-button" onClick={() => onDelete(user.email)}>
          {translate("delete")}
        </button>
      </td>
    </tr>
  );
};

export default DataItem;
