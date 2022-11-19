import React from "react";
import { FileIcon, defaultStyles } from "react-file-icon";

interface ComponentProps {
    name: string;
    key: number;
    onClick?: () => void;
}

const File: React.FC<ComponentProps> = ({ name, key, onClick }) => {
    const filename = name.slice(name.indexOf("-") + 1);
    const extension = name.split(".")[name.split(".").length - 1];

    return (
        <div
            key={key}
            className="cursor-pointer py-1 px-2 h-[62px] rounded-sm min-w-[100px] text-center"
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            <div className="flex justify-center h-[50px]">
                <FileIcon
                    className="h-full"
                    extension={extension}
                    {...defaultStyles[extension]}
                />
            </div>
            <div className="text-[12px] items-center">
                <div className="text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {filename}
                </div>
            </div>
        </div>
    );
};

export default File;
