import React from "react";
import SanaolPartylist from "../Pages/assets/sanaol-partylist.jpg";
import SandiganPartylist from "../Pages/assets/sandigan-partylist.jpg";
import CandidateCard from "./CandidateCard";
import LiveResultComponent from "./LiveResultComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const VoterDashboard = ({ auth }) => {
    const handleVote = (positionId, partyListId) => {};

    const partyLists = [
        { src: SanaolPartylist, alt: "Sanaol partylist" },
        { src: SandiganPartylist, alt: "Sandigan partylist" },
    ];

    const handleAddConfirm = () => {
        const newUserData = {
            name: newUserName,
            email: newUserEmail,
            password: newUserPassword,
            user_level: newUserRole,
        };
    
        onAddUser(newUserData);
        setIsModalVisible(false);
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Section 1: View Party Lists */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2 p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Party Lists
                        </h3>
                        <div className="partylist-container flex flex-col sm:flex-row gap-2">
                            {partyLists.map((partylist, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2"
                                >
                                    <img
                                        src={partylist.src}
                                        alt={partylist.alt}
                                        className="w-full h-auto rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <LiveResultComponent />
                    </div>

                    <div className="text-2xl mt-4 mb-2 font-bold">
                        You May Now Cast Your Vote
                    </div>
                    <div className="bg-white  p-4 w-auto">
                        <div className="mt-3 position-container text-center">
                            <h4 className="font-bold">
                                President Student Council
                            </h4>
                            <div className="text-gray-500">
                                You can only vote for one candidate
                            </div>
                        </div>
                        <div className="candidate-container flex justify-center candidate-container flex-col sm:flex-row  gap-4">
                            <CandidateCard
                                name="Cailene Gagap"
                                partylist="Sandigan Partylist"
                            />
                            <CandidateCard
                                name="Faith Cabanlit"
                                partylist="Sandigan Partylist"
                            />
                        </div>
                    </div>
                    <div className="bg-white mt-4 p-4">
                        <div className=" position-container text-center ">
                            <h4 className="font-bold">
                                Vice President Council
                            </h4>
                            <div className="text-gray-500">
                                You can only vote for one candidate
                            </div>
                        </div>
                        <div className="candidate-container flex  candidate-container  flex-col sm:flex-row justify-center gap-4">
                            <CandidateCard
                                name="Cailene Gagap"
                                partylist="Sandigan Partylist"
                            />
                            <CandidateCard
                                name="Faith Cabanlit"
                                partylist="Sandigan Partylist"
                            />
                        </div>
                    </div>
                    <div className=" bg-white mt-4 p-4">
                        <div className=" position-container text-center">
                            <h4 className="font-bold">Secretary Council</h4>
                            <div className="text-gray-500">
                                You can only vote for one candidate
                            </div>
                        </div>
                        <div className="candidate-container flex  candidate-container  flex-col sm:flex-row justify-center gap-4">
                            <CandidateCard
                                name="Cailene Gagap"
                                partylist="Sandigan Partylist"
                            />
                            <CandidateCard
                                name="Faith Cabanlit"
                                partylist="Sandigan Partylist"
                            />
                        </div>
                    </div>
                    <div className="submit-btn text-center">
                        <button className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-700 transition ease-in duration-100 text-white">
                            Submit Vote
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default VoterDashboard;
