import React, { useState, useEffect } from "react";
import { Form } from "antd";
import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";
import FacebookLogin from "react-facebook-login";
// import { useLocation } from "react-router-dom";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { gotoProfileStep } from "@/store/auth/action";
import { login, googleLogin, facebookLogin } from "@/store/auth/action";
import { ApplicationState } from "@/store/index";
import Header from "../Header";
import { Helmet } from "react-helmet";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

interface locationStateProps {
    plan_id: number;
    auth_type: boolean;
}

interface FormData {
    email: string;
    password: string;
}

const SingleSignOn: React.FC = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const user = useSelector((state: ApplicationState) => state.auth.user);
    const answers = useSelector(
        (state: ApplicationState) => state.questions.answers
    );
    const step = useSelector((state: ApplicationState) => state.questions.step);
    const intro_user = useSelector(
        (state: ApplicationState) => state.auth.intro_user
    );

    const authTypeState = router.query

    useEffect(() => {
        if (user) {
            if (user.role === "admin") router.push("/dashboard");
            else dispatch(gotoProfileStep());
        }
    }, [user]);

    const handleGoogleLogin = (
        response: GoogleLoginResponse | GoogleLoginResponseOffline | any
    ): void => {
        const payload = getLoginPayload();
        if (response.code) {
            dispatch(googleLogin(response.code, payload));
        } else {
            dispatch(googleLogin(response.tokenId, payload));
        }
    };

    const handleFacebookLogin = (result: any): void => {
        if (result?.accessToken) {
            const payload = getLoginPayload();
            dispatch(facebookLogin(result.accessToken, payload));
        }
    };

    const getLoginPayload = (): any => {
        let payload = {};
        if (authTypeState?.auth_type) {
            payload = {
                authenticate_type: 2,
                plan_id: authTypeState.plan_id,
            };
        } else {
            payload = {
                authenticate_type: 1,
            };
        }

        return payload;
    };

    return (
        <>
            <Header opacity={false} />
            <Helmet
                title={"Login to RetireUS - Retirement and Financial Planning"}
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: `description`,
                        content:
                            "Login to your RetireUS account. Retirement and financial planning. Trusted and Certified Financial Planners at your fingertips.",
                    },
                ]}
            />
            <div className="w-full min-h-[100vh] container-auth relative flex flex-col">
                <div className="w-full max-w-[448px] mx-auto px-[24px] pt-[90px] pb-[24px] md:pt-[125px]">
                    <h1 className="text-center text-2xl md:text-4xl text-[#000714] font-bold pb-6">
                        Create your account
                    </h1>

                    <Form form={form} layout={"vertical"} requiredMark={false}>
                        <Form.Item aria-hidden="true">
                            <Link
                                className="w-full bg-white px-6 py-4 rounded-xl shadow-[0px_4px_32px_rgba(24,54,98,0.04)] flex items-center justify-between hover:bg-[#fbfcfd]"
                                href="/signup"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src="/assets/images/ico-sso-email.jpg"
                                        alt="ico-sso-email"
                                        className="w-7"
                                    />
                                    <span className="text-base text-[#001F55] font-Lato pl-6">
                                        Continue with Email
                                    </span>
                                </div>
                                <Image
                                    src="/assets/images/arrow-right-circle-orange.svg"
                                    width="24"
                                    alt="ico-arrow-right"
                                />
                            </Link>
                        </Form.Item>
                        <Form.Item aria-hidden="true">
                            <GoogleLogin
                                clientId={
                                    process.env.MIX_GOOGLE_CLIENT_ID as string
                                }
                                buttonText="LOGIN WITH GOOGLE"
                                onSuccess={(e) => handleGoogleLogin(e)}
                                cookiePolicy={"single_host_origin"}
                                className={"w-100 gg-btn"}
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        className="w-full bg-white px-6 py-4 rounded-xl shadow-[0px_4px_32px_rgba(24,54,98,0.04)] flex items-center justify-between hover:bg-[#fbfcfd]"
                                        type="button"
                                    >
                                        <div className="flex items-center">
                                            <Image
                                                src="/assets/images/ico-google.svg"
                                                alt="ico-google"
                                                className="w-7"
                                            />
                                            <span className="text-base text-[#001F55] font-Lato pl-6">
                                                Continue with Google
                                            </span>
                                        </div>
                                        <Image
                                            src="/assets/images/arrow-right-circle-orange.svg"
                                            width="24"
                                            alt="ico-arrow-right"
                                        />
                                    </button>
                                )}
                            />
                        </Form.Item>
                        <Form.Item aria-hidden="true">
                            <FacebookLogin
                                appId={
                                    process.env.MIX_FACEBOOK_APP_ID as string
                                }
                                fields="name,email,picture"
                                callback={(e) => handleFacebookLogin(e)}
                                onFailure={(e) => {
                                    console.log(e);
                                }}
                                size={"small"}
                                buttonStyle={{
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    boxShadow:
                                        "0px 4px 32px rgba(24, 54, 98, 0.04)",
                                    border: 0,
                                    borderRadius: 12,
                                }}
                                textButton={"Continue with Facebook"}
                                icon={
                                    <Image
                                        src="/assets/images/ico-facebook.svg"
                                        alt="ico-facebook"
                                        className="w-7"
                                    />
                                }
                                cssClass="auth-facebook"
                            />
                        </Form.Item>
                    </Form>
                </div>

                <Image
                    src="/assets/images/signup-texture.png"
                    alt="texture"
                    className="absolute left-0 bottom-0 hidden md:block z-[-1]"
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

export default SingleSignOn;
