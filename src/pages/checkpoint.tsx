import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import Image from '@/components/common/Image';
import Header from "@/components/Pages/Header";
import GeneralPage from "@/components/Questionnare/page/generalPage";
import Steps3 from "@/components/Pages/Questionnare/Steps3";
import Steps4 from "@/components/Pages/Questionnare/Steps4";
import Steps5 from "@/components/Pages/Questionnare/Steps5";
import Steps25 from "@/components/Pages/Questionnare/Steps25";
import Steps38 from "@/components/Pages/Questionnare/Steps38";
import Confetti from "@/components/Pages/Questionnare/Confetti";
import { ApplicationState } from "@/store/index";
import { Answer } from "@/store/questions/types";
import { updateQuestionnare, finishQuestionnare } from "@/store/questions/action";
import { getAnswers } from "@/store/questions/selector";
import { questionOrder, step6OrderIndex, step6_4OrderIndex, quizRenderStartOrderIndex, quizRenderEndOrderIndex, QuestionTypes, questionAnswers, QuestionAnswer } from "@/constants/variables";

declare global {
	interface Window {
		hsConversationsOnReady: any;
		HubSpotConversations: any;
	}
}

const quizSteps: Array<Array<QuestionAnswer>> = [];
for (let i = quizRenderStartOrderIndex; i <= quizRenderEndOrderIndex; i++)
	quizSteps.push(questionAnswers[questionOrder[i]].answers);

const Checkpoint: React.FC = () => {
	const router = useRouter();
	const answers = useSelector(getAnswers);
	const step = answers.step * 1;
	const token = useSelector((state: ApplicationState) => state.auth.token);
	const user = useSelector((state: ApplicationState) => state.auth.user);
	const intro_user = useSelector((state: ApplicationState) => state.auth.intro_user);
	const questionStep6Answers = questionAnswers[questionOrder[step6OrderIndex]].answers;

	const dispatch = useDispatch();

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
		setTimeout(async () => {
			if (token && user) {
				if (step >= questionOrder.length) {
					await dispatch(updateQuestionnare(data, step));
					await dispatch(finishQuestionnare());
				} else {
					dispatch(updateQuestionnare(data, step));
				}
			} else {
				if (step >= questionOrder.length) {
					await dispatch(updateQuestionnare(data, step, intro_user?.id, true));
					router.replace("/checkpoint-result");
				} else {
					await dispatch(updateQuestionnare(data, step, intro_user?.id));
				}
			}
		}, 1000);
	};

	const handlePrev = (data: Answer, step: number) => {
		if (token && user) {
			dispatch(updateQuestionnare(data, step));
		} else {
			dispatch(updateQuestionnare(data, step, intro_user?.id));
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
		const loopStart = step != step6OrderIndex + 1 ? step - 1 - step6OrderIndex : 0;
		for (let index = loopStart; index < questionStep6Answers.length; index++)
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
		else if (step >= quizRenderStartOrderIndex && step <= quizRenderEndOrderIndex)
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
		else if (step >= quizRenderStartOrderIndex && step <= quizRenderEndOrderIndex)
			return quizRenderStartOrderIndex - 4;
		else return step - 4;
	};

	const getQuestionPage = useCallback(() => {
		if (step >= questionOrder.length) {
			return (
				<Confetti
					data={answers}
					handleNext={(e) => handleNext(e, step + 1)}
				/>
			);
		}
		const currentQuestion = questionAnswers[questionOrder[step]];
		const isQuizStep = step >= quizRenderStartOrderIndex && step <= quizRenderEndOrderIndex;

		if (!currentQuestion.questionType || currentQuestion.questionType == QuestionTypes.TYPE_GENERAL || currentQuestion.questionType == QuestionTypes.TYPE_ICON || currentQuestion.questionType == QuestionTypes.TYPE_CHECKBOX) {
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
		} else if (currentQuestion.questionType == QuestionTypes.TYPE_CONFETTI) {
			//QuestionTypes.TYPE_CONFETTI
			return (
				<Confetti
					data={answers}
					step={getStepperNumber()}
					handleNext={(e) => handleNext(e, step + 1)}
				/>
			);
		} else return <>{alert("Something wrong with questionnaire logic")}</>;
	}, [answers]);

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
		</div>
	);
};

export default Checkpoint;
