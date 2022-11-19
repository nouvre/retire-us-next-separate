import React from "react";
import { TextNormal, TextGradient, TextTitleLg } from "../Typographies";
import { FillButtonLink } from "../Buttons/WhiteButtons";
import { getImage } from "../../util/cms";
import Image from '@/components/common/Image';

interface StepsProps {
    title?: string;
    sideTitle: string;
    sideSubtitle?: string;
    sideText?: string;
    steps: {
        title: string;
        description: string;
        iconTxt?: string;
        img?: any;
    }[];
    cta?: {
        link: string;
        text: string;
    };
    reversed?: boolean;
    withArrows?: boolean;
    noTopMargin?: boolean;
    branding?: boolean;
}

const Steps = ({
    title,
    sideTitle,
    sideSubtitle,
    sideText,
    steps,
    cta,
    reversed = false,
    withArrows = false,
    noTopMargin = false,
    branding = false,
}: StepsProps) => {
    return (
        <div
            className={`relative w-full z-[2] bg-white px-6 ${
                noTopMargin
                    ? "pb-[60px] md:pb-[120px]"
                    : "py-[60px] md:py-[120px]"
            }`}
        >
            {title && (
                <TextTitleLg className="sm:w-full md:w-[700px] mx-auto pb-[40px] md:pb-[80px]">
                    {title}
                </TextTitleLg>
            )}

            <div
                className={`w-full lg:max-w-[1024px] xl:max-w-[1280px] mx-auto flex flex-col ${
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } justify-between z-10`}
            >
                <h3 className="w-full lg:w-[40%] lg:max-w-[360px] mb-8">
                    <div className="text-[#000714] font-bold text-[24px] leading-[28px] md:text-[36px] md:leading-[40px]">
                        {sideTitle}
                    </div>
                    {sideSubtitle && (
                        <TextGradient className="font-bold text-[24px] leading-[28px] md:text-[36px] md:leading-[40px]">
                            {sideSubtitle}
                        </TextGradient>
                    )}
                    {sideText && (
                        <div className="text-[#434A59] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] mt-[20px] md:mt-[24px]">
                            {sideText}
                        </div>
                    )}
                </h3>
                <div className="w-full lg:w-[60%] flex flex-col gap-[20px] md:gap-6">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start flex-col sm:flex-row gap-6 sm:gap-[53px] p-6 md:p-9 border rounded-[20px] md:rounded-[40px] border-[#DDE3F0] font-Lato relative"
                        >
                            {item.iconTxt && (
                                <div className="text-[#A2ACBE] text-[50px] leading-[40px] md:text-[80px] md:leading-[60px] font-Lato font-light">
                                    {item.iconTxt}
                                </div>
                            )}
                            {item.img?.data && (
                                <div className="w-[100px]">
                                    <Image
                                        src={getImage(item.img)}
                                        alt="ico-track"
                                        className="w-full"
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <TextGradient className="font-bold text-xl leading-6 md:text-[23px] md:leading-7 pb-4">
                                    {item.title}
                                </TextGradient>
                                <TextNormal
                                    grayed
                                    className="text-base leading-6 md:text-xl md:leading-8"
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}
                                />
                            </div>
                            {withArrows && index < steps.length - 1 && (
                                <Image
                                    src="/assets/images/ico-arrow-circle-down.svg"
                                    alt="Ico Arrow Down"
                                    className="absolute w-[48px] lg:w-[64px] bottom-[-30px] lg:bottom-[-40px] right-[10px] lg:right-[40px] z-[100]"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {cta && (
                <div className="mt-[24px] md:mt-[60px]">
                    <FillButtonLink
                        href="/our-services"
                        className="w-full md:w-max mx-auto py-[15px] xl:py-[25px] px-6 xl:px-10"
                        blue={true}
                    >
                        <div className="flex items-center gap-4">
                            Our services<span>&#183;&#183;</span>
                        </div>
                    </FillButtonLink>
                </div>
            )}

            {!reversed && (
                <>
                    <Image
                        src="/assets/images/ico-union.svg"
                        alt="Planning"
                        className="w-full max-w-[300px] absolute left-0 top-[40%] z-[-1]"
                    />
                    <Image
                        src="/assets/images/ico-ellipse.svg"
                        alt="ico-ellipse"
                        className="absolute left-[15%] top-[60%] z-[-1] hidden md:block"
                    />
                </>
            )}

            {reversed && (
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute right-[15%] top-[60%] z-[-1] hidden md:block"
                />
            )}

            {branding && (
                <Image
                    src="/assets/images/home/ongoing-support.svg"
                    alt="ico-ellipse"
                    className="absolute right-[0] top-[40%] z-[-1] hidden md:block"
                />
            )}
        </div>
    );
};

export default Steps;
