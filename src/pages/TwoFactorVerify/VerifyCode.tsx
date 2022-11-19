import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateTwoFactorEntry } from "@/store/auth/action";

import { Form, Input, Button } from "antd";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";

interface ComponentProps {
    handleSubmit?: (submitData: any) => void;
    resendCode?: () => void;
}

const VerifyCode: React.FC<ComponentProps> = ({ handleSubmit, resendCode }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleSubmitForm = () => {
        form.validateFields().then((data) => {
            if (handleSubmit) handleSubmit(data.code);
        });
    };

    return (
        <div className="w-full px-[24px] relative font-Lato">
            <div className="w-full max-w-[400px] mx-auto">
                <div className="text-center text-[20px] leading-[32px] text-[#434A59] pb-[32px]">
                    Please enter the verification code we sent to you.
                </div>

                <Form form={form} layout={"vertical"} requiredMark={false}>
                    <Form.Item
                        name="code"
                        label=""
                        rules={[
                            {
                                required: true,
                                message: "Enter the code",
                            },
                        ]}
                    >
                        <Input
                            className="w-full mt-1 bg-white h-auto border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                            placeholder="Code"
                        />
                    </Form.Item>
                    <div className="flex justify-between">
                        <button
                            className="flex items-center justify-center w-full max-w-[160px] text-[18px] text-[#001F55] px-[24px] py-[12px] rounded-full border border-[#001F55]"
                            onClick={() => {
                                dispatch(updateTwoFactorEntry());
                            }}
                            type="button"
                        >
                            <ArrowLeft className="mr-3" />
                            Back
                        </button>
                        <Button
                            htmlType="submit"
                            className="w-full max-w-[160px] h-auto text-white text-[18px] font-bold bg-[#001F55] px-[24px] py-[12px] rounded-full"
                            onClick={() => {
                                handleSubmitForm();
                            }}
                        >
                            Verify&nbsp;&nbsp;&#183;&#183;
                        </Button>
                    </div>
                    <div className="flex items-center justify-center text-[18px] mt-[32px]">
                        <span className="text-[#434A59] px-[12px]">
                            Didn't receive a code?
                        </span>
                        <span
                            className="text-[#001F55] font-bold px-[12px]"
                            onClick={() => {
                                if (resendCode) resendCode();
                            }}
                        >
                            Resend&nbsp;&nbsp;&#183;&#183;
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default VerifyCode;
