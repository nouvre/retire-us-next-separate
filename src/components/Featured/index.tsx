import React from "react";
import { getImage } from "../../util/cms";
import Image from '@/components/common/Image';

const Featured = ({ title, elements }: any) => {
    return (
        <div className="w-full bg-featured-texture lg:bg-featured-texture-desktop bg-no-repeat bg-bottom bg-cover pt-[40px] pb-[50px] lg:py-[80px] lg:px-[10px]">
            <h2 className="font-bold text-[32px] leading-[36px] lg:text-[56px] lg:leading-[60px] text-center text-white mb-[32px] lg:mb-[50px]">
                {title}
            </h2>
            <div className="flex flex-wrap lg:justify-center gap-[18px] mx-[24px] lg:mx-[0]">
                {elements &&
                    elements.map((item) => (
                        <div
                            className={`${
                                item.attributes.hiddenOnMobile
                                    ? "hidden lg:block"
                                    : ""
                            } py-[15px] lg:py-[20px] lg:px-[36px] rounded-[16px] bg-white w-[47%] lg:w-auto`}
                            key={item.attributes.name}
                        >
                            <a
                                href={item.attributes.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={getImage(item.attributes.image)}
                                    alt={item.attributes.name}
                                    className="h-[40px] lg:h-[56px] mx-auto"
                                />
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Featured;
