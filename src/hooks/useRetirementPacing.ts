import React from "react";
import { Answer } from "@/store/questions/types";

const useRetirementPacing = ({ answers, numberOfPeriods }: { answers: Answer | null; numberOfPeriods: number; }) => {

    const costs = { step8Answer_1: 1000000, step8Answer_2: 2000000, step8Answer_3: 3000000, step8Answer_4: 4000000, step8Answer_5: 0 };
    const rates = { step21Answer_1: [0.075, 0.08, 0.085, 0.09], step21Answer_4: [0.025, 0.03, 0.035, 0.04], step21Answer_3: [0.04, 0.045, 0.05, 0.055], step21Answer_2: [0.055, 0.06, 0.065, 0.07] };
    const paymentAmount = { step16Answer_1: -10000, step16Answer_2: -20000, step16Answer_3: -30000, step16Answer_4: -50000 };
    const presentValue = { step11Answer_1: -250000, step11Answer_2: -500000, step11Answer_3: -750000, step11Answer_4: -1000000, step11Answer_5: -2000000 };
    const endOrBeginning = 0;

    const [pacing, setPacing] = React.useState<string>('');

    React.useEffect(() => {
        if (answers && Object.keys(answers).length) {
            const costKey = Object.keys(costs).filter((key) => parseInt(answers[key]))[0];
            const rateKey = Object.keys(rates).filter((key) => parseInt(answers[key]))[0];
            const paymentKey = Object.keys(paymentAmount).filter((key) => parseInt(answers[key]))[0];
            const presentKey = Object.keys(presentValue).filter((key) => parseInt(answers[key]))[0];

            const data = rates[rateKey].map((rate: number) => {
                return FV(rate, numberOfPeriods, paymentAmount[paymentKey], presentValue[presentKey], endOrBeginning) > costs[costKey] ? 1 : 0;
            });

            const val = data.reduce((a: number, b: number) => a + b, 0)

            switch (val) {
                case 4:
                    setPacing('Likely on track');
                    break;
                case 3:
                    setPacing('At risk');
                    break;
                default:
                    setPacing('Likely off track');
            }
        }
    }, [answers, numberOfPeriods])

    const FV = (rate: number, nper: number, pmt: number, pv: number, type: number) => {
        let pow = Math.pow(1 + rate, nper),
            fv;
        if (rate) {
            fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
        } else {
            fv = -1 * (pv + pmt * nper);
        }
        return fv.toFixed(2);
    }

    return pacing;
};

export default useRetirementPacing;