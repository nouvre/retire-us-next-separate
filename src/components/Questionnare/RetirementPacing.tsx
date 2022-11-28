import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Answer } from "@/store/questions/types";
import { Checkpoint } from "@/store/setting/types";
import TimeLine from "./TimeLine";
import useRetirementPacing from "@/hooks/useRetirementPacing";
import { updateCheckPointResult } from "@/store/setting/action";

interface ComponentProps {
    userId?: number;
    answers: Answer | null;
    editable?: boolean;
    showable?: boolean;
    checkPoint?: Checkpoint | null;
    numberOfPeriods: number;
}

const RetirementPacing = ({
    userId,
    answers,
    editable = false,
    showable = true,
    checkPoint = null,
    numberOfPeriods,
}: ComponentProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const pacing = useRetirementPacing({ answers, numberOfPeriods });

    useEffect(() => {
        if (checkPoint?.pacing === null || checkPoint?.pacing === undefined)
            setValue(pacing);
        else setValue(checkPoint?.pacing);
    }, [pacing]);

    const handleClick = (e: string) => {
        if (editable) {
            setValue(e);
            dispatch(updateCheckPointResult(userId, "pacing", e));
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
                    Pacing:
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
                    col={"pacing"}
                    value={value}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default RetirementPacing;
