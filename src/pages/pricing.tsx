import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import Accordion from "@/components/Accordion";
import { TextTitleLg, TextTitle } from "@/components/Typographies";
import { selectPlan } from "@/store/auth/action";
import { getPlans, storePlanToLocal } from "@/store/plan/action";
import { ApplicationState } from "@/store/index";
import { Plan } from "@/store/plan/types";
import CarouselBanner from "@/components/Pages/Pricing/carousel";
import { planFeatures, planSummaries, faqs } from "@/components/Pages/Pricing/contents";
import { Helmet } from "react-helmet";
import Banner from "@/components/Banner";
import AllSubscriptionsInclude from "@/components/AllSubscriptionsInclude";
import PlansFeatures from "@/components/PlansFeatures";
import { getImage, fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

const Pricing: React.FC = ({ pricing }: any) => {
	const [topLabel, setTopLabel] = useState<any>(null);

	useEffect(() => {
		async function getCmsData() {
			const topLabel = sessionStorage.getItem("topLabel");

			if (topLabel !== "off") {
				setTopLabel(pricing.topLabel);
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
		<div className="w-full">
			<Helmet
				title="Invest in Your Financial Future for as Little as $10/week"
				htmlAttributes={{ lang: "en" }}
				meta={[
					{
						name: "description",
						content:
							"RetireUS makes expert financial advisors accessible to everyone. Choose a retirement plan that fits your goals with our subscription-based model.",
					},
					{
						name: "keywords",
						content:
							"Retirement plan, financial advisor, Financial Planning Tool, Retirement Planning, Financial Consulting, Certified Financial Planner, CFP",
					},
				]}
				link={[
					{
						rel: "canonical",
						href: "https://retire.us/pricing",
					},
				]}
			/>

			<Header
				opacity={true}
				bgOnScroll="bg-white"
				blueOnScroll={true}
				topLabel={topLabel}
				handleCloseTopLabel={closeTopLabel}
			/>

			{pricing?.hero && (
				<div
					className={`relative w-full bg-about-us-texture bg-cover bg-center bg-no-repeat ${topLabel && "mt-[150px] lg:mt-[78px]"
						}`}
				>
					<div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] px-6 mx-auto relative">
						<div className="w-full pt-[100px] md:pt-[200px] pb-[60px] md:pb-[120px] mx-auto text-center">
							<h1 className="font-bold text-[46px] leading-[48px] md:text-[70px] text-white md:leading-[74px] pb-[24px]">
								{pricing?.hero?.title}
							</h1>
							<div
								className="text-base leading-6 md:text-xl text-white md:leading-8"
								dangerouslySetInnerHTML={{
									__html: pricing?.hero?.text,
								}}
							/>
						</div>
					</div>
				</div>
			)}

			{pricing?.slider && (
				<div className="relative w-full z-[2] bg-white">
					<div className="md:w-full lg:max-w-[960px] xl:max-w-[1280px] px-6 mx-auto flex flex-col-reverse lg:flex-row justify-between relative py-[60px] md:py-[120px]">
						<div className="self-center lg:self-end">
							{pricing?.slider?.image && (
								<Image
									src={getImage(pricing.slider.image)}
									alt="Yoga People"
									className="bottom-0 left-0 max-w-[585px] w-full border-b-[3px] border-[#5EC4F7]"
								/>
							)}
						</div>
						<div className="w-full md:w-[600px]">
							{pricing?.slider?.slides && (
								<CarouselBanner
									slides={pricing.slider.slides}
								/>
							)}
						</div>
					</div>
				</div>
			)}

			{pricing?.plansComparison && (
				<div className="relative w-full z-[2] bg-[#F7F9FC] md:px-6">
					<div className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto relative py-[60px] md:py-[120px]">
						<TextTitleLg className="w-full mx-auto px-6 pb-8 md:pb-[80px]">
							{pricing?.plansComparison?.title}
						</TextTitleLg>

						{pricing?.plansComparison?.allSubscriptions && (
							<AllSubscriptionsInclude
								title={
									pricing.plansComparison.allSubscriptions
										.title
								}
								subscriptions={
									pricing.plansComparison.allSubscriptions
										.items
								}
							/>
						)}

						<PlansFeatures
							features={planFeatures}
							summaries={planSummaries}
						/>
					</div>
				</div>
			)}

			{pricing?.faq && (
				<div className="relative w-full z-[2] bg-white pb-[60px] md:pb-[120px]">
					<div className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto relative py-[60px] md:py-[120px]">
						<TextTitleLg className="sm:w-full mx-auto pb-10 md:pb-[80px] px-[24px]">
							{pricing?.faq?.title}
						</TextTitleLg>

						{faqs && <Accordion contents={faqs} />}

						<TextTitle className="w-full text-center pt-[40px] pb-[20px] px-[24px] md:pt-[80px] md:pb-[40px]">
							{pricing?.faq?.bottom}
						</TextTitle>
						{pricing?.faq?.cta && (
							<a
								href={pricing.faq.cta.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center transition duration-300 font-bold text-lg border font-Lato rounded-full text-white border-[#001F55] bg-[#001F55] hover:text-[#001F55] hover:bg-white w-max py-[15px] xl:py-[25px] px-6 xl:px-10 mx-auto"
							>
								<div className="flex items-center gap-4">
									{pricing.faq.cta.text}
									<span>&#183;&#183;</span>
								</div>
							</a>
						)}
					</div>

					{pricing?.banner && (
						<div className="px-[24px]">
							<Banner
								title={pricing.banner.title}
								text={pricing.banner.text}
								cta={pricing.banner.cta}
							/>
						</div>
					)}
				</div>
			)}

			{pricing && <Footer />}
		</div>
	);
};

export default Pricing;

Pricing.displayName = "Pricing";

export async function getServerSideProps(context) {
	const response = await fetchAPI("/pricing");
	const content = response?.data?.attributes ?? fallback.pricing;

	return {
		props: {
			pricing: content,
			ssr: true,
		},
	}
}