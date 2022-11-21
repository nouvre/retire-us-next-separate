import React, { useEffect, useState, useRef } from "react";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import Progress from "@/components/Questionnare/Progress";
import { Answer } from "@/store/questions/types";
import { cx } from "@/util/helpers";
import Image from '@/components/common/Image';

interface ComponentProps {
    data: any;
    step: number;
    handleNext: (e: Answer) => void;
    handlePrev: (e: Answer) => void;
}

const Steps3: React.FC<ComponentProps> = (props) => {
    const [submitData, setSubmitData] = useState<Answer>(props.data);
    const [retireAge, setRetireAge] = useState<number>(60);
    const [windowWidth, getWindowWidth] = useState<number>(window.innerWidth);
    const [currentAges, seCurrentAges] = useState([
        {
            value: 56,
            top: 88,
            opacity: 0.2,
        },
        {
            value: 57,
            top: 74,
            opacity: 0.3,
        },
        {
            value: 58,
            top: 64,
            opacity: 0.6,
        },
        {
            value: 59,
            top: 58,
            opacity: 0.7,
        },
        {
            value: 60,
            top: 0,
            opacity: 1,
        },
        {
            value: 61,
            top: 58,
            opacity: 0.7,
        },
        {
            value: 62,
            top: 64,
            opacity: 0.5,
        },
        {
            value: 63,
            top: 74,
            opacity: 0.3,
        },
        {
            value: 64,
            top: 88,
            opacity: 0.2,
        },
    ]);

    useEffect(() => {
        window.addEventListener("resize", setDimension);

        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [windowWidth]);

    const setDimension = () => {
        getWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        if (props.data) {
            setSubmitData(props.data);
            if (props.data["wantToRetireAge"]) {
                setRetireAge(props.data["wantToRetireAge"]);
            }
        }
    }, [props.data]);

    useEffect(() => {
        let _currentAges = JSON.parse(JSON.stringify(currentAges));
        _currentAges = _currentAges.map((age, index) => ({
            ...age,
            value: retireAge - (4 - index),
        }));
        seCurrentAges(_currentAges);
    }, [retireAge]);

    const handleNext = () => {
        if (props.data["wantToRetireAge"]) props.handleNext(submitData);
        else props.handleNext({ ...submitData, wantToRetireAge: retireAge });
    };

    const handlePrev = () => {
        props.handlePrev(submitData);
    };

    const handleRetireAge = (decreased: boolean) => {
        let _retireAge = retireAge;
        if (decreased) {
            setRetireAge(--_retireAge);
        } else {
            setRetireAge(++_retireAge);
        }

        const tempData = { ...submitData };
        tempData["wantToRetireAge"] = _retireAge;
        setSubmitData(tempData);
    };

    return (
        <div className="w-full px-[20px] md:px-[60px] pb-12 h-full overflow-hidden">
            <div className="w-full max-w-[840px] mx-auto">
                <Progress step={props.step} />

                <div className="w-full pb-[36px]">
                    <div className="w-full text-[20px] md:text-[23px] text-[#000714] font-bold mt-[32px] mb-[24px] md:mt-[36px] md:mb-[32px]">
                        At what age do you want to retire?
                    </div>

                    <div className="relative h-[148px] overflow-hidden mx-[-40px] sm:mx-0">
                        <Image
                            src="/assets/images/quiz-birth-curve-line.svg"
                            alt=""
                            className="w-full absolute left-0 bottom-0"
                        />
                        <div className="relative w-full flex flex-row justify-between overflow-hidden top-6 md:top-0">
                            {currentAges.map((age, index) => (
                                <div
                                    className={cx(
                                        "flex items-center justify-center text-[28px] text-[#00714]",
                                        index == 4
                                            ? "font-bold opacity-100 text-[56px] rounded-full bg-white w-[120px] h-[120px] z-[-1]"
                                            : "opacity-30",
                                        (index == 0 || index == 8) &&
                                            windowWidth < 768
                                            ? "hidden"
                                            : ""
                                    )}
                                    key={index}
                                    style={{
                                        top:
                                            age.top === 0
                                                ? age.top
                                                : age.top - 48,
                                        position: "relative",
                                        opacity: age.opacity,
                                        // left: `calc((100% - 64px)/${windowWidth >= 768 ? 8 : 6}*${index} + 32px)`,
                                        // transform: 'translateX(-50%)'
                                    }}
                                >
                                    {age.value}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-[24px]">
                        <div
                            onClick={() => handleRetireAge(true)}
                            className="cursor-pointer mx-2"
                        >
                            <Image
                                src="/assets/images/arrow-left-circle-orange-lg.svg"
                                className=""
                            />
                        </div>
                        <div
                            onClick={() => handleRetireAge(false)}
                            className="cursor-pointer mx-2"
                        >
                            <Image
                                src="/assets/images/arrow-right-circle-orange-lg.svg"
                                className=""
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between py-[24px] border-t border-[#DDE3F0]">
                    <button
                        className="flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-[#001F55] rounded-full border border-[#001F55]"
                        onClick={() => {
                            handlePrev();
                        }}
                    >
                        <ArrowLeft className="mr-3" />
                        Back
                    </button>
                    <button
                        className={`flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55]`}
                        onClick={() => {
                            handleNext();
                        }}
                    >
                        Continue
                        <ArrowRight className="ml-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Steps3;
