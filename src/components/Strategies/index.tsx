import React from "react";
import { FillButtonLink } from "../Buttons/WhiteButtons";

interface StrategiesProps {
    background: string;
    title: string;
    strategies: {
        title: string;
        items: {
            text: string;
        }[];
    }[];
    cta: {
        link: string;
        text: string;
    };
}

const Strategies = ({
    background,
    title,
    strategies,
    cta,
}: StrategiesProps) => {
    return (
        <div className="w-full bg-white">
            <div className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto bg-[#EEF1F8] rounded-[40px] px-[24px] py-[60px] md:p-[80px]">
                <div className="text-[#000714] text-center text-[20px] leading-[24px] md:text-[28px] md:leading-[32px] font-bold">
                    {title}
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-y-[22px] gap-x-[40px] my-[32px] md:my-[40px]">
                    {strategies.map((strategy, index) => (
                        <div
                            className="w-full md:w-[48%] bg-white rounded-[20px] overflow-hidden"
                            key={index}
                        >
                            <div
                                style={{
                                    background,
                                }}
                                className="text-[18px] leading-[30px] md:text-[23px] md:leading-[28px] py-[15px] md:py-[20px] text-center text-[#fff]"
                            >
                                {strategy.title}
                            </div>
                            <div className="p-[24px] md:p-[32px]">
                                <ul className="list-disc marker:text-[#FAA942] pl-6">
                                    {strategy.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-[#5A6478] text-[16px] leading-[24px] md:text-[18px] md:leading-[30px] pb-[8px] md:pb-[12px]"
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <FillButtonLink
                        href={cta.link}
                        className="w-full md:w-max mx-auto py-[15px] px-6 xl:px-10"
                        blue={true}
                    >
                        <div className="flex items-center gap-4">
                            {cta.text}
                        </div>
                    </FillButtonLink>
                </div>
            </div>
        </div>
    );
};

export default Strategies;
