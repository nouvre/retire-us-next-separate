import React from "react";
import Link from "next/link";
import Menu from "@2fd/ant-design-icons/lib/Menu";
import Account from "@2fd/ant-design-icons/lib/Account";
import Image from '@/components/common/Image';

interface HeaderProps {
    drawerOpen: () => void;
    scroll: number;
    opacity: boolean;
    blueOnScroll?: boolean;
}

const Mobile: React.FC<HeaderProps> = ({
    drawerOpen,
    scroll,
    opacity,
    blueOnScroll,
}) => {
    const isBlueVersion = !opacity || (scroll > 60 && blueOnScroll);

    return (
        <div className="flex md:flex lg:hidden w-full h-[60px] justify-center px-6 items-center">
            <Link href={"/"} className="h-6 flex flex-grow">
                {!isBlueVersion ? (
                    <Image
                        className="w-[138px]"
                        src="assets/images/logo-white.svg"
                        alt="Logo White"
                    />
                ) : (
                    <Image
                        className="w-[138px]"
                        src="/assets/images/logo-blue.svg"
                        alt="Logo Blue"
                    />
                )}
            </Link>
            <div className="flex justify-center items-center gap-2">
                <Link
                    href="/signin"
                    className={`flex justify-center items-center w-[44px] h-[44px] rounded-full border cursor-pointer ${
                        isBlueVersion ? "border-[#001F55]" : "border-white"
                    }`}
                >
                    <Account
                        className={`text-[24px] ${
                            isBlueVersion ? "text-[#001F55]" : "text-white"
                        }`}
                    />
                </Link>
                <button
                    className={`flex justify-center items-center w-[44px] h-[44px] rounded-full border cursor-pointer ${
                        isBlueVersion ? "border-[#001F55]" : "border-white"
                    }`}
                    onClick={() => drawerOpen()}
                >
                    <Menu
                        className={`text-[24px] ${
                            isBlueVersion ? "text-[#001F55]" : "text-white"
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Mobile;
