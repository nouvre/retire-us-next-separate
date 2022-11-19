import React from "react";

interface BannerProps {
    title: string;
    text: string;
    cta: {
        link: string;
        text: string;
    };
}

const Banner = ({ title, text, cta }: BannerProps) => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto py-[40px] px-[24px] xl:py-[80px] xl:pl-[100px] xl:pr-[62px] rounded-[20px] md:rounded-[40px] bg-banner-texture-mobile md:bg-banner-texture bg-no-repeat bg-cover bg-right-top md:bg-left-top">
            <div className="w-full lg:w-[60%]">
                <div className="text-[#fff] text-[24px] leading-[28px] md:text-[36px] md:leading-[40px] font-bold">
                    {title}
                </div>
                <div
                    className="text-[#fff] text-[16px] leading-[24px] md:text-[18px] md:leading-[30px] mt-[24px]"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                />
            </div>
            <div className="w-full lg:w-[32%] mt-[32px] lg:mt-[0] text-right">
                {cta && (
                    <a
                        href={cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center transition duration-300 font-bold text-lg border font-Lato rounded-full text-white border-[#001F55] bg-[#001F55] hover:text-[#001F55] hover:bg-white py-[25px]"
                    >
                        <div className="flex items-center gap-4">
                            {cta.text}
                            <span>&#183;&#183;</span>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Banner;
