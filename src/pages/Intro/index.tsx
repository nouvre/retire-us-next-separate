import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "@/store";
import Header from "../Header";
import { SharedFillButton } from "@/components/Buttons/SharedFillButton";
import { introRegister } from "@/store/questions/action";
import Image from '@/components/common/Image';

declare global {
    interface Window {
        hbspt: any;
    }
}

const Intro = (props) => {
    const dispatch = useDispatch();
    const isFetching = useSelector(
        (state: ApplicationState) => state.auth.isFetching
    );

    const [disable, setDisable] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");

    const handleChange = (e: any) => {
        const pattern =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (e.target.value.match(pattern)) setDisable(false);
        else setDisable(true);
        setEmail(e.target.value);
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "7437511",
                    formId: "2c815246-93fa-4f67-a60a-d8af42119091",
                });
            }
        });
    }, []);

    useEffect(() => {
        if (isFetching) {
            props.history.push("/checkpoint");
        }
    }, [isFetching]);

    return (
        <div className="w-full h-screen bg-[#EEF1F8]">
            <Header opacity={false} />
            <div className="w-full flex flex-col items-center justify-center pt-[146px] px-5">
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
                    <div className="w-full absolute z-10 top-[40%] translate-y-[-40%] px-[50px]">
                        <div className="w-full text-black text-base md:text-2xl leading-1 md:leading-7 mb-1 md:mb-5 font-bold">
                            Welcome!
                        </div>
                        <div className="w-full text-[#434A59] text-sm md:text-xl leading-1 md:leading-8 mb-0 md:mb-3">
                            My name is Russ and I will be your guide through the
                            Retirement Checkpoint.
                        </div>
                        <div className="w-full text-[#434A59] text-sm md:text-xl leading-1 md:leading-8 mb-3 md:mb-3">
                            To begin, could you please tell me where I should
                            send your quiz results?
                        </div>
                        <input
                            type={"text"}
                            placeholder="Enter your email"
                            className="h-10 py-1 px-2 rounded-lg border border-gray-300 text-sm outline-none w-10/12 sm:w-4/5 md:w-1/2 max-w-[400px]"
                            onChange={handleChange}
                        />
                        {/* <div id="hubspotForm"></div> */}
                    </div>
                </div>
                <div className="w-full max-w-[840px] mb-8 relative flex sm:justify-center z-10">
                    <SharedFillButton
                        className="flex items-center text-base lg:text-lg font-bold px-6 py-4"
                        pill={true}
                        disabled={disable}
                        onClick={() => dispatch(introRegister(email))}
                    >
                        <span>Get Started</span>
                        <Image
                            src="/assets/images/arrow-right.svg"
                            alt="Right Arrow"
                            className="ml-[12px]"
                        />
                    </SharedFillButton>
                </div>
            </div>
            <Image
                src="/assets/images/glass-man.svg"
                alt="Glass man"
                className="relative mx-auto z-[10] md:absolute md:right-0 md:bottom-0 md:z-[0]"
            />
            <Image
                src="/assets/images/ico-retire-leaf.svg"
                alt="ico-retire-leaf"
                className="fixed left-0 bottom-0 hidden sm:block"
            />
            <Image
                src="/assets/images/ico-ellipse.svg"
                alt="ico-ellipse"
                className="fixed left-[5%] bottom-[20%]"
            />
            <Image
                src="/assets/images/ico-ellipse.svg"
                alt="ico-ellipse"
                className="fixed right-[5%] top-[20%]"
            />
        </div>
    );
};

export default Intro;
