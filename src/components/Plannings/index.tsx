import React from "react";
import { SectionContainer } from "../common/Wrappers";

interface PlanningProps {
    title: string;
    text: string;
    background: string;
    plannings: {
        title: string;
        items: {
            text: string;
        }[];
    }[];
}

const Plannings = ({ title, text, background, plannings }: PlanningProps) => {
    return (
        <SectionContainer className="lg:max-w-[960px] xl:max-w-[1280px]">
            <div
                className={`flex justify-center w-full min-h-[60px] md:min-h-[138px] pt-[9px] md:pt-[28px] text-[28px] leading-[32px] md:text-[56px] md:leading-[60px] text-[#F7F9FC] font-bold ${background} bg-no-repeat bg-center bg-100`}
            >
                {title}
            </div>
            <div
                className="mt-[32px] lg:mt-[60px] lg:mb-[40px] lg:px-[220px] text-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[32px] text-[#434A59]"
                dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="flex flex-wrap justify-between gap-y-[24px] lg:gap-y-[60px] mt-[40px] lg:mt-[80px]">
                {plannings.map((planning, index) => (
                    <div
                        className="w-full lg:w-[49%] pl-[50px] lg:pl-[92px] bg-service bg-service-small lg:bg-service-big bg-no-repeat bg-left-top"
                        key={index}
                    >
                        <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] text-[20px] leading-[24px] lg:text-[23px] lg:leading-[28px] font-bold">
                            {planning.title}
                        </div>
                        <ul className="mt-[4px] lg:mt-[8px]">
                            {planning.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[#434A59] ml-[24px] mt-[8px] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[32px] font-Lato list-disc marker:text-[#FAA942] marker:text-[24px]"
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Plannings;
