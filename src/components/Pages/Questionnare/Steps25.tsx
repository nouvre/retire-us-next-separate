import React, { useEffect, useState } from "react";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import Progress from "@/components/Questionnare/Progress";
import { Answer } from "@/store/questions/types";
import Image from '@/components/common/Image';

interface ComponentProps {
	data: any;
	step: number;
	handleNext: (e: Answer) => void;
	handlePrev: (e: Answer) => void;
}

const Steps25: React.FC<ComponentProps> = (props) => {
	const [submitData, setSubmitData] = useState<Answer>(props.data);

	useEffect(() => {
		if (props.data) {
			setSubmitData(props.data);
		}
	}, [props.data]);

	const handleNext = () => {
		return props.handleNext({ ...submitData });
	};

	const handlePrev = () => {
		return props.handlePrev({ ...submitData });
	};

	return (
		<div className="w-full px-[20px] md:px-[60px] relative">
			<div className="w-full max-w-[840px] mx-auto">
				<Progress step={props.step} />
				<div className="relative mb-[60px] w-[373px] md:w-full mt-8 md:mt-[33px] m-auto">
					<Image
						src="/assets/images/cloud.svg"
						alt="cloud"
						className="absolute top-0 hidden md:block"
					/>
					<Image
						src="/assets/images/cloud1.svg"
						alt="cloud"
						className="absolute hidden md:block bottom-[-47px] right-[-65px]"
					/>
					<Image
						src="/assets/images/cloud-mobile.svg"
						alt="cloud"
						className="absolute top-0 block md:hidden"
					/>
					<Image
						src="/assets/images/cloud-mobile1.svg"
						alt="cloud"
						className="absolute block md:hidden bottom-[-47px] right-0"
					/>
					<div className="w-full relative px-[26px] md:pr-[85px] md:pl-[100px] pt-[31px] md:pt-[60px] min-h-[364px] m-auto">
						<div className="w-full flex flex-col md:flex-row">
							<div className="w-[322px] mb-4 md:mb-0">
								<div className="text-xl leading-6 md:leading-[28px] md:text-[23px] text-[#000714] font-bold mb-4 md:mb-[11px]">
									<span>Great job!</span>
									<br />
									<span>You are almost done!</span>
								</div>
								<div className="relative mt-[11px]">
									<div className="w-full">
										<div className="w-full text-base md:text-lg text-[#434A59] md:leading-[30px]">
											For this final exercise you will be
											given{" "}
											<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] fotn-bold whitespace-nowrap">
												11 questions
											</span>{" "}
											with{" "}
											<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] fotn-bold whitespace-nowrap">
												11 seconds
											</span>{" "}
											to answer each. The goal here is not
											to overthink the question. Just go
											with your gut!
										</div>
										<div className="hidden md: text-xl md:text-[23px] text-[#000714] font-bold mt-[3px]">
											Are you ready?
										</div>
									</div>
								</div>
							</div>
							<div className="flex gap-x-4 md:gap-x-2 p-0 md:pl-11 md:pb-[16px] items-center mb-4 md:mb-0">
								<div className="w-[155px] md:w-[120px] h-[99px] md:h-[160px] bg-[#EEF1F8] rounded-[20px] pb-3 pt-[5.5px] md:py-[15px] items-center flex flex-col">
									<Image
										src="/assets/images/question.svg"
										className="w-[54px] md:w-[99px] mb-[5.7px] md:mb-[6.4px]"
										alt="question"
									/>
									<div className="text-black font-bold text-lg md:text-[23px] leading-[22px] md:leading-8 mb-0 md:mb-[5px] mt-auto">
										11
									</div>
									<div className="text-[#434A59] text-sm md:text-base leading-4 md:leading-6">
										questions
									</div>
								</div>
								<div className="hidden md:flex items-center">
									<Image
										src="/assets/images/question-between.svg"
										alt="between"
									/>
								</div>
								<div className="w-[155px] md:w-[120px] h-[99px] md:h-[160px] bg-[#EEF1F8] rounded-[20px] pb-3 pt-[10px] md:py-[15px] items-center flex flex-col relative z-10">
									<Image
										src="/assets/images/timer.svg"
										className="absolute z-[-1] w-[37px] md:w-[61.5px] mb-[6.4px]"
										alt="timer"
									/>
									<div className="text-black font-bold text-lg md:text-[23px] leading-[22px] md:leading-8 mb-0 md:mb-[5px] mt-auto">
										11
									</div>
									<div className="text-[#434A59] text-sm md:text-base leading-4 md:leading-6">
										seconds
									</div>
								</div>
							</div>
							<div className="w-full text-xl leading-6 text-black font-bold block md:hidden">
								Are you ready?
							</div>
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
						className={`flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55] ${submitData["wantToRetireAge"] ? "" : "opacity-70"
							}`}
						onClick={() => {
							handleNext();
						}}
					>
						Continue
						<ArrowRight className="ml-3" />
					</button>
				</div>
			</div>
			<Image
				src="/assets/images/glass-man.svg"
				alt="Glass man"
				className="relative ml-auto mt-auto max-w-[80%] right-[-20px] block md:hidden"
			/>
		</div>
	);
};

export default Steps25;
