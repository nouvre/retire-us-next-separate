import React from "react";
import Link from "next/link";
import { cx } from "../../util/helpers";
import Image from '@/components/common/Image';

interface OutlineButtonLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    href: string;
    src?: string;
    btnText?: string;
    icon?: any;
    blue?: boolean;
    className?: string;
    params?: any;
    as?: any;
}

export const OutlineButtonLink = ({
    href,
    src,
    btnText,
    icon,
    blue,
    className,
    params,
    as,
}: OutlineButtonLinkProps) => {
    console.log(href)
    return (
        <Link
            href={{ pathname: href, query: { ...params } }}
            className={cx(
                "flex items-center transition duration-300 font-bold text-lg text-center border bg-transparent font-Lato py-3 px-6 rounded-full",
                className,
                blue
                    ? "text-[#001F55] border-[#001F55] hover:text-white hover:bg-[#001F55] hover:border-[#001F55]"
                    : "text-white border-white hover:text-[#001F55] hover:border-[#001F55]"
            )}
            as={as}
            // shallow={true}
        >
            <div className="flex items-center gap-4">
                {btnText}
                {src && <Image src={src} alt="" className="w-6 h-6" />}
                {icon}
            </div>
        </Link>
    );
};

export const FillButtonLink = ({
    href,
    blue,
    className,
    params,
    ...props
}: OutlineButtonLinkProps) => {
    return (
        <Link
            href={{ pathname: href, query: { ...params } }}
            className={cx(
                "flex justify-center transition duration-300 font-bold text-lg border font-Lato rounded-full",
                className,
                blue
                    ? "text-white border-[#001F55] bg-[#001F55] hover:text-[#001F55] hover:bg-white"
                    : "text-[#001F55] border-white bg-white hover:text-white hover:border-[#001F55] hover:bg-[#001F55]"
            )}
        >
            {props.children}
        </Link>
    );
};

interface OutlineButtonProps extends React.AllHTMLAttributes<HTMLElement> {
    btnText?: string;
    icon?: any;
    blue?: boolean;
    className?: string;
    onClick: () => void;
}

export const OutlineButton = ({
    btnText,
    icon,
    blue,
    className,
    onClick,
}: OutlineButtonProps) => {
    return (
        <button
            className={cx(
                "flex transition duration-300 font-bold text-lg border bg-transparent font-Lato py-3 px-6 rounded-full",
                className,
                blue
                    ? "text-[#001F55] border-[#001F55] hover:text-white hover:bg-[#001F55] hover:border-[#001F55]"
                    : "text-white border-white hover:text-[#001F55] hover:border-[#001F55]"
            )}
            onClick={() => onClick()}
        >
            <div className="flex items-center gap-4">
                {btnText}
                {icon}
            </div>
        </button>
    );
};

export const FillButton = ({
    blue,
    className,
    onClick,
    ...props
}: OutlineButtonProps) => {
    return (
        <button
            className={cx(
                "flex justify-center transition duration-300 font-bold text-lg border font-Lato rounded-full",
                className,
                blue
                    ? "text-white border-[#001F55] bg-[#001F55] hover:text-[#001F55] hover:bg-white"
                    : "text-[#001F55] border-white bg-white hover:text-white hover:border-[#001F55] hover:bg-[#001F55]"
            )}
            onClick={() => onClick()}
        >
            {props.children}
        </button>
    );
};
