import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import Steps from "@/components/Steps";
import Plannings from "@/components/Plannings";
import Strategies from "@/components/Strategies";
import Plans from "@/components/Plans";
import CopyImageBlock from "@/components/CopyImageBlock";
import { SectionContainer } from "@/components/common/Wrappers";
import { getImage, fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const PlanningProcess: React.FC = ({ planning }: any) => {
	const [topLabel, setTopLabel] = useState<any>(null);

	useEffect(() => {
		async function getCmsData() {
			const topLabel = sessionStorage.getItem("topLabel");

			if (topLabel !== "off") {
				setTopLabel(planning.topLabel);
				sessionStorage.setItem("topLabel", "on");
			}
		}

		getCmsData();
	}, []);

	const closeTopLabel = () => {
		setTopLabel(null);
		sessionStorage.setItem("topLabel", "off");
	};

	return (
		<div className="w-full h-screen">
			<Header
				opacity={true}
				bgOnScroll="bg-white"
				blueOnScroll={true}
				topLabel={topLabel}
				handleCloseTopLabel={closeTopLabel}
			/>

			{planning?.hero && (
				<div
					className={`relative w-full bg-hero-texture-mobile lg:bg-hero-texture bg-cover bg-bottom bg-no-repeat px-6 lg:px-[0] ${topLabel && "mt-[150px] lg:mt-[78px]"
						}`}
				>
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:max-w-[960px] xl:max-w-[1280px] mx-auto pt-[100px] lg:pt-[160px] lg:pb-[80px]">
						<div className="relative">
							<h1 className="font-bold text-[46px] leading-[48px] lg:text-[54px] lg:leading-[58px] xl:text-[70px] xl:leading-[74px] text-white pb-5 lg:pb-6">
								{planning?.hero?.title}
							</h1>
							<div
								className="text-base lg:text-lg xl:text-xl text-white leading-6 xl:leading-8 pb-8 lg:pb-11"
								dangerouslySetInnerHTML={{
									__html: planning?.hero?.text,
								}}
							/>
							<Image
								src="/assets/images/ico-ellipse.svg"
								alt="ico-ellipse"
								className="absolute right-[50%] md:right-0 bottom-[40%] hidden md:block"
							/>
						</div>
						{planning?.hero?.image && (
							<Image
								src={getImage(planning.hero.image)}
								alt="Hero People"
								className="static lg:absolute right-[80px] 2xl:right-[240px] bottom-[0] w-[350px] lg:w-[500px] xl:w-[606px]"
							/>
						)}
						<Image
							src="/assets/images/ico-ellipse.svg"
							alt="ico-ellipse"
							className="absolute right-[5%] top-[20%] hidden md:block"
						/>
					</div>
				</div>
			)}

			{planning?.stages && (
				<SectionContainer bg="bg-[#EEF1F8]">
					<div className="flex flex-col justify-center text-center w-full max-w-[840px] mx-auto">
						<div className="text-[#000714] text-[32px] leading-[36px] md:text-[56px] md:leading-[60px] font-bold">
							{planning?.stages?.title}
						</div>
						<div className="text-[#434A59] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] mt-[20px] md:mt-[24px] mb-[20px] md:mb-[8px]">
							{planning?.stages?.subtitle}
						</div>
						<div className="text-[#000714] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
							{planning?.stages?.description}
						</div>
						{planning?.stages?.image && (
							<Image
								src={getImage(planning.stages.image)}
								alt="Cycle"
								className="w-full max-w-[422px] my-[40px] mx-auto"
							/>
						)}
						<div
							className="text-[#000714] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]"
							dangerouslySetInnerHTML={{
								__html: planning?.stages?.bottom,
							}}
						/>
					</div>
				</SectionContainer>
			)}

			{planning?.steps &&
				planning.steps.map((item, index) => (
					<Steps
						key={`steps_${index}`}
						title={item.title}
						sideTitle={item.sideTitle}
						sideSubtitle={item.sideSubtitle}
						sideText={item.sideText}
						steps={item.steps}
						branding={item.branding}
						withArrows={item.withArrows}
						reversed={item.reversed}
						noTopMargin={item.noTopMargin}
					/>
				))}

			{planning?.analysis && (
				<SectionContainer bg="bg-[#EEF1F8]">
					<div className="flex flex-col justify-center text-center w-full max-w-[840px] mx-auto">
						<div className="text-[#000714] text-[32px] leading-[36px] md:text-[56px] md:leading-[60px] font-bold">
							{planning?.analysis?.title}
						</div>
						<div className="text-[#434A59] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] mt-[20px] md:mt-[24px]">
							{planning?.analysis?.subtitle}
						</div>
						{planning?.analysis?.image && (
							<Image
								src={getImage(planning.analysis.image)}
								alt="Cycle"
								className="w-full max-w-[540px] my-[40px] mx-auto"
							/>
						)}

						{planning?.analysis?.bottom &&
							planning.analysis.bottom.map((item, index) => (
								<div
									key={`planning_analysis_${index}`}
									className="text-[16px] leading-[24px] md:text-[20px] md:leading-[32px]"
								>
									<span
										className={`text-transparent bg-clip-text bg-gradient-to-br from-[${item.gradientFromColor}] to-[${item.gradientToColor}] font-bold`}
									>
										{item.highlighted}
									</span>{" "}
									{item.text}
								</div>
							))}
					</div>
				</SectionContainer>
			)}

			{planning?.basicPlanning && (
				<Plannings
					background="bg-basic-title-mobile lg:bg-basic-title"
					title={planning.basicPlanning.title}
					text={planning.basicPlanning.text}
					plannings={planning.basicPlanning.points}
				/>
			)}

			{planning?.basicStrategies && (
				<Strategies
					background="linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)"
					title={planning.basicStrategies.title}
					strategies={planning.basicStrategies.strategies}
					cta={planning.basicStrategies.cta}
				/>
			)}

			{planning?.taxPlanning && (
				<Plannings
					background="bg-tax-title-mobile lg:bg-tax-title"
					title={planning.taxPlanning.title}
					text={planning.taxPlanning.text}
					plannings={planning.taxPlanning.points}
				/>
			)}

			{planning?.taxStrategies && (
				<Strategies
					background="linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)"
					title={planning.taxStrategies.title}
					strategies={planning.taxStrategies.strategies}
					cta={planning.taxStrategies.cta}
				/>
			)}

			{planning?.wealthPlanning && (
				<Plannings
					background="bg-wealth-title-mobile lg:bg-wealth-title"
					title={planning.wealthPlanning.title}
					text={planning.wealthPlanning.text}
					plannings={planning.wealthPlanning.points}
				/>
			)}

			{planning?.wealthStrategies && (
				<Strategies
					background="linear-gradient(90deg, #57CAC3 41.48%, #76EFC3 87.14%)"
					title={planning.wealthStrategies.title}
					strategies={planning.wealthStrategies.strategies}
					cta={planning.wealthStrategies.cta}
				/>
			)}

			{planning && (
				<div className="w-full bg-white pb-[60px] lg:pb-[120px]" />
			)}

			{planning?.plans && (
				<Plans
					title={planning.plans.title}
					text={planning.plans.text}
					plans={planning.plans.plans.data}
					cta={planning.plans.cta}
				/>
			)}

			{planning?.prefooter && (
				<CopyImageBlock
					title={planning.prefooter.title}
					text={planning.prefooter.text}
					items={planning.prefooter.items}
					cta={planning.prefooter.cta}
					image={planning.prefooter.image}
				/>
			)}

			{planning && <Footer />}
		</div>
	);
};

export default PlanningProcess;

PlanningProcess.displayName = "Planning";

export async function getServerSideProps(context) {
	const response = await fetchAPI("/planning");
	const content = response?.data?.attributes ?? fallback.planning;

	return {
		props: {
			planning: content,
		},
	}
}