import React, { useEffect, useState } from "react";
import CircularAnimationProgress from "./CircularAnimationProgress";
import useHorzCarousel from "../../hooks/useHorzCarousel";
import Image from '@/components/common/Image';

type SliderType = {
    pretitle: string;
    title: string;
    subtitle: string;
    cta: {
        link: string;
        text: string;
        type: string;
    };
    order: number;
};

type SliderOptionType = {
    position: number;
    btnEnable: boolean;
    duration: boolean;
    isMove: boolean;
};
declare global {
    interface Window {
        intervalId: any;
    }
}

const CustomSlider = ({ items }: { items: Array<SliderType> }) => {
    const { lPos, rPos, dPos } = useHorzCarousel(2180, 48);

    const [data, setData] = useState<Array<SliderType>>([]);
    const [circleHeight, setCircleHeight] = useState(0);

    const [option, setOption] = useState<SliderOptionType>({
        position: dPos,
        btnEnable: true,
        duration: true,
        isMove: false,
    });

    useEffect(() => {
        setOption((prevOption) => ({ ...prevOption, position: dPos }));
        refreshInterval();
    }, [dPos]);

    useEffect(() => {
        if (items?.length) {
            setData(items);
        }

        return () => {
            clearInterval(window.intervalId);
            setData([]);
        };
    }, []);

    const refreshInterval = () => {
        clearInterval(window.intervalId);
        window.intervalId = 0;
        window.intervalId = setInterval(handleNext, 5000);
    };

    const handlePrev = () => {
        if (option.btnEnable) {
            refreshInterval();
            setOption({
                position: lPos,
                btnEnable: false,
                duration: true,
                isMove: true,
            });
            setTimeout(() => {
                setData((prevData) => {
                    let tmpData: SliderType[] = [];
                    prevData.forEach((slider, index) => {
                        let newOrder = slider.order - 1;
                        if (newOrder == 0) {
                            newOrder = 3;
                        }
                        let itemIndex = items.findIndex(
                            (e) => e.order == newOrder
                        );
                        if (itemIndex != -1) {
                            tmpData.push(items[itemIndex]);
                        }
                    });
                    return tmpData;
                });
                setOption({
                    position: dPos,
                    btnEnable: false,
                    duration: false,
                    isMove: false,
                });
                setTimeout(() => {
                    setOption({
                        position: dPos,
                        btnEnable: true,
                        duration: true,
                        isMove: false,
                    });
                }, 20);
            }, 500);
        }
    };

    const handleNext = () => {
        if (option.btnEnable) {
            refreshInterval();
            setOption({
                position: rPos,
                btnEnable: false,
                duration: true,
                isMove: true,
            });
            setTimeout(() => {
                setData((prevData) => {
                    let tmpData: SliderType[] = [];
                    prevData.forEach((slider, index) => {
                        let newOrder = slider.order + 1;
                        if (newOrder > 3) {
                            newOrder = 1;
                        }
                        let itemIndex = items.findIndex(
                            (e) => e.order == newOrder
                        );
                        if (itemIndex != -1) {
                            tmpData.push(items[itemIndex]);
                        }
                    });
                    return tmpData;
                });
                setOption({
                    position: dPos,
                    btnEnable: false,
                    duration: false,
                    isMove: false,
                });
                setTimeout(() => {
                    setOption({
                        position: dPos,
                        btnEnable: true,
                        duration: true,
                        isMove: false,
                    });
                }, 20);
            }, 500);
        }
    };

    return (
        <div className="w-full relative overflow-hidden">
            <div className="flex justify-center items-center gap-10">
                <Image
                    className="hidden sm:block z-10 cursor-pointer"
                    src="/assets/images/button-arrow-left.svg"
                    alt="help 10"
                    onClick={handlePrev}
                />
                <CircularAnimationProgress
                    btnEnable={option.btnEnable}
                    onResize={(height) => setCircleHeight(height)}
                />
                <Image
                    className="hidden sm:block z-10 cursor-pointer"
                    src="/assets/images/button-arrow-right.svg"
                    alt="help 10"
                    onClick={handleNext}
                />
            </div>
            <div className="w-full flex sm:hidden gap-5 justify-center mt-[24px]">
                <Image
                    src="/assets/images/button-arrow-left.svg"
                    alt="help 10"
                    onClick={() => handlePrev()}
                />
                <Image
                    src="/assets/images/button-arrow-right.svg"
                    alt="help 10"
                    onClick={() => handleNext()}
                />
            </div>
            <div
                className={`flex justify-between items-center gap-10 absolute top-0 ${
                    option.duration ? "duration-500" : ""
                }`}
                style={{
                    left: option.position,
                    height: circleHeight || 404,
                }}
            >
                {data &&
                    data.map((item, key) => {
                        return (
                            <div
                                key={key}
                                className={`w-[404px] flex flex-col justify-center items-center gap-[10px]`}
                            >
                                {key === 2 && !option.isMove && (
                                    <p
                                        className={`text-base md:text-xl text-transparent ${
                                            item.pretitle
                                                ? "bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]"
                                                : ""
                                        }`}
                                    >
                                        {item.pretitle}
                                    </p>
                                )}
                                <p
                                    className={`duration-300 ${
                                        key === 2
                                            ? !option.isMove
                                                ? "text-[46px] md:text-[64px] text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]"
                                                : "text-[32px] md:text-[40px] text-[#DDE3F0]"
                                            : "text-[32px] md:text-[40px] text-[#DDE3F0]"
                                    }`}
                                >
                                    {item.title}
                                </p>
                                <p
                                    className={`duration-300 ${
                                        key === 2
                                            ? !option.isMove
                                                ? "text-lg md:text-xl text-[#000714]"
                                                : "text-xs md:text-sm text-[#A2ACBE]"
                                            : "text-xs md:text-sm text-[#A2ACBE]"
                                    }`}
                                >
                                    {item.subtitle}
                                </p>
                                {key === 2 && item.cta && !option.isMove && (
                                    <a
                                        href={item.cta.link}
                                        target={"_blank"}
                                        className="text-base md:text-lg text-[#001F55] flex items-center gap-3"
                                    >
                                        {item.cta.text}
                                        <Image
                                            src="/assets/images/ico-external-link.svg"
                                            alt="Ico-external-link"
                                        />
                                    </a>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default CustomSlider;
