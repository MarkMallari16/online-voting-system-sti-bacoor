import React from "react";

const DeletePopUpModal = ({ isOpen, onClose, onDelete }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-md p-6 my-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
                        <div className="text-center">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Confirm Deletion
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Are you sure you want to delete this item?
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={onClose}
                                className="mr-2 px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onDelete}
                                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-500 bg-white dark:bg-gray-800 border border-red-600 dark:border-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-900 focus:outline-none focus:ring focus:border-red-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeletePopUpModal;
