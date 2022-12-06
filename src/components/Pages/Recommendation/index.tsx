import React, { useMemo, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "@/store/index";
import { Answer } from "@/store/questions/types";
import { SharedFillButton } from "@/components/Buttons/SharedFillButton";
import AllSubscriptionsInclude from "@/components/AllSubscriptionsInclude";
import Image from '@/components/common/Image';
import { useQuestionnaire } from "@/util/func";
import useRecommend from "@/hooks/useRecommend";

interface RedFlag {
	li: string;
	ul: string;
}

type ComponentProps = {
	answers: Answer;
	lazyLoadWrapperRef: any;
	subscriptionRef: any;
	allSubscriptions: any;
	handleClick: () => void;
}

const Recommend: React.FC<ComponentProps> = ({ answers, lazyLoadWrapperRef, subscriptionRef, allSubscriptions, handleClick }) => {
	const [flagList, setFlagList] = useState<Array<RedFlag>>([]);

	const { getRedFlagList } = useQuestionnaire({ answers });
	const recommended = useRecommend({ answers });

	useMemo(() => {
		if (Object.keys(answers).length) {
			setFlagList(getRedFlagList());
		}
	}, [answers]);

	return (
		<div style={{ height: Object.keys(answers).length ? "100%" : "0", opacity: Object.keys(answers).length ? "1" : "0" }}>
			<div className="w-full flex flex-col items-center pt-[146px] px-5" >
				<div className="w-full max-w-[840px] relative">
					<Image
						src="/assets/images/congratulation-bg.svg"
						alt="congratulation"
						className="relative w-full max-w-[840px] hidden sm:block z-10"
						onLoad={() => {
							console.log('here', lazyLoadWrapperRef)
							if (lazyLoadWrapperRef.current) {
								lazyLoadWrapperRef.current.style.visibility = 'visible';
							}
						}}
					/>
					<Image
						src="/assets/images/congratulation-bg-mobile.svg"
						alt="congratulation mobile"
						className="relative w-full block sm:hidden z-10"
						onLoad={() => {
							if (lazyLoadWrapperRef.current) {
								lazyLoadWrapperRef.current.style.visibility = 'visible';
							}
						}}
					/>
					<div className="absolute top-0 w-full h-full z-10 flex items-center justify-center px-[30px] md:px-12">
						<div className="flex flex-col gap-3 md:gap-5 w-full max-w-[650px] mt-[-30%] sm:mt-[-10%]">
							<div className="w-full text-[#000714] text-[20px] md:text-[23px] leading-7 mb-1 font-bold">
								Congratulations!
							</div>
							<div className="w-full text-[#434A59] leading-[18px] sm:leading-6 md:leading-8 text-sm md:text-lg">
								Your first step towards financial freedom is
								complete. Now it is time to take action! Based
								on your results, there a few areas we would
								recommend evaluating...
							</div>
							{flagList.length > 0 && (
								<ul className="list-disc ml-5 list-red-flags">
									{flagList.map((f, inx) => (
										<li key={inx}>
											<div
												className={`w-full text-[#434A59] text-sm md:text-lg leading-[18px] sm:leading-6 md:leading-8 ${flagList.length - 1 == inx
													? ""
													: "mb-3"
													}`}
											>
												{f.ul}
											</div>
										</li>
									))}
								</ul>
							)}
							<div className="w-full text-[#434A59] text-sm md:text-lg leading-[18px] sm:leading-6 md:leading-8">
								{recommended.standard && (
									<>
										I would suggest choosing{" "}
										<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-bold">
											Basic Planning
										</span>{" "}
										to focus on financial goals, investments
										& prioritizing household cash flow.
									</>
								)}
								{recommended.tax && (
									<>
										I would suggest choosing{" "}
										<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FAA942] to-[#FADD43] font-bold">
											Tax Mastery
										</span>{" "}
										to solidify your financial plan and
										create new levels of tax efficiency.
									</>
								)}
								{recommended.wealth && (
									<>
										I would suggest choosing{" "}
										<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#57CAC3] to-[#76EFC3] font-bold">
											Wealth Mastery
										</span>{" "}
										to solidify your financial plan, create
										new levels of tax efficiency, and
										strengthen your legacy.
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full relative">
					<div className="w-full max-w-[840px] mb-8 relative flex md:justify-center z-10 mx-auto mt-[-67px] sm:mt-0">
						<SharedFillButton
							className="flex items-center text-sm sm:text-lg font-bold px-6 md:px-8 py-4 gap-2"
							pill={true}
							onClick={handleClick}
						>
							<span>Review my recommended plan</span>
							<Image
								src="/assets/images/arrow-down.svg"
								alt="Right Arrow"
							/>
						</SharedFillButton>
					</div>
					<Image
						src="/assets/images/glass-man.svg"
						alt="Glass man"
						className="relative ml-auto z-0 max-w-[80%] right-[-20px] mt-[-293px] hidden sm:block"
					/>
				</div>
				<div className="relative flex sm:hidden justify-between items-end -ml-5 w-[calc(100%+40px)]">
					<Image
						src="/assets/images/recommendation-left-corner-m.svg"
						alt="Corner Image"
						className="w-[114px] h-[184px]"
					/>
					<Image
						src="/assets/images/glass-man.svg"
						alt="Glass man"
						className="w-[180px] h-[200px]"
					/>
				</div>
			</div>
			<div
				className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto mt-0 sm:mt-20"
				ref={subscriptionRef}
				id="scrollSpy"
			>
				{allSubscriptions && (
					<AllSubscriptionsInclude
						title={allSubscriptions.title}
						subscriptions={allSubscriptions.items}
					/>
				)}
			</div>
		</div>
	);
};

export default Recommend;
