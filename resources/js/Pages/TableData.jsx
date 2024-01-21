import React, { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";

const TableData = ({ users, onUpdateUser, onDeleteUser, onAddUser }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
  
    const handleUserClick = (user) => {
      setSelectedUser(user);
      handleModalToggle();
    };
  
    const handleModalToggle = () => {
      setIsAddMode(false); // Reset to default mode
      setIsModalVisible(!isModalVisible);
    };
  
    const handleAddClick = () => {
      setIsAddMode(true); // Set to "Add" mode
      handleModalToggle();
    };
  
    const handleEditClick = (user) => {
      setSelectedUser(user);
      setIsAddMode(false); // Set to default mode
      setIsUpdateModalVisible(true);
    };
  
    const handleDeleteClick = (user) => {
      setSelectedUser(user);
      setIsDeleteModalVisible(true);
    };
  
    const handleUpdateConfirm = () => {
      onUpdateUser(selectedUser);
      setIsUpdateModalVisible(false);
    };
  
    const handleDeleteConfirm = () => {
      onDeleteUser(selectedUser.id);
      setIsDeleteModalVisible(false);
    };
  
    const handleAddConfirm = () => {
      // Perform the logic to add a new user
      onAddUser(/* data from the form */);
      setIsModalVisible(false);
    };
  
    const handleModalClose = () => {
      setIsUpdateModalVisible(false);
      setIsDeleteModalVisible(false);
      setIsModalVisible(false);
    };
    return (
        <>
       <div className="text-end">
        <div className="flex justify-end">
          <button
            className="bg-blue-500 font-bold px-3 py-2 rounded mb-3 flex items-center gap-2"
            onClick={handleAddClick}
          >
            <BsPersonPlusFill />
          </button>
        </div>
      </div>

      {isModalVisible && selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-xl font-semibold mb-4">
              User Details - {selectedUser.name}
            </h2>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Role:</strong> {selectedUser.user_level}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleModalToggle}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.id}
                </td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.user_level}</td>
                <td className="px-6 py-4">
                  <div className="d-flex gap-2">
                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => handleDeleteClick(user)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    );
};

export default TableData;
