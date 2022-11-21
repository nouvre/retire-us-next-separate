import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { gotoProfileStep, register } from "@/store/auth/action";
import { ApplicationState } from "@/store/index";
import Header from "@/components/Pages/Header";
import Image from '@/components/common/Image';

interface locationStateProps {
    plan_id: number;
    auth_type: boolean;
}

const SignUp: React.FC = (props: any) => {
    const router = useRouter();
    const authTypeState = router.query;
    const [form] = Form.useForm();
    const token = useSelector((state: ApplicationState) => state.auth.token);
    const pattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^()_+\-=\[\]{};':"\\|,.<>\/])[A-Za-z\d@$!%*#?&^()_+\-=\[\]{};':"\\|,.<>\/]{8,}$/g;

    useEffect(() => {
        if (token) dispatch(gotoProfileStep());
    }, [token]);

    const dispatch = useDispatch();
    // const selectedPlan = useSelector((state: ApplicationState) => state.plans.selectedPlan);
    const pending = useSelector(
        (state: ApplicationState) => state.common.pending
    );
    const intro_user = useSelector(
        (state: ApplicationState) => state.auth.intro_user
    );

    const handleSubmit = (): void => {
        if (!pending)
            form.validateFields().then((data: any) => {
                let submitData = { ...data };
                if (authTypeState?.auth_type) {
                    submitData = {
                        ...submitData,
                        authenticate_type: 2,
                        plan_id: authTypeState.plan_id,
                    };
                } else {
                    submitData = {
                        ...submitData,
                        authenticate_type: 1,
                    };
                }
                dispatch(register(submitData));
            });
    };

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) handleSubmit();
    };

    // if (token) {
    //     return <Redirect href="/"></Redirect>;
    // }

    return (
        <>
            <Header opacity={false} />
            <div className="w-full min-h-[100vh] container-auth relative flex flex-col">
                <div className="w-full max-w-[448px] mx-auto px-6 pt-[90px] pb-6 md:pt-[125px]">
                    <h1 className="text-center text-2xl md:text-4xl text-[#000714] font-bold pb-6">
                        Create your account
                    </h1>

                    <Form
                        form={form}
                        onKeyUp={handleKeyUp}
                        layout={"vertical"}
                        requiredMark={false}
                    >
                        <Form.Item
                            name={"name"}
                            label={"Name"}
                            rules={[
                                {
                                    required: true,
                                    message: "Name is required.",
                                },
                            ]}
                        >
                            <Input placeholder={"Enter your full name..."} />
                        </Form.Item>
                        <Form.Item
                            name={"email"}
                            label={"Email"}
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Valid Email is required.",
                                },
                            ]}
                            initialValue={intro_user?.email}
                        >
                            <Input placeholder={"Enter your email..."} />
                        </Form.Item>
                        <Form.Item
                            name={"password"}
                            label={"Password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Password is required.",
                                },
                                {
                                    pattern,
                                    message:
                                        "Your password must be at least eight characters long and contain numbers, letters, and at least one special character.",
                                },
                            ]}
                        >
                            <Input
                                placeholder={"Enter password"}
                                type={"password"}
                            />
                        </Form.Item>
                        <Form.Item
                            name={"confirm_password"}
                            label={"Confirm Password"}
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "The two passwords that you entered do not match!",
                                },
                                ({ getFieldValue }: any) => ({
                                    validator(_: any, value: any) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "The two passwords that you entered do not match!"
                                            )
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input
                                placeholder={"Confirm password"}
                                type={"password"}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type={"primary"}
                                className={
                                    "w-100 btn-signin hover:bg-[#173A78]"
                                }
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Continue&nbsp;&nbsp;
                                <Image
                                    src="/assets/images/dots-white-btn.svg"
                                    alt="dots"
                                    className="w-6 h-6"
                                />
                            </Button>
                        </Form.Item>
                        <div className={"footer"}>
                            <span>Already have account?</span>
                            <Link
                                className="text-[#001F55] font-bold rounded-full px-6 py-4 hover:bg-[#e3e7ef]"
                                href="auth/signin"
                            >
                                Login&nbsp;&nbsp;&#183;&#183;
                            </Link>
                        </div>
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
export default SignUp;
