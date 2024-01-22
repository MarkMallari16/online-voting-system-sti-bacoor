// resources/js/components/CandidateForm.js

import React, { useState } from "react";

const CandidateForm = () => {
    
    return (
        <form  class="mb-5">
                <label
                    for="name"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                   
                />

                <label
                    for="partylist"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Partylist:
                </label>
                <input
                    type="text"
                    id="partylist"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="partylist"
                   
                    required
                />

                <label
                    for="details"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Details:
                </label>
                <textarea
                    id="details"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="details"
                   
                    
                ></textarea>

                <label
                    for="platform"
                    class="mt-2  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Platform:
                </label>
                <textarea
                    id="platform"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="platform"
                    
                ></textarea>

                <label
                    for="profile_pic"
                    class="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Profile Picture:
                </label>
                <input
                    type="file"
                    id="profile_pic"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="profile_pic"
                   
                />

              
            </form>
    );
};

export default CandidateForm;
