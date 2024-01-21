import { React, useState } from "react";
import { Sidebar } from "flowbite-react";

import { BiBuoy } from "react-icons/bi";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
} from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AdminSideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (
        <>
            <button
                className={`fixed inset-0 bg-opacity-75 z-50 transition-opacity ${
                    isSidebarOpen ? "block" : "hidden"
                }`}
                onClick={toggleSidebar}
            ></button>

            <Sidebar
                aria-label="Sidebar with content separator example"
                className={`relative fixed h-full bg-gray-900 w-64 flex-shrink-0 overflow-y-auto transition-transform transform ease-in-out duration-300 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Dashboard
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={BiBuoy}>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
                
            </Sidebar>
            <button
                onClick={toggleSidebar}
                className="fixed top-5 left-5 p-2 bg-gray-800 text-white focus:outline-none z-50"
            >
               <IoIosArrowDroprightCircle />

            </button>
           
        </>
    );
};

export default AdminSideBar;
