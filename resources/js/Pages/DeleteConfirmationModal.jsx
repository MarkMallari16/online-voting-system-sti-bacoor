import React from "react";
import { CiWarning } from "react-icons/ci";


const DeleteConfirmationModal = ({ showModal, onClose, onConfirm }) => {
    
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-100 my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                    <div className="text-2xl flex gap-3 font-extrabold">
                                        Confirmation
                                    </div>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto justify-center">
                                    <div>
                                        <div className="flex justify-center text-9xl my-2">
                                            <CiWarning className="text-red-500" />
                                        </div>
                                        <p className="text-lg text-center">
                                            Are you sure you want to delete this data?
                                        </p>
                                        <p className="text-slate-400 text-center">This will delete this data permanently. You cannot undo this action</p>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    {/* Yes Button */}
                                    <button
                                        className="bg-red-500 text-white font-bold uppercase px-6 py-2 mr-2 rounded"
                                        onClick={onConfirm}
                                    >
                                        Yes, delete it
                                    </button>
                                    {/* No Button */}
                                    <button
                                        className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => onClose(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default DeleteConfirmationModal;
