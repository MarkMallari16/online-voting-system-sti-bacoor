import React, { useState, useEffect } from "react";
import TablePagination from "./TablePagination";
import { Inertia } from "@inertiajs/inertia";

import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const TableData = ({ users }) => {
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [selectedUser,setSelectedUser] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDelete = async (selectedUser) => {
        try {
            if (!selectedUser) {
                console.error("No user selected for deletion.");
                return;
            }

            console.log("Deleting user with ID:", selectedUser.id);

            // Use the Inertia `delete` method to send a DELETE request
            await Inertia.delete(`/users/${selectedUser.id}`, {
                onSuccess: () => {
                    // Handle success
                    console.log("User deleted successfully");
                },
            });
        } catch (error) {
            console.error("Error deleting user:", error);
            // Handle error if needed
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchInput(searchTerm);
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchInput) ||
            user.email.toLowerCase().includes(searchInput) ||
            user.user_level.toLowerCase().includes(searchInput)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <AddUserModal />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-3">
                <div className="mb-4 flex justify-end flex-col">
                    <label
                        htmlFor="search"
                        className="text-gray-700 dark:text-white mb-2"
                    >
                        Search:
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={searchInput}
                        onChange={handleSearch}
                        className="w-100 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="search here..."
                    />
                </div>
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
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Updated At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((user) => (
                                <tr
                                    key={user.id}
                                    className={`${
                                        user.id % 2 === 0
                                            ? "even:bg-gray-50 even:dark:bg-gray-800"
                                            : "odd:bg-white odd:dark:bg-gray-900"
                                    } border-b dark:border-gray-700`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">{user.user_level}</td>
                                    <td className="px-6 py-4">{user.created_at}</td>
                                    <td className="px-6 py-4">{user.updated_at}</td>
                                    <td className="px-6 py-4">
                                        <div className="d-flex gap-2">
                                            <button
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                onClick={() => {
                                                    setShowEditModal(true);
                                                    setSelectedUser(user);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                onClick={() => {
                                                    setShowDeleteConfirmModal(true);
                                                    setSelectedUser(user);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    className="p-3 text-center text-lg w-100"
                                    colSpan="10"
                                >
                                    No results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <TablePagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
            <EditUserModal
                showModal={showEditModal}
                onClose={() => setShowEditModal(false)}
                user={selectedUser}
            />
           
           <DeleteConfirmationModal
                showModal={showDeleteConfirmModal}
                onClose={() => setShowDeleteConfirmModal(false)}
                onConfirm={() => handleDelete(selectedUser)}
            />
        </>
    );
};

export default TableData;