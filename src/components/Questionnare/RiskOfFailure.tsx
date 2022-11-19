import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Answer } from "@/store/questions/types";
import { Checkpoint } from "@/store/setting/types";
import TimeLine from "./TimeLine";
import useRiskOfFailure from "../../hooks/useRiskOfFailure";
import { updateCheckPointResult } from "@/store/setting/action";

interface ComponentProps {
    userId?: number;
    answers: Answer | null;
    editable?: boolean;
    showable?: boolean;
    checkPoint?: Checkpoint | null;
    numberOfPeriods: number;
    retRF1: boolean;
    retRF3: boolean;
    retRF4: boolean;
    retRF5: boolean;
    taxRF1: boolean;
    cfpRF3: boolean;
}

const RiskOfFailure = ({
    userId,
    answers,
    editable = false,
    showable = true,
    checkPoint = null,
    numberOfPeriods,
    retRF1,
    retRF3,
    retRF4,
    retRF5,
    taxRF1,
    cfpRF3,
}: ComponentProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const risk = useRiskOfFailure({
        answers,
        numberOfPeriods,
        retRF1,
        retRF3,
        retRF4,
        retRF5,
        taxRF1,
        cfpRF3,
    });

    useEffect(() => {
        if (
            checkPoint?.risk_failure === null ||
            checkPoint?.risk_failure === undefined
        )
            setValue(risk);
        else setValue(checkPoint?.risk_failure);
    }, [risk]);

    const handleClick = (e: string) => {
        if (editable) {
            setValue(e);
            dispatch(updateCheckPointResult(userId, "risk_failure", e));
        }
    };

    return (
        <div
            className={`${
                showable
                    ? "border-t border-[#DDE3F0] flex items-center pt-[10px] pb-[10px] gap-4"
                    : "grid grid-cols-3 md:grid-cols-1 gap-[10px]"
            }`}
        >
            <div
                className={`${
                    showable
                        ? "flex flex-1 justify-between text-base md:text-[18px] text-[#434A59]"
                        : "col-span-1 md:col-span-full text-[14px] md:text-[16px] text-[#434A59] order-1"
                }`}
            >
                <div className={`${showable ? "block" : "hidden"}`}>
                    Risk of Failure:
                </div>
                <div>{value}</div>
            </div>
            <div
                className={`${
                    showable
                        ? "w-[100px] max-w-[100px]"
                        : "col-span-2 md:col-span-full"
                }`}
            >
                <TimeLine
                    col={"risk_failure"}
                    value={value}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default RiskOfFailure;
