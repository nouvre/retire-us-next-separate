import React, { useEffect, useState } from "react";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import Progress from "@/components/Questionnare/Progress";
import { Answer } from "@/store/questions/types";
import moment from "moment";

interface ComponentProps {
    data: Answer;
    step: number;
    handleNext: (e: Answer) => void;
    handlePrev: (e: Answer) => void;
}

const Steps5: React.FC<ComponentProps> = (props) => {
    const [submitData, setSubmitData] = useState<Answer>(props.data);
    const [wantedYear, setWantedYear] = useState<string | number>('__');

    const answerKeys = [
        "step5Answer_1",
        "step5Answer_2",
    ];
    const answers = [
        "Yes, that is correct",
        "No, I need to update this",
    ];

    useEffect(() => {
        if (props.data) {
            setSubmitData(props.data);
            const diffYears = moment().diff(props.data['birthYear'], 'year');
            if (!isNaN(diffYears)) {
                setWantedYear(props.data['wantToRetireAge'] - diffYears);
            } else {
                setWantedYear('__');
            }
        }

        // if (!props.data['step5Answer_1'] && !props.data['step5Answer_2']) {
        //     toogleAnswer('step5Answer_1');
        // }
    }, [props.data]);

    const toogleAnswer = (key: string) => {
        let tempData = { ...submitData };
        tempData[key] = 1;
        if (key == answerKeys[0]) {
            tempData[answerKeys[1]] = 0;
            setSubmitData(tempData);
            props.handleNext(tempData);
        }
        else {
            tempData[answerKeys[0]] = 0;
            setSubmitData(tempData);
            props.handleNext(tempData);
        }
    };

    const handlePrev = () => {
        props.handlePrev(submitData);
    };

    return (
        <div className="w-full px-[20px] md:px-[60px] relative">
            <div className="w-full max-w-[840px] mx-auto">
                <Progress step={props.step} />
                <div className="w-full relative mt-9 mb-[101px] sm:mb-[111px]">
                    <img src="/assets/images/cloud4.svg" alt="cloud" className="absolute top-0 hidden sm:block" />
                    <img src="/assets/images/cloud1.svg" alt="cloud" className="absolute bottom-[-75px] right-0 sm:bottom-[-70px] sm:right-[-16px] md:bottom-[-60px] md:right-[-60px]" />
                    <img src="/assets/images/cloud4-mobile.svg" alt="cloud" className="absolute top-0 block sm:hidden" />
                    <div className="relative py-[50px] px-[30px] md:py-[60px] md:pl-[110px] md:pr-[140px]">
                        <div className="w-full text-[20px] md:text-[23px] leading-7 text-[#000714] font-bold">
                            By our math, it sounds like you want to retire in {wantedYear} years. Does that sound right?
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
                        className={`flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55] ${submitData["wantToRetireAge"]
                            ? ""
                            : "opacity-70"
                            }`}
                        onClick={() => {
                            toogleAnswer('step5Answer_1')
                        }}
                    >
                        Yes
                        <ArrowRight className="ml-3" />
                    </button>
                </div>
            </div>

            <img
                src="/assets/images/glass-man.svg"
                alt="Glass man"
                className="relative ml-auto mt-auto max-w-[80%] right-[-20px] block md:hidden"
            />
        </div>
    );
};

export default Steps5;
