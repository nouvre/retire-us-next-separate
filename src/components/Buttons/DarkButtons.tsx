import React from "react";
import { Link } from "react-router-dom";
import Image from '@/components/common/Image';

interface RouterParamsProps {
    plan_id: number;
    auth_type: boolean;
}
interface DarkButtonLinkProps {
    href: string;
    params?: RouterParamsProps;
    src: string;
    btnText: string;
};
interface DarkArrowButtonProps {
    href: string;
    btnText: string;
};


export const DarkButtonLink = ({ href, params, src, btnText }: DarkButtonLinkProps) => {
    return (
        <Link
            href={{ pathname: href, query: { ...params } }}
            className="flex transition duration-300 font-bold text-[18px] text-[#FFFFFF] bg-[#001F55] hover:bg-[#173A78] hover:text-white active:bg-[#001F55] font-Lato py-[15px] px-6 rounded-full w-max mx-0"
        >
            <div className="flex items-center gap-4">
                {btnText}
                <Image src={src} alt="" className="w-6 h-6" />
            </div>
        </Link>
    );
};