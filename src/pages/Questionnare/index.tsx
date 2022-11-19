import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header";
import { ApplicationState } from "@/store";
import { Answer } from "@/store/questions/types";
import GeneralPage from "@/components/Questionnare/page/generalPage";
import Image from '@/components/common/Image';
import ProfileCompleteStep from "../../constants/routes";
import { Steps3, Steps4, Steps5, Steps25, Steps38 } from "./StepList";
import Confetti from "./Confetti";
import {
    updateQuestionnare,
    getQuestionnare,
    finishQuestionnare,
} from "@/store/questions/action";

import {
    questionOrder,
    step6OrderIndex,
    step6_4OrderIndex,
    quizRenderStartOrderIndex,
    quizRenderEndOrderIndex,
    QuestionTypes,
    questionAnswers,
    QuestionAnswer,
} from "../../../js/constants/variables";

declare global {
    interface Window {
        hsConversationsOnReady: any;
        HubSpotConversations: any;
    }
}

const quizSteps: Array<Array<QuestionAnswer>> = [];
for (let i = quizRenderStartOrderIndex; i <= quizRenderEndOrderIndex; i++)
    quizSteps.push(questionAnswers[questionOrder[i]].answers);

const Questionnare: React.FC = (props: any) => {
    // let lastQuizStep = 29;
    const step = useSelector((state: ApplicationState) => state.questions.step);
    const answers = useSelector(
        (state: ApplicationState) => state.questions.answers
    );
    const token = useSelector((state: ApplicationState) => state.auth.token);
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const questionStep6Answers =
        questionAnswers[questionOrder[step6OrderIndex]].answers;

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            if (user?.profile_complete_step && step >= questionOrder.length)
                props.history.replace(
                    ProfileCompleteStep[user.authenticate_type][
                        user.profile_complete_step
                    ]
                );
            else dispatch(getQuestionnare());
        } else {
            const iUserId = localStorage.getItem("intro_user_id");
            if (!iUserId) props.history.push("/intro");
        }
    }, [token]);

    useEffect(() => {
        let habspotEl: HTMLElement | null;

        setTimeout(() => {
            habspotEl = document.getElementById(
                "hubspot-messages-iframe-container"
            );
            if (habspotEl)
                habspotEl.style.cssText = "display: none !important;";
        }, 1500);

        return () => {
            if (habspotEl)
                habspotEl.style.cssText =
                    "display: block !important;width: 100px; height: 96px;";
        };
    }, []);

    const handleNext = (data: Answer, step: number) => {
        setTimeout(() => {
            if (token && user) {
                if (step >= questionOrder.length) {
                    dispatch(updateQuestionnare(data, step, true));
                    dispatch(finishQuestionnare());
                    props.history.replace(
                        ProfileCompleteStep[user.authenticate_type][
                            user.profile_complete_step + 1
                        ]
                    );
                } else {
                    dispatch(updateQuestionnare(data, step, true));
                }
            } else {
                if (step >= questionOrder.length) {
                    dispatch(updateQuestionnare(data, step, false, true));
                    props.history.replace("/checkpoint-result");
                } else {
                    dispatch(updateQuestionnare(data, step, false));
                }
            }
        }, 1000);
    };

    const handlePrev = (data: Answer, step: number) => {
        if (token && user) {
            dispatch(updateQuestionnare(data, step, true));
        } else {
            dispatch(updateQuestionnare(data, step, false));
        }
    };

    const quizRender = (data: Answer, step: number) => {
        let start = step - quizRenderStartOrderIndex;
        if (step == quizRenderEndOrderIndex + 1) {
            start = 0;
        }
        for (let index = start; index < quizSteps.length; index++) {
            let isCompleted = false;
            quizSteps[index].forEach((key) => {
                // check if the next quiz is completed
                if (data[key.meta_key]) {
                    isCompleted = true;
                }
            });
            if (!isCompleted) {
                handleNext(data, index + quizRenderStartOrderIndex);
                return;
            }
        }
        for (let index = 0; index < start; index++) {
            let isCompleted = false;
            quizSteps[index].forEach((key) => {
                if (data[key.meta_key]) {
                    isCompleted = true;
                }
            });
            if (!isCompleted) {
                handleNext(data, index + quizRenderStartOrderIndex);
                return;
            }
        }
        handleNext(data, quizRenderEndOrderIndex + 1);
    };

    const steps6FollowNext = (data: Answer, step: number) => {
        const loopStart =
            step != step6OrderIndex + 1 ? step - 1 - step6OrderIndex : 0;

        // if(step != step6OrderIndex + 1) {                       //check if step is not subquestion of step6
        //     for (let i = step-step6OrderIndex-1 ; i < questionStep6Answers.length; i ++) {
        //         if(data[questionStep6Answers[i].meta_key]) return handleNext(data, step6OrderIndex+i+1);
        //     }
        //     return handleNext(data, step6_4OrderIndex + 1);
        // }
        for (
            let index = loopStart;
            index < questionStep6Answers.length;
            index++
        )
            if (data[questionStep6Answers[index].meta_key])
                // check which answer of step6 is selected
                return handleNext(data, step6OrderIndex + index + 1);

        handleNext(data, step6_4OrderIndex + 1);
    };
    const steps6FollowPrev = (data: Answer, step: number) => {
        const passed = step6_4OrderIndex - step;
        for (let i = questionStep6Answers.length - passed - 1; i >= 0; i--) {
            if (data[questionStep6Answers[i].meta_key]) {
                return handlePrev(data, step6OrderIndex + i + 1);
            }
        }
        return handlePrev(data, step);
    };
    const getHandleNext = (step: number): Function => {
        if (step >= step6OrderIndex && step <= step6_4OrderIndex)
            return steps6FollowNext;
        else if (
            step >= quizRenderStartOrderIndex &&
            step <= quizRenderEndOrderIndex
        )
            return quizRender;
        else return handleNext;
    };
    const getHandlePrev = (step: number): Function => {
        if (step > step6OrderIndex + 1 && step <= step6_4OrderIndex + 1)
            return steps6FollowPrev;
        else return handlePrev;
    };
    const getStepperNumber = (): number => {
        if (step <= step6OrderIndex) return step;
        else if (step <= step6_4OrderIndex) return step6OrderIndex;
        else if (
            step >= quizRenderStartOrderIndex &&
            step <= quizRenderEndOrderIndex
        )
            return quizRenderStartOrderIndex - 4;
        else return step - 4;
    };

    const getQuestionPage = (): any => {
        if (step >= questionOrder.length) {
            return (
                <GeneralPage
                    key={0}
                    data={answers}
                    step={getStepperNumber()}
                    timer={false}
                    questionIndex={0}
                    handleNext={(e) => getHandleNext(step)(e, 1)}
                    handlePrev={(e) => handlePrev(e, -1)}
                />
            );
        }
        const currentQuestion = questionAnswers[questionOrder[step]];
        const isQuizStep =
            step >= quizRenderStartOrderIndex &&
            step <= quizRenderEndOrderIndex;

        if (
            !currentQuestion.questionType ||
            currentQuestion.questionType == QuestionTypes.TYPE_GENERAL ||
            currentQuestion.questionType == QuestionTypes.TYPE_ICON ||
            currentQuestion.questionType == QuestionTypes.TYPE_CHECKBOX
        ) {
            //QuestionTypes.TYPE_GENERAL

            return (
                <GeneralPage
                    key={step}
                    data={answers}
                    step={getStepperNumber()}
                    timer={isQuizStep}
                    questionIndex={questionOrder[step]}
                    stepIndex={step}
                    handleNext={(e) => getHandleNext(step)(e, step + 1)}
                    handlePrev={(e) => getHandlePrev(step)(e, step - 1)}
                />
            );
        } else if (currentQuestion.questionType == QuestionTypes.TYPE_3) {
            //QuestionTypes.TYPE_3
            return (
                <Steps3
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) => handleNext(e, step + 1)}
                    handlePrev={(e) => handlePrev(e, step - 1)}
                />
            );
        } else if (currentQuestion.questionType == QuestionTypes.TYPE_4) {
            //QuestionTypes.TYPE_4
            return (
                <Steps4
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) => handleNext(e, step + 1)}
                    handlePrev={(e) => handlePrev(e, step - 1)}
                />
            );
        } else if (currentQuestion.questionType == QuestionTypes.TYPE_5) {
            //QuestionTypes.TYPE_5
            return (
                <Steps5
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) => handleNext(e, step + 1)}
                    handlePrev={(e) => handlePrev(e, step - 1)}
                />
            );
        } else if (currentQuestion.questionType == QuestionTypes.TYPE_25) {
            //QuestionTypes.TYPE_25
            return (
                <Steps25
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) => handleNext(e, step + 1)}
                    handlePrev={(e) => handlePrev(e, step - 1)}
                />
            );
        } else if (currentQuestion.questionType == QuestionTypes.TYPE_38) {
            //QuestionTypes.TYPE_38
            return (
                <Steps38
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) =>
                        e.retirementReallyAcomplishNo
                            ? handleNext(e, step)
                            : handleNext(e, step + 1)
                    }
                    handlePrev={(e) => handlePrev(e, step - 1)}
                />
            );
        } else if (
            currentQuestion.questionType == QuestionTypes.TYPE_CONFETTI
        ) {
            //QuestionTypes.TYPE_CONFETTI
            return (
                <Confetti
                    data={answers}
                    step={getStepperNumber()}
                    handleNext={(e) => handleNext(e, step + 1)}
                />
            );
        } else return <>{alert("Something wrong with questionnaire logic")}</>;
    };

    return (
        <div className="w-full min-h-screen relative">
            <Header opacity={false} />
            <div className="w-full pt-[100px] md:pt-[150px] bg-[#EEF1F8] flex flex-col min-h-screen">
                <div className="flex items-center justify-center relative z-10">
                    {getQuestionPage()}
                </div>
                <Image
                    src="/assets/images/glass-man.svg"
                    alt="Glass man"
                    className="relative ml-auto mt-auto z-[10] max-w-[300px] md:absolute md:right-0 md:bottom-0 md:z-[0] hidden md:block"
                />
                <Image
                    src="/assets/images/ico-retire-leaf.svg"
                    alt="ico-retire-leaf"
                    className="absolute left-0 bottom-0"
                />
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute left-[5%] bottom-[20%] hidden md:block"
                />
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute right-[5%] top-[20%] hidden md:block"
                />
            </div>
            {/* {currentQuestion?.questionType == QuestionTypes.TYPE_FINAL ||
            !currentQuestion ? (
                <div className="w-full pt-[100px] md:pt-[150px] bg-[#EEF1F8] flex flex-col min-h-screen">
                    {getQuestionPage()}
                </div>
            ) : (
            )} */}
        </div>
    );
};

export default Questionnare;
