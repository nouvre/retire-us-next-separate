import React from "react";
import { FillButtonLink } from "../Buttons/WhiteButtons";
import { getImage } from "../../util/cms";
import Image from '@/components/common/Image';

interface CopyImageBlockProps {
    title: string;
    text: string;
    items?: {
        text: string;
    }[];
    bigTitle?: boolean;
    background?: boolean;
    cta: {
        link: string;
        text: string;
    };
    image: any;
}

const CopyImageBlock = ({
    title,
    text,
    items,
    bigTitle,
    background,
    cta,
    image,
}: CopyImageBlockProps) => {
    return (
        <div
            className={`relative w-full z-[2] ${
                background
                    ? "bg-future-texture-mobile md:bg-future-texture bg-bottom"
                    : "bg-future-texture"
            } bg-cover bg-no-repeat px-6 overflow-hidden`}
        >
            <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] mx-auto flex flex-wrap justify-between relative">
                <div className="w-full md:w-[600px] pt-[60px] md:pt-[120px]">
                    <h2
                        className={`${
                            bigTitle
                                ? "text-[46px] md:text-[52px] lg:text-[56px] leading-[48px] md:leading-[54px] lg:leading-[60px]"
                                : "text-[32px] md:text-[56px] leading-[36px] md:leading-[60px]"
                        } font-bold text-white pb-[24px] lg:pb-[40px]`}
                    >
                        {title}
                    </h2>
                    <div
                        className={`text-[16px] md:text-[20px] text-white leading-[24px] md:leading-[32px] pb-[44px] lg:pb-[32px] flex align-center ${
                            !items && "max-w-[57%] md:max-w-none"
                        }`}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                    {items && (
                        <div className="grid md:grid-cols-2 gap-4 pb-[40px] lg:pb-[44px] max-w-[57%] md:max-w-none">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="px-[16px] py-[12px] rounded-[16px] flex justify-between items-center"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
                                    }}
                                >
                                    <div className="text-white text-[16px] md:text-[20px] leading-[24px] md:leading-8 font-bold">
                                        {item.text}
                                    </div>
                                    <Image
                                        src="/assets/images/ico-check-circle.svg"
                                        alt="Check Mark"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    <FillButtonLink
                        href={cta.link}
                        className="w-max max-w-[55%] md:max-w-none py-[15px] xl:py-[25px] px-[30px] xl:px-10 mx-0 mb-[105px] md:mb-[120px]"
                    >
                        <div className="flex items-center gap-4">
                            {cta.text}
                            <span>&#183;&#183;</span>
                        </div>
                    </FillButtonLink>
                </div>
                <div className="absolute bottom-0 right-[-20%] w-[71%] md:w-auto md:max-w-[40%] md:mx-auto md:static md:self-end">
                    <Image
                        src={getImage(image)}
                        alt={title}
                        className="max-w-[100%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CopyImageBlock;
