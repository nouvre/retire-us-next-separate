import React from "react";
import { Form, Input, Button } from "antd";

interface ComponentProps {
    handleSubmit?: (submitData: any) => void;
    changeMethod?: () => void;
}

const EmailVerify: React.FC<ComponentProps> = ({
    handleSubmit,
    changeMethod,
}) => {
    const [form] = Form.useForm();

    const handleSubmitForm = () => {
        form.validateFields().then((data) => {
            if (handleSubmit) handleSubmit({ ...data, type: "email" });
        });
    };

    return (
        <div className="w-full px-[24px] relative font-Lato container-auth">
            <div className="w-full max-w-[400px] mx-auto">
                <div className="text-center text-[24px] md:text-[36px] text-[#000714] font-bold pb-[24px]">
                    Email verification
                </div>
                <div className="text-center text-[20px] leading-[32px] text-[#434A59] pb-[32px]">
                    Please enter your email address so we can send you your
                    verification code
                </div>

                <Form form={form} layout={"vertical"} requiredMark={false}>
                    <Form.Item
                        name="email"
                        label=""
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Valid email is required",
                            },
                        ]}
                    >
                        <Input placeholder="example@gmail.com" />
                    </Form.Item>
                    <Form.Item>
                        <div
                            className="text-[18px] text-[#001F55] font-bold cursor-pointer"
                            onClick={() => {
                                if (changeMethod) changeMethod();
                            }}
                        >
                            Send a text instead&nbsp;&nbsp;&#183;&#183;
                        </div>
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button
                            type={"primary"}
                            htmlType="submit"
                            className={"btn-signin"}
                            onClick={() => {
                                handleSubmitForm();
                            }}
                        >
                            Send code&nbsp;&nbsp;
                            <img
                                src="/assets/images/dots-white-btn.svg"
                                alt="dots"
                                className="w-6 h-6"
                            />
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default EmailVerify;
