import moment from "moment";
import Progress from "../Progress";
import Timer from "../../common/Timer";
import OptionButton from "../OptionButton";
import IconButton from "../IconButton";
import CheckboxButton from "../CheckboxButton";
import React, { useEffect, useState } from "react";
import { Answer } from "@/store/questions/types";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import {
    questionAnswers,
    quizRenderStartOrderIndex,
    quizRenderEndOrderIndex,
    QuestionTypes,
} from "../../../constants/variables";

interface ComponentProps {
    data: Answer;
    step: number;
    timer?: boolean;
    questionIndex: number;
    stepIndex?: number;
    handleNext: (e: Answer) => void;
    handlePrev?: (e: Answer) => void;
}

const GeneralPage: React.FC<ComponentProps> = (props) => {
    const [submitData, setSubmitData] = useState<Answer>(props.data);
    const myQuestion = questionAnswers[props.questionIndex];
    useEffect(() => {
        if (props.data) {
            setSubmitData(props.data);
        }
    }, [props.data]);

    const toogleAnswer = (key: string) => {
        let tempData = { ...submitData };
        if (key === "step12Answer_4") {
            myQuestion.answers.map((answer) => (tempData[answer.meta_key] = 0));
            setSubmitData(tempData);
            props.handleNext(tempData);
        } else {
            tempData[key] = tempData[key] ? 0 : 1;
            setSubmitData(tempData);
        }
    };
    const selectAnswer = (key: string) => {
        let tempData = { ...submitData };
        for (let index = 0; index < myQuestion.answers.length; index++) {
            if (key === myQuestion.answers[index].meta_key) {
                tempData[key] = 1;
            } else {
                tempData[myQuestion.answers[index].meta_key] = 0;
            }
        }
        props.handleNext(tempData);
    };

    const isSelected = (key: string) => {
        return parseInt(submitData[key]) > 0;
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

    const handleNext = () => {
        return props.handleNext({ ...submitData });
    };

    const handlePrev = () => {
        return props.handlePrev && props.handlePrev({ ...submitData });
    };

    const getTitle = () => {
        if (!myQuestion.includeYear) return myQuestion.title;
        if (props.data.wantToRetireAge && props.data.birthYear) {
            let accomplishYear =
                props.data.wantToRetireAge - passedYear(props.data.birthYear);
            return myQuestion.title.replace(
                /:year:/g,
                accomplishYear.toString()
            );
        }
    };

    return (
        <div className="w-full px-[20px] md:px-[60px] pb-12">
            <div className="w-full max-w-[840px] mx-auto">
                {props.timer ? (
                    <Timer onEnd={() => handleNext()} />
                ) : (
                    <Progress step={props.step} />
                )}
                <div className="flex flex-col md:flex-row items-end pb-[12px] md:pb-[36px]">
                    <div className="w-full order-last md:order-first">
                        <div className="flex items-baseline">
                            {props.timer && (
                                <div className="inline-flex items-baseline rounded-full bg-[#F7F9FC] border border-[#DDE3F0] mr-[10px] px-[5px]">
                                    <span className="text-[16px] font-bold">
                                        {(props.stepIndex || 0) -
                                            quizRenderStartOrderIndex +
                                            1}
                                    </span>
                                    <span className="text-[12px] opacity-50">
                                        /
                                        {quizRenderEndOrderIndex -
                                            quizRenderStartOrderIndex +
                                            1}
                                    </span>
                                </div>
                            )}
                            <div className="w-full text-[20px] md:text-[23px] text-[#000714] font-bold mt-[32px] mb-[24px] md:mt-[36px] md:mb-[32px]">
                                {getTitle()}
                            </div>
                        </div>
                        {myQuestion.questionType == QuestionTypes.TYPE_ICON ? (
                            <div className="flex flex-wrap gap-[16px] md:gap-[20px] pb-[12px] md:pb-0">
                                {myQuestion.answers.map((answer, index) => (
                                    <IconButton
                                        key={index}
                                        buttonText={answer.title}
                                        icon={answer.icon}
                                        isSelected={isSelected(answer.meta_key)}
                                        initialSelected={answer.initialSelected}
                                        clickHandler={() =>
                                            myQuestion.multiSelect
                                                ? toogleAnswer(answer.meta_key)
                                                : selectAnswer(answer.meta_key)
                                        }
                                    />
                                ))}
                            </div>
                        ) : myQuestion.questionType ==
                          QuestionTypes.TYPE_CHECKBOX ? (
                            <>
                                {myQuestion.answers.map((answer, index) =>
                                    answer.meta_key == "step12Answer_4" ? (
                                        <OptionButton
                                            key={index}
                                            buttonText={answer.title}
                                            isSelected={isSelected(
                                                answer.meta_key
                                            )}
                                            initialSelected={
                                                answer.initialSelected
                                            }
                                            clickHandler={() =>
                                                toogleAnswer(answer.meta_key)
                                            }
                                        />
                                    ) : (
                                        <CheckboxButton
                                            key={index}
                                            buttonText={answer.title}
                                            isSelected={isSelected(
                                                answer.meta_key
                                            )}
                                            initialSelected={
                                                answer.initialSelected
                                            }
                                            clickHandler={() =>
                                                myQuestion.multiSelect
                                                    ? toogleAnswer(
                                                          answer.meta_key
                                                      )
                                                    : selectAnswer(
                                                          answer.meta_key
                                                      )
                                            }
                                        />
                                    )
                                )}
                            </>
                        ) : (
                            <>
                                {myQuestion.answers.map((answer, index) => (
                                    <OptionButton
                                        key={index}
                                        buttonText={answer.title}
                                        isSelected={isSelected(answer.meta_key)}
                                        initialSelected={answer.initialSelected}
                                        clickHandler={() =>
                                            myQuestion.multiSelect
                                                ? toogleAnswer(answer.meta_key)
                                                : selectAnswer(answer.meta_key)
                                        }
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between py-[24px] border-t border-[#DDE3F0]">
                    {props.questionIndex > 0 && props.step > 0 && (
                        <button
                            className="flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-[#001F55] rounded-full border border-[#001F55]"
                            onClick={() => {
                                handlePrev();
                            }}
                        >
                            <ArrowLeft className="mr-3" />
                            Back
                        </button>
                    )}
                    {myQuestion.multiSelect && (
                        <button
                            className={`flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55]`}
                            onClick={() => handleNext()}
                        >
                            Continue
                            <ArrowRight className="ml-3" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GeneralPage;
