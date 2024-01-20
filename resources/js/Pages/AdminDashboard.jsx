import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SidebarComponent from "./SidebarComponent";
import { useReactTable } from '@tanstack/react-table'


const AdminDashboard = (props) => {
    const table = useReactTable()
    const { auth } = props;
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Hello, Admin
                </h2>
            }
        >
            
           
            <SidebarComponent />
        </AuthenticatedLayout>
    );
};

export default AdminDashboard;
