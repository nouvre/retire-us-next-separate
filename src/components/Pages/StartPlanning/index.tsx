import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { ApplicationState } from "@/store/index";
import Header from "../Header";
import DashboardHeader from "../Dashboard/Header";
import { Toast } from "@/components/common/notification";
import Image from '@/components/common/Image';
import axios from "@/util/api";
import { useRouter } from "next/router";

interface Dima {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    DOB: string;
    employer: string;
    employmentIncome: string;
    firstname2: string;
    lastname2: string;
    phoneNumber2: string;
    DOB2: string;
    employer2: string;
    employmentIncome2: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    cashReserves: string;
    importantNotes: string;
    receiveCashBonus: string;
    receiveRSU: string;
    receiveStockOption: string;
    annualCashBonusAmount: string;
    annualRSUAmount: string;
    annualStockOptionAmount: string;
}

const formSchema = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
    phoneNumber: Yup.string(),
    DOB: Yup.date(),
    employer: Yup.string(),
    employmentIncome: Yup.number(),
    firstname2: Yup.string(),
    lastname2: Yup.string(),
    phoneNumber2: Yup.string(),
    DOB2: Yup.date(),
    employer2: Yup.string(),
    employmentIncome2: Yup.number(),
    address: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string(),
    email: Yup.string()
        .email("Email is  invalid")
        .required("Please complete this required field."),
    cashReserves: Yup.string(),
    importantNotes: Yup.string(),
    receiveCashBonus: Yup.string(),
    receiveRSU: Yup.string(),
    receiveStockOption: Yup.string(),
    annualCashBonusAmount: Yup.number(),
    annualRSUAmount: Yup.string(),
    annualStockOptionAmount: Yup.number(),
});

const initialValues: Dima = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    DOB: "",
    employer: "",
    employmentIncome: "",
    firstname2: "",
    lastname2: "",
    phoneNumber2: "",
    DOB2: "",
    employer2: "",
    employmentIncome2: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    cashReserves: "",
    importantNotes: "",
    receiveCashBonus: "",
    receiveRSU: "",
    receiveStockOption: "",
    annualCashBonusAmount: "",
    annualRSUAmount: "",
    annualStockOptionAmount: "",
};

