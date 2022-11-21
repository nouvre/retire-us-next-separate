import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Answer } from "@/store/questions/types";
import { Checkpoint } from "@/store/setting/types";
import TimeLine from "./TimeLine";
import useTaxPlanning from "@/hooks/useTaxPlanning";
import { updateCheckPointResult } from "@/store/setting/action";

interface ComponentProps {
    userId?: number;
    answers: Answer | null;
    editable?: boolean;
    showable?: boolean;
    checkPoint?: Checkpoint | null;
    retirementYear: number;
    retirementAge: number;
}

const TaxPlaning = ({
    userId,
    answers,
    editable = false,
    showable = true,
    checkPoint = null,
    retirementYear,
    retirementAge,
}: ComponentProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const taxPlanning = useTaxPlanning({
        answers,
        retirementYear,
        retirementAge,
    });

    useEffect(() => {
        if (
            checkPoint?.tax_planning === null ||
            checkPoint?.tax_planning === undefined
        )
            setValue(taxPlanning);
        else setValue(checkPoint?.tax_planning);
    }, [taxPlanning]);

    const handleClick = (e: string) => {
        if (editable) {
            setValue(e);
            dispatch(updateCheckPointResult(userId, "tax_planning", e));
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
                    Tax Planning:
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
                    col={"tax_planning"}
                    value={value}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default TaxPlaning;
