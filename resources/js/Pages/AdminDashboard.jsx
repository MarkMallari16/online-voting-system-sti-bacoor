import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FaUser, FaUserShield, FaUsers } from "react-icons/fa";
import TableData from "./TableData";
import axios from "axios";
import { BsPersonPlusFill } from "react-icons/bs";
import AddUserModal from "./AddUserModal";
const AdminDashboard = (props) => {
    const { auth } = props;
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        role: "",
    });

    const openAddUserModal = () => {
        setIsModalOpen(true);
        setNewUser({
            name: "",
            email: "",
            role: "",
        });
    };
    const [adminCount, setAdminCount] = useState(0);
    const [moderatorCount, setModeratorCount] = useState(0);
  

    const fetchUsers = async () => {
        try {
            const response = await axios.get("/api/users");
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(props.users);
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
    const handleAddUser = async () => {
        try {
            // Send a POST request to add a new user
            const response = await axios.post("/api/users", newUser);

            // Log the response
            console.log("Add User Response:", response);

            // Fetch the updated user list
            fetchUsers();

            console.log("User added successfully:", newUser);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
             
                const adminResponse = await axios.get(
                    "/api/users/count?user_level=admin"
                );
                const moderatorResponse = await axios.get(
                    "/api/users/count?user_level=moderator"
                );
                const voterResponse = await axios.get(
                    "/api/users/count?user_level=voter"
                );

          
                setAdminCount(adminResponse.data.count);
                setModeratorCount(moderatorResponse.data.count);
                setVoterCount(voterResponse.data.count);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    const usersNum = props.users;
    const voters = usersNum.filter((user) => user.user_level === "voter");
    const admins = usersNum.filter((user) => user.user_level === "admins");
    const moderators = usersNum.filter((user) => user.user_level === "moderator");


    // Store filtered voters in an object with user IDs as keys
    const votersObject = {};
    voters.forEach((voter) => {
        votersObject[voter.id] = voter;
    });
    
    const adminsObject = {};
    admins.forEach((voter) => {
        adminsObject[voter.id] = voter;
    });
   
    const moderatorsObject = {};
    moderators.forEach((voter) => {
        moderatorsObject[voter.id] = voter;
    });

    const votersCount = Object.keys(votersObject).length;
    const adminsCount = Object.keys(adminsObject).length;
    const moderatorsCount = Object.keys(moderatorsObject).length;

    
    return (
        <>
            <div className="flex flex-col mt-3 md:flex-row gap-6 w-full p-4 md:p-8 ">
                <div className="mb-4 bg-amber-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {adminsCount}
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
                        {moderatorsCount}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUserShield />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Moderators
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-cyan-200 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {votersCount}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUsers />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Voters Registered
                        </strong>
                    </div>
                </div>
            </div>
            {/* <button onClick={openAddUserModal}>Add User</button> */}
            <div className="text-end">
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 font-bold px-3 py-2 rounded mb-3 flex items-center gap-2"
                        onClick={openAddUserModal}
                    >
                        Add User
                        <BsPersonPlusFill />
                    </button>
                </div>
            </div>
            {/* <AddUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddUser={handleAddUser} // Remove the arrow function and pass the function directly
                onChange={(e) =>
                    setNewUser({ ...newUser, [e.target.name]: e.target.value })
                }
                user={newUser}
            /> */}
            <TableData
                users={users}
                onUpdateUser={handleUpdateUser}
                onDeleteUser={handleDeleteUser}
                onAddUser={handleAddUser}
                fetchUsers={fetchUsers}
            />
        </>
    );
};

export default AdminDashboard;
