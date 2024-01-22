import React from "react";

const CandidateTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Candidate Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Partylist
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="col" className="px-6 py-3">
                            1
                        </td>
                        <td scope="col" className="px-6 py-3">
                            Faith Cabanlit
                        </td>
                        <td scope="col" className="px-6 py-3">
                            Sandigan
                        </td>
                        <td scope="col" className="px-6 py-3">
                            Details
                        </td>

                        <td scope="col" className="px-6 py-3">
                            Action
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;
