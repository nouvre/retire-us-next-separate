import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";
import { TextNormal, TextGradient } from "@/components/Typographies";
import { OutlineButton, OutlineButtonLink } from "@/components/Buttons/WhiteButtons";
import { selectPlan } from "@/store/auth/action";
import Image from '@/components/common/Image';

interface PlansFeaturesProps {
	features: any;
	summaries: any;
	recommended?: any;
}

const PlansFeatures = ({
	features,
	summaries,
	recommended,
}: PlansFeaturesProps) => {
	const dispatch = useDispatch();
	const router = useRouter()
	const [planTab, setPlanTab] = useState<number | null>(0);

	useEffect(() => {
		if (recommended?.tax) {
			setPlanTab(1);
		}

		if (recommended?.wealth) {
			setPlanTab(2);
		}
	}, [recommended]);

	return (
		<>
			<div className="hidden md:block">
				<div className="w-full rounded-[20px] border border-[#DDE3F0]">
					<table className="table-border table-features bg-[#EEF1F8] rounded-[20px] overflow-hidden">
						<colgroup>
							<col width="25%" />
							<col width="25%" />
							<col width="25%" />
							<col width="25%" />
						</colgroup>
						<thead className="text-center">
							<tr>
								<th />
								{summaries.map((summary, index) => (
									<th
										key={`name_${index}`}
										style={{
											background: summary.background,
										}}
									>
										<div className="text-[16px] md:text-[23px] leading-[24px] md:leading-[28px] font-bold text-[#fff]">
											{summary.name}
										</div>
									</th>
								))}
							</tr>
							<tr className="bg-[#F7F9FC]">
								<th rowSpan={2} />
								{summaries.map((summary, index) => (
									<th key={`title_${index}`}>
										<TextGradient className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-bold">
											{summary.title}
										</TextGradient>
									</th>
								))}
							</tr>
							<tr className="bg-[#F7F9FC]">
								{summaries.map((summary, index) => (
									<th
										key={`description_${index}`}
										className="font-normal"
									>
										<TextNormal>
											{summary.description}
										</TextNormal>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{Object.keys(features).map((section, index) => (
								<React.Fragment key={`section_${index}`}>
									<tr className="bg-[#EEF1F8]">
										<td>
											<TextGradient className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] font-bold">
												{features[section].title}
											</TextGradient>
										</td>
										<td />
										<td />
										<td />
									</tr>
									{Object.keys(features[section]).map(
										(feature, index) => (
											<React.Fragment
												key={`feature_${index}`}
											>
												{index > 0 && (
													<tr className="bg-white">
														<td
															style={{
																paddingRight:
																	"0",
															}}
															className="flex items-center gap-x-[7px] text-[18px] leading-[30px] font-bold"
														>
															{
																features[
																	section
																][feature].title
															}
															{features[section][
																feature
															].description && (
																	<Tooltip
																		placement="top"
																		title={
																			<span className="text-[14px] text-[#434A59] leading-4">
																				{
																					features[
																						section
																					][
																						feature
																					]
																						.description
																				}
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
																)}
														</td>
														{summaries.map(
															(
																summary,
																index
															) => (
																<td
																	key={`summary_${index}`}
																>
																	{summary
																		.features[
																		section
																	][
																		feature
																	] ? (
																		<Image
																			src="/assets/images/ico-success-circle.svg"
																			alt="ico-success-circle"
																			className="mx-auto"
																		/>
																	) : (
																		<Image
																			src="/assets/images/ico-danger-circle.svg"
																			alt="ico-danger-circle"
																			className="mx-auto"
																		/>
																	)}
																</td>
															)
														)}
													</tr>
												)}
											</React.Fragment>
										)
									)}
								</React.Fragment>
							))}
							<tr>
								<td />
								{summaries.map((item, index) => (
									<td key={`links_${index}`}>
										<OutlineButtonLink
											href={item.href}
											params={{
												auth_type: true,
												plan_id: item.id,
											}}
											btnText="Choose Plan"
											icon={<span>&#183;&#183;</span>}
											className="w-max justify-center mx-auto"
											blue
										/>
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className="w-full md:hidden">
				{summaries.map((summary, index) => (
					<div
						className="flex flex-col w-full shadow-Plan"
						key={`summary_${index}_mobile`}
					>
						<div
							className="flex justify-between px-[24px] py-[15px] text-[#fff] text-[18px] leading-[30px] font-bold font-Lato bg-plan-texture rounded-tl-[20px] rounded-tr-[20px]"
							style={{
								background: summary.background,
							}}
							onClick={() => {
								setPlanTab(planTab !== index ? index : null);
							}}
						>
							{summary.name}
							<Image
								style={{
									transform:
										planTab === index
											? "rotate(0deg)"
											: "rotate(180deg)",
								}}
								className="w-[13.5px] duration-[0.5s]"
								src="/assets/images/plans/arrow.svg"
								alt="arrow"
							/>
						</div>
						<div
							style={{
								height: planTab === index ? 'fit-content' : '0',
							}}
							className="plan-inner relative duration-[0.5s] overflow-hidden bg-[#F7F9FC]"
						>
							<div
								style={{
									WebkitTextFillColor: "transparent",
								}}
								className="flex items-center my-[24px] text-[20px] leading-[24px] px-[24px] font-bold bg-plan-texture bg-clip-text"
							>
								{summary.title}
							</div>
							<div className="text-[#000714] text-[16px] leading-[24px] px-[24px]">
								{summary.description}
							</div>
							<div className="mt-[24px] border-b-[1px] border-b-[#DDE3F0]">
								{Object.keys(features).map((section, index) => (
									<div key={`section_${index}_mobile`}>
										<div className="bg-[#EEF1F8] py-[15px] px-[24px] border-t-[1px] border-t-[#DDE3F0]">
											<TextGradient className="text-[16px] leading-[24px] font-bold">
												{features[section].title}
											</TextGradient>
										</div>
										{Object.keys(features[section]).map(
											(feature, index) => (
												<React.Fragment
													key={`feature_${index}_mobile`}
												>
													{index > 0 && (
														<div className="py-[15px] pl-[24px] pr-[77px] flex justify-between border-t-[1px] border-t-[#DDE3F0]">
															<div className="flex items-center gap-x-[7px]">
																<div className="text-[#000714] text-[14px] leading-[16px] font-bold">
																	{
																		features[
																			section
																		][
																			feature
																		].title
																	}
																</div>
																{features[
																	section
																][feature]
																	.description && (
																		<div>
																			<Tooltip
																				placement="top"
																				title={
																					<span className="text-[14px] text-[#434A59] leading-4">
																						{
																							features[
																								section
																							][
																								feature
																							]
																								.description
																						}
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
																	)}
															</div>
															<div>
																{summary
																	.features[
																	section
																][feature] ? (
																	<Image
																		src="/assets/images/ico-success-circle.svg"
																		alt="ico-success-circle"
																		className="mx-auto"
																	/>
																) : (
																	<Image
																		src="/assets/images/ico-danger-circle.svg"
																		alt="ico-danger-circle"
																		className="mx-auto"
																	/>
																)}
															</div>
														</div>
													)}
												</React.Fragment>
											)
										)}
									</div>
								))}
							</div>
							{router.pathname == "/pricing" ?
								<div className="py-[12px] px-[24px] bg-[#EEF1F8] rounded-bl-[20px] rounded-br-[20px]">
									<OutlineButtonLink
										href="/signup"
										params={{
											auth_type: true,
											plan_id: summary.id,
										}}
										btnText="Choose Plan"
										icon={<span>&#183;&#183;</span>}
										className="w-max justify-center mx-auto"
										blue
									/>
								</div>
								:
								<div className="py-[12px] px-[24px] bg-[#EEF1F8] rounded-bl-[20px] rounded-br-[20px]">
									<OutlineButton
										btnText="Choose Plan"
										className="m-auto"
										onClick={() =>
											dispatch(selectPlan(summary.id))
										}
										icon={<span>&#183;&#183;</span>}
										blue={true}
									/>
								</div>
							}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PlansFeatures;
