import React from "react";
import { cprItems } from "../../constants/variables";

interface ComponentProps {
    col?: string;
    value: string;
    handleClick: (e: string) => void;
}
const colors = ["#F11940", "#FAA942", "#0FB57A"];

const TimeLine = ({ col = "", value, handleClick }: ComponentProps) => {
    return (
        <div className="flex p-[2px] rounded-full gap-[2px] bg-white">
            {colors.map((color, key) =>
                cprItems[col].indexOf(value) >= key ? (
                    <div
                        className="w-[33%] h-4"
                        key={`${color}__${key}`}
                        onClick={() => handleClick(cprItems[col][key])}
                    >
                        <div
                            className={`${
                                key === 0
                                    ? "rounded-tl-full rounded-bl-full"
                                    : key === 2
                                    ? "rounded-tr-full rounded-br-full"
                                    : ""
                            } w-full h-full`}
                            style={{
                                backgroundColor:
                                    colors[cprItems[col].indexOf(value)],
                            }}
                        ></div>
                    </div>
                ) : (
                    <div
                        className="w-[33%] h-4"
                        key={`${color}__${key}`}
                        onClick={() => handleClick(cprItems[col][key])}
                    >
                        <div
                            className={`${
                                key === 2
                                    ? "rounded-tr-full rounded-br-full"
                                    : ""
                            } w-full h-full`}
                        ></div>
                    </div>
                )
            )}
        </div>
    );
};

export default TimeLine;
