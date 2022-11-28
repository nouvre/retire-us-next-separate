import React from "react";
import { cx } from "@/util/helpers";

interface ITypographyProps extends React.AllHTMLAttributes<HTMLElement> {
    className?: string;
    grayed?: boolean;
    bg?: string;
    outElement?: React.ReactNode;
}

export const SectionContainer = ({
    className,
    grayed,
    bg,
    outElement,
    ...props
}: ITypographyProps) => (
    <div
        className={cx(
            "relative w-full z-[2] px-6",
            grayed ? "bg-[#F7F9FC]" : bg ? bg : "bg-white"
        )}
    >
        <div
            className={cx(
                "w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto relative py-[60px] md:py-[120px]",
                className
            )}
        >
            {props.children}
        </div>

        {outElement}
    </div>
);
