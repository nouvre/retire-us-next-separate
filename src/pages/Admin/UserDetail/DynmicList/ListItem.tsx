import React, { useEffect, useRef, useState } from "react";
import DeleteIcon from "@2fd/ant-design-icons/lib/Delete";
import { DynamicListItem } from "@/store/setting/types";

interface ComponentProps {
    isSaved: boolean;
    data: DynamicListItem;
    index: number;
    isFocus?: boolean;
    onChange?: (value: string, index: number, key: string) => void;
    onRemove?: (index: number) => void;
    onEnter?: () => void;
}

const ListItem: React.FC<ComponentProps> = ({
    isSaved,
    data,
    index,
    isFocus,
    onChange,
    onRemove,
    onEnter,
}) => {
    const handleChange = (e: any, key: string) => {
        if (onChange) {
            onChange(e.target.value, index, key);
        }
    };

    const handleRemove = () => {
        if (onRemove) {
            onRemove(index);
        }
    };

    const handleKeyPress = (event) => {
        if (data.content != "" && event.key === "Enter") {
            if (onEnter) onEnter();
        }
    };

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current && isFocus) {
            ref.current.focus();
        }
    }, [isFocus, ref]);

    return (
        <div
            className={`flex items-center gap-2 mb-4`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex w-5 h-5 justify-center items-end">
                <input
                    type="checkbox"
                    className={`w-4 h-4 border-2 form-checkbox text-[#00BB7A] bg-[#DDE3F0] rounded-full ${data.id ? '' : 'hidden'}`}
                    checked={data.ischecked}
                    onChange={(e) => handleChange(e, 'ischecked')}
                />
            </div>
            <input
                ref={ref}
                type="text"
                className={`flex-1 w-full px-2 py-2 rounded-lg text-xl ${
                    isSaved
                        ? "bg-transparent border-0 focus:bg-white focus:border focus:border-[#DDE3F0]"
                        : "bg-[#DDE3F0] border border-[#DDE3F0]"
                }`}
                value={data.content}
                onKeyPress={handleKeyPress}
                onChange={(e) => handleChange(e, 'content')}
                maxLength={25}
            />
            <DeleteIcon
                className={`text-2xl leading-6 cursor-pointer ${
                    isHovered ? "visible" : "invisible"
                }`}
                onClick={handleRemove}
            />
        </div>
    );
};

export default ListItem;
