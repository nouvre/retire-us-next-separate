import React from "react";
import Image from '@/components/common/Image';

const TopLabel = ({ text, cta, background, handleClose }) => {
    return (
        <div
            style={{ background }}
            className="w-full h-[150px] lg:h-[78px] flex flex-col lg:flex-row items-center justify-center gap-x-[27px] gap-y-[12px] px-[10px] lg:px-[40px] relative"
        >
            <div className="lg:max-w-[70%] text-[16px] lg:text-[18px] leading-[30px] text-[#000714] font-bold">
                {text}
            </div>

            <a
                href={cta?.link}
                className="w-full lg:w-max py-[15px] px-6 flex justify-center transition duration-300 font-bold text-lg border font-Lato rounded-full text-white border-[#001F55] bg-[#001F55] hover:text-[#001F55] hover:bg-white"
            >
                <div className="w-max flex items-center gap-4">
                    {cta?.text}
                    <span>&#183;&#183;</span>
                </div>
            </a>

            <button
                className="absolute top-[18px] lg:top-0 lg:bottom-0 lg:my-auto right-[12px] lg:right-[27px] w-[24px] h-[24px]"
                onClick={handleClose}
            >
                <Image
                    src="/assets/images/close.svg"
                    className="w-[24px]"
                    alt="Close"
                />
            </button>
        </div>
    );
};

export default TopLabel;
