import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SidebarComponent from "./AdminSideBar";
import ModeratorSideBar from "./ModeratorSideBar";
import { FaUser } from "react-icons/fa";
const ModeratorDashboard = (props) => {
    const { auth } = props;
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hello, Moderator
                </h2>
            }
        className="z-0">
            <ModeratorSideBar />
            <div className="flex flex-col mt-3 md:flex-row gap-6 w-full p-4 md:p-8 ">
                <div className="mb-4 bg-amber-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {2}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Partylist
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-slate-300 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {1}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Moderators
                        </strong>
                    </div>
                </div>

                <div className="mb-4 bg-cyan-200 p-4 rounded w-full md:w-full lg:w-1/2 xl:w-1/3">
                    <h1 className="block font-extrabold text-2xl md:text-4xl lg:text-5xl">
                        {2}
                    </h1>
                    <div className="flex items-center mt-2">
                        <FaUser />
                        <strong className="ml-2 text-sm md:text-base">
                            No. of Voters
                        </strong>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ModeratorDashboard;
