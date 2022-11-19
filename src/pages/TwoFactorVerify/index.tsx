import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    twoFactorRequestSend,
    twoFactorRequestResend,
    twoFactorRequestVerify,
} from "@/store/auth/action";
import { ApplicationState } from "@/store";
import Header from "../Header";
import EmailVerify from "./EmailVerify";
import PhoneVerify from "./PhoneVerify";
import VerifyCode from "./VerifyCode";
import Image from '@/components/common/Image';

const TwoFactorVerify: React.FC = (props: any) => {
    const dispatch = useDispatch();
    const [isSMS, setIsSMS] = useState<boolean>(true);
    const token = useSelector((state: ApplicationState) => state.auth.token);
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const [codeReqData, setCodeReqData] = useState<object>();
    useEffect(() => {
        if (user && user.default_two_factor_method == "email") {
            setIsSMS(false);
        }

        if (user && user.passTwoFactor && !user.isSignUpProcess) {
            props.history.push("/dashboard");
        }
    }, [user]);

    const handleSubmit = (data) => {
        setCodeReqData(data);
        dispatch(twoFactorRequestSend(data));
    };

    const handleVerifyCode = (data) => {
        dispatch(twoFactorRequestVerify(data));
    };

    const handleResendCode = () => {
        dispatch(twoFactorRequestResend(codeReqData));
    };

    return (
        <>
            <Header opacity={false} />
            <div className="min-h-[100vh] bg-[#EEF1F8] py-[90px] md:py-[125px] relative">
                {user?.twoFactorSent ? (
                    <VerifyCode
                        resendCode={handleResendCode}
                        handleSubmit={handleVerifyCode}
                    />
                ) : (
                    <>
                        {isSMS ? (
                            <PhoneVerify
                                changeMethod={() => setIsSMS(false)}
                                handleSubmit={handleSubmit}
                            />
                        ) : (
                            <EmailVerify
                                changeMethod={() => setIsSMS(true)}
                                handleSubmit={handleSubmit}
                            />
                        )}
                    </>
                )}

                <Image
                    src="/assets/images/signup-texture.png"
                    alt="texture"
                    className="absolute left-0 bottom-0 hidden md:block"
                />
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute left-[5%] bottom-[50%] hidden md:block"
                />
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute right-[5%] top-[20%] hidden md:block"
                />
            </div>
        </>
    );
};
export default TwoFactorVerify;
