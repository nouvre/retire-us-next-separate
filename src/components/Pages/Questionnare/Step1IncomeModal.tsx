import { Modal, Slider } from "antd";
import React, { useEffect, useState } from "react";

interface ComponentProps {
    value: number | undefined;
    visible: boolean | undefined;
    closeModal: () => void;
    handleSubmit: (e: number) => void;
}

const Step1IncomeModal: React.FC<ComponentProps> = ({
    value,
    visible,
    closeModal,
    handleSubmit,
}) => {
    const [amount, setAmount] = useState<number>(0);
    useEffect(() => {
        if (value) {
            setAmount(value);
        }
    }, [value]);

    return (
        <Modal
            width={450}
            footer={null}
            visible={visible}
            closable={false}
            onCancel={closeModal}
            className=" text-black font-medium"
        >
            <div className="w-full mb-5 text-xl">
                You selected 20 hours a week until the day you die. How much
                income do you expect to generate per month?
            </div>
            <div className="w-full flex items-center gap-1 mb-5">
                <Slider
                    defaultValue={30}
                    max={10000}
                    min={0}
                    value={amount}
                    tooltipVisible={false}
                    className="w-6/12"
                    onChange={(e) => {
                        setAmount(e);
                    }}
                />
                <div className="block w-3/12 text-center text-xl">
                    <div className="w-full">Monthly</div>
                    <div className="w-full">${amount.toLocaleString()}</div>
                </div>
                <div className="block w-3/12 text-center text-xl">
                    <div className="w-full">Annual</div>
                    <div className="w-full">
                        ${(amount * 12).toLocaleString()}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <button
                    className="flex items-center justify-center px-6 h-[45px] text-xl font-bold bg-[#0A2C75] text-white"
                    onClick={() => {
                        handleSubmit(amount);
                    }}
                >
                    Save
                </button>
            </div>
        </Modal>
    );
};

export default Step1IncomeModal;
