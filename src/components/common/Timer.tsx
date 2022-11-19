import React, { useEffect, useRef, useState } from "react";

interface ComponentProps {
    className?: string | undefined;
    time?: number | undefined;
    onEnd?: () => void;
}

const Timer: React.FC<ComponentProps> = (props) => {

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            if(props.onEnd) {
                props.onEnd();
            }
        }, 11000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <div
            className={`w-full h-4 rounded-full bg-white overflow-hidden ${props.className}`}
        >
            <div 
                className={`bg-[#72C9EE] h-full animate-timer w-full rounded-r-full`}
                style={{background: 'linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)'}}
            >
            </div>
        </div>
    );
};
export default Timer;
