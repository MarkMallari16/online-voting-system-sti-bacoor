import React,{useState} from "react";

const AddUserModal = ({ isOpen, onClose, onAddUser, onChange, user }) => {
  return (
    <div>
      {isOpen && (
        <div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={user.role}
              onChange={onChange}
            />
          </div>
          <button onClick={onAddUser}>Add User</button>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AddUserModal;
