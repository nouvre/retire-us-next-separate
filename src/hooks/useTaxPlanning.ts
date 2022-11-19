import { useEffect, useState } from "react";
import { Answer } from "@/store/questions/types";

const useTaxPlanning = ({
    answers,
    retirementYear,
    retirementAge,
}: {
    answers: Answer | null;
    retirementYear: number;
    retirementAge: number;
}) => {
    const [taxPlaningResult, setTaxPlaningResult] = useState<string>("");

    useEffect(() => {
        if (answers && Object.keys(answers).length) {
            let score = getTaxPlaningResult();
            if (score < 0) {
                setTaxPlaningResult("Heavy tax burden");
            } else if (score == 0) {
                setTaxPlaningResult("Average tax burden");
            } else {
                setTaxPlaningResult("Low tax burden");
            }
        }
    }, [answers]);

    const getTaxPlaningResult = () => {
        let result = 0;
        if (answers?.step33Answer_1 == 1) {
            result += 1;
        } else if (answers?.step33Answer_2 == 1) {
            result -= 1;
        }

        if (answers?.step34Answer_1 == 1) {
            result += 1;
        } else if (answers?.step34Answer_2 == 1) {
            result -= 1;
        }

        if (answers?.step35Answer_1 == 1) {
            result -= 1;
        } else if (answers?.step35Answer_2 == 1) {
            result += 1;
        }

        if (answers?.step16Answer_1 == 1) {
            result += 1;
        } else if (answers?.step16Answer_4 == 1) {
            result -= 1;
        }

        if (answers?.step10Answer_1 == 1) {
            result -= 1;
        } else if (answers?.step10Answer_4 == 1) {
            result += 1;
        }

        if (retirementYear > 10 && answers?.step11Answer_5 == 1) {
            result -= 1;
        }

        if (retirementYear > 20 && answers?.step16Answer_4 == 1) {
            result -= 1;
        }

        if (retirementAge > 65 && answers?.step11Answer_5 == 1) {
            result -= 1;
        }

        if (answers?.step11Answer_5 == 1 && answers?.step8Answer_1 == 1) {
            result -= 1;
        }

        if (answers?.step11Answer_5 == 1 && answers?.step12Answer_1 == 1) {
            result -= 1;
        }

        if (answers?.step11Answer_5 == 1 && answers?.step12Answer_2 == 1) {
            result -= 1;
        }

        if (answers?.step11Answer_1 == 1 && answers?.step8Answer_4 == 1) {
            result += 2;
        }

        if (answers?.step8Answer_1 == 1 && answers?.step9Answer_4 == 1) {
            result += 2;
        }

        if (answers?.step11Answer_1 == 1 && retirementYear < 5) {
            result += 2;
        }
        return result;
    };

    return taxPlaningResult;
};

export default useTaxPlanning;
