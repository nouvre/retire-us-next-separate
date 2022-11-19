import React from "react";
import Image from '@/components/common/Image';

const LogoSection: React.FC = () => {
    return (
        <div className="w-full px-2 py-4 mb-10 bg-[#00000052]">
            <Image
                src="https://img1.wsimg.com/isteam/ip/1e06f9b6-3c1e-4716-967f-a79d1d63baf7/Mesa%20de%20trabajo%2055.png/:/rs=w:179,h:80,cg:true,m/cr=w:179,h:80/qt=q:95"
                alt=""
                className="w-auto h-16 m-auto max-w-full"
            />
        </div>
    );
};

export default LogoSection;
