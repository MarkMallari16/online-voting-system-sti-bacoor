import React, { useState, useEffect } from "react";

import { FaUser, FaUserShield, FaUsers } from "react-icons/fa";
import TableData from "./TableData";
import axios from "axios";
import Modal from "./AddUserModal";
import AdminUpdateUserModal from "./AdminUpdateUserModal";
const AdminDashboard = (props) => {
    const [users, setUsers] = useState([]);

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

    const usersNum = props.users;
    const voters = usersNum.filter((user) => user.user_level === "voter");
    const admins = usersNum.filter((user) => user.user_level === "admin");
    const moderators = usersNum.filter(
        (user) => user.user_level === "moderator"
    );

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
                            No. of Moderator
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

            <div>
                <Modal />
            </div>
            <div>
                <AdminUpdateUserModal />
            </div>
            <TableData
                className="mx-3"
                users={users} // Pass the local state 'users' instead of 'props.users'
            />
        </>
    );
};

export default AdminDashboard;
