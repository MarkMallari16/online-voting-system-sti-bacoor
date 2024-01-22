// resources/js/components/CandidateForm.js

import React, { useState } from "react";

const CandidateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        partylist: "",
        details: "",
        platform: "",
        profile_pic: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            profile_pic: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch("/api/candidates", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                // Candidate created successfully
                console.log("Candidate created successfully.");
            } else {
                // Handle errors
                console.error("Error creating candidate.");
            }
        } catch (error) {
            console.error("Error creating candidate:", error.message);
        }
    };

    return (
        <div className="w-50 flex justify-center">
            <form onSubmit={handleSubmit} class="mb-5">
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    value={formData.partylist}
                    onChange={handleInputChange}
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
                    value={formData.details}
                    onChange={handleInputChange}
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
                    value={formData.platform}
                    onChange={handleInputChange}
                ></textarea>

                <label
                    for="profile_pic"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Profile Picture:
                </label>
                <input
                    type="file"
                    id="profile_pic"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="profile_pic"
                    onChange={handleFileChange}
                />

                <button
                    type="submit"
                    class="mt-4  bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Create Candidate
                </button>
            </form>
        </div>
    );
};

export default CandidateForm;
