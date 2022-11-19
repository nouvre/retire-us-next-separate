import React, { useRef, useEffect } from "react";

const CircularAnimationProgress = ({
    btnEnable,
    onResize,
}: {
    btnEnable: boolean;
    onResize?: (height: number) => void;
}) => {
    const circleRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            if (circleRef && circleRef.current) {
                const circle: HTMLDivElement = circleRef.current;
                const circleHeight = circle.clientHeight;
                onResize && onResize(circleHeight);
            }
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            circleRef.current = null;
        };
    }, []);

    return (
        <div className="min-h-[404px] w-[404px] h-[404px]">
            <div className={`${btnEnable ? "progress" : ""}`} ref={circleRef}>
                <svg viewBox="-3 -3 206 206">
                    <g
                        fill="none"
                        strokeWidth="2"
                        transform="translate(100,100)"
                    >
                        <path
                            d="M 0,-100 A 100,100 0 0,1 86.6,-50"
                            stroke="url(#cl1)"
                        />
                        <path
                            d="M 86.6,-50 A 100,100 0 0,1 86.6,50"
                            stroke="url(#cl2)"
                        />
                        <path
                            d="M 86.6,50 A 100,100 0 0,1 0,100"
                            stroke="url(#cl3)"
                        />
                        <path
                            d="M 0,100 A 100,100 0 0,1 -86.6,50"
                            stroke="url(#cl4)"
                        />
                        <path
                            d="M -86.6,50 A 100,100 0 0,1 -86.6,-50"
                            stroke="url(#cl5)"
                        />
                        <path
                            d="M -86.6,-50 A 100,100 0 0,1 0,-100"
                            stroke="url(#cl6)"
                        />
                    </g>
                </svg>
                <svg viewBox="-3 -3 206 206" className="absolute top-0 left-0">
                    <path
                        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                        strokeDashoffset="630"
                        fill="#F7F9FC"
                        fillOpacity="0"
                    ></path>
                </svg>
            </div>
            <svg
                width="0"
                height="0"
                className={`${btnEnable ? "" : "hidden"}`}
            >
                <defs>
                    <linearGradient
                        id="cl1"
                        gradientUnits="objectBoundingBox"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop stopColor="#4D7EF2" />
                        <stop offset="100%" stopColor="#5FD4F4" />
                    </linearGradient>
                    <linearGradient
                        id="cl2"
                        gradientUnits="objectBoundingBox"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop stopColor="#5FD4F4" />
                        <stop offset="100%" stopColor="#4db0f2" />
                    </linearGradient>
                    <linearGradient
                        id="cl3"
                        gradientUnits="objectBoundingBox"
                        x1="1"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop stopColor="#4db0f2" />
                        <stop offset="100%" stopColor="#4db5f2" />
                    </linearGradient>
                    <linearGradient
                        id="cl4"
                        gradientUnits="objectBoundingBox"
                        x1="1"
                        y1="1"
                        x2="0"
                        y2="0"
                    >
                        <stop stopColor="#4db5f2" />
                        <stop offset="100%" stopColor="#4da0f2" />
                    </linearGradient>
                    <linearGradient
                        id="cl5"
                        gradientUnits="objectBoundingBox"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="0"
                    >
                        <stop stopColor="#4da0f2" />
                        <stop offset="100%" stopColor="#4D7EF2" />
                    </linearGradient>
                    <linearGradient
                        id="cl6"
                        gradientUnits="objectBoundingBox"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="0"
                    >
                        <stop stopColor="#4D7EF2" />
                        <stop offset="100%" stopColor="#4D7EF2" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default CircularAnimationProgress;
