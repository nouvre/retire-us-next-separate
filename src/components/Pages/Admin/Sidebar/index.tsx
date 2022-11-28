import React from "react";
import LogoSection from "./LogoSection";
import ViewDashboard from "@2fd/ant-design-icons/lib/ViewDashboard";
import Salesforce from "@2fd/ant-design-icons/lib/Salesforce";
import FileDocument from "@2fd/ant-design-icons/lib/FileDocument";
import Account from "@2fd/ant-design-icons/lib/Account";
import Chat from "@2fd/ant-design-icons/lib/Chat";
import Cog from "@2fd/ant-design-icons/lib/Cog";
import Link from "next/link";
import { sendEmailToUsers } from "@/store/auth/action";

const SideBar: React.FC = (props:any) => {
    const send_email = () => {
        sendEmailToUsers();
    }

    return (
        <div className="w-20 min-h-screen fixed top-0 left-0 transition duration-200 md:w-[260px] bg-[#00000061]" style={{background:`url(${window.location.protocol}//${location.host}/storage/images/sidebar_background.png)`}}>
            <LogoSection />
            <div className="w-full px-2">
                <Link href={`${props.match.url}stripe`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                    <ViewDashboard className="mr-3" />
                    Dashboard
                </Link>
                    <Link href={`${props.match.url}data-collection`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                        <FileDocument className="mr-3" />
                    Data Collection
                </Link>
                <Link href={`${props.match.url}stripe`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                    <Salesforce className="mr-3" />
                    Plan settings
                </Link>
                <Link href={`${props.match.url}users`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                    <Account className="mr-3" />
                    Users
                </Link>
                <Link href={`${props.match.url}stripe`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                    <Chat className="mr-3" />
                    Messages
                </Link>
                <Link href={`${props.match.url}stripe`} className="w-full py-2 mb-2 border-b border-[#ffffff4d] flex items-center text-lg text-white transition duration-100 hover:bg-[#c8c8c833] p-2 cursor-pointer">
                    <Cog className="mr-3" />
                    General Settings
                </Link>
                <button className="h-9 flex justify-center items-center font-semibold text-lg text-white bg-[#0A2C75] hover:bg-[#133FA4] px-6 mb-5" onClick={() =>send_email()}>Send emails.</button>
            </div>
        </div>
    );
};

export default SideBar;
