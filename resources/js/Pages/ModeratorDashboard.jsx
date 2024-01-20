import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SidebarComponent from "./SidebarComponent";

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
        >
            <SidebarComponent />
        </AuthenticatedLayout>
    );
};

export default ModeratorDashboard;
