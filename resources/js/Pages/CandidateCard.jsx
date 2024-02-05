import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ViewDetailsModal from "./ViewDetails.Modal";
import VoteConfirmation from "./VoteConfirmation";
const CandidateCard = ({ name, partylist }) => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showVoteConfirmation, setShowVoteConfirmation] = useState(false);
    return (
        <div className="mt-3 bg-gradient-to-b from-slate-300 p-5 rounded">
            <div className="flex justify-center">
                <FaUserCircle className="text-slate-600 text-6xl sm:text-9xl rounded" />
            </div>

            <div className="text-lg sm:text-xl text-center mt-2 font-semibold text-slate-600">
                {name}
            </div>
            <div className="text-sm text-center font-medium">
                {partylist} Partylist
            </div>
            <div className="button-container text-center flex justify-center gap-3 mt-4">
                <button
                    className="bg-slate-600 px-3 py-2 rounded font-bold hover:bg-slate-700 transition ease-in duration-100 text-white"
                    onClick={() => setShowVoteConfirmation(true)}
                >
                    Vote
                </button>
                <button
                    className="hover:text-slate-500 transition ease-in duration-100"
                    onClick={() => setShowDetailsModal(true)}
                >
                    View Details
                </button>
            </div>

            <VoteConfirmation
                showModal={showVoteConfirmation}
                onClose={() => setShowVoteConfirmation(false)}
                onConfirm={() => setShowVoteConfirmation(false)}
            />
            <ViewDetailsModal
                showModal={showDetailsModal}
                onClose={() => setShowDetailsModal(false)}
                name="Candidate Name"
                position="POSITION"
                partyList="Name"
            />
            {/* <ViewDetailsModal
                showModal={showDetailsModal}
                onClose={() => setShowDetailsModal(false)}
                name="Cassandra Abaigar"
                position="PRESIDENT"
                partyList="Name"
            /> */}
        
        </div>
    );
};

export default CandidateCard;
