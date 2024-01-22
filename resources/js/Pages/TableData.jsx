import React, { useState } from "react";

const TableData = ({ users}) => {
   
    console.log(users);
    return (
        <>
         

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-3">
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
                                Password
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
                                <td className="px-6 py-4">{user.password}</td>
                                <td className="px-6 py-4">{user.user_level}</td>
                                <td className="px-6 py-4">
                                    <div className="d-flex gap-2">
                                        <button
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                           
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                           
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
