import React from "react";
import CastedVoteLayout from "./CastedVoteLayout";

const CastedVotes = ({ showModal, onClose, position }) => {
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
                                    <h3>Casted Votes</h3>
                                    <button
                                        className="ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => showModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <CastedVoteLayout position="President" name="Faith Cabanlit"/>
                                    <CastedVoteLayout position="Vice President" name="Gagap"/>
                                    <CastedVoteLayout position="Secretary" name="Acuna"/>
                                    <CastedVoteLayout position="Treasurer" name="Caagahon"/>
                                    <CastedVoteLayout position="Auditor" name="Sulleza"/>
                                    <CastedVoteLayout position="P.R.O" name="Latorre"/>
                                    
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

export default CastedVotes;
