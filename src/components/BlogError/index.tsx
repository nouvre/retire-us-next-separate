import React from "react";

interface BlogErrorProps {
    text: string;
}

const BlogError = ({ text }: BlogErrorProps) => {
    return (
        <div
            className="w-[calc(100%-48px)] max-w-[580px] mx-auto flex flex-col gap-y-[5px] justify-center text-center text-[18px] leading-[32px] text-[#434A59] my-[120px]"
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export default BlogError;
