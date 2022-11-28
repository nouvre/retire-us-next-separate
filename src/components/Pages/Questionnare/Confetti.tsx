import React, { useState, useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import { Answer } from "@/store/questions/types";

interface ComponentProps {
    data: Answer;
    step: number;
    handleNext: (e: Answer) => void;
}

const Confetti: React.FC<ComponentProps> = (props) => {
    const [submitData] = useState<Answer>(props.data);
    const [isExploding, setIsExploding] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsExploding(false);
            props.handleNext({ ...submitData });
        }, 2000)
    }, [])


    return (
        <div className="w-full flex flex-col items-center justify-center px-5">
            <div className="w-full max-w-[840px] relative">
                <div className="w-full h-[72px] bg-[#DDE3F0] rounded-full pl-10 pr-[180px] py-[30px] mb-4 relative">
                    <div className="h-3 bg-gradient-to-r from-[#4D7EF2] to-[#5FD4F4] rounded-full"></div>
                    <div className="flex justify-center items-center w-[142px] h-[142px] bg-white rounded-full absolute right-0 top-[-38px]">
                        <span className="text-   text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-bold">100%</span>
                    </div>
                </div>
                <div className="flex justify-center mt-40">
                    {/* {isExploding && <ConfettiExplosion particleSize={14} duration={4000} colors={['#F44274', '#BE1E68', '#B4DF86', '#B4DF86', '#F8B54A', '#6DD0E7', '#F8B54A', '#F71873']} floorWidth={1000} floorHeight={1000} />} */}
                </div>
            </div>
        </div>
    );
};

export default Confetti;