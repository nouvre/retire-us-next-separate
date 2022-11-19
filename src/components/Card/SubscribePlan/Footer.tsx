import React from "react";

const SubscribePlanCardFooter = ({
    handleClick,
}: {
    handleClick: () => void;
}) => {
    return (
        <div className="w-full p-6 pb-8 absolute bottom-0">
            <div
                className="flex w-full h-[60px] justify-center items-center rounded-[60px] bg-[#001F55] text-white text-[18px] font-bold cursor-pointer"
                onClick={handleClick}
            >
                Choose this plan
            </div>
            <p className="text-[16px] text-[#A2ACBE] leading-6 pt-6">
                *After a year of service your subscription resets with an annual
                Planning Review
            </p>
        </div>
    );
};

export default SubscribePlanCardFooter;
