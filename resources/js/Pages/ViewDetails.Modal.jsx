import React from "react";
import { FaUserCircle, FaUsers } from "react-icons/fa";
const ViewDetailsModal = ({ showModal, onClose, position }) => {
    return (
        <div>
         
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-100 my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                    <div className="flex gap-3">
                                        <h1>
                                            <FaUserCircle className="text-slate-500 text-9xl" />
                                        </h1>
                                        <div>
                                            <span className="text-slate-500">
                                                Vote
                                            </span>
                                            <h3 className="font-extrabold text-slate-600">
                                                Faith Cabanlit
                                            </h3>
                                            <div className="flex items-center gap-1">
                                                <h4 className="font-medium text-slate-500">
                                                    for
                                                </h4>
                                                <h4 className="text-slate-600 font-extrabold">
                                                    {position} STUDENT COUNCIL
                                                </h4>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaUsers className="text-slate-500 text-xl" />
                                                <span className="font-bold text-slate-600">
                                                    Sandigan Partylist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => showModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 6h-4 w- text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <h4 className="text-slate-700 font-extrabold">
                                        Campaign Platform
                                    </h4>
                                    <div className="text-slate-700">
                                        <p>
                                            1. Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Numquam expedita placeat modi
                                            repellendus repellat laudantium
                                            minus nihil delectus? Vero,
                                            consectetur?
                                        </p>
                                        <p>
                                            2. Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Numquam expedita placeat modi
                                            repellendus repellat laudantium
                                            minus nihil delectus? Vero,
                                            consectetur?
                                        </p>
                                        <p>
                                            3. Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Numquam expedita placeat modi
                                            repellendus repellat laudantium
                                            minus nihil delectus? Vero,
                                            consectetur?
                                        </p>
                                        <p>
                                            4. Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Numquam expedita placeat modi
                                            repellendus repellat laudantium
                                            minus nihil delectus? Vero,
                                            consectetur?
                                        </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default ViewDetailsModal;
