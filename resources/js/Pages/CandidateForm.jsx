// resources/js/components/CandidateForm.js

import React, { useState } from "react";
// import { useForm } from '@inertiajs/inertia-react';
const CandidateForm = () => {
    //  const { data, setData, post, errors } = useForm({
    //     name: '',
    //     position: '',
    //     // Add other form fields
    // });

    // const handleSubmit = () => {
    //     post('/candidates', data);
    // };
    return (
        <form  className="mb-5">
                <label
                    htmlFor="name"
                    className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Candidate Name:
                </label>
                <input
                    htmlFor="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                   
                />

                <label
                    htmlFor="partylist"
                    className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Partylist:
                </label>
                <input
                    type="text"
                    id="partylist"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="partylist"
                   
                    required
                />

               

                <label
                    htmlFor="platform"
                    className="mt-2  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Platform:
                </label>
                <textarea
                    id="platform"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="platform"
                    
                ></textarea>

                <label
                    htmlFor="profile_pic"
                    className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Profile Picture:
                </label>
                <input
                    type="file"
                    id="profile_pic"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="profile_pic"
                   
                />

              
            </form>
    );
};

export default CandidateForm;
