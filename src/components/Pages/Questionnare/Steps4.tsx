import React, { useEffect, useState } from "react";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import Progress from "@/components/Questionnare/Progress";
import { Answer } from "@/store/questions/types";
import { isValidDateFormat } from "@/util/numberWithComma";

import InputMask from "react-input-mask";
import Calendar from "react-calendar";

interface ComponentProps {
    data: any | {};
    step: number;
    handleNext: (e: Answer) => void;
    handlePrev: (e: Answer) => void;
}

const Steps4: React.FC<ComponentProps> = (props) => {
    const [submitData, setSubmitData] = useState<Answer>(props.data);
    const [birthYear, setBirthYear] = useState<string>(
        props.data.birthYear ? props.data.birthYear : ""
    );
    const [isValid, setIsValid] = useState<Boolean>(true);

    const [bodMonth, setBodMonth] = useState<number>(1);
    const [bodYear, setBodYear] = useState<number>(1975);
    const [bodDay, setBodDay] = useState<number>(0);

    useEffect(() => {
        if (props.data) {
            setSubmitData(props.data);
            if (props.data.birthYear) {
                setBirthYear(props.data.birthYear);
            }
        }
    }, [props.data]);

    const handleNext = () => {
        if (isValidDateFormat(birthYear)) {
            return props.handleNext({ ...submitData, birthYear: birthYear });
        } else {
            setIsValid(false);
        }
    };

    const handlePrev = () => {
        return props.handlePrev({ ...submitData, birthYear: birthYear });
    };

    const handleChange = (e): void => {
        let errFlag = false;
        setBirthYear(e.target.value);
        const dates = e.target.value.split("/");

        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Adjust for leap years
        if (dates[2] % 400 == 0 || (dates[2] % 100 != 0 && dates[2] % 4 == 0))
            monthLength[1] = 29;

        if (dates[2]) {
            if (!(dates[2].length == 4)) {
                setIsValid(false);
                errFlag = true;
            } else {
                errFlag = false;
            }
        }

        if (dates[0]) {
            if (!(dates[0] > 0 && dates[0] < 13)) {
                setIsValid(false);
                errFlag = true;
            } else {
                errFlag = errFlag || false;
            }
        }

        if (dates[1]) {
            if (dates[1] < 0 || dates[1] > monthLength[dates[0] - 1]) {
                setIsValid(false);
                errFlag = true;
            } else {
                errFlag = errFlag || false;
            }
        }

        if (!errFlag) {
            setIsValid(true);

            setBodYear(dates[2]);
            setBodMonth(parseInt(dates[0]));
            setBodDay(parseInt(dates[1]));
        }
    };

    const createSelectYears = () => {
        let years: Array<JSX.Element> = [];
        const currentYear = new Date().getFullYear();

        for (let i = currentYear; i > currentYear - 100; i--) {
            years.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }

        return years;
    };

    const handleBirthYearChange = (event) => {
        const { value } = event.target;
        setBodYear(value);
        setBirthYear(`${bodMonth || "01"}/01/${value}`);
    };

    const handleBirthMonthChange = (event) => {
        const { value } = event.target;
        const month = ("0" + value).slice(-2);

        setBodMonth(value);
        setBirthYear(`${month}/01/${bodYear}`);
    };

    const handleChangeDatePicker = (pickedDate) => {
        const month = pickedDate.getUTCMonth() + 1;
        const day = pickedDate.getUTCDate();
        const year = pickedDate.getUTCFullYear();

        const formattedDay = ("0" + day).slice(-2);
        const formattedMonth = ("0" + month).slice(-2);
        setBodYear(year);
        setBodMonth(month);

        setBirthYear(`${formattedMonth}/${formattedDay}/${year}`);
    };

    return (
        <div className="w-full px-[20px] md:px-[60px] pb-12">
            <div className="w-full max-w-[840px] mx-auto">
                <Progress step={props.step} />
                <div className="pb-[12px] md:pb-[36px]">
                    <div className="w-full text-[20px] md:text-[23px] text-[#000714] font-bold mt-[32px] mb-[24px] md:mt-[36px] md:mb-[32px]">
                        When is your birthday?
                    </div>

                    <div className="flex flex-wrap md:justify-between">
                        <div className="w-full md:w-[48%] mb-[20px]">
                            <InputMask
                                mask="99/99/9999"
                                value={birthYear}
                                onChange={handleChange}
                                maskChar=""
                            >
                                {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        type="text"
                                        placeholder="MM/DD/YYYY"
                                        onClick={(e) => e.preventDefault()}
                                        className={`w-full bg-white border rounded-[20px] text-[20px] px-[32px] py-[24px] ${isValid ? 'border-[#DDE3F0]' : 'border-[#F11940]'}`}
                                    />
                                )}
                            </InputMask>
                            {!isValid && (
                                <span className="block text-[#F11940] mt-1">
                                    Please enter a valid date
                                </span>
                            )}
                        </div>
                        <div className="w-full md:w-[48%] mb-[20px]">
                            <div className="bg-white border border-[#DDE3F0] px-[40px] py-[20px] rounded-[20px] custom-calendar">
                                <div className="flex flex-wrap md:justify-between">
                                    <div className="w-full md:w-[48%] mb-[16px]">
                                        <select
                                            className="form-select appearance-none block w-full px-[20px] py-[5px] rounded-full transition ease-in-out border border-[#DDE3F0] text-[18px] text-[#A2ACBE] date-select"
                                            onChange={handleBirthYearChange}
                                            value={bodYear}
                                        >
                                            <option>Year</option>
                                            {createSelectYears()}
                                        </select>
                                    </div>
                                    <div className="w-full md:w-[48%] mb-[16px]">
                                        <select
                                            className="form-select appearance-none block w-full px-[20px] py-[5px] rounded-full transition ease-in-out border border-[#DDE3F0] text-[18px] text-[#A2ACBE] date-select"
                                            onChange={handleBirthMonthChange}
                                            value={bodMonth}
                                        >
                                            <option>Month</option>
                                            <option value={1}>January</option>
                                            <option value={2}>February</option>
                                            <option value={3}>March</option>
                                            <option value={4}>April</option>
                                            <option value={5}>May</option>
                                            <option value={6}>June</option>
                                            <option value={7}>July</option>
                                            <option value={8}>August</option>
                                            <option value={9}>September</option>
                                            <option value={10}>October</option>
                                            <option value={11}>November</option>
                                            <option value={12}>December</option>
                                        </select>
                                    </div>
                                </div>
                                <Calendar
                                    onChange={(value: any) => {
                                        handleChangeDatePicker(value);
                                    }}
                                    showNavigation={true}
                                    activeStartDate={
                                        bodYear && bodMonth
                                            ? new Date(bodYear, bodMonth - 1, 1)
                                            : new Date()
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between py-[24px] border-t border-[#DDE3F0]">
                    <button
                        className="flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-[#001F55] rounded-full border border-[#001F55]"
                        onClick={() => {
                            handlePrev();
                        }}
                    >
                        <ArrowLeft className="mr-3" />
                        Back
                    </button>
                    <button
                        className={`flex items-center justify-center h-[60px] min-w-[160px] text-[18px] text-white rounded-full bg-[#001F55] border border-[#001F55] ${
                            submitData["wantToRetireAge"]
                                ? ""
                                : "opacity-70"
                        }`}
                        onClick={() => {
                            if (
                                isValid &&
                                birthYear.split("/").length == 3 &&
                                birthYear.split("/")[2] !== ""
                            ) {
                                handleNext();
                            }
                        }}
                    >
                        Continue
                        <ArrowRight className="ml-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Steps4;
