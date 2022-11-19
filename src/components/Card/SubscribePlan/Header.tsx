import React from "react";

const SubscribePlanCardHeader = ({
    children,
    isRecommend = false,
}: {
    children?: React.ReactNode;
    isRecommend?: boolean;
}) => (
    <div className={`flex justify-center items-center w-full h-[88px] rounded-t-[20px] font-bold text-[23px] text-center ${isRecommend ? 'bg-gradient-to-r from-[#4D7EF2] to-[#5FD4F4] text-white' : 'bg-[#DDE3F0] text-[#5A6478]'}`}>
        <p>{children}</p>
    </div>
);

export default SubscribePlanCardHeader;