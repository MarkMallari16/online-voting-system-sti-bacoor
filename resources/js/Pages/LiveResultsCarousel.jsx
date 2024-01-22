import React, { useState } from "react";

import BarChart from "./BarChart";

const LiveResultsCarousel = ({ chartData, chartOptions }) => {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2 p-2">
            {/* Render the charts dynamically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {chartData.map((chart, index) => (
                    <div key={index} className="mb-4">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3">
                            <h4 className="text-lg text-center">{`Position: ${chart.position}`}</h4>
                            <BarChart data={chart} options={chartOptions} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveResultsCarousel;
