import React from "react";
import { Form, Input, Button } from "antd";

interface ComponentProps {
    handleSubmit?: (submitData: any) => void;
    changeMethod?: () => void;
}

const PhoneVerify: React.FC<ComponentProps> = ({
    handleSubmit,
    changeMethod,
}) => {
    const [form] = Form.useForm();

    const handleSubmitForm = () => {
        form.validateFields().then((data) => {
            if (handleSubmit) handleSubmit({ ...data, type: "phone" });
        });
    };

    return (
        <div className="w-full px-[24px] relative font-Lato">
            <div className="w-full max-w-[400px] mx-auto">
                <div className="text-center text-[24px] md:text-[36px] text-[#000714] font-bold pb-[24px]">
                    Phone verification
                </div>
                <div className="text-center text-[20px] leading-[32px] text-[#434A59] pb-[32px]">
                    Please enter your phone number so we can send you your
                    verification code
                </div>

                <Form form={form} layout={"vertical"} requiredMark={false}>
                    <Form.Item
                        name="phone_number"
                        label="Phone number"
                        rules={[
                            {
                                required: true,
                                message: "Phone Number is required",
                            },
                            {
                                pattern: /^[0-9]{10,}$/,
                                message: "Invalid Phone Number",
                            },
                        ]}
                    >
                        <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] p-[5px]">
                            <div className="w-[46px] h-[46px] flex items-center justify-center text-[20px] text-[#000714] bg-[#EEF1F8] rounded-[8px]">
                                +1
                            </div>
                            <Input
                                placeholder="1234567890"
                                className="border-0"
                                style={{ boxShadow: "none" }}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div
                            className="text-[18px] text-[#001F55] font-bold cursor-pointer"
                            onClick={() => {
                                if (changeMethod) changeMethod();
                            }}
                        >
                            Send an email instead&nbsp;&nbsp;&#183;&#183;
                        </div>
                    </Form.Item>
                    <div className="flex justify-end pt-[16px]">
                        <Button
                            htmlType="submit"
                            className="w-full h-auto flex items-center justify-center bg-[#001F55] text-[18px] text-white font-bold border border-[#001F55] px-[24px] py-[15px] rounded-full hover:border-[#001F55] hover:text-[#001F55]"
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

export default PhoneVerify;
