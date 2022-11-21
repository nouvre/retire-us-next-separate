import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import moment from "moment";
import { User } from "@/store/auth/types";
import { Answer } from "@/store/questions/types";
import { TextNormal } from "@/components/Typographies";
import { getCurrentAge } from "@/util/func";
import RetirementPacing from "@/components/Questionnare/RetirementPacing";
import RiskOfFailure from "@/components/Questionnare/RiskOfFailure";
import TaxPlaning from "@/components/Questionnare/TaxPlaning";

const CheckPointResults = ({
    user,
    answers,
    handleClick,
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
}: {
    user: User | null;
    answers: Answer;
    handleClick: () => void;
    checkRetRF1: () => boolean;
    checkRetRF2: () => boolean;
    checkRetRF3: () => boolean;
    checkRetRF4: () => boolean;
    checkRetRF5: () => boolean;
    checkRetRF6: () => boolean;
    checkTaxRF1: () => boolean;
    checkTaxRF2: () => boolean;
    checkTaxRF3: () => boolean;
    checkTaxRF4: () => boolean;
    checkTaxRF5: () => boolean;
    checkCfpRF1: () => boolean;
    checkCfpRF2: () => boolean;
    checkCfpRF3: () => boolean;
}) => {
    const [currentAge, setCurrentAge] = useState<number>(0);
    const [retirementYear, setRetirementYear] = useState<number>(0);
    const [retirementTimeline, setRetirementTimeline] = useState<number>(0);
    const retirementAge = answers?.wantToRetireAge || 0;

    useEffect(() => {
        if (Object.keys(answers).length > 0) generateValues();
    }, [answers]);

    const generateValues = () => {
        const currentYear = moment().year();
        const currentAge = getCurrentAge(answers?.birthYear);
        if (currentAge) {
            setCurrentAge(currentAge);
            setRetirementYear(currentYear - currentAge + retirementAge);
            setRetirementTimeline(retirementAge - currentAge);
        } else console.error("Error occured while calculating current age.");
    };

    return (
        <div className="w-full md:w-[620px] px-6 md:px-0 text-center text-lg text-[#5A6478] font-normal m-auto">
            <div className="text-black font-bold text-[20px] md:text-[28px] leading-6 md:leading-8 mb-8">
                Your retirement checkpoint results
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
                        {retirementAge}
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
                <div className="text-[#000714]">{retirementTimeline} years</div>
            </div>
            <RetirementPacing
                answers={answers}
                numberOfPeriods={retirementTimeline}
            />
            <TaxPlaning
                answers={answers}
                retirementAge={retirementAge}
                retirementYear={retirementYear}
            />
            <RiskOfFailure
                answers={answers}
                numberOfPeriods={retirementTimeline}
                retRF1={checkRetRF1()}
                retRF3={checkRetRF3()}
                retRF4={checkRetRF4()}
                retRF5={checkRetRF5()}
                taxRF1={checkTaxRF1()}
                cfpRF3={checkCfpRF3()}
            />

            <div className="flex flex-wrap md:flex-nowrap md:gap-5 mt-[40px] bg-white px-[20px] md:px-[40px] py-6 md:py-8 rounded-[20px] shadow-[0px_4px_32px_rgba(24,54,98,0.04)]">
                <TextNormal className="text-left font-bold text-[20px] md:text-[28px] mb-[10px]">
                    Red Flags
                </TextNormal>
                <div className="text-left">
                    {(checkRetRF2() ||
                        checkRetRF3() ||
                        checkRetRF4() ||
                        checkRetRF5() ||
                        checkRetRF6()) && (
                        <>
                            <ul className="list-disc ml-5 list-red-flags text-base md:text-[18px] text-[#434A59] leading-6">
                                {checkRetRF2() && (
                                    <li className="mb-3 md:mb-4">
                                        Investment needs are unknown
                                    </li>
                                )}
                                {checkRetRF3() && (
                                    <li className="mb-3 md:mb-4">
                                        Investments may be out of alignment
                                    </li>
                                )}
                                {checkRetRF4() && (
                                    <li className="mb-3 md:mb-4">
                                        Market risk is HIGH
                                    </li>
                                )}
                                {checkRetRF5() && (
                                    <li className="mb-3 md:mb-4">
                                        Inflation risk is HIGH
                                    </li>
                                )}

                                {checkRetRF6() && (
                                    <li className="mb-3 md:mb-4">
                                        Old employer plan limiting investment
                                        options
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
                                        Possible estate planning risks
                                    </li>
                                )}
                                {checkCfpRF2() && (
                                    <li className="mb-3 md:mb-4">
                                        Complex employee benefits may create
                                        heavy tax implications
                                    </li>
                                )}
                                {checkCfpRF3() && (
                                    <li className="mb-3 md:mb-4">
                                        Single equity risk exposure high
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
                                        Required minimum distributions need to
                                        be evaluated
                                    </li>
                                )}
                                {checkTaxRF4() && (
                                    <li className="mb-3 md:mb-4">
                                        No cash flow hierarchy
                                    </li>
                                )}
                                {checkRetRF1() && (
                                    <li className="mb-3 md:mb-4">
                                        Haven't quantified retirement goal
                                    </li>
                                )}
                                {checkTaxRF1() && (
                                    <li className="mb-3 md:mb-4">
                                        Retirement age will create tax penalties
                                        without tax planning
                                    </li>
                                )}
                                {checkTaxRF3() && (
                                    <li className="mb-3 md:mb-4">
                                        Limited tax diversification
                                    </li>
                                )}
                                {checkTaxRF5() && (
                                    <li className="mb-3 md:mb-4">
                                        Retirement tax liability unknown
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                </div>
            </div>
            {(user?.authenticate_type == 1 ||
                user?.authenticate_type === undefined) && (
                <div className="d-flex w-full justify-center pt-12 pb-[100px]">
                    <div
                        className="max-w-[400px] mx-auto flex h-[60px] justify-center items-center rounded-[60px] bg-[#001F55] text-white text-[18px] font-bold cursor-pointer"
                        onClick={handleClick}
                    >
                        Continue for recommendations
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckPointResults;
