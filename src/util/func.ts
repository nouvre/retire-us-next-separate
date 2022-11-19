import React from "react";
import moment from "moment";
import { Answer } from "@/store/questions/types";

export const useQuestionnaire = ({ answers }: { answers: Answer }) => {
    const checkRetRF1 = React.useCallback(() => {
        if (
            answers.step6Answer_1 == 1 ||
            answers.step6Answer_2 == 1 ||
            answers.step8Answer_5 == 1 ||
            answers.step9Answer_5 == 1 ||
            answers.step31Answer_2 == 1
        )
            return true;
        else return false;
    }, [answers]);

    const checkRetRF2 = React.useCallback(() => {
        if (
            answers.step6Answer_2 == 1 ||
            answers.step31Answer_2 == 1 ||
            answers.step32Answer_2 == 1 ||
            answers.step10Answer_3 == 1 ||
            answers.step10Answer_4 == 1 ||
            answers.step37Answer_2 == 1
        )
            return true;
        else return false;
    }, [answers]);

    const checkRetRF3 = React.useCallback(() => {
        if (
            (answers.step8Answer_2 == 1 && answers.step9Answer_1 == 1) ||
            (answers.step8Answer_3 == 1 && answers.step9Answer_1 == 1) ||
            (answers.step8Answer_3 == 1 && answers.step9Answer_2 == 1) ||
            (answers.step8Answer_4 == 1 && answers.step9Answer_1 == 1) ||
            (answers.step8Answer_4 == 1 && answers.step9Answer_2 == 1) ||
            (answers.step8Answer_4 == 1 && answers.step9Answer_3 == 1) ||
            answers.step8Answer_5 == 1 ||
            answers.step9Answer_5 == 1 ||
            answers.step6_follow3_answer_2 ||
            answers.step37Answer_2 == 1 ||
            answers.step6Answer_3 == 1 ||
            answers.step36Answer_2 == 1
        )
            return true;
        else return false;
    }, [answers]);

    const checkRetRF4 = React.useCallback(() => {
        if (answers.step21Answer_1 == 1 || answers.step22Answer_2 == 1)
            return true;
        else return false;
    }, [answers]);

    const checkRetRF5 = React.useCallback(() => {
        if (answers.step21Answer_3 == 1 || answers.step21Answer_4 == 1)
            return true;
        else return false;
    }, [answers]);

    const checkRetRF6 = React.useCallback(() => {
        if (answers.step18Answer_1 == 1) return true;
        else return false;
    }, [answers]);

    const checkCfpRF1 = React.useCallback(() => {
        if (
            answers.step11Answer_5 == 1 ||
            answers.step16Answer_3 == 1 ||
            answers.step16Answer_4 == 1
        )
            return true;
        else return false;
    }, [answers]);

    const checkCfpRF2 = React.useCallback(() => {
        if (answers.step12Answer_2 == 1 || answers.step12Answer_3 == 1) return true;
        else return false;
    }, [answers]);

    const checkCfpRF3 = React.useCallback(() => {
        if (answers.step12Answer_3 == 1) return true;
        else return false;
    }, [answers]);

    const checkTaxRF1 = React.useCallback(() => {
        if (answers.wantToRetireAge < 59) return true;
        else return false;
    }, [answers]);

    const checkTaxRF2 = React.useCallback(() => {
        if (
            answers.wantToRetireAge > 65 ||
            answers.step6_follow4_answer_3 == 1 ||
            answers.step34Answer_2 == 1 ||
            (answers.step12Answer_1 == 1 && answers.step10Answer_2 == 1) ||
            (answers.step12Answer_1 == 1 && answers.step10Answer_1 == 1)
        )
            return true;
        else return false;
    }, [answers]);

    const checkTaxRF3 = React.useCallback(() => {
        if (
            answers.step6_follow4_answer_1 == 1 ||
            answers.step6_follow4_answer_3 == 1 ||
            answers.step10Answer_2 == 1
        )
            return true;
        else return false;
    }, [answers]);

    const checkTaxRF4 = React.useCallback(() => {
        if (answers.step40Answer_2 == 1 || answers.step40Answer_3 == 1)
            return true;
        else return false;
    }, [answers]);

    const checkTaxRF5 = React.useCallback(() => {
        if (answers.step6Answer_4 == 1 || answers.step33Answer_2 == 1)
            return true;
        else return false;
    }, [answers]);

    const getTaxVal = React.useCallback(() => {
        let val =
            num(answers?.step6_follow4_answer_3) +
            num(answers?.step34Answer_2) +
            num(answers?.step10Answer_2) +
            num(answers?.step6_follow4_answer_1) +
            num(answers?.step40Answer_2) +
            num(answers?.step40Answer_3) +
            num(answers?.step6Answer_4) +
            num(answers?.step33Answer_2);
        if (answers?.wantToRetireAge < 59 || answers?.wantToRetireAge > 65)
            val += 1;
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
    }, [answers]);

    const getWealthVal = React.useCallback(() => {
        return (
            num(answers?.step11Answer_5) +
            num(answers?.step16Answer_3) +
            num(answers?.step16Answer_4) +
            num(answers?.step12Answer_2) +
            num(answers?.step12Answer_2)
        );
    }, [answers]);

    return {
        checkRetRF1,
        checkRetRF2,
        checkRetRF3,
        checkRetRF4,
        checkRetRF5,
        checkRetRF6,
        checkCfpRF1,
        checkCfpRF2,
        checkCfpRF3,
        checkTaxRF1,
        checkTaxRF2,
        checkTaxRF3,
        checkTaxRF4,
        checkTaxRF5,
        getTaxVal,
        getWealthVal
    };
};

export const getCurrentAge = (birthYear) => {
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

// export const getRedFlagList = () => {
//     let data: Array<RedFlag> = [];
//     if (checkRetRF2() || checkRetRF3() || checkRetRF4()) {
//         data.push({
//             li: "Resilient Retirement",
//             ul: "Your market risk may be higher than necessary. A Resilient Retirement strategy will help protect your investments from stock market volatility",
//         });
//     }
//     if (checkTaxRF2() || checkTaxRF3() || checkTaxRF5()) {
//         data.push({
//             li: "RMD Roadmap",
//             ul: "Future taxes could be higher than you expect. Tax diversification will help you avoid paying unnecessary tax bills.",
//         });
//     }
//     if (checkCfpRF1()) {
//         data.push({
//             li: "Estate Planning",
//             ul: "It is possible you will have leftover savings post retirement. Generational wealth planning will help maximize your legacy.",
//         });
//     }
//     if (checkTaxRF1() || checkTaxRF4() || checkRetRF5()) {
//         data.push({
//             li: "Cash Flow Hierarchy",
//             ul: "Prioritizing your savings will provide you with a lot of clarity on retirement. I would recommend building a Cashflow Hierarchy",
//         });
//     }
//     if (checkCfpRF2() || checkCfpRF3()) {
//         data.push({
//             li: "HCE Playbook",
//             ul: "It looks like you have complex work benefits. This can create significant tax planning issues and unnecessary risk exposures if you don’t have a Complex Income Playbook.",
//         });
//     }
//     return data.slice(0, 2);
// };

const num = (e: any) => {
    if (typeof e === "undefined") return 0;
    else return e;
};
