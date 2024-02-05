import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import TablePagination from "./TablePagination";
const CandidateTable = () => {
    const [candidates, setCandidates] = useState([]);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

    return (
        <div>
            <div className="mx-4 mb-3">
                <label
                    htmlFor="search"
                    className="text-gray-700 dark:text-white"
                >
                    Search:
                </label>
                <input
                    type="text"
                    id="search"
                    // value={searchInput}
                    // onChange={handleSearch}
                    className="w-100 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="search candidate..."
                />
            </div>
            <div className="relative overflow-x-auto shadow-sm sm:rounded-lg mx-4 p-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="p-2">
                        <tr>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Partylist</th>
                            <th>Platform</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <td>1</td>
                            <td>Faith Cabanlit</td>
                            <td>Sanaol</td>
                            <td>default</td>
                            <td className="px-6 py-4">
                                <div className="d-flex gap-2">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </button>
                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() =>
                                            setShowDeleteConfirmModal(true)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr key={2}>
                            <td>2</td>
                            <td>Caagahon</td>
                            <td>Sanaol</td>
                            <td>default</td>
                            <td className="px-6 py-4">
                                <div className="d-flex gap-2">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </button>
                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() =>
                                            setShowDeleteConfirmModal(true)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr key={1}>
                            <td>1</td>
                            <td>Faith Cabanlit</td>
                            <td>Rodqiguez</td>
                            <td>default</td>
                            <td className="px-6 py-4">
                                <div className="d-flex gap-2">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </button>
                                    <button
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() =>
                                            setShowDeleteConfirmModal(true)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Delete Confirmation Modal */}
                <DeleteConfirmationModal
                    showModal={showDeleteConfirmModal}
                    onClose={() => setShowDeleteConfirmModal(false)}
                    onConfirm={() => handleDeleteCandidate(selectedCandidateId)}
                />
            </div>
            <div className="flex justify-end mx-4">
                {" "}
                <TablePagination />
            </div>
        </div>
    );
};

export default CandidateTable;
