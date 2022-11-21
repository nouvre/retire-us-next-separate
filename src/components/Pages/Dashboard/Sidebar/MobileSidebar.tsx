import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Account from "@2fd/ant-design-icons/lib/Account";
import { ApplicationState } from "@/store/index";
import { signOut } from "@/store/auth/action";
import { gotoProfileStep } from "@/store/auth/action";
import { get_file } from "@/util/s3getfile";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

const MobileSidebar: React.FC = (props: any) => {
    const router = useRouter();
    const msgCnt = 0;
    const missing = useSelector(
        (state: ApplicationState) => state.auth.missingDataNum
    ) as number;
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const dispatch = useDispatch();

    const [menuExpanded, setMenuExpanded] = useState(false);

    const downloadOrPreview = async (url) => {
        let dataUrl = await get_file(url);
        document.getElementById("download_btn")?.setAttribute("href", dataUrl);
        document.getElementById("download_btn")?.click();
    };

    return (
        <div
            className={`w-full fixed top-0 left-0 z-[100] bg-gradient-to-r from-[#3F68E4] to-[#5EC4F7] md:hidden ${menuExpanded ? "h-screen" : "h-[60px]"
                }`}
        >
            <div className="w-full flex flex-wrap flex-row justify-between items-center px-[20px] py-[10px] h-[60px]">
                <Link href="/" className="block">
                    <span className="sr-only">retire us</span>
                    <Image
                        className="h-[24px]"
                        src="/assets/images/logo-white.svg"
                        alt="retireus Logo"
                        title="retireus Logo"
                    />
                </Link>
                <div
                    className="h-full cursor-pointer"
                    onClick={() => {
                        setMenuExpanded(!menuExpanded);
                    }}
                >
                    {menuExpanded ? (
                        <Image
                            src="/assets/images/ico-close-circle.svg"
                            className="h-full"
                            alt="ico-close-circle"
                        />
                    ) : (
                        <Image
                            src="/assets/images/ico-collapsible-circle.svg"
                            className="h-full"
                            alt="ico-collapsible-circle"
                        />
                    )}
                </div>
            </div>

            <div
                className={`w-full transition-height duration-500 relative ${menuExpanded ? "h-[calc(100vh-60px)]" : "h-0 hidden"
                    }`}
            >
                <div className="w-full flex flex-col py-[60px]">
                    <Link
                        href={`dashboard`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/dashboard"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/dashboard-icon.svg"}
                                alt="Dashboard Icon"
                            />
                        </div>
                        <span className="text-[20px] text-white">
                            Dashboard
                        </span>
                    </Link>
                    <Link
                        href={`start-planning`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/start-planning"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/calendar-icon.svg"}
                                alt="Calendar Icon"
                            />
                        </div>
                        <span className="text-[20px] text-white">
                            Start Planning
                        </span>
                    </Link>
                    <Link
                        href={`documents`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/documents"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/document-icon.svg"}
                                alt="Document Icon"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[20px] text-white">
                                Documents
                            </span>
                            {missing > 0 && (
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-medium">
                                    {missing}
                                </div>
                            )}
                        </div>
                    </Link>
                    <Link
                        href={`support`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/support"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/wrench-icon.svg"}
                                alt="Support Icon"
                            />
                        </div>
                        <span className="text-[20px] text-white">
                            Support
                        </span>
                    </Link>
                    <Link
                        href={`contact-us`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/contact-us"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/dashboard-icon.svg"}
                                alt="Dashboard Icon"
                            />
                        </div>
                        <span className="text-[20px] text-white">
                            Contact Us
                        </span>
                    </Link>
                    {/* <Link
                        href={`message`}
                        className={`w-full flex items-center px-[20px] py-[20px] rounded-xl ${router.pathname === "/message"
                                ? "bg-white bg-opacity-20"
                                : ""
                            } `}
                        onClick={() => {
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/message-icon.svg"}
                                alt="Message Icon"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[20px] text-white">
                                Messages
                            </span>
                            {msgCnt > 0 && (
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-medium">
                                    {msgCnt}
                                </div>
                            )}
                        </div>
                    </Link> */}
                    {user && user?.profile_complete_step < 3 && (
                        <div
                            className="w-full py-2 mb-2 flex items-center text-lg text-white transition duration-100 p-2 cursor-pointer"
                            onClick={() => {
                                dispatch(gotoProfileStep());
                                setMenuExpanded(false);
                            }}
                        >
                            <div className="w-[38px]">
                                <Account className="" />
                            </div>
                            Complete Profile
                        </div>
                    )}
                    <div
                        className="w-full flex items-center px-[20px] py-[20px] cursor-pointer"
                        onClick={() => {
                            dispatch(signOut());
                            setMenuExpanded(false);
                        }}
                    >
                        <div className="w-[38px]">
                            <Image
                                src={"/assets/images/logout-icon.svg"}
                                alt="Logout Icon"
                            />
                        </div>
                        <span className="text-[20px] text-white">Log out</span>
                    </div>
                </div>

                <Image src="/assets/images/bg-retire-leaf.svg" className="w-full absolute left-0 bottom-0 z-[-1]" />
            </div>
        </div>
    );
};

export default MobileSidebar;
