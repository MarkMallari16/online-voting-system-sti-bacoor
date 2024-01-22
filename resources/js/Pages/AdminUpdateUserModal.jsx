import React, { useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";

export default function AdminUpdateUserModal() {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        role: "admin", // Set the default role
    });
    const openModal = () => {
        // Set initial data for the user being edited
        // You can get the user data from your API or state
        setUserData({
            name: "Initial Name",
            email: "initial@email.com",
            password: "initialpassword",
            role: "admin",
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleUpdate = () => {
        // Implement your update logic here
        // You can call an API to update the user with the new data, update the state, etc.
        console.log("Updating user with data:", userData);
        closeModal();
    };
    return (
        <>
          

            {showModal && (
                <>
                    {/* ... (your modal code) */}
                    {/* Modify input values to be controlled by state */}
                    <input
                        type="text"
                        id="name-input"
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    {/* ... (other input fields) */}

                    <button
                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    {/* ... (rest of your modal code) */}
                </>
            )}
        </>
    );
}
