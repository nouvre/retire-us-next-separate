import React, { useEffect } from "react";
import { Modal, Form, Input, Checkbox } from "antd";
import { DataCollectionField } from "@/store/setting/types";

interface ComponentProps {
    formdata: DataCollectionField | undefined | null;
    visible: boolean | undefined;
    closeModal: () => void;
    handleSubmit: (formdata: FormData) => void;
}

const DataCollectionModal: React.FC<ComponentProps> = (props) => {

    const [form] = Form.useForm();

    useEffect(() => {
        if (props.visible) {
            form.setFieldsValue(props.formdata);
        } else {
            form.resetFields();
        }
    }, [props.visible])

    const submit = () => {
        form.validateFields().then((data) => {
            props.handleSubmit(data);
        })
    }

    return <Modal title="Data Collection Field" visible={props.visible} onCancel={props.closeModal} width={450} footer={null}>
        <Form form={form} layout="vertical" requiredMark={false}>
            <Form.Item name="id" hidden>
                <Input />
            </Form.Item>
            <Form.Item name="title" label="Title" rules={[{required:true, message: 'Title is required'}]}>
                <Input />
            </Form.Item>
            <div className="grid grid-cols-2">
                <Form.Item name="multiple" label="Multiple" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
                <Form.Item name="require" label="Require" valuePropName="checked">
                    <Checkbox />
                </Form.Item>
            </div>
            <div className="w-full flex mt-6">
                <button className="h-11 flex justify-center items-center font-bold text-xl mr-4 bg-[#0A2C75] px-6 text-white" onClick={()=>submit()}>Save</button>
                <button className="h-11 flex justify-center items-center font-bold text-xl mr-4 bg-[#F2F3F8] px-6" onClick={() => props.closeModal()}>Cancel</button>
            </div>
        </Form>
    </Modal>;
};

export default DataCollectionModal;