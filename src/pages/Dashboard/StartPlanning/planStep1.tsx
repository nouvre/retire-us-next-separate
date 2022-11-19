import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationState } from "@/store";

import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";

import InputMask from "react-input-mask";
import { addAttachment } from "@/store/auth/action";
import Image from '@/components/common/Image';

const formSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    DOB: Yup.date().required("DOB is required"),
    employer: Yup.string(),
    employmentIncome: Yup.number(),
});

const formSchema2 = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
    phoneNumber: Yup.string(),
    DOB: Yup.date(),
    employer: Yup.string(),
    employmentIncome: Yup.number(),
});

var initialValues = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    DOB: "",
    employer: "",
    employmentIncome: "",
};

interface ComponentProps {
    handleNext?: (arg: any) => void;
    hidden?: boolean | undefined;
}

const PlanStep1: React.FC<ComponentProps> = ({ handleNext, hidden }) => {
    const dispatch = useDispatch();
    const [documents, setDocuments] = useState({});
    const user = useSelector((state: ApplicationState) => state.auth.user);

    const formik = useFormik({
        validationSchema: user?.profile ? formSchema2 : formSchema,
        initialValues: initialValues,
        onSubmit: (value) => {
            let tempDocs = {};
            Object.keys(documents).map((key) => {
                Object.keys(documents[key]).map((fileKey, index) => {
                    tempDocs[`${key}[${index}]`] = documents[key][fileKey];
                });
            });
            if (handleNext) {
                handleNext({ ...value, ...tempDocs });
            }
        },
    });

    const changeFormFields = (key, e) => {
        if (e.target.files.length) {
            let tempDocuments = { ...documents };
            tempDocuments[key] = e.target.files;
            if (user?.profile) {
                let formdata = new FormData();
                formdata.append("filename", key);
                formdata.append("file[0]", e.target.files[0]);
                dispatch(addAttachment(formdata));
            }
            setDocuments(tempDocuments);
        }
    };

    useEffect(() => {
        if (user?.profile) {
            initialValues.firstname = user.profile.firstname || "";
            initialValues.lastname = user.profile.lastname || "";
            initialValues.phoneNumber = user.profile.phoneNumber || "";
            initialValues.DOB = user.profile.DOB || "";
            initialValues.employer = user.profile.employer || "";
            initialValues.employmentIncome =
                user.profile.employmentIncome || "";
            formik.setValues({ ...initialValues });
        }
    }, [user]);

    return (
        <form onSubmit={formik.handleSubmit} className="w-full" hidden={hidden}>
            <div className="text-[23px] text-[#000714] font-bold pb-[12px]">
                Complete your profile
            </div>
            <div className="text-[18px] text-[#434A59] leading-[30px] pb-[32px]">
                To prepare for the meeting with your advisor, lets get to know
                you better.
            </div>

            <div className="text-[18px] text-[#000714] font-bold pb-[16px] border-b border-[#DDE3F0]">
                Personal information
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 py-[16px]">
                <div>
                    <label
                        htmlFor="firstname"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="firstname"
                        placeholder="First name"
                        {...formik.getFieldProps("firstname")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                    {formik.errors.firstname ? (
                        <div className="ml-3 text-[#F11940]">
                            {formik.errors.firstname}
                        </div>
                    ) : null}
                </div>
                <div>
                    <label
                        htmlFor="lastname"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="lastname"
                        placeholder="Last Name"
                        {...formik.getFieldProps("lastname")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                    {formik.errors.lastname ? (
                        <div className="ml-3 text-[#F11940]">
                            {formik.errors.lastname}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="w-full mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Phone Number
                    </label>
                    <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] p-[5px] mt-1">
                        <div className="w-[46px] h-[46px] flex items-center justify-center text-[20px] text-[#000714] bg-[#EEF1F8] rounded-[8px]">
                            +1
                        </div>
                        <InputMask
                            mask="***-***-****"
                            className="w-full mt-1"
                            {...formik.getFieldProps("phoneNumber")}
                            maskChar=""
                            disabled={user?.profile ? true : false}
                        >
                            {(inputProps: any) => (
                                <input
                                    {...inputProps}
                                    disabled={inputProps.disabled}
                                    type="text"
                                    onClick={(e) => e.preventDefault()}
                                    className="w-full text-[20px] border-0 px-[24px] py-0 outline-none"
                                    style={{ boxShadow: "none" }}
                                    id="phoneNumber"
                                    placeholder="000-000-0000"
                                />
                            )}
                        </InputMask>
                    </div>
                    {formik.errors.phoneNumber ? (
                        <div className="ml-3 text-[#F11940]">
                            {formik.errors.phoneNumber}
                        </div>
                    ) : null}
                </div>
                <div>
                    <label
                        htmlFor="DOB"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Date Of Birth
                    </label>
                    <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] px-[24px] py-[12px] mt-1">
                        <InputMask
                            mask="99/99/9999"
                            className="w-full mt-1"
                            {...formik.getFieldProps("DOB")}
                            maskChar=""
                            disabled={user?.profile ? true : false}
                        >
                            {(inputProps: any) => (
                                <input
                                    {...inputProps}
                                    disabled={inputProps.disabled}
                                    type="text"
                                    onClick={(e) => e.preventDefault()}
                                    className="w-full text-[20px] border-0 px-0 py-0 outline-none"
                                    id="DOB"
                                    placeholder="DD / MM / YYYY"
                                />
                            )}
                        </InputMask>
                        <Image
                            src="/assets/images/ico-calendar.svg"
                            alt="ico-calendar"
                        />
                    </div>
                    {formik.errors.DOB ? (
                        <div className="ml-3 text-[#F11940]">
                            {formik.errors.DOB}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="w-full mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="employer"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Employer
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="employer"
                        placeholder="Employer"
                        {...formik.getFieldProps("employer")}
                        readOnly={user?.profile ? true : false}
                        disabled={user?.profile ? true : false}
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="employmentIncome"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Employment Income
                    </label>
                    <input
                        type="number"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="employmentIncome"
                        placeholder="Employment Income"
                        {...formik.getFieldProps("employmentIncome")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                </div>
            </div>

            <div className="w-full mb-6 grid grid-cols-1 gap-4">
                <div>
                    <label
                        htmlFor="paystubUpload"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Paystub Upload
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="paystubUpload"
                            onChange={(e) => {
                                changeFormFields("paystubUpload", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="paystubUpload"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.paystubUpload?.split("-")[1] ||
                                  "No file chosen"
                                : documents["paystubUpload"]
                                ? documents["paystubUpload"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>
            <div
                className={`w-full py-[16px] flex justify-end border-t border-[#DDE3F0]`}
            >
                <button
                    className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                flex items-center justify-center h-[60px] min-w-[160px]"
                    type="submit"
                >
                    Next
                    <ArrowRight className="ml-3" />
                </button>
            </div>
        </form>
    );
};

export default PlanStep1;
