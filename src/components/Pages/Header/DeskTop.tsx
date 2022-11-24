import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { gotoProfileStep, signOut } from "@/store/auth/action";
import {
    OutlineButtonLink,
    OutlineButton,
} from "@/components/Buttons/WhiteButtons";
import { cx } from "@/util/helpers";
import { ApplicationState } from "@/store/index";
import { navigation } from "@/constants/variables";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

interface HeaderProps {
    token: string | null;
    scroll: number;
    opacity: boolean;
    blueOnScroll?: boolean;
}

const DeskTop: React.FC<HeaderProps> = ({
    token,
    scroll,
    opacity,
    blueOnScroll,
}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const isBlueVersion = !opacity || (scroll > 60 && blueOnScroll);

    const gotoDashboard = () => {
        if (user?.role == "admin") {
            router.push("/admin/dashboard");
        } else {
            dispatch(gotoProfileStep());
        }
    };

    return (
        <div
            className={`w-full max-w-[1496px] px-[24px] h-[86px] justify-between items-center m-auto box-border hidden md:hidden lg:flex py-4 font-Lato`}
        >
            <Link href={"/"}>
                {!isBlueVersion ? (
                    <Image
                        className="w-[184px]"
                        src="assets/images/logo-white.svg"
                        alt="Logo White"
                    />
                ) : (
                    <Image
                        className="w-[184px]"
                        src="assets/images/logo-blue.svg"
                        alt="Logo Blue"
                    />
                )}
            </Link>
            <div
                className={cx(
                    "h-10 flex items-center gap-[20px] xl:gap-10 text-lg leading-[30px]",
                    !isBlueVersion ? "text-white" : "text-[#001F55]"
                )}
            >
                {navigation.map((item, index) => (
                    <Link
                        key={`navigation_${index}`}
                        href={item.link}
                        className={`no-underline ${isBlueVersion ? "" : "hover:text-[#001F55]"
                            }`}
                    >
                        {item.text}
                    </Link>
                ))}
                {
                    token && (
                        <div
                            /*to="/dashboard"*/
                            className={`no-underline cursor-pointer ${isBlueVersion ? "" : "hover:text-[#001F55]"
                                }`}
                            onClick={() => gotoDashboard()}
                        >
                            Dashboard
                        </div>
                    )
                    // <Link
                    //     to="/dashboard"
                    //     className={`no-underline ${isBlueVersion ? "" : "hover:text-[#001F55]"
                    //         }`}
                    // >
                    //     Dashboard
                    // </Link>
                }
            </div>
            <div className="h-10 flex items-center text-white 2xl:text-base text-sm">
                {token ? (
                    <OutlineButton
                        btnText="Logout"
                        onClick={() => dispatch(signOut())}
                        icon={<span>&#183;&#183;</span>}
                        blue={isBlueVersion}
                    />
                ) : (
                    <OutlineButtonLink
                        href="/signin"
                        btnText="Login"
                        icon={<span>&#183;&#183;</span>}
                        blue={isBlueVersion}
                    />
                )}
            </div>
        </div>
    );
};

export default DeskTop;
