import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import LiveResultComponent from "./LiveResultComponent";
import CandidateTable from "./CandidateTable";
import { BsFillPersonCheckFill } from "react-icons/bs";
import CandidateForm from "./CandidateForm";

const ModeratorDashboard = (props) => {
    const { auth } = props;
    const [partylists, setPartylists] = useState([]);
    const [votersCount, setVotersCount] = useState(0);
    const [moderatorsCount, setModeratorsCount] = useState(0);
    const [isVotingActive, setIsVotingActive] = useState(false);

    useEffect(() => {
        // Fetch party lists, voters count, moderators count, and voting results
        // You may need to make API calls to retrieve this data
        // Example:
        // fetchPartylists();
        // fetchVotersCount();
        // fetchModeratorsCount();
        // fetchVotingResults();
    }, []);

    // Example functions for fetching data
    const fetchPartylists = async () => {
        // Make API call to fetch party lists
        // Update state with the fetched party lists
    };

    const fetchVotersCount = async () => {
        // Make API call to fetch voters count
        // Update state with the fetched count
    };

    const fetchModeratorsCount = async () => {
        // Make API call to fetch moderators count
        // Update state with the fetched count
    };

    const fetchVotingResults = async () => {
        // Make API call to fetch voting results
        // Update state with the fetched results
    };

    const startVoting = () => {
        // Set the voting status to active
        setIsVotingActive(true);
        // You may want to set the voting start time and duration here
    };

    const endVoting = () => {
        // Set the voting status to inactive
        setIsVotingActive(false);
        // You may want to set the voting end time here
    };

    return (
        <>
            <div className="flex flex-col mt-3 md:flex-row gap-6 w-full p-4 md:p-8 ">
                <div className="mb-4 bg-amber-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {partylists.length}
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
                        {moderatorsCount}
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
                        {votersCount}
                    </h1>
                    <div className="flex items-center mt-2">
                        <BsFillPersonCheckFill />
                        <strong className="ml-2 text-3xl md:text-base">
                            No. of Voters
                        </strong>
                    </div>
                </div>
            </div>
            <div>
                <CandidateForm />
            </div>
            <div className="text-end mt-4 mb-3">
                <div className="flex justify-end items-center">
                    <button className="bg-blue-500 font-bold px-3 py-2 rounded mb-3 flex items-center gap-2">
                        <FaUserTie /> Add Candidate
                    </button>
                </div>
            </div>
            <div>
                <CandidateTable />
            </div>
            <div className="mx-4">
                <LiveResultComponent />
            </div>

            {/* Voting Controls */}
            <div className="mt-6 mx-4">
                {isVotingActive ? (
                    <button
                        className="inline-block cursor-pointer rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-red-600"
                        onClick={endVoting}
                    >
                        End Voting
                    </button>
                ) : (
                    <button
                        className="inline-block cursor-pointer rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-green-600"
                        onClick={startVoting}
                    >
                        Start Voting
                    </button>
                )}
            </div>

            {/* Voting Results */}
            <div className="mt-8 mx-4">
                <h2 className="text-xl font-semibold mb-4">Voting Results</h2>
            </div>
        </>
    );
};

export default ModeratorDashboard;
