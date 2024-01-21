import { Link, Head } from "@inertiajs/react";
import SHSLogo from "../Pages/assets/Logo.png";
import MainPage from "../Pages/assets/mainPage2.png";
import { useState,useEffect } from "react";
import Footer from "./Footer";
export default function Welcome(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <img src={SHSLogo} className="w-20" />
            <Head title="Welcome" />
            <div
                className={`relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white ${
                    isScrolled ? "scrolled" : ""
                }`}
            >
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className={`font-semibold no-underline ${
                                    isScrolled ? "text-white" : "text-gray-600"
                                } hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm`}
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className={`ml-4 font-semibold no-underline text-gray-600 bg-amber-400 px-3 py-2 rounded-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm ${
                                    isScrolled ? "text-white" : "text-gray-600"
                                } hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm}`}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="main-page-container m-3">
                    <img src={MainPage} alt="Logo"className="rounded-md" />
                </div>

               
            </div>
            <Footer/>
            <style>{`
                /* ... Your existing styles ... */

                .scrolled .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }

                .fade-out {
                    opacity: 0;
                }

                .fade-in {
                    opacity: 1;
                }

                /* ... Your existing dark mode styles ... */
            `}</style>
        </>
    );
}
