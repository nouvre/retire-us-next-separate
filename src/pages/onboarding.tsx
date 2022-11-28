import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { ApplicationState } from "@/store/index";
import Header from "../components/Pages/Header";
import { Toast } from "@/components/common/notification";
import axios from "@/util/api";
import Image from '@/components/common/Image';
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

const DimaWrapper: React.FC = () => {
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
                    router.push('/');
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
        <div>
            {!user &&
                <Header opacity={false} />
            }
            <div className="mt-28">
                <form
                    onSubmit={formik.handleSubmit}
                    className="m-auto w-full md:w-[600px] lg:w-[800px] p-10 mt-10 bg-white"
                    style={{
                        boxShadow:
                            "0 4px 8px 0 rgb(53 105 128 / 30%), 0 6px 20px 0 rgb(165 200 213 / 41%)",
                    }}
                >
                    <div className="mb-10">
                        <Image
                            src="https://f.hubspotusercontent10.net/hubfs/7437511/CCP%20Banner2-2.png"
                            alt=""
                        />
                    </div>
                    <div className="w-full mb-4 text-[#33475b] text-3xl font-semibold tracking-tight">
                        Welcome to Cornerstone. Let's get to know you better.
                    </div>
                    <div className="w-full mb-10 text-[#33475b] text-3xl font-semibold tracking-tight underline">
                        Personal Information:
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="firstname"
                                className="w-full text-md text-blue-700"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="firstname"
                                {...formik.getFieldProps("firstname")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="firstname2"
                                className="w-full text-md text-blue-700"
                            >
                                First Name - Client 2
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="firstname2"
                                {...formik.getFieldProps("firstname2")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="lastname"
                                className="w-full text-md text-blue-700"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="lastname"
                                {...formik.getFieldProps("lastname")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="lastname2"
                                className="w-full text-md text-blue-700"
                            >
                                Last Name - Client 2
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="lastname2"
                                {...formik.getFieldProps("lastname2")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="w-full text-md text-blue-700"
                            >
                                Phone Number
                            </label>
                            <InputMask
                                mask="(***) ***-****"
                                className="w-full mt-1"
                                {...formik.getFieldProps("phoneNumber")}
                                maskChar=""
                            >
                                {(inputProps: any) => (
                                    <input
                                        {...inputProps}
                                        type="text"
                                        onClick={(e) => e.preventDefault()}
                                        className="w-full bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                        id="phoneNumber"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div>
                            <label
                                htmlFor="phoneNumber2"
                                className="w-full text-md text-blue-700"
                            >
                                Phone Number - Client 2
                            </label>
                            <InputMask
                                mask="(***) ***-****"
                                className="w-full mt-1"
                                {...formik.getFieldProps("phoneNumber2")}
                                maskChar=""
                            >
                                {(inputProps: any) => (
                                    <input
                                        {...inputProps}
                                        type="text"
                                        onClick={(e) => e.preventDefault()}
                                        className="w-full bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                        id="phoneNumber2"
                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="DOB"
                                className="w-full text-md text-blue-700"
                            >
                                Date Of Birth
                            </label>
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
                                        onClick={(e) => e.preventDefault()}
                                        className="w-full bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                        id="DOB"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div>
                            <label
                                htmlFor="DOB2"
                                className="w-full text-md text-blue-700"
                            >
                                Date Of Birth - Client 2
                            </label>
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
                                        onClick={(e) => e.preventDefault()}
                                        className="w-full bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                        id="DOB2"
                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="employer"
                                className="w-full text-md text-blue-700"
                            >
                                Employer
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="employer"
                                {...formik.getFieldProps("employer")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="employer2"
                                className="w-full text-md text-blue-700"
                            >
                                Employer - Client 2
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="employer2"
                                {...formik.getFieldProps("employer2")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="employmentIncome"
                                className="w-full text-md text-blue-700"
                            >
                                Employment Income
                            </label>
                            <input
                                type="number"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="employmentIncome"
                                {...formik.getFieldProps("employmentIncome")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="employmentIncome2"
                                className="w-full text-md text-blue-700"
                            >
                                Employment Income - Client 2
                            </label>
                            <input
                                type="number"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="employmentIncome2"
                                {...formik.getFieldProps("employmentIncome2")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="paystubUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Paystub Upload
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="paystubUpload"
                                onChange={(e) => {
                                    changeFormFields("paystubUpload", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="paystubUpload2"
                                className="w-full text-md text-blue-700"
                            >
                                Paystub Upload - Client 2
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="paystubUpload2"
                                onChange={(e) => {
                                    changeFormFields("paystubUpload2", e);
                                }}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full mb-10 text-[#33475b] text-3xl font-semibold tracking-tight underline">
                        Household Information
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="email"
                            className="w-full text-md text-blue-700"
                        >
                            Email
                        </label>
                        <div className="w-full text-gray-400 text-sm">
                            this email is considered your client id#, please use the
                            same email for all forms and communication.
                        </div>
                        <input
                            type="text"
                            className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                            id="email"
                            {...formik.getFieldProps("email")}
                        ></input>
                        {formik.touched.email && formik.errors.email && (
                            <div className="w-100 text-red-700">
                                <div className="w-100">{formik.errors.email}</div>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="address"
                            className="w-full text-md text-blue-700"
                        >
                            Street Address
                        </label>
                        <input
                            type="text"
                            className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                            id="address"
                            {...formik.getFieldProps("address")}
                        ></input>
                    </div>

                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="city"
                                className="w-full text-md text-blue-700"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="city"
                                {...formik.getFieldProps("city")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="state"
                                className="w-full text-md text-blue-700"
                            >
                                State
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="state"
                                {...formik.getFieldProps("state")}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="zipCode"
                                className="w-full text-md text-blue-700"
                            >
                                ZipCode
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="zipCode"
                                {...formik.getFieldProps("zipCode")}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full mb-10 text-[#33475b] text-3xl font-semibold tracking-tight underline">
                        Upload Statements:
                    </div>
                    <div className="w-full mb-4 text-[#33475b] text-3xl font-semibold tracking-tight">
                        include all holdings, all employer retirement plans,
                        individual retirement accounts, annuities & tax deferred
                        products, deferred comp, 529 savings plans and future
                        assets.
                    </div>
                    <div className="w-full my-4 text-[#33475b] text-xl font-semibold tracking-tight">
                        Upload Investment Account Statements:
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="investmentAccountUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="investmentAccountUpload2"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload 2
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload2"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload2", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="investmentAccountUpload3"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload 3
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload3"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload3", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="investmentAccountUpload4"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload 4
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload4"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload4", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="investmentAccountUpload5"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload 5
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload5"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload5", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="investmentAccountUpload6"
                                className="w-full text-md text-blue-700"
                            >
                                Investment Account Upload 6
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="investmentAccountUpload6"
                                onChange={(e) => {
                                    changeFormFields("investmentAccountUpload6", e);
                                }}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full my-4 text-[#33475b] text-xl font-semibold tracking-tight">
                        Upload Assets & Important Docs For Review:
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="otherAssetUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherAssetUpload2"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload 2
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload2"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload2", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherAssetUpload3"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload 3
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload3"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload3", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherAssetUpload4"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload 4
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload4"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload4", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherAssetUpload5"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload 5
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload5"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload5", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherAssetUpload6"
                                className="w-full text-md text-blue-700"
                            >
                                Other Asset Upload 6
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherAssetUpload6"
                                onChange={(e) => {
                                    changeFormFields("otherAssetUpload6", e);
                                }}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full my-4 text-[#33475b] text-xl font-semibold tracking-tight">
                        Upload Liability Statements:
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="otherLiabilitiesUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Other Liabilities Upload
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherLiabilitiesUpload"
                                onChange={(e) => {
                                    changeFormFields("otherLiabilitiesUpload", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherLiabilitiesUpload2"
                                className="w-full text-md text-blue-700"
                            >
                                Other Liabilities Upload 2
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherLiabilitiesUpload2"
                                onChange={(e) => {
                                    changeFormFields("otherLiabilitiesUpload2", e);
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherLiabilitiesUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Other Liabilities Upload 3
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherLiabilitiesUpload3"
                                onChange={(e) => {
                                    changeFormFields("otherLiabilitiesUpload3", e);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="cashReserves"
                            className="w-full text-md text-blue-700"
                        >
                            Cash Reserves
                        </label>
                        <div className="w-full text-gray-400 text-sm">
                            emergency funds, checking, savings, CD's, etc
                        </div>
                        <input
                            type="number"
                            className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                            id="cashReserves"
                            {...formik.getFieldProps("cashReserves")}
                        ></input>
                    </div>
                    <div className="w-full mb-4">
                        <label
                            htmlFor="importantNotes"
                            className="w-full text-md text-blue-700"
                        >
                            Important Notes
                        </label>
                        <textarea
                            className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                            id="importantNotes"
                            style={{ height: 140 }}
                            {...formik.getFieldProps("importantNotes")}
                        ></textarea>
                    </div>

                    <div className="w-full mb-10 text-[#33475b] text-3xl font-semibold tracking-tight underline">
                        Other Employer Benefits
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="receiveCashBonus"
                                className="w-full text-md text-blue-700"
                            >
                                Do you receive a Cash Bonus?
                            </label>
                            <select
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="receiveCashBonus"
                                {...formik.getFieldProps("receiveCashBonus")}
                            >
                                <option value="" disabled>
                                    Please Select
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="annualCashBonusAmount"
                                className="w-full text-md text-blue-700"
                            >
                                Annual Cash Bonus Amount
                            </label>
                            <input
                                type="number"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="annualCashBonusAmount"
                                {...formik.getFieldProps("annualCashBonusAmount")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="receiveRSU"
                                className="w-full text-md text-blue-700"
                            >
                                Do you receive RSU's (Restricted Stock)?
                            </label>
                            <select
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="receiveRSU"
                                {...formik.getFieldProps("receiveRSU")}
                            >
                                <option value="" disabled>
                                    Please Select
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="annualRSUAmount"
                                className="w-full text-md text-blue-700"
                            >
                                Annual RSU Amount
                            </label>
                            <input
                                type="number"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="annualRSUAmount"
                                {...formik.getFieldProps("annualRSUAmount")}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="receiveStockOption"
                                className="w-full text-md text-blue-700"
                            >
                                Do you receive Stock Options?
                            </label>
                            <select
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="receiveStockOption"
                                {...formik.getFieldProps("receiveStockOption")}
                            >
                                <option value="" disabled>
                                    Please Select
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="annualStockOptionAmount"
                                className="w-full text-md text-blue-700"
                            >
                                Annual Stock Option Amount
                            </label>
                            <input
                                type="number"
                                className="w-full mt-1 bg-[#f5f8fa] border border-[#cbd6e2] px-[10px] text-base text-[#33475b] h-10 outline-none rounded-sm"
                                id="annualStockOptionAmount"
                                {...formik.getFieldProps("annualStockOptionAmount")}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full mb-4 text-[#33475b] text-3xl font-semibold tracking-tight">
                        Upload Employer benefit summary(pdf), vesting schedules,
                        current statements
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="otherEmployerBenefitUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Other Employer Benefit Upload
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherEmployerBenefitUpload"
                                onChange={(e) => {
                                    changeFormFields(
                                        "otherEmployerBenefitUpload",
                                        e
                                    );
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherEmployerBenefitUpload2"
                                className="w-full text-md text-blue-700"
                            >
                                Other Employer Benefit Upload 2
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherEmployerBenefitUpload2"
                                onChange={(e) => {
                                    changeFormFields(
                                        "otherEmployerBenefitUpload2",
                                        e
                                    );
                                }}
                            ></input>
                        </div>
                        <div>
                            <label
                                htmlFor="otherEmployerBenefitUpload3"
                                className="w-full text-md text-blue-700"
                            >
                                Other Employer Benefit Upload 3
                            </label>
                            <input
                                type="file"
                                className="w-full"
                                id="otherEmployerBenefitUpload3"
                                onChange={(e) => {
                                    changeFormFields(
                                        "otherEmployerBenefitUpload3",
                                        e
                                    );
                                }}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full mb-4 text-[#33475b] text-3xl font-semibold tracking-tight">
                        Upload Employer benefit summary(pdf), vesting schedules,
                        current statements
                    </div>
                    <div className="w-full my-4 text-[#33475b] text-xl font-semibold tracking-tight">
                        https://www.ssa.gov/benefits/retirement/estimator.html
                    </div>
                    <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="socialSecurityUpload"
                                className="w-full text-md text-blue-700"
                            >
                                Social Security Upload
                            </label>
                            <div className="w-full text-gray-400 text-sm">
                                upload your generated statement here
                            </div>
                            <input
                                type="file"
                                className="w-full"
                                id="socialSecurityUpload"
                                onChange={(e) => {
                                    changeFormFields("socialSecurityUpload", e);
                                }}
                            ></input>
                        </div>
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-700 text-white rounded-sm outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DimaWrapper;
