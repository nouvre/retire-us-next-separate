import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TagManager from "react-gtm-module";
import { ApplicationState } from "@/store";
import { updateProfileStep } from "@/store/auth/action";
import { SharedFillButton } from "@/components/Buttons/SharedFillButton";
import Header from "../Header";
import Image from '@/components/common/Image';

const Thankyou = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const pending = useSelector(
        (state: ApplicationState) => state.common.pending
    );

    useEffect(() => {
        if (user) {
            TagManager.dataLayer({
                dataLayer: {
                    userName: user?.name,
                    email: user?.email,
                    message: "Thank you",
                },
                dataLayerName: "ThankyouDataLayer",
            });
        }
    }, [user]);

    const handleClick = () => {
        if (!pending) dispatch(updateProfileStep("next"));
    };

    return (
        <div className="w-full h-screen bg-[#EEF1F8]">
            <Header opacity={false} />
            <div className="w-full flex flex-col items-center justify-center pt-[146px] px-5 relative z-10">
                <div className="w-full max-w-[840px] relative">
                    <Image
                        src="/assets/images/welcome-bg.svg"
                        alt=""
                        className="w-full hidden sm:block"
                    />
                    <Image
                        src="/assets/images/welcome-bg-mobile.svg"
                        alt=""
                        className="w-full block sm:hidden"
                    />
                    <div className="w-full absolute z-10 top-[40%] translate-y-[-40%] pl-[30px] md:pl-[112px] pr-[30px] md:pr-[135px]">
                        <div className="w-full text-black text-base md:text-2xl leading-1 md:leading-7 mb-1 md:mb-5 font-bold">
                            Thank you for your subscription!
                        </div>
                        <div className="w-full text-[#434A59] text-sm md:text-xl leading-1 md:leading-8 mb-5 md:mb-8">
                            We are looking forward to helping you on your path
                            toward financial freedom.
                        </div>
                        <div className="w-full text-[#434A59] text-sm md:text-xl leading-1 md:leading-8 mb-5 md:mb-8">
                            My name is Sarah and I will be guiding through the
                            RetieUS dashboard.
                        </div>
                        <div className="w-full text-[#434A59] text-sm md:text-xl leading-1 md:leading-8 mb-3 md:mb-3">
                            Are you ready to get started?
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[840px] mb-8 relative flex sm:justify-center z-[1000]">
                    <SharedFillButton
                        className="flex items-center text-base lg:text-lg font-bold px-[24px] py-[12px]"
                        pill={true}
                        onClick={handleClick}
                    >
                        <span>Let's Go</span>
                        <Image
                            src="/assets/images/arrow-right.svg"
                            alt="Right Arrow"
                            className="ml-[12px]"
                        />
                    </SharedFillButton>
                </div>
            </div>
            <Image
                src="/assets/images/glass-girl.svg"
                alt="Glass man"
                className="relative mx-auto z-0 md:absolute md:right-0 md:bottom-0 md:z-20"
            />
            <Image
                src="/assets/images/signup-texture.png"
                alt="texture"
                className="absolute z-0 left-0 bottom-0 hidden md:block"
            />
            <Image
                src="/assets/images/ico-ellipse.svg"
                alt="ico-ellipse"
                className="fixed left-[5.97%] bottom-[51%]"
            />
            <Image
                src="/assets/images/ico-ellipse.svg"
                alt="ico-ellipse"
                className="fixed right-[5%] top-[20%]"
            />
        </div>
    );
};

export default Thankyou;
