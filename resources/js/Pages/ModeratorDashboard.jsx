import React, { useState, useEffect } from "react";


import { FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import LiveResultComponent from "./LiveResultComponent";
import CandidateTable from "./CandidateTable";
import { BsFillPersonCheckFill } from "react-icons/bs";

import Modal from "./CandidateAddModal";
const ModeratorDashboard = (props) => {
  

    return (
        <>
            <div className="flex flex-col mt-3 md:flex-row gap-6 w-full p-4 md:p-8 ">
                <div className="mb-4 bg-amber-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Party Lists
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-slate-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUserShield />

                        <strong className="ml-2 text-sm md:text-base">
                            No. of Moderators
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-cyan-200 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                      
                    </h1>
                    <div className="flex items-center mt-2">
                        <BsFillPersonCheckFill />
                        <strong className="ml-2 text-3xl md:text-base">
                            No. of Voters Voted
                        </strong>
                    </div>
                </div>
            </div>
            <div>
                <Modal />
            </div>
           
            <div>
                <CandidateTable />
            </div>
            <div className="mx-4">
                <LiveResultComponent />
            </div>

           
            <div className="mt-8 mx-4">
                <h2 className="text-xl font-semibold mb-4">Voting Results</h2>
            </div>
        </>
    );
};

export default ModeratorDashboard;
