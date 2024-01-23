import React, { useState, useEffect } from "react";

import { Inertia } from "@inertiajs/inertia";

const EditUserModal = ({ showModal, onClose, user }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        user_level: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_level: "",
    });

    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [event.target.name]: "",
        });
    };

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            await Inertia.put(`users/${user.id}`, userData, {
                onSuccess: () => {
                    console.log(user.id)
                    onClose(true);
                },
                onError: (errors) => {
                    console.log(user.id)
                    setErrors(errors);
                },
            });
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    useEffect(() => {
        // Set initial user data when the component mounts
        if (user && user.id) {
            setUserData({
                name: user.name,
                email: user.email,
                user_level: user.user_level,
            });
        }
    }, [user]);

    
    return (
        <div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-100">
                        <form onSubmit={submit} className="w-100">
                            <div className="relative  my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="font-semibold">
                                            Update User
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => onClose(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6">
                                        <div className="mb-6">
                                            <div className="text-left">
                                                <label
                                                    htmlFor="name-input"
                                                    className="text-gray-700 dark:text-white"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={userData.name}
                                                    onChange={handleOnChange}
                                                    id="name-input"
                                                    className={`${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                />
                                                {/* {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.name}
                                                    </p>
                                                )} */}
                                            </div>
                                            <div className="my-3 text-left">
                                                <label
                                                    htmlFor="email-input"
                                                    className="text-gray-700 dark:text-white"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={userData.email}
                                                    onChange={handleOnChange}
                                                    id="email-input"
                                                    className={`${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="my-3 text-left">
                                                <label
                                                    htmlFor="password-input"
                                                    className="text-gray-700 dark:text-white"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={userData.password}
                                                    onChange={handleOnChange}
                                                    id="password-input"
                                                    className={`${
                                                        errors.password
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                />
                                                {errors.password && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.password}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="my-3 text-left">
                                                <label
                                                    htmlFor="password_confirmation-input"
                                                    className="text-gray-700 dark:text-white"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password_confirmation"
                                                    value={
                                                        userData.password_confirmation
                                                    }
                                                    id="password_confirmation-input"
                                                    onChange={handleOnChange}
                                                    autoComplete="new-password"
                                                    className={`${
                                                        errors.password_confirmation
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                />
                                                {errors.password_confirmation && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {
                                                            errors.password_confirmation
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="role-selector"
                                                    className="text-gray-700 dark:text-white"
                                                >
                                                    Role
                                                </label>
                                                <select
                                                    id="role-selector"
                                                    name="user_level"
                                                    value={userData.user_level}
                                                    className={`${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    } bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                    onChange={handleOnChange}
                                                >
                                                    <option>Select</option>
                                                    <option value="admin">
                                                        Admin
                                                    </option>
                                                    <option value="moderator">
                                                        Moderator
                                                    </option>
                                                    <option value="voter">
                                                        Voter
                                                    </option>
                                                </select>
                                                {errors.user_level && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {errors.user_level}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => onClose(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default EditUserModal;
