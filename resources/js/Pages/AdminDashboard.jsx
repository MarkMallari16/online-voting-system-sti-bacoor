import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SidebarComponent from "./AdminSideBar";
import { FaUser } from "react-icons/fa";
import TableData from "./TableData";
import axios from "axios";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = (props) => {
    const { auth } = props;
   

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("/api/users");
                setUsers(response.data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchUsers();
    }, []);

    const handleUpdateUser = async (updatedUser) => {
        try {
            // Send a PUT request to update the user by ID
            await axios.put(`/api/users/${updatedUser.id}`, updatedUser);

            // Update the local state or perform any other necessary actions
            // For example, you might want to fetch the updated user list
            fetchUsers();

            console.log("User updated successfully:", updatedUser);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            // Send a DELETE request to delete the user by ID
            await axios.delete(`/api/users/${userId}`);

            // Update the local state or perform any other necessary actions
            // For example, you might want to fetch the updated user list
            fetchUsers();

            console.log("User deleted successfully with ID:", userId);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hello, Admin
                </h2>
            }
        >
            <AdminSideBar />
            <div className="flex flex-col mt-3 md:flex-row gap-6 w-full p-4 md:p-8 ">
                <div className="mb-4 bg-amber-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {9}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Admin
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-slate-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {1}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Moderators
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-cyan-200 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {2}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Voters
                        </strong>
                    </div>
                </div>
            </div>
            <div className="mx-5 overflow-x-auto">
                <TableData
                    users={users}
                    onUpdateUser={handleUpdateUser}
                    onDeleteUser={handleDeleteUser}
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default AdminDashboard;
