import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store";
import {
    questionAnswers,
    Question,
    questionOrder,
} from "../../../constants/variables";

import { useQuestionnaire } from "../../../util/func";
import { Answer } from "@/store/questions/types";
import RetirementPacing from "@/components/Questionnare/RetirementPacing";
import TaxPlaning from "@/components/Questionnare/TaxPlaning";
import RiskOfFailure from "@/components/Questionnare/RiskOfFailure";

interface RedFlag {
    li: string;
    ul: string;
}

type RecommendedType = {
    standard: boolean;
    tax: boolean;
    wealth: boolean;
};

const Flags: React.FC = (props: any) => {
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    const [flagList, setFlagList] = useState<Array<RedFlag>>([]);
    const [currentAge, setCurrentAge] = useState<number>(0);
    const [retirementYear, setRetirementYear] = useState<number>(0);
    const [retirementTimeline, setRetirementTimeline] = useState<number>(0);
    const [recommended, setRecommended] = useState<RecommendedType>({
        standard: true,
        tax: false,
        wealth: false,
    });

    const generateValues = () => {
        let currentAge = getCurrentAge(answers?.birthYear);
        if (currentAge) {
            let currentYear = moment().year();
            setCurrentAge(currentAge);
            setRetirementYear(
                currentYear - currentAge + Number(answers.wantToRetireAge)
            );
            setRetirementTimeline(answers.wantToRetireAge - currentAge);
        } else console.error("Error occured while calculating current age.");
    };

    const getCurrentAge = (birthYear) => {
        if (birthYear) {
            let currentDate = moment();
            let birthDate = moment(birthYear, "MM/DD/YYYY");
            if (
                currentDate.month() > birthDate.month() ||
                (currentDate.month() == birthDate.month() &&
                    currentDate.date() > birthDate.date())
            ) {
                return currentDate.year() - birthDate.year();
            } else {
                return currentDate.year() - birthDate.year() - 1;
            }
        } else {
            return 0;
        }
    };

    let answers: Answer = {
        user_id: 0,
        retireDefineWeeklyIncome: undefined,
        retireDefineNever: undefined,
        retireDefine20hours: undefined,
        retireDefineNoWork: undefined,
        extraSystematicYes: undefined,
        birthYear: "",
        wantToRetireAge: 0,
        retireForRelaxing: undefined,
        retireForNoProblem: undefined,
        retireForEveryDayIsSaturDay: undefined,
        retireForVacation: undefined,
        retireExpenseNormal: undefined,
        retireExpenseMortage: undefined,
        retireExpenseEntertainment: undefined,
        retireExpenseTravel: undefined,
        retireIncomeTypePension: undefined,
        retireIncomeTypeSocial: undefined,
        retireIncomeTypePartTime: undefined,
        retireIncomeTypeRental: undefined,
        retireIncomeTypeOther: undefined,
        retireIncomePension: undefined,
        retireIncomeSocial: undefined,
        retireIncomePartTime: undefined,
        retireIncomeRental: undefined,
        retireIncomeOther: undefined,
        retireIncomePensionAmountPercent: undefined,
        retirementConcern1: undefined,
        retirementConcern2: undefined,
        retirementConcern3: undefined,
        retirementConcern4: undefined,
        retirementConcern5: undefined,
        systematicSavingAfterTax: undefined,
        systematicSavingTaxDeferred: undefined,
        systematicSavingTaxFree: undefined,
        oldEmployerPlans: undefined,
        marjorExpenseBeforeRetireWeeding: undefined,
        marjorExpenseBeforeRetirePropertyPurchase: undefined,
        retireInmarjorExpenseBeforeRetireEducation: undefined,
        marjorExpenseBeforeRetireHealthcare: undefined,
        marjorExpenseBeforeRetireOther: undefined,
        quickExperciseHouseholdIncome: undefined,
        quickExperciseSavedPercentage: undefined,
        quickExperciseMatchPercentage: undefined,
        totalSavedAfterTax: undefined,
        totalSavedTaxDeferred: undefined,
        totalSavedTaxFree: undefined,
        whyRetireTiredWorking: undefined,
        whyRetireFinancialFreedom: undefined,
        whatWouldUpsetLosingMoney: undefined,
        whatWouldUpsetPushingBackDate: undefined,
        decideSaveRetirementMathThing: undefined,
        decideSaveRetirementFeelingThing: undefined,
        valueMoreAccumulatingWelth: undefined,
        valueMoreProtectingWelth: undefined,
        HowKnowRetireInKnow: undefined,
        HowKnowRetireInNotSure: undefined,
        HowMuchToSuccessRetireNotSure: undefined,
        HowMuchToSuccessRetireProbably: undefined,
        HowMuchToSuccessRetireMoney: undefined,
        HowFeelMarketCrashedFind: undefined,
        HowFeelMarketCrashedNervous: undefined,
        HowDoMarketCrashedInvest: undefined,
        HowDoMarketCrashedCry: undefined,
        StillRetireMarketCrashedSure: undefined,
        StillRetireMarketCrashedNotSure: undefined,
        retirementReallyAcomplishNo: undefined,
        retirementReallyAcomplishYes: undefined,
        step2Answer_1: 0,
        step2Answer_2: 0,
        step2Answer_3: 0,
        step2Answer_4: 0,
        step5Answer_1: 0,
        step5Answer_2: 0,
        step6Answer_1: 0,
        step6Answer_2: 0,
        step6Answer_3: 0,
        step6Answer_4: 0,
        step6_follow1_answer_1: 0,
        step6_follow1_answer_2: 0,
        step6_follow1_answer_3: 0,
        step6_follow1_answer_4: 0,
        step6_follow2_answer_1: 0,
        step6_follow2_answer_2: 0,
        step6_follow2_answer_3: 0,
        step6_follow3_answer_1: 0,
        step6_follow3_answer_2: 0,
        step6_follow3_answer_3: 0,
        step6_follow4_answer_1: 0,
        step6_follow4_answer_2: 0,
        step6_follow4_answer_3: 0,
        step8Answer_1: 0,
        step8Answer_2: 0,
        step8Answer_3: 0,
        step8Answer_4: 0,
        step8Answer_5: 0,
        step9Answer_1: 0,
        step9Answer_2: 0,
        step9Answer_3: 0,
        step9Answer_4: 0,
        step9Answer_5: 0,
        step10Answer_1: 0,
        step10Answer_2: 0,
        step10Answer_3: 0,
        step10Answer_4: 0,
        step11Answer_1: 0,
        step11Answer_2: 0,
        step11Answer_3: 0,
        step11Answer_4: 0,
        step11Answer_5: 0,
        step12Answer_1: 0,
        step12Answer_2: 0,
        step12Answer_3: 0,
        step12Answer_4: 0,
        step13Answer_1: 0,
        step13Answer_2: 0,
        step14Answer_1: 0,
        step14Answer_2: 0,
        step15Answer_1: 0,
        step15Answer_2: 0,
        step16Answer_1: 0,
        step16Answer_2: 0,
        step16Answer_3: 0,
        step16Answer_4: 0,
        step17Answer_1: 0,
        step17Answer_2: 0,
        step18Answer_1: 0,
        step18Answer_2: 0,
        step19Answer_1: 0,
        step19Answer_2: 0,
        step20Answer_1: 0,
        step20Answer_2: 0,
        step21Answer_1: 0,
        step21Answer_2: 0,
        step21Answer_3: 0,
        step21Answer_4: 0,
        step22Answer_1: 0,
        step22Answer_2: 0,
        step23Answer_1: 0,
        step23Answer_2: 0,
        step23Answer_3: 0,
        step23Answer_4: 0,
        step24Answer_1: 0,
        step24Answer_2: 0,
        step24Answer_3: 0,
        step24Answer_4: 0,
        step26Answer_1: 0,
        step26Answer_2: 0,
        step27Answer_1: 0,
        step27Answer_2: 0,
        step28Answer_1: 0,
        step28Answer_2: 0,
        step29Answer_1: 0,
        step29Answer_2: 0,
        step30Answer_1: 0,
        step30Answer_2: 0,
        step31Answer_1: 0,
        step31Answer_2: 0,
        step32Answer_1: 0,
        step32Answer_2: 0,
        step33Answer_1: 0,
        step33Answer_2: 0,
        step34Answer_1: 0,
        step34Answer_2: 0,
        step35Answer_1: 0,
        step35Answer_2: 0,
        step36Answer_1: 0,
        step36Answer_2: 0,
        step37Answer_1: 0,
        step37Answer_2: 0,
        step40Answer_1: 0,
        step40Answer_2: 0,
        step40Answer_3: 0,
        step: undefined,
    };

    selectedUser?.answers.forEach((a) => {
        answers[a.meta_key] = a.meta_value;
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

    useEffect(() => {
        const tmpQuizSteps: Array<Question> = [];
        for (let i = 0; i < questionOrder.length; i++) {
            if (questionOrder[i] != 12)
                tmpQuizSteps.push(questionAnswers[questionOrder[i]]);
        }

        getRedFlagList();
        generateValues();
    }, []);

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

    return selectedUser?.role != undefined && selectedUser?.role == "user" ? (
        <Scrollbars>
            {selectedUser?.profile_complete_step &&
                selectedUser.answers.length ? (
                <div className="w-full flex flex-col pt-2 px-10 h-full">
                    {flagList.length ? (
                        <div>
                            <div className="text-black font-bold text-[24px] leading-8 mb-8 text-center">
                                Checkpoint Flags
                            </div>
                            <ul className="list-disc ml-5 list-red-flags mb-3">
                                {flagList.map((f, inx) => (
                                    <li key={inx}>
                                        <div className="w-full text-[#434A59] text-mobile md:text-[20px] md:leading-8  mb-2">
                                            {f.ul}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    <div className="py-[50px]">
                        <div className="text-black font-bold text-[24px] leading-8 mb-8 text-center">
                            Retirement Checkpoint Results
                        </div>
                        <div className="text-base md:text-[18px] text-[#434A59] border-t border-[#DDE3F0] flex justify-between items-center py-[10px]">
                            <div className="flex flex-col md:flex-row justify-center">
                                <div>Current age:</div>
                                <div className="md:ml-4 font-bold text-[#000714]">
                                    {currentAge}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center">
                                <div>Retirement age:</div>
                                <div className="md:ml-4 font-bold text-[#000714]">
                                    {answers.wantToRetireAge}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center">
                                <div>Retirement year:</div>
                                <div className="md:ml-4 font-bold text-[#000714]">
                                    {retirementYear}
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-[#DDE3F0] flex justify-between items-center py-[10px] text-base md:text-[18px] text-[#434A59]">
                            <div>Retirement timeline:</div>
                            <div className="text-[#000714]">
                                {retirementTimeline} years
                            </div>
                        </div>
                        <RetirementPacing
                            userId={selectedUser.id}
                            answers={answers}
                            editable={true}
                            checkPoint={selectedUser?.checkpoint}
                            numberOfPeriods={retirementTimeline}
                        />
                        <TaxPlaning
                            userId={selectedUser.id}
                            answers={answers}
                            editable={true}
                            checkPoint={selectedUser?.checkpoint}
                            retirementAge={answers.wantToRetireAge}
                            retirementYear={answers.wantToRetireAge}
                        />
                        <RiskOfFailure
                            userId={selectedUser.id}
                            answers={answers}
                            numberOfPeriods={retirementTimeline}
                            editable={true}
                            checkPoint={selectedUser?.checkpoint}
                            retRF1={checkRetRF1()}
                            retRF3={checkRetRF3()}
                            retRF4={checkRetRF4()}
                            retRF5={checkRetRF5()}
                            taxRF1={checkTaxRF1()}
                            cfpRF3={checkCfpRF3()}
                        />
                    </div>
                    <div className="py-[50px]">
                        <div className="text-black font-bold text-[24px] leading-8 mb-8 text-center">
                            Recommended Plan
                        </div>
                        <div className="">
                            {recommended.standard && (
                                <>
                                    Basic Planning
                                </>
                            )}
                            {recommended.tax && (
                                <>
                                    Tax Mastery
                                </>
                            )}
                            {recommended.wealth && (
                                <>
                                    Wealth Mastery
                                </>
                            )}
                        </div>
                    </div>
                    <div className="py-[50px]">
                        <div className="text-black font-bold text-[24px] leading-8 mb-8 text-center">
                            Subscription Plan
                        </div>
                        <div className="">
                            {selectedUser.current_plan ? selectedUser.current_plan.plan.title : ""}
                        </div>
                    </div>
                    <div>
                        <div className="text-black font-bold text-[24px] leading-8 mb-8 text-center">
                            Overall Flags
                        </div>
                        {(checkRetRF2() ||
                            checkRetRF3() ||
                            checkRetRF4() ||
                            checkRetRF5() ||
                            checkRetRF6()) && (
                                <>
                                    <ul className="list-disc ml-5 list-red-flags text-base md:text-[18px] text-[#434A59] leading-6">
                                        {checkRetRF2() && (
                                            <li className="mb-3 md:mb-4">
                                                Investment Needs Are Unknown
                                            </li>
                                        )}
                                        {checkRetRF3() && (
                                            <li className="mb-3 md:mb-4">
                                                Investments may be out of alignment
                                            </li>
                                        )}
                                        {checkRetRF4() && (
                                            <li className="mb-3 md:mb-4">
                                                Market Risk is HIGH
                                            </li>
                                        )}
                                        {checkRetRF5() && (
                                            <li className="mb-3 md:mb-4">
                                                Inflation Risk Is HIGH
                                            </li>
                                        )}

                                        {checkRetRF6() && (
                                            <li className="mb-3 md:mb-4">
                                                Old employer plan limiting investment options
                                            </li>
                                        )}
                                    </ul>
                                </>
                            )}
                        {(checkCfpRF1() || checkCfpRF2() || checkCfpRF3()) && (
                            <>
                                <ul className="list-disc ml-5 list-red-flags text-base md:text-[18px] text-[#434A59] leading-6">
                                    {checkCfpRF1() && (
                                        <li className="mb-3 md:mb-4">
                                            Possible Estate Planning Risks
                                        </li>
                                    )}
                                    {checkCfpRF2() && (
                                        <li className="mb-3 md:mb-4">
                                            Complex Employee Benefits May Create Heavy Tax Implications
                                        </li>
                                    )}
                                    {checkCfpRF3() && (
                                        <li className="mb-3 md:mb-4">
                                            Single Equity Risk Exposure High
                                        </li>
                                    )}
                                </ul>
                            </>
                        )}
                        {(checkRetRF1() ||
                            checkTaxRF1() ||
                            checkTaxRF2() ||
                            checkTaxRF3() ||
                            checkTaxRF4() ||
                            checkTaxRF5()) && (
                                <>
                                    <ul className="list-disc ml-5 list-red-flags text-base md:text-[18px] text-[#434A59] leading-6">
                                        {checkTaxRF2() && (
                                            <li className="mb-3 md:mb-4">
                                                Required Minimum Distributions need to be evaluated
                                            </li>
                                        )}
                                        {checkTaxRF4() && (
                                            <li className="mb-3 md:mb-4">
                                                No Cash Flow Hierarchy
                                            </li>
                                        )}
                                        {checkRetRF1() && (
                                            <li className="mb-3 md:mb-4">
                                                Haven't Quantified Retirement Goal
                                            </li>
                                        )}
                                        {checkTaxRF1() && (
                                            <li className="mb-3 md:mb-4">
                                                Retirement age will create tax penalties without tax planning
                                            </li>
                                        )}
                                        {checkTaxRF3() && (
                                            <li className="mb-3 md:mb-4">
                                                Limited Tax Diversification
                                            </li>
                                        )}
                                        {checkTaxRF5() && (
                                            <li className="mb-3 md:mb-4">
                                                Retirement Tax Liability Unknown
                                            </li>
                                        )}
                                    </ul>
                                </>
                            )}
                    </div>
                </div>
            ) : (
                <div className="text-center pt-16 text-4xl">
                    This user has not been completed Questionnaire yet.
                </div>
            )}
        </Scrollbars>
    ) : null;
};

export default Flags;
