import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const fbURL = "https://www.facebook.com/stibacoorshssc";
    return (
        <div className="flex flex-col sm:flex-row justify-between p-3 bg-gray-800 text-white rounded mx-3">
            <div className="social-media-links ">
                <a href={fbURL} className="flex items-center  sm:mb-0 cursor-pointer text-white no-underline ">
                    <FaFacebookSquare className="mr-2 hover:text-yellow-400" />
                    <div className="text-sm ">
                        STI COLLEGE BACOOR SHS STUDENT COUNCIL PAGE
                    </div>
                </a>
            </div>
            <div className="other-links flex flex-col sm:flex-row gap-3 mx-5 ">
                <div>
                    <a href="#" className="text-sm text-white no-underline ">
                        About
                    </a>
                </div>
                <div>
                    <a href="#" className="text-sm text-white no-underline ">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