const StartPlanning: React.FC = (props: any) => {
    const router = useRouter();
    const [documents, setDocuments] = useState({});
    const user = useSelector((state: ApplicationState) => state.auth.user);

    const formik = useFormik({
        validationSchema: formSchema,
        initialValues,
        onSubmit: (value: Dima) => {
            let formdata = new FormData();
            Object.keys(value).map((key) => {
                formdata.append(key, value[key]);
            });
            Object.keys(documents).map((key) => {
                Object.keys(documents[key]).map((fileKey, index) => {
                    formdata.append(
                        `${key}[${index}]`,
                        documents[key][fileKey]
                    );
                });
            });
            axios.post("dima", formdata).then(({ data }) => {
                if (data.success) {
                    Toast("", data.result || "Success", "success");
                    router.push("/");
                } else {
                    Toast("", data.result || "Faild", "danger");
                }
            });
        },
    });

    const changeFormFields = (key, e) => {
        let tempDocuments = { ...documents };
        tempDocuments[key] = e.target.files;
        setDocuments(tempDocuments);
    };

    return (
        <div className="w-full py-[60px] md:py-[32px] font-Lato">
            {user ? (
                <DashboardHeader title="Start Planning" />
            ) : (
                <Header opacity={false} />
            )}

            <div className="pt-[32px]">
                <form onSubmit={formik.handleSubmit} className="w-full">
                    <div className="text-[16px] md:text-[23px] text-[#000714] font-bold pb-[4px] md:pb-[12px]">
                        Complete your profile
                    </div>
                    <div className="text-[14px] md:text-[18px] text-[#434A59] leading-[16px] md:leading-[30px] pb-[20px] md:pb-[32px]">
                        To prepare for the meeting with your advisor, lets get
                        to know you better.
                    </div>

                    <div className="text-[16px] md:text-[18px] text-[#000714] font-bold pb-[16px] border-b border-[#DDE3F0]">
                        Personal information
                    </div>

                    <div className="w-full flex flex-wrap justify-between">
                        <div className="w-full md:w-1/2 border-b md:border-r border-[#DDE3F0] py-[16px] md:pr-[5%]">
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="firstname"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="firstname"
                                    placeholder="First name"
                                    {...formik.getFieldProps("firstname")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="lastname"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="lastname"
                                    placeholder="Last Name"
                                    {...formik.getFieldProps("lastname")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="phoneNumber"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Mobile Phone Number
                                </label>
                                <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] p-[5px] mt-1">
                                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] flex items-center justify-center text-[16px] md:text-[20px] text-[#000714] bg-[#EEF1F8] rounded-[8px]">
                                        +1
                                    </div>
                                    <InputMask
                                        mask="***-***-****"
                                        className="w-full mt-1"
                                        {...formik.getFieldProps("phoneNumber")}
                                        maskChar=""
                                    >
                                        {(inputProps: any) => (
                                            <input
                                                {...inputProps}
                                                type="text"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="w-full text-[16px] md:text-[20px] border-0 px-[24px] py-0 outline-none"
                                                style={{ boxShadow: "none" }}
                                                id="phoneNumber"
                                                placeholder="000-000-0000"
                                            />
                                        )}
                                    </InputMask>
                                </div>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="DOB"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Date Of Birth
                                </label>
                                <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] px-[24px] py-[12px] mt-1">
                                    <InputMask
                                        mask="99/99/9999"
                                        className="w-full mt-1"
                                        {...formik.getFieldProps("DOB")}
                                        maskChar=""
                                    >
                                        {(inputProps: any) => (
                                            <input
                                                {...inputProps}
                                                type="text"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="w-full text-[16px] md:text-[20px] border-0 px-0 py-0 outline-none"
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
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="employer"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Employer
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="employer"
                                    placeholder="Employer"
                                    {...formik.getFieldProps("employer")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="employmentIncome"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Employment Income
                                </label>
                                <input
                                    type="number"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="employmentIncome"
                                    placeholder="Employment Income"
                                    {...formik.getFieldProps(
                                        "employmentIncome"
                                    )}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="paystubUpload"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Paystub Upload
                                </label>
                                <div className="pt-[16px]">
                                    <input
                                        type="file"
                                        className="w-full"
                                        id="paystubUpload"
                                        onChange={(e) => {
                                            changeFormFields(
                                                "paystubUpload",
                                                e
                                            );
                                        }}
                                        hidden
                                    ></input>
                                    <label
                                        htmlFor="paystubUpload"
                                        className="text-white text-[16px] md:text-[18px] font-bold bg-[#001F55] px-[24px] py-[12px] rounded-full mr-[20px]"
                                    >
                                        Choose File&nbsp;&nbsp;&#183;&#183;
                                    </label>
                                    <span className="text-[16px] md:text-[20px] text-[#434A59]">
                                        {documents["paystubUpload"]
                                            ? documents["paystubUpload"][0].name
                                            : "No file chosen"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 border-b border-[#DDE3F0] py-[16px] md:pl-[5%]">
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="firstname2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    First Name - Client 2
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="firstname2"
                                    placeholder="First Name - Client 2"
                                    {...formik.getFieldProps("firstname2")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="lastname2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Last Name - Client 2
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="lastname2"
                                    placeholder="Last Name - Client 2"
                                    {...formik.getFieldProps("lastname2")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="phoneNumber2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Mobile Phone Number - Client 2
                                </label>
                                <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] p-[5px] mt-1">
                                    <div className="w-[42px] h-[42px] md:w-[46px] md:h-[46px] flex items-center justify-center text-[16px] md:text-[20px] text-[#000714] bg-[#EEF1F8] rounded-[8px]">
                                        +1
                                    </div>
                                    <InputMask
                                        mask="***-***-****"
                                        className="w-full mt-1"
                                        {...formik.getFieldProps(
                                            "phoneNumber2"
                                        )}
                                        maskChar=""
                                    >
                                        {(inputProps: any) => (
                                            <input
                                                {...inputProps}
                                                type="text"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="w-full text-[16px] md:text-[20px] border-0 px-[24px] py-0 outline-none"
                                                style={{ boxShadow: "none" }}
                                                id="phoneNumber2"
                                                placeholder="000-000-0000"
                                            />
                                        )}
                                    </InputMask>
                                </div>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="DOB2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Date Of Birth - Client 2
                                </label>
                                <div className="flex items-center bg-white rounded-[12px] border border-[#DDE3F0] px-[24px] py-[12px] mt-1">
                                    <InputMask
                                        mask="99/99/9999"
                                        className="w-full mt-1"
                                        {...formik.getFieldProps("DOB2")}
                                        maskChar=""
                                    >
                                        {(inputProps: any) => (
                                            <input
                                                {...inputProps}
                                                type="text"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="w-full text-[16px] md:text-[20px] border-0 px-0 py-0 outline-none"
                                                id="DOB2"
                                                placeholder="DD / MM / YYYY"
                                            />
                                        )}
                                    </InputMask>
                                    <Image
                                        src="/assets/images/ico-calendar.svg"
                                        alt="ico-calendar"
                                    />
                                </div>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="employer2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Employer - Client 2
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="employer2"
                                    placeholder="Employer - Client 2"
                                    {...formik.getFieldProps("employer2")}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="employmentIncome2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Employment Income - Client 2
                                </label>
                                <input
                                    type="number"
                                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[16px] md:text-[20px]"
                                    id="employmentIncome2"
                                    placeholder="Employment Income - Client 2"
                                    {...formik.getFieldProps(
                                        "employmentIncome2"
                                    )}
                                ></input>
                            </div>
                            <div className="pb-[16px]">
                                <label
                                    htmlFor="paystubUpload2"
                                    className="w-full text-[14px] md:text-[16px] text-[#434A59] pl-[10px]"
                                >
                                    Paystub Upload - Client 2
                                </label>
                                <div className="pt-[16px]">
                                    <input
                                        type="file"
                                        className="w-full"
                                        id="paystubUpload2"
                                        onChange={(e) => {
                                            changeFormFields(
                                                "paystubUpload2",
                                                e
                                            );
                                        }}
                                        hidden
                                    ></input>
                                    <label
                                        htmlFor="paystubUpload2"
                                        className="text-white text-[16px] md:text-[18px] font-bold bg-[#001F55] px-[24px] py-[12px] rounded-full mr-[20px]"
                                    >
                                        Choose File&nbsp;&nbsp;&#183;&#183;
                                    </label>
                                    <span className="text-[16px] md:text-[20px] text-[#434A59]">
                                        {documents["paystubUpload2"]
                                            ? documents["paystubUpload2"][0]
                                                  .name
                                            : "No file chosen"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full py-[16px] text-right">
                        <button
                            type="submit"
                            className="text-white text-[16px] md:text-[18px] font-bold bg-[#001F55] px-[24px] py-[12px] rounded-full"
                        >
                            Submit&nbsp;&nbsp;&#183;&#183;
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StartPlanning;
