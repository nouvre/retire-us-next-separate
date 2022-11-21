import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Curve } from "recharts";
import { Toast } from "@/components/common/notification";
import { ApplicationState } from "@/store/index";
import { updataGoal } from "@/store/setting/action";

const Goal: React.FC = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    const [curValue, setCurValue] = useState<number | undefined>(undefined);
    const [goal, setGoal] = useState<number | undefined>(undefined);

    const save = () => {
        if (removeNonNumeric(curValue) && removeNonNumeric(goal)) {
            if (removeNonNumeric(curValue) > removeNonNumeric(goal)) {
                Toast(
                    "",
                    "Retirement Goal must be greater than Current Retirement Value",
                    "danger"
                );
                return;
            }
            dispatch(
                updataGoal(
                    selectedUser?.id,
                    removeNonNumeric(curValue),
                    removeNonNumeric(goal)
                )
            );
        } else {
            Toast("", "You must enter both values", "danger");
        }
    };

    useEffect(() => {
        if (selectedUser) {
            setCurValue(
                addCommas(selectedUser.cur_retirement_value || "") || undefined
            );
            setGoal(addCommas(selectedUser.retirement_goal || "") || undefined);
        }
    }, [selectedUser]);

    const addCommas = (num) =>
        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num) => parseInt(num.toString().replace(/[^0-9]/g, ""));

    return (
        <Scrollbars>
            <div className="w-full  p-28 flex flex-col gap-16 justify-center items-center  px-5 h-full overflow-y-auto">
                <div className="grid gap-4 grid-cols-2 text-lg">
                    <div className="text-center">Current Retirement Value</div>
                    <div className="text-center">Retirement Goal</div>
                    <div className="relative">
                        <input
                            type="text"
                            name="value"
                            id="value"
                            value={curValue}
                            onChange={(e) =>
                                setCurValue(
                                    addCommas(removeNonNumeric(e.target.value))
                                )
                            }
                            className=" w-full bg-white border border-[#DDE3F0] px-[24px] pl-[35px] py-[12px] rounded-[12px] text-[20px]"
                        />
                        <span className="absolute left-5 top-0 py-[12px]">
                            $
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="goal"
                            id="goal"
                            value={goal}
                            onChange={(e) =>
                                setGoal(
                                    addCommas(removeNonNumeric(e.target.value))
                                )
                            }
                            className=" w-full bg-white border border-[#DDE3F0] px-[24px] pl-[35px] py-[12px] rounded-[12px] text-[20px]"
                        />
                        <span className="absolute left-5 top-0 py-[12px]">
                            $
                        </span>
                    </div>
                </div>

                <button
                    className="text-white text-[18px] font-bold bg-[#001F55] hover:bg-[#173A78] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                h-[60px] min-w-[160px]"
                    onClick={() => save()}
                >
                    Save&nbsp;&nbsp;&#183;&#183;
                </button>
            </div>
        </Scrollbars>
    );
};

export default Goal;
