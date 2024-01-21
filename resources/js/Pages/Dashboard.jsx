import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SanaolPartylist from "../Pages/assets/sanaol-partylist.jpg";
import SandiganPartylist from "../Pages/assets/sandigan-partylist.jpg";
import { Bar } from "react-chartjs-2";
export default function Dashboard(props) {
    const { auth } = props;

    const handleVote = (positionId, partyListId) => {
        // Handle the logic for casting a vote
        // You can make an API call to submit the vote to the backend
    };
    // Dummy chart data
    const dummyChartData = {
        labels: ["Candidate A", "Candidate B", "Candidate C"],
        datasets: [
            {
                label: "Votes",
                data: [30, 45, 25],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    // Dummy chart options
    const dummyChartOptions = {
        scales: {
            x: {
                type: 'category', // Use 'category' scale for the x-axis
                labels: ["Candidate A", "Candidate B", "Candidate C"],
            },
            y: {
                beginAtZero: true,
            },
        },
        legend: {
            display: true,
            position: "right",
        },
    };

    const partyLists = [
        { src: SanaolPartylist, alt: "Sanaol partylist" },
        { src: SandiganPartylist, alt: "Sandigan partylist" },
    ];
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={props.errors}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Voter Dashboard
                    </h2>
                    <h3> Hello, {auth.user.name}!</h3>
                </>
            }
        >
            <Head title="Voter Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Welcome message */}
                    {/* ... (unchanged) */}

                    {/* Section 1: View Party Lists */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2  p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Party Lists
                        </h3>
                        <div className="partylist-container flex gap-2">
                            {partyLists.map((partylist, index) => (
                                <div
                                    key={index}
                                    className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-100"
                                >
                                    <img
                                        src={partylist.src}
                                        alt={partylist.alt}
                                        className="w-100 w-full h-auto rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Cast Vote */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2  p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Cast Vote
                        </h3>
                        <form onSubmit={handleVote}>
                            <div className="mb-4">
                                <label htmlFor="position">
                                    Select Position:
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    className="form-select"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Choose a position
                                    </option>
                                    {/* Replace with dynamic data */}
                                    <option value="1">Sanaol</option>
                                    <option value="2">Sandigan</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="partyList">
                                    Select Party List:
                                </label>
                                <select
                                    id="partyList"
                                    name="partyList"
                                    className="form-select"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Choose a party list
                                    </option>
                                    {/* Replace with dynamic data */}
                                    <option value="A">Party List A</option>
                                    <option value="B">Party List B</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Cast Vote
                            </button>
                        </form>
                    </div>

                    {/* Section 3: Real-time Voting Results */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2 p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Live Results
                        </h3>

                        

                        {/* Display real-time voting results for Vice President */}
                        <div className="mb-4">
                            <h4 className="text-md font-semibold mb-2">
                                Vice President
                            </h4>
                            {/* Add your chart or visualization component for Vice President's results here */}
                        </div>

                        {/* Display real-time voting results for Auditor */}
                        <div className="mb-4">
                            <h4 className="text-md font-semibold mb-2">
                                Auditor
                            </h4>
                            {/* Add your chart or visualization component for Auditor's results here */}
                        </div>

                        {/* Display real-time voting results for PRO */}
                        <div className="mb-4">
                            <h4 className="text-md font-semibold mb-2">PRO</h4>
                            {/* Add your chart or visualization component for PRO's results here */}
                        </div>

                        {/* Display real-time voting results for Secretary */}
                        <div>
                            <h4 className="text-md font-semibold mb-2">
                                Secretary
                            </h4>
                            {/* Add your chart or visualization component for Secretary's results here */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
