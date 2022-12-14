import React, { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import axios from "@/util/api";
import Plus from "@2fd/ant-design-icons/lib/Plus";
import Minus from "@2fd/ant-design-icons/lib/Minus";
import { Toast } from "@/components/common/notification";
import { Plan, Plan_feature, UpdatePriceData } from "@/store/plan/types";
import Image from '@/components/common/Image';
import { Icon } from "@/pages/admin/stripe";

interface ComponentProps {
    visible: boolean;
    formdata: Plan | null;
    CloseModal: () => void | undefined;
    handleSubmit: (formdata: UpdatePriceData) => void | undefined;
}

const label = {
    feature: "Feature",
    description: "Description",
};

const NewPriceModal: React.FC<ComponentProps> = ({
    visible,
    formdata,
    CloseModal,
    handleSubmit,
}) => {
    const [form] = Form.useForm();
    const [icons, setIcons] = useState<Icon[]>([]);
    const [selectedIcon, setSelectedIcon] = useState<string>("");
    const [features, setFeatures] = useState<Plan_feature[]>([]);
    useEffect(() => {
        axios.get("plan-icons").then(({ data }) => {
            setIcons(data.data);
            setSelectedIcon[data.data[0]];
        });
        if (visible) {
            if (formdata) {
                form.setFieldsValue(formdata);
                setFeatures(formdata.plan_features);
                setSelectedIcon(formdata.icon);
            }
        } else {
            form.resetFields();
        }
    }, [visible]);

    const Submit = () => {
        form.validateFields().then((data: UpdatePriceData) => {
            if (selectedIcon === "") {
                Toast("", "Need to select the Icon", "danger");
                return;
            }
            if (features.length === 0) {
                Toast("", "Need least one feature", "danger");
                return;
            }
            handleSubmit({ ...data, icon: selectedIcon, features: features });
        });
    };

    const handleChangeFeature = (e, paramIndex) => {
        let tempFeatures = features.map((feature, index) =>
            index === paramIndex ? { ...feature, title: e } : feature
        );
        setFeatures(tempFeatures);
    };

    const handleDeleteFeature = (paramIndex) => {
        setFeatures(features.filter((feature, index) => index !== paramIndex));
    };

    const handleAddFeature = (type: string) => {
        let tempFeatures = [...features];
        tempFeatures.push({
            title: "",
            type: type,
        });
        setFeatures(tempFeatures);
    };

    return (
        <Modal
            title={`Edit ${formdata?.title}`}
            width={750}
            onCancel={() => CloseModal()}
            footer={null}
            visible={visible}
        >
            {formdata && (
                <Form form={form} layout="vertical" requiredMark={false}>
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            { required: true, message: "Title is required" },
                        ]}
                    >
                        <input
                            type="text"
                            className="w-full outline-none border border-gray-300 rounded-md h-10 pl-2"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Amount"
                        name="amount"
                        rules={[
                            { required: true, message: "Title is required" },
                        ]}
                    >
                        <input
                            type="number"
                            className="w-full outline-none border border-gray-300 rounded-md h-10 pl-2"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Plan description"
                        name="plan_description"
                    >
                        <input
                            type="text"
                            className="w-full outline-none border border-gray-300 rounded-md h-10 pl-2 pr-2"
                        />
                    </Form.Item>
                    <div className="w-full mb-5">
                        <div className="text-sm">Icon</div>
                        <div className="w-full grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 items-center max-h-[150px] overflow-y-scroll border border-gray-300 py-1 px-2 rounded-lg">
                            {icons.map((icon: Icon, index) => (
                                <Image
                                    src={icon.icon_url}
                                    className={`h-auto cursor-pointer ${
                                        icon.icon === selectedIcon
                                            ? "border border-gray-300 rounded-md"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedIcon(icon.icon)}
                                    alt=""
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-sm">Features</div>
                            <div className="flex gap-2 items-center">
                                <button
                                    className="transition duration-300 py-1 px-4 h-14 flex justify-center items-center bg-[#0a2b75] border-[#0a2b75] border-solid hover:text-[#0a2b75] hover:bg-white border-[3px] text-white font-bold rounded-full"
                                    onClick={() =>
                                        handleAddFeature("description")
                                    }
                                    type="button"
                                >
                                    <Plus className="text-xl mr-1" />
                                    Add Description
                                </button>
                                <button
                                    className="transition duration-300 py-1 px-4 h-14 flex justify-center items-center bg-[#0a2b75] border-[#0a2b75] border-solid hover:text-[#0a2b75] hover:bg-white border-[3px] text-white font-bold rounded-full"
                                    onClick={() => handleAddFeature("feature")}
                                    type="button"
                                >
                                    <Plus className="text-xl mr-1" />
                                    Add feature
                                </button>
                            </div>
                        </div>
                        {features.map((feature, index) => {
                            return (
                                <div className="w-full" key={index}>
                                    {index == 0 ? (
                                        <div className="w-full mt-2">
                                            {label[feature.type]}
                                        </div>
                                    ) : features[index - 1].type !=
                                      features[index].type ? (
                                        <div className="w-full mt-2">
                                            {label[feature.type]}
                                        </div>
                                    ) : null}
                                    <div className="w-full flex mt-2">
                                        <input
                                            type="text"
                                            className="flex-grow outline-none border border-gray-300 rounded-md h-10 pl-2"
                                            value={feature.title}
                                            onChange={(e) =>
                                                handleChangeFeature(
                                                    e.target.value,
                                                    index
                                                )
                                            }
                                        />
                                        <button
                                            className="p-1 h-10 w-10 ml-3 flex justify-center items-center bg-[#F2F3F8] font-bold rounded-full"
                                            onClick={() =>
                                                handleDeleteFeature(index)
                                            }
                                            type="button"
                                        >
                                            <Minus className="text-xl flex" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <Form.Item label="Plan ID" name="plan_id">
                        <input
                            type="text"
                            className="w-full outline-none border border-gray-300 rounded-md h-10 pl-2"
                            disabled
                        />
                    </Form.Item>
                    <Form.Item label="Created Time" name="created_at">
                        <input
                            type="text"
                            className="w-full outline-none border border-gray-300 rounded-md h-10 pl-2"
                            disabled
                        />
                    </Form.Item>
                    <Form.Item hidden name="id">
                        <input />
                    </Form.Item>
                    <div className="flex my-2">
                        <button
                            type="button"
                            className="transition duration-300 py-2 px-8 h-14 flex justify-center items-center bg-[#F2F3F8] font-bold mr-2"
                            onClick={() => CloseModal()}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="transition duration-300 py-2 px-8 h-14 flex justify-center items-center bg-[#0a2b75] border-[#0a2b75] border-solid hover:text-[#0a2b75] hover:bg-white border-[3px] text-white font-bold"
                            onClick={() => Submit()}
                        >
                            Save
                        </button>
                    </div>
                </Form>
            )}
        </Modal>
    );
};

export default NewPriceModal;
