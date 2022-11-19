import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store";
import { changeRep } from "@/store/setting/action";
import Select from "react-select";

const Assign: React.FC = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    const reps = useSelector((state: ApplicationState) => state.settings.reps);

    const [selectedOption, setSelectedOption] = useState<any>();
    const [options, setOptions] = useState<Array<{}>>([]);

    useEffect(() => {
        let temp: Array<{}> = [];
        reps?.forEach((reps) => {
            temp.push({ value: reps.id, label: reps.name });
        });

        if (selectedUser?.rep_id) {
            setSelectedOption(temp[selectedUser.rep_id - 1]);
        }

        temp.push({ value: -1, label: "No Rep" });

        setOptions(temp);
    }, [reps]);

    const save = () => {
        dispatch(changeRep(selectedUser?.id, selectedOption.value));
    };

    return (
        <Scrollbars>
            <div className="w-full  p-28 flex flex-col gap-16 justify-center items-center  px-5 h-full">
                <Select
                    className="w-[400px] text-[24px]"
                    value={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
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

export default Assign;
