import React from "react";
import { useSelector } from "react-redux";
import PlansFeatures from "@/components/PlansFeatures";
import SubscribePlanBlock from "@/components/Blocks/SubscribePlanBlock";
import { TextNormal } from "@/components/Typographies";
import { planFeatures, planSummaries } from "@/components/Pages/Pricing/contents";
import { ApplicationState } from "@/store/index";
import { Answer } from "@/store/questions/types";
import useRecommend from "@/hooks/useRecommend";

const ChoosePlan = () => {
	const answers: Answer = useSelector((state: ApplicationState) => state.questions.answers);
	const recommended = useRecommend({ answers });

	return (
		<>
			<div className="recommend-plan-block pt-20 pb-[100px] hidden md:block">
				<div className="md:w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto">
					<SubscribePlanBlock answers={answers} />
				</div>
			</div>
			<div className={`w-full md:hidden ${Object.keys(answers).length? "py-10": "pt-24"}`}>
				{Object.keys(answers).length > 0 &&
					<TextNormal className="text-[20px] text-center font-bold mb-8">
						Recommended plan for you
					</TextNormal>
				}

				<PlansFeatures
					features={planFeatures}
					summaries={planSummaries}
					recommended={Object.keys(answers).length ? recommended : null}
				/>
			</div>
		</>
	);
};

export default ChoosePlan;
