import { useEffect, useState } from "react";
import { Answer } from "@/store/questions/types";
import useRetirementPacing from "./useRetirementPacing";

const useRiskOfFailure = ({
    answers,
    numberOfPeriods,
    retRF1,
    retRF3,
    retRF4,
    retRF5,
    taxRF1,
    cfpRF3,
}: {
    answers: Answer | null;
    numberOfPeriods: number;
    retRF1: boolean;
    retRF3: boolean;
    retRF4: boolean;
    retRF5: boolean;
    taxRF1: boolean;
    cfpRF3: boolean;
}) => {
    const [risk, setRisk] = useState<string>("");

    const pacing = useRetirementPacing({ answers, numberOfPeriods });

    useEffect(() => {
        if (answers && Object.keys(answers).length) {
            let total = 0;

            let pacingScore = 0;
            switch (pacing) {
                case "Likely off track":
                    pacingScore = 6;
                    break;
                case "At risk":
                    pacingScore = 3;
                    break;
                default:
                    pacingScore = 0;
                    break;
            }
            total += pacingScore * 0.5;

            let timelineScore = 0;
            if (numberOfPeriods >= 0 && numberOfPeriods < 6) timelineScore = 3;
            else if (numberOfPeriods > 5 && numberOfPeriods < 11)
                timelineScore = 2;
            else if (numberOfPeriods > 15) timelineScore = -1;
            total += timelineScore * 0.25;

            let redFlagScores: Array<number> = [0, 0, 0, 0, 0, 0];
            if (retRF1) redFlagScores[0] = 3;
            if (retRF3) redFlagScores[1] = 4;
            if (retRF4) redFlagScores[2] = 6;
            if (retRF5) redFlagScores[3] = 2;
            if (taxRF1) redFlagScores[4] = 3;
            if (cfpRF3) redFlagScores[5] = 3;
            total += Math.max(...redFlagScores) * 0.25;
            if (pacing) {
                if (total < 2) setRisk("Low");
                else if (total >= 2 && total <= 3) setRisk("Moderate");
                else if (total > 3) setRisk("High");
            }
        }
    }, [answers, pacing]);

    return risk;
};

export default useRiskOfFailure;
