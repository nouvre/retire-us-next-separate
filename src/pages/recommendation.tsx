import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/store/index";
import { selectPlan } from "@/store/auth/action";
import Header from "@/components/Pages/Header";
import SubscribePlanBlock from "@/components/Blocks/SubscribePlanBlock";
import { SharedFillButton } from "@/components/Buttons/SharedFillButton";
import { TextNormal } from "@/components/Typographies";
import { Answer } from "@/store/questions/types";
import { useQuestionnaire } from "@/util/func";
import AllSubscriptionsInclude from "@/components/AllSubscriptionsInclude";
import PlansFeatures from "@/components/PlansFeatures";
import { planFeatures, planSummaries } from "@/components/Pages/Pricing/contents";
import { fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

interface RedFlag {
    li: string;
    ul: string;
}

type RecommendedType = {
    standard: boolean;
    tax: boolean;
    wealth: boolean;
};

const Recommendation = (props: any) => {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const isFetching = useSelector(
        (state: ApplicationState) => state.auth.isFetching
    );
    const answers: Answer = useSelector(
        (state: ApplicationState) => state.questions.answers
    );

    const [flagList, setFlagList] = useState<Array<RedFlag>>([]);
    const [recommended, setRecommended] = useState<RecommendedType>({
        standard: true,
        tax: false,
        wealth: false,
    });

    const {
        checkRetRF1,
        checkRetRF2,
        checkRetRF3,
        checkRetRF4,
        checkRetRF5,
        checkRetRF6,
        checkTaxRF1,
        checkTaxRF2,
        checkTaxRF3,
        checkTaxRF4,
        checkTaxRF5,
        checkCfpRF1,
        checkCfpRF2,
        checkCfpRF3,
        getTaxVal,
        getWealthVal,
    } = useQuestionnaire({ answers });

    const getRedFlagList = () => {
        let tmp: Array<RedFlag> = [];
        if (checkRetRF2() || checkRetRF3() || checkRetRF4()) {
            tmp.push({
                li: "Resilient Retirement",
                ul: "Your market risk may be higher than necessary. A Resilient Retirement strategy will help protect your investments from stock market volatility",
            });
        }
        if (checkCfpRF2() || checkCfpRF3()) {
            tmp.push({
                li: "Complex Income Playbook",
                ul: "It looks like you have complex work benefits. This can create significant tax planning issues and unnecessary risk exposures if you don’t have a Complex Income Playbook.",
            });
        }
        if (checkCfpRF1()) {
            tmp.push({
                li: "Generational Wealth Planning",
                ul: "It is possible you will have leftover savings post retirement. Generational wealth planning will help maximize your legacy.",
            });
        }
        if (checkTaxRF2() || checkTaxRF3() || checkTaxRF5()) {
            tmp.push({
                li: "RMD Roadmap",
                ul: "Future taxes could be higher than you expect. Tax diversification will help you avoid paying unnecessary tax bills.",
            });
        }
        if (checkTaxRF1() || checkTaxRF4() || checkRetRF5()) {
            tmp.push({
                li: "Cash Flow Hierarchy",
                ul: "Prioritizing your savings will provide you with a lot of clarity on retirement. I would recommend building a Cashflow Hierarchy",
            });
        }
        setFlagList(tmp.slice(0, 2));
    };

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        if (isFetching && !user) router.push("/sso");
    }, [isFetching]);

    useEffect(() => {
        if (Object.keys(answers).length) getRedFlagList();
    }, [answers]);

    const handleClick = () => {
        if (ref.current) {
            const offsetY = ref.current.getBoundingClientRect().top;
            window.scrollTo({
                top: offsetY + window.pageYOffset - 60,
                behavior: "smooth",
            });
            // ref.current.scrollIntoView();
        }
    };

    const [allSubscriptions, setAllSubscriptions] = useState<any>(null);

    useEffect(() => {
        async function getCmsData() {
            const response = await fetchAPI("/pricing");
            const content = response?.data?.attributes ?? fallback.pricing;

            setAllSubscriptions(content.plansComparison.allSubscriptions);
        }

        getCmsData();
    }, []);

    return (
        <div className="w-full bg-[#EEF1F8]">
            <Header opacity={false} />
            <div className="w-full flex flex-col items-center pt-[146px] px-5">
                <div className="w-full max-w-[840px] relative">
                    <Image
                        src="/assets/images/congratulation-bg.svg"
                        alt="congratulation"
                        className="relative w-full max-w-[840px] hidden sm:block z-10"
                    />
                    <Image
                        src="/assets/images/congratulation-bg-mobile.svg"
                        alt="congratulation mobile"
                        className="relative w-full block sm:hidden z-10"
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
                                                className={`w-full text-[#434A59] text-sm md:text-lg leading-[18px] sm:leading-6 md:leading-8 ${
                                                    flagList.length - 1 == inx
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
                ref={ref}
                id="scrollSpy"
            >
                {allSubscriptions && (
                    <AllSubscriptionsInclude
                        title={allSubscriptions.title}
                        subscriptions={allSubscriptions.items}
                    />
                )}
            </div>

            {user?.authenticate_type !== 2 && (
                <>
                    <div className="recommend-plan-block pt-20 pb-[100px] hidden md:block">
                        <div className="md:w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto">
                            <SubscribePlanBlock answers={answers} />
                        </div>
                    </div>
                    <div className="w-full py-10 md:hidden">
                        <TextNormal className="text-[20px] text-center font-bold mb-8">
                            Recommended plan for you
                        </TextNormal>

                        <PlansFeatures
                            features={planFeatures}
                            summaries={planSummaries}
                            recommended={recommended}
                        />
                    </div>
                </>
            )}
            {user?.authenticate_type == 2 && (
                <div className="d-flex w-full justify-center pt-12 pb-[100px]">
                    <div
                        className="max-w-[400px] mx-auto flex h-[60px] justify-center items-center rounded-[60px] bg-[#001F55] text-white text-[18px] font-bold cursor-pointer"
                        onClick={() => dispatch(selectPlan(0))}
                    >
                        Continue
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recommendation;
