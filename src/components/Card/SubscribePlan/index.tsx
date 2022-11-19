import React, { ReactNode } from "react";

const SubscribePlanCard = ({
    children,
    isRecommend = false,
    className,
}: {
    children?: ReactNode;
    isRecommend?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={`w-[400px] h-[998px] bg-white rounded-[20px] shadow-[0px_4px_32px_rgba(24,54,98,0.04)] relative ${className} ${
                !isRecommend ? "md:mt-[104px]" : ""
            }`}
        >
            {children}
        </div>
    );
};

export default SubscribePlanCard;
