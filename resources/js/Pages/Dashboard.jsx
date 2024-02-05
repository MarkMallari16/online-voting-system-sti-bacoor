import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AdminDashboard from "./AdminDashboard";
import ModeratorDashboard from "./ModeratorDashboard";
import VoterDashboard from "./VoterDashboard";

export default function Dashboard({auth,users}) {
    
    // console.log(users);
    const userLevel = auth.user.user_level;
   
    return (
        <AuthenticatedLayout auth={auth}>
            
            <Head title="Dashboard" />

            {userLevel === "admin" && <AdminDashboard users = {users}/>}
            {userLevel === "moderator" && <ModeratorDashboard users = {users}/>}
            {userLevel === "voter" && <VoterDashboard />}
        </AuthenticatedLayout>
    );
}
