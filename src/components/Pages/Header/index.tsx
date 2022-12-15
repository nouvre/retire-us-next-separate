import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import { ApplicationState } from "@/store/index";
import { signOut } from "@/store/auth/action";
import DeskTop from "./DeskTop";
import Mobile from "./Mobile";
import Drawer from "@/components/common/Drawer";
import { cx } from "@/util/helpers";
import { navigation } from "@/constants/variables";
import TopLabel from "@/components/TopLabel";

interface ComponentProps {
    opacity: boolean;
    bgOnScroll?: string;
    blueOnScroll?: boolean;
    topLabel?: any;
    handleCloseTopLabel?: any;
}

const Header: React.FC<ComponentProps> = ({
    opacity,
    bgOnScroll,
    blueOnScroll,
    topLabel,
    handleCloseTopLabel,
}) => {
    const router = useRouter();
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const token = useSelector((state: ApplicationState) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const gotoDashboard = () => {
        if (user?.role == "admin") {
            router.push("/admin/dashboard");
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="w-full">
            <div
                className={cx(
                    "fixed w-full top-0 z-[100] transition duration-300",
                    scrollTop > 60 ? bgOnScroll || "bg-white" : ""
                )}
            >
                {topLabel && (
                    <TopLabel
                        text={topLabel.text}
                        cta={topLabel.cta}
                        background={topLabel.background}
                        handleClose={handleCloseTopLabel}
                    />
                )}
                <DeskTop
                    token={token}
                    scroll={scrollTop}
                    opacity={opacity}
                    blueOnScroll={blueOnScroll}
                />
                <Mobile
                    drawerOpen={() => setDrawerVisible(true)}
                    scroll={scrollTop}
                    opacity={opacity}
                    blueOnScroll={blueOnScroll}
                />
            </div>

            <Drawer
                isOpen={drawerVisible}
                handleClose={() => setDrawerVisible(false)}
            >
                <div className="w-full lg:w-[984px] xl:w-[1280px] mx-auto px-4 font-Lato">
                    {navigation.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <div className="w-full border-b border-[#4c4c4c80] border-solid px-6 py-4 text-white font-bold text-xl hover:text-[#b0bbfb]">
                                {item.text}
                            </div>
                        </Link>
                    ))}
                    {token ? (
                        <>
                            <div
                                className="cursor-pointer"
                                onClick={() => gotoDashboard()}
                            >
                                <div className="w-full border-b border-[#4c4c4c80] border-solid px-6 py-4 text-white font-bold text-xl hover:text-[#b0bbfb]">
                                    Dashboard
                                </div>
                            </div>
                            <div
                                className="w-full border-b border-[#4c4c4c80] border-solid px-6 py-4 text-white font-bold text-xl hover:text-[#b0bbfb] cursor-pointer"
                                onClick={() => dispatch(signOut())}
                            >
                                Logout
                            </div>
                        </>
                    ) : (
                        <Link href="/signin">
                            <div className="w-full border-b border-[#4c4c4c80] border-solid px-6 py-4 text-white font-bold text-xl hover:text-[#b0bbfb]">
                                Login
                            </div>
                        </Link>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
