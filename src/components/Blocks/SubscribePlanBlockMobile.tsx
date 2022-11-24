import React, { useEffect, useState } from "react";
import { Answer } from "@/store/questions/types";
import SubscribePlanDisclosure from "./SubscribePlanDisclosure";
import { planSummaries } from "@/components/Pages/Pricing/contents";

type RecommendedType = {
    standard: boolean;
    tax: boolean;
    wealth: boolean;
};

const SubscribePlanBlockMobile = ({
    answers,
    defaultOpen,
}: {
    answers?: Answer;
    defaultOpen?: boolean;
}) => {
    const retirementAge = answers?.wantToRetireAge || 0;
    const [recommended, setRecommended] = useState<RecommendedType>({
        standard: true,
        tax: false,
        wealth: false,
    });

    const [recommendedPlan, setRecommendedPlan] = useState<any>({});

    useEffect(() => {
        if (answers) {
            const taxVal = getTaxVal();
            const wealthVal = getWealthVal();
            const data = { ...recommended };
            let plan = planSummaries[0];

            data.standard = true;
            data.tax = false;
            data.wealth = false;

            if (taxVal >= 2) {
                data.standard = false;
                data.tax = true;
                data.wealth = false;
                plan = planSummaries[1];
            }
            if (wealthVal > 0) {
                data.standard = false;
                data.tax = false;
                data.wealth = true;
                plan = planSummaries[2];
            }

            setRecommended(data);
            setRecommendedPlan(plan);
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
        <>
            {recommendedPlan?.id && (
                <SubscribePlanDisclosure
                    plan={recommendedPlan}
                    defaultOpen={true}
                />
            )}
            {planSummaries.map((ps, i) => {
                if (ps.id === recommendedPlan.id) {
                    return null;
                } else {
                    return (
                        <SubscribePlanDisclosure
                            plan={ps}
                            defaultOpen={defaultOpen}
                            key={`plan_disclosure_${i}`}
                        />
                    );
                }
            })}
        </>
    );
};

export default SubscribePlanBlockMobile;
