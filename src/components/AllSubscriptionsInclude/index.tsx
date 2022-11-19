import React from "react";

interface AllSubscriptionsIncludeProps {
    title: string;
    subscriptions: {
        text: string;
    }[];
}

const AllSubscriptionsInclude = ({
    title,
    subscriptions,
}: AllSubscriptionsIncludeProps) => {
    return (
        <div className="w-full bg-white px-6 py-10 md:px-[80px] md:py-[60px] rounded-[20px] md:rounded-[40px] shadow-[0px_4px_32px_rgba(24,54,98,0.04)] mb-8 md:mb-[80px]">
            <div className="pb-[20px] md:pb-[40px] text-[16px] md:text-[23px] text-[#000714] leading-[24px] md:leading-[28px] font-bold font-Lato">
                {title}
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-4">
                {subscriptions.map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-x-4 w-full md:w-[49%] pr-[40px] xl:pr-[80px]"
                    >
                        <div className="w-2 h-2 bg-[#FAA942] rounded-full mt-2" />
                        <div
                            className="text-base text-[#434A59] leading-6 flex-1"
                            dangerouslySetInnerHTML={{
                                __html: item.text,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllSubscriptionsInclude;
