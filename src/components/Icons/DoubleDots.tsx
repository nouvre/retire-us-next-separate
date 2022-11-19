import React from "react";

export function IcoDoubleDots({
    className,
    fillColor,
}: {
    className?: string;
    fillColor?: string | undefined;
}) {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle cx="8.5" cy="13.5" r="1.5" fill={fillColor || "white"} />
            <circle cx="14.5" cy="13.5" r="1.5" fill={fillColor || "white"} />
        </svg>
    );
}
