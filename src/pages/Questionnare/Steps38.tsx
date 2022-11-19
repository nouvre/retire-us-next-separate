import React, { useEffect, useState } from "react";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import Progress from "@/components/Questionnare/Progress";
import { Answer } from "@/store/questions/types";
import { isDesktop } from "react-device-detect";
import useButtonMouseMove from "../../hooks/useButtonMouseMove";
import moment from "moment";
import { cx } from "../../util/helpers";
import Image from '@/components/common/Image';

interface ComponentProps {
    data: Answer;
    step: number;
    handleNext: (e: Answer) => void;
    handlePrev: (e: Answer) => void;
}

const Steps38: React.FC<ComponentProps> = (props) => {
    const [submitData, setSubmitData] = useState<Answer>(props.data);
    const [year, setYear] = useState<number>(0);
    const [agreeFlag, setAgreeFlag] = useState<boolean>(false);
    const [confirmFlag, setConfirmFlag] = useState<boolean>(false);
    const [yesText, setYesText] = useState<string>("Yes! Show me my results");
    const [continueText, setContinueText] = useState<string>("Continue");
    const isMouseMove = useButtonMouseMove();
    const answerKeys = [
        "retirementReallyAcomplishYes",
        "retirementReallyAcomplishNo",
    ];

    useEffect(() => {
        if (props.data) {
            setSubmitData(props.data);
            if (props.data.wantToRetireAge) {
                setYear(
                    props.data.wantToRetireAge -
                        passedYear(props.data.birthYear)
                );
            }
            if (props.data.retirementReallyAcomplishYes) setAgreeFlag(true);
        }
    }, [props.data]);

    const toogleAnswer = (key: string) => {
        let tempData = { ...submitData };
        for (let index = 0; index < answerKeys.length; index++) {
            if (key === answerKeys[index]) {
                if (index == 1) setAgreeFlag(false);
                else setAgreeFlag(true);
                tempData[answerKeys[index]] = 1;
            } else {
                tempData[answerKeys[index]] = 0;
            }
        }
        setSubmitData(tempData);
    };

    const isSelected = (key: string) => {
        return parseInt(submitData[key]);
    };

    const handlePrev = () => {
        props.handlePrev(submitData);
    };

    const handleNext = () => {
        // alert(agreeFlag);
        if (!agreeFlag) {
            setConfirmFlag(true);
            document.body.classList.add("page-hidden");
            setTimeout(() => {
                let tempData = { ...submitData };
                tempData[answerKeys[0]] = 1;
                tempData[answerKeys[1]] = 0;
                setSubmitData(tempData);
                setAgreeFlag(true);
                setYesText("Yes!");
                setContinueText("Show me my results");
                document.body.classList.remove("page-hidden");
            }, 1000);
        }
        props.handleNext({
            ...submitData,
            wantToRetireAge: year + passedYear(props.data.birthYear),
        });
    };

    const passedYear = (birthYear) => {
        if (birthYear) {
            let currentDate = moment();
            let birthDate = moment(birthYear, "MM/DD/YYYY");
            if (
                currentDate.month() > birthDate.month() ||
                (currentDate.month() == birthDate.month() &&
                    currentDate.date() > birthDate.date())
            ) {
                return currentDate.year() - birthDate.year();
            } else {
                return currentDate.year() - birthDate.year() - 1;
            }
        } else {
            return 0;
        }
    };

    return (
        <div className="w-full px-[20px] md:px-[60px] pb-12">
            <div className="w-full max-w-[840px] mx-auto">
                <Progress step={props.step} />

                <div className="w-full pb-[36px]">
                    <div className="w-full text-[20px] md:text-[23px] text-[#000714] font-bold mt-[32px] mb-[24px] md:mt-[36px] md:mb-[32px]">
                        Is retirement in{" "}
                        <span className="mx-1">
                            {props.data.wantToRetireAge -
                                passedYear(props.data.birthYear)}
                        </span>
                        years something that you seriously want to accomplish?
                    </div>
                    <div
                        className={cx(
                            "w-full p-[12px] md:px-[40px] md:py-[16px] rounded-[12px] md:rounded-[20px] mb-[12px] cursor-pointer flex items-center shadow-[0px_4px_32px_rgba(24,54,98,0.04)]",
                            isDesktop && isMouseMove
                                ? "hover:bg-[#FFE9CE]"
                                : "",
                            isSelected("retirementReallyAcomplishYes")
                                ? "bg-[#FFE9CE] outline-yellow"
                                : "bg-white"
                        )}
                        onClick={() =>
                            toogleAnswer("retirementReallyAcomplishYes")
                        }
                    >
                        <div className="text-[16px] md:text-[20px] text-[#000714] pr-4 w-[calc(100%-32px)]">
                            {yesText}
                        </div>
                        <div className="ml-auto w-[24px] md:w-[32px]">
                            {isSelected("retirementReallyAcomplishYes") ? (
                                <Image
                                    src="/assets/images/ico-checkbox-selected.svg"
                                    className="w-full"
                                />
                            ) : (
                                <Image
                                    src="/assets/images/ico-checkbox.svg"
                                    className="w-full"
                                />
                            )}
                        </div>
                    </div>

                    {!confirmFlag ? (
                        <div
                            className={cx(
                                "w-full p-[12px] md:px-[40px] md:py-[16px] rounded-[12px] md:rounded-[20px] mb-[12px] cursor-pointer flex items-center shadow-[0px_4px_32px_rgba(24,54,98,0.04)]",
                                isDesktop && isMouseMove
                                    ? "hover:bg-[#FFE9CE]"
                                    : "",
                                isSelected("retirementReallyAcomplishNo")
                                    ? "bg-[#FFE9CE] outline-yellow"
                                    : "bg-white"
                            )}
                            onClick={() =>
                                toogleAnswer("retirementReallyAcomplishNo")
                            }
                        >
                            <div className="text-[16px] md:text-[20px] text-[#000714] pr-4 w-[calc(100%-32px)]">
                                No,
                                <input
                                    type="number"
                                    className="border border-[#A2ACBE] outline-none w-[60px] mx-[20px] bg-[#F7F9FC] rounded-[6px] text-black text-center font-bold"
                                    value={0}
                                    onChange={(e) => {
                                        toogleAnswer(
                                            "retirementReallyAcomplishNo"
                                        );
                                        let text = e.target.value.toString();
                                        let num = parseInt(text);
                                        if (e.target.value === "") {
                                            setYear(0);
                                        } else if (num <= 99) {
                                            setYear(num);
                                        }
                                    }}
                                />
                                years is probably more realistic.
                            </div>
                            <div className="ml-auto w-[24px] md:w-[32px]">
                                {isSelected("retirementReallyAcomplishNo") ? (
                                    <Image
                                        src="/assets/images/ico-checkbox-selected.svg"
                                        className="w-full"
                                    />
                                ) : (
                                    <Image
                                        src="/assets/images/ico-checkbox.svg"
                                        className="w-full"
                                    />
                                )}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="w-full flex flex-wrap justify-between py-[24px] border-t border-[#DDE3F0]">
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
                        className="flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55]"
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

export default Steps38;
