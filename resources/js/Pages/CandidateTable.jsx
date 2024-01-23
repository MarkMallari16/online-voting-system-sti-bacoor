import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const CandidateTable = () => {
    const [candidates, setCandidates] = useState([]);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td>Name</td>
                            <td>Name</td>
                            <td>Name</td>
                            <td>Name</td>
                            <td className="px-6 py-4">
                                <div className="d-flex gap-2">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </button>
                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => setShowDeleteConfirmModal(true)}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmationModal showModal={showDeleteConfirmModal} onClose={() => setShowDeleteConfirmModal(false)} onConfirm={() => handleDeleteCandidate(selectedCandidateId)} />
        </div>
    );
};

export default CandidateTable;
