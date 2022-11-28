import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answer } from "@/store/questions/types";
// import SubscribePlanCard from "../Card/SubscribePlan";
// import SubscribePlanCardHeader from "../Card/SubscribePlan/Header";
// import SubscribePlanCardBody from "../Card/SubscribePlan/Body";
// import SubscribePlanCardFooter from "../Card/SubscribePlan/Footer";
import { ApplicationState } from "@/store/index";
import { OutlineButton, OutlineButtonLink } from "../Buttons/WhiteButtons";
import { selectPlan } from "@/store/auth/action";
import CheckCircle from "@2fd/ant-design-icons/lib/CheckCircle";
import CloseCircle from "@2fd/ant-design-icons/lib/CloseCircle";
import { Tooltip } from "antd";
import Image from '@/components/common/Image';

type RecommendedType = {
	standard: boolean;
	tax: boolean;
	wealth: boolean;
};

const SubscribePlanBlock = ({ answers }: { answers: Answer | null }) => {
	const dispatch = useDispatch();
	const intro_user = useSelector((state: ApplicationState) => state.auth.intro_user);

	const retirementAge = answers?.wantToRetireAge || 0;
	const [recommended, setRecommended] = useState<RecommendedType>({
		standard: true,
		tax: false,
		wealth: false,
	});

	useEffect(() => {
		if (answers) {
			const taxVal = getTaxVal();
			const wealthVal = getWealthVal();
			const data = { ...recommended };
			data.standard = true;
			data.tax = false;
			data.wealth = false;

			if (taxVal >= 2) {
				data.standard = false;
				data.tax = true;
				data.wealth = false;
			}
			if (wealthVal > 0) {
				data.standard = false;
				data.tax = false;
				data.wealth = true;
			}
			setRecommended(data);
		}
	}, [answers]);

	const getTaxVal = () => {
		let val =
			num(answers?.step6_follow4_answer_3) +
			num(answers?.step34Answer_2) +
			num(answers?.step10Answer_2) +
			num(answers?.step6_follow4_answer_1) +
			num(answers?.step40Answer_2) +
			num(answers?.step40Answer_3) +
			num(answers?.step6Answer_4) +
			num(answers?.step33Answer_2);
		if (retirementAge < 59 || retirementAge > 65) val += 1;
		if (
			num(answers?.step12Answer_1) === 1 &&
			num(answers?.step10Answer_2) === 1
		)
			val += 1;
		if (
			num(answers?.step12Answer_1) === 1 &&
			num(answers?.step10Answer_1) === 1
		)
			val += 1;
		return val;
	};

	const getWealthVal = () => {
		return (
			num(answers?.step11Answer_5) +
			num(answers?.step16Answer_3) +
			num(answers?.step16Answer_4) +
			num(answers?.step12Answer_2) +
			num(answers?.step12Answer_2)
		);
	};

	const num = (e: any) => {
		if (typeof e === "undefined") return 0;
		else return e;
	};

	return (
		<table className="w-full table-auto rounded-[20px] border-collapse overflow-hidden">
			<colgroup>
				<col width="25%" />
				<col width="25%" />
				<col width="25%" />
				<col width="25%" />
			</colgroup>
			<thead>
				<tr>
					<th className="p-0" />
					<th className="p-0">
						{recommended.standard && (
							<div className="w-full bg-basic-plan text-white text-lg leading-6 font-bold h-[59px] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px]">
								Recommended plan for you
							</div>
						)}
					</th>
					<th className="p-0">
						{recommended.tax && (
							<div className="w-full bg-tax-plan text-white text-lg leading-6 font-bold h-[59px] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px]">
								Recommended plan for you
							</div>
						)}
					</th>
					<th className="p-0">
						{recommended.wealth && (
							<div className="w-full bg-wealth-plan text-white text-lg leading-6 font-bold h-[59px] flex justify-center items-center rounded-tl-[20px] rounded-tr-[20px] ">
								Recommended plan for you
							</div>
						)}
					</th>
				</tr>
				<tr>
					<th className="p-0 border-b border-r border-slate-300">
						<div className="w-full bg-[#DDE3F0] text-black text-[23px] leading-7 font-bold h-[88px] flex justify-center items-center rounded-tl-[20px]"></div>
					</th>
					<th className="p-0 border-l border-b border-r border-slate-300">
						<div
							className={`w-full relative ${recommended.standard
								? "bg-basic-plan text-white"
								: "bg-[#DDE3F0] text-black"
								} text-[23px] leading-7 font-bold h-[88px] flex justify-center items-center`}
						>
							Basic Planning
							<div className="absolute top-0 left-1 w-[calc(100%-8px)] opacity-20 bg-[#EEF1F8] h-[1px]" />
						</div>
					</th>
					<th className="p-0 border-l border-b border-r border-slate-300">
						<div
							className={`w-full relative ${recommended.tax
								? "bg-tax-plan text-white"
								: "bg-[#DDE3F0] text-black"
								} text-[23px] leading-7 font-bold h-[88px] flex justify-center items-center`}
						>
							Tax Mastery
							<div className="absolute top-0 left-1 w-[calc(100%-8px)] opacity-20 bg-[#EEF1F8] h-[1px]" />
						</div>
					</th>
					<th className="p-0 border-l border-b border-slate-300">
						<div
							className={`w-full relative ${recommended.wealth
								? "bg-wealth-plan text-white"
								: "bg-[#DDE3F0] text-black rounded-tr-[20px]"
								} text-[23px] leading-7 font-bold h-[88px] flex justify-center items-center`}
						>
							Wealth Mastery
							<div className="absolute top-0 left-1 w-[calc(100%-8px)] opacity-20 bg-[#EEF1F8] h-[1px]" />
						</div>
					</th>
				</tr>
			</thead>
			<tbody className="bg-white">
				<tr>
					<td rowSpan={2} className="border border-slate-300"></td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] w-full text-center py-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-Lato text-xl leading-8">
							$10/week (billed monthly)
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] w-full text-center py-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-Lato text-xl leading-8">
							$20/week (billed monthly)
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] w-full text-center py-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-Lato text-xl leading-8">
							$30/week (billed monthly)
						</div>
					</td>
				</tr>
				<tr>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] py-5 w-full text-center text-black text-lg leading-[30px]">
							Define your financial goals, implement investment
							strategy, and prioritize your cash flow for
							financial efficiency
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] py-5 w-full text-center text-black text-lg leading-[30px]">
							Maximize your savings efficiency and minimize the
							tax consequences of your retirement savings
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<div className="px-[35px] py-5 w-full text-center text-black text-lg leading-[30px]">
							Amplify your wealth and estate through 1:1 advanced
							planning sessions with a personal Certified
							Financial Planner™
						</div>
					</td>
				</tr>
				<tr className="bg-[#F7F9FC]">
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] py-5 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]">
							Areas of CFP® Evaluation
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					/>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					/>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					/>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Current Financial Situation
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Short Term Goals
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Retirement Planning
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Insurance & Risk Management
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Tax Diversification
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Estate Planning
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>

				<tr className="bg-[#F7F9FC]">
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] py-5 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]">
							RetireUS Advanced
							<br />
							Planning Strategies
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					/>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					/>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					/>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Resilient Retirement®
							<Tooltip
								placement="top"
								title={
									<span className="text-[14px] text-[#434A59] leading-4">
										Resilient Retirement® is a strategy
										designed to clarify your retirement
										vision, plan for market volatility, and
										give your investments purpose.
									</span>
								}
								color="#FFFFFF"
								overlayClassName="feature-tooltip"
							>
								<Image
									src="/assets/images/ico-info-gray.svg"
									alt="ico-info-gray"
									className="w-5 h-5 cursor-pointer"
								/>
							</Tooltip>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Cash Flow Hierarchy®
							<Tooltip
								placement="top"
								title={
									<span className="text-[14px] text-[#434A59] leading-4">
										A Cash Flow Hierarchy® is a cash flow
										plan to prioritize your savings by goal,
										timeline, & importance.
									</span>
								}
								color="#FFFFFF"
								overlayClassName="feature-tooltip"
							>
								<Image
									src="/assets/images/ico-info-gray.svg"
									alt="ico-info-gray"
									className="w-5 h-5 cursor-pointer"
								/>
							</Tooltip>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							RMD Roadmap®
							<Tooltip
								placement="top"
								title={
									<span className="text-[14px] text-[#434A59] leading-4">
										RMD Roadmap® is a tax planning strategy
										to help minimize taxable income in
										retirement & reduce future Required
										Minimum Distributions.
									</span>
								}
								color="#FFFFFF"
								overlayClassName="feature-tooltip"
							>
								<Image
									src="/assets/images/ico-info-gray.svg"
									alt="ico-info-gray"
									className="w-5 h-5 cursor-pointer"
								/>
							</Tooltip>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Complex Income Playbook
							<Tooltip
								placement="top"
								title={
									<span className="text-[14px] text-[#434A59] leading-4">
										A Complex Income Playbook is a cash flow
										plan designed to expedite your plan’s
										success through the strategic modeling
										of company stock incentives, deferred
										compensation, and other advanced income
										streams.
									</span>
								}
								color="#FFFFFF"
								overlayClassName="feature-tooltip"
							>
								<Image
									src="/assets/images/ico-info-gray.svg"
									alt="ico-info-gray"
									className="w-5 h-5 cursor-pointer"
								/>
							</Tooltip>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
				<tr>
					<td className="p-0 border border-slate-300">
						<div className="px-[35px] flex items-center py-5 text-lg font-bold text-black gap-2 whitespace-nowrap">
							Lasting Legacy®
							<Tooltip
								placement="top"
								title={
									<span className="text-[14px] text-[#434A59] leading-4">
										Lasting Legacy® is a strategy designed
										to strengthen future estate valuation,
										minimize inheritance taxes, & create
										generational wealth for beneficiaries.
									</span>
								}
								color="#FFFFFF"
								overlayClassName="feature-tooltip"
							>
								<Image
									src="/assets/images/ico-info-gray.svg"
									alt="ico-info-gray"
									className="w-5 h-5 cursor-pointer"
								/>
							</Tooltip>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-l-[#FAA942] border-r-[#FADD43]"
							: "border-slate-300"
							}`}
					>
						<CloseCircle className="w-full flex justify-center items-center text-[30px] text-[#F11940]" />
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-l-[#57CAC3] border-r-[#76EFC3]"
							: "border-slate-300"
							}`}
					>
						<CheckCircle className="w-full flex justify-center items-center text-[30px] text-[#00BB7A]" />
					</td>
				</tr>
			</tbody>
			<tfoot className="bg-white">
				<tr className="h-[88px]">
					<td className="p-0 border-t border-r border-slate-300">
						<div className="w-full flex justify-center items-center rounded-bl-[20px]"></div>
					</td>
					<td
						className={`p-0 border ${recommended.standard
							? "border-l-[4px] border-r-[4px] border-b-[4px] border-l-[#4D7EF2] border-r-[#5FD4F4] border-b-[#4D7EF2]"
							: "border-slate-300"
							}`}
					>
						<div className="w-full flex justify-center items-center">
							<OutlineButton
								btnText="Choose Plan"
								onClick={() => dispatch(selectPlan(2, intro_user.id))}
								icon={<span>&#183;&#183;</span>}
								blue={true}
							/>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.tax
							? "border-l-[4px] border-r-[4px] border-b-[4px] border-l-[#FAA942] border-r-[#FADD43] border-b-[#FAA942]"
							: "border-slate-300"
							}`}
					>
						<div className="w-full flex justify-center items-center">
							<OutlineButton
								btnText="Choose Plan"
								onClick={() => dispatch(selectPlan(3, intro_user.id))}
								icon={<span>&#183;&#183;</span>}
								blue={true}
							/>
						</div>
					</td>
					<td
						className={`p-0 border ${recommended.wealth
							? "border-l-[4px] border-r-[4px] border-b-[4px] border-l-[#57CAC3] border-r-[#76EFC3] border-b-[#57CAC3]"
							: "border-slate-300"
							}`}
					>
						<div className="w-full flex justify-center items-center rounded-br-[20px]">
							<OutlineButton
								btnText="Choose Plan"
								onClick={() => dispatch(selectPlan(4, intro_user.id))}
								icon={<span>&#183;&#183;</span>}
								blue={true}
							/>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default SubscribePlanBlock;
