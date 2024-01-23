import React from "react";

const CastedVoteLayout = ({position,name}) => {
    return (
        <>
            <div className="my-3">
                <div className="text-2xl">Position: {position}</div>
                <div className="text-xl font-bold">Name: {name}</div>
            </div>
        </>
    );
};

export default CastedVoteLayout;
