import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    const { auth } = props;

    const handleVote = (positionId, partyListId) => {
        // Handle the logic for casting a vote
        // You can make an API call to submit the vote to the backend
    };
    // Dummy chart data
    const dummyChartData = {
        labels: ["Option 1", "Option 2", "Option 3"],
        datasets: [
            {
                data: [30, 45, 25], // Update this data with your real-time voting results
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    // Dummy chart options
    const dummyChartOptions = {
        legend: {
            display: true,
            position: "right",
        },
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Voter Dashboard
                </h2>
            }
        >
            <Head title="Voter Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Welcome message */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4 ">
                        <div className="p-6 text-gray-900">
                            Hello, {auth.user.name}!
                        </div>
                    </div>

                    {/* Section 1: View Party Lists */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2  p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Party Lists
                        </h3>
                        <div className="partylist-container flex gap-2">
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg
                                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                                <a
                                    href="#"
                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg
                                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Cast Vote */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2  p-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Cast Vote
                        </h3>
                        <form onSubmit={(e) => handleVote(e)}>
                            {/* Example: Display a list of positions and party lists */}
                            <div className="mb-4">
                                <label htmlFor="position">
                                    Select Position:
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    className="form-select"
                                    required
                                ></select>
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
                                ></select>
                            </div>

                            {/* Add more UI elements as needed for the voting process */}

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

                        {/* Display real-time voting results for each position */}
                        {/* You can use WebSocket or polling to update the results in real-time */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
