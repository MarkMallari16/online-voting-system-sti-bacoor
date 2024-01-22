import React from "react";
import { FaUserCircle } from "react-icons/fa";

const CandidateCard = ({ name, partylist }) => {
    return (
        <div className="mt-3 bg-gradient-to-b from-slate-300 p-5 rounded">
            <div className="flex justify-center">
                <FaUserCircle className="text-6xl sm:text-9xl rounded" />
            </div>
            <div className="text-lg sm:text-xl text-center mt-2 font-semibold">{name}</div>
            <div className="text-sm text-center font-semibold">{partylist} Partylist</div>
            <div className="button-container text-center flex justify-center gap-3 mt-4">
                <button className="bg-slate-500 px-3 py-2 rounded font-bold  hover:bg-gray-700 transition ease-in duration-100 text-white">Vote</button>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default CandidateCard;
