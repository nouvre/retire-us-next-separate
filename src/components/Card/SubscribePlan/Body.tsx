import React from "react";

type SubscribePlanCardBodyContentType = {
    content: string;
}

interface SubscribePlanCardBodyProps {
    title: string;
    description: string;
    adiDescription?: string;
    contents: Array<SubscribePlanCardBodyContentType>;
}

const SubscribePlanCardBody = ({ title, description, adiDescription = '', contents }: SubscribePlanCardBodyProps) => (
    <div className="p-6">
        <div className="w-full">
            <p className="bg-gradient-to-r from-[#4D7EF2] to-[#5FD4F4] bg-clip-text font-bold text-[23px] text-transparent">{title}</p>
            <p className="text-[#000714] text-[18px] leading-[30px]">{description}</p>
            {adiDescription &&
                <p className="text-[#001F55] text-[12px] italic pt-6" >{adiDescription}</p>
            }
        </div>
        <div className="w-full border-t border-solid border-[#DDE3F0] mt-6 pb-6"></div>
        <div className="flex w-full flex-col gap-[20px]">
            {contents.map(item => (
                <div className="flex gap-4" key={item.content}>
                    <div className="w-2 h-2 bg-[#FAA942] mt-[10px] rounded-full"></div>
                    <p className="text-[#5A6478] text-[18px] leading-[30px] flex-1">{item.content}</p>
                </div>
            ))}
        </div>
    </div>
);

export default SubscribePlanCardBody;