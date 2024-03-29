import React from "react";
import LiveResultsCarousel from "./LiveResultsCarousel";
const LiveResultComponent = () => {
    const chartData = [
        {
            position: "President",
            labels: ["Cabanlit", "Abaigar"],
            datasets: [
                {
                    label: "Cabanlit",
                    data: [19, 25],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
        {
            position: "Vice President",
            labels: ["Cabanlit", "Gagap"],
            datasets: [
                {
                    data: [19, 12],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
        {
            position: "Secretary",
            labels: ["Cangas", "Gagap"],
            datasets: [
                {
                    data: [19, 52],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
        {
            position: "Treasurer",
            labels: ["Caagahon", "Dulom"],
            datasets: [
                {
                    data: [19, 23],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
        {
            position: "Auditor",
            labels: ["Sulleza", "Morales"],
            datasets: [
                {
                    data: [19, 212],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
        {
            position: "PRO",
            labels: ["Latorre", "Rodriguez"],
            datasets: [
                {
                    data: [19, 23],
                    backgroundColor: ["#64748b", "#fbbf24"],
                },
            ],
        },
    ];

    const chartOptions = {
        indexAxis: "y",
    };
    return (
        <div>
            <div className="mt-4">
                <h3>Live Results</h3>
                <div className="w-full ">
                    <LiveResultsCarousel
                        chartData={chartData}
                        chartOptions={chartOptions}
                    />
                </div>
               
            </div>
        </div>
    );
};

export default LiveResultComponent;
