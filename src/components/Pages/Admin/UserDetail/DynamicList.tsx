import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./DynmicList/ListItem";
import { ApplicationState } from "@/store/index";
import { saveDynamicList, removeDynamicList } from "@/store/setting/action";
import { DynamicListItem } from "@/store/setting/types";

const DynamicList: React.FC = () => {
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [isEntered, setIsEntered] = useState<boolean>(false);
    const [values, setValues] = useState<DynamicListItem[]>([]);
    const dispatch = useDispatch();
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    useEffect(() => {
        if (selectedUser && selectedUser.dynamic_list.length > 0) {
            setValues(selectedUser.dynamic_list);
            setIsAdded(true);
        }
    }, [selectedUser]);

    const handleSave = () => {
        setIsSaved(true);
        dispatch(saveDynamicList(selectedUser?.id, values));
    };

    const handleAdd = () => {
        if (values[values.length - 1]?.content != "")
            setValues([...values, { content: "", ischecked: false }]);
        setIsAdded(true);
    };

    const handleOnEnter = () => {
        setIsEntered(false);
        console.log('here')
        handleAdd();
        setIsEntered(true);
    };

    const handleClose = () => {
        if (selectedUser && selectedUser.dynamic_list.length > 0) {
            setValues(selectedUser.dynamic_list);
            setIsAdded(true);
            setIsEntered(true);
        }
    };

    const handleChange = (pValue: string, pIndex: number, key: string) => {
        setIsEntered(false);
        if(key == 'content') {
            setValues(
                values.map((value, index) => {
                    if (index == pIndex) {
                        return { ...value, content: pValue };
                    } else {
                        return value;
                    }
                })
            );
        } else {
            setValues(
                values.map((value, index) => {
                    if (index == pIndex) {
                        return { ...value, ischecked: !value.ischecked };
                    } else {
                        return value;
                    }
                })
            );
        }
    };

    const handleRemove = (pIndex: number) => {
        setIsEntered(true);
        let removedItem = values[pIndex];
        if(removedItem.id) {
            setValues(values.filter((value, index) => index != pIndex));
            dispatch(removeDynamicList(removedItem.id));
        } else {
            setValues(values.filter((value, index) => index != pIndex));
        }
    };

    return (
        <div className="w-[350px] mx-auto my-10">
            {values.map((value, index) => (
                <div key={index} onClick={() => setIsEntered(false)}>
                    <ListItem
                        isSaved={isSaved}
                        data={value}
                        key={index}
                        index={index}
                        isFocus={isEntered && index == values.length - 1}
                        onChange={handleChange}
                        onRemove={handleRemove}
                        onEnter={handleOnEnter}
                    ></ListItem>
                </div>
            ))}
            <div className="flex justify-center">
                <button
                    className="text-white text-[18px] font-bold bg-[#001F55] hover:bg-[#173A78] whitespace-nowrap px-[24px] py-[12px] rounded-full
                    h-[60px] min-w-[160px] mx-auto"
                    onClick={() => handleAdd()}
                >
                    Add Item
                </button>
            </div>
            <div
                className={`w-full py-[16px] flex flex-col md:flex-row justify-center gap-8 ${
                    isAdded ? "" : "hidden"
                }`}
            >
                <button
                    className={`text-[18px] font-bold border-2 border-[#001F55] text-[#001F55] hover:bg-[#173A78] hover:text-white whitespace-nowrap px-[24px] py-[12px] rounded-full
                                    flex items-center justify-center h-[60px] min-w-[160px]`}
                    onClick={() => handleClose()}
                >
                    Cancel
                </button>
                <button
                    className="text-white text-[18px] font-bold bg-[#001F55] hover:bg-[#173A78] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                        h-[60px] min-w-[160px]"
                    onClick={() => handleSave()}
                >
                    Save&nbsp;&nbsp;&#183;&#183;
                </button>
            </div>
        </div>
    );
};

export default DynamicList;
