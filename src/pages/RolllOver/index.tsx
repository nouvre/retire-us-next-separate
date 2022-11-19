import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { Toast } from "@/components/common/notification";
import axios from "../../util/api";
import BeneFiciary, { BeneficiaryType } from "./Beneficiary";

const formSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phoneNumber: Yup.string(),
    streetAddress: Yup.string(),
    streetAddress2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string(),
    DOB: Yup.date().required("Date of birth  is required"),
    employementStatus: Yup.string().required("Employement Status is required"),
    employer: Yup.string(),
    occupation: Yup.string(),
    netWorth: Yup.string().required("Net Worth is required"),
    liquidNetWorth: Yup.string(),
    estimatedAnnualIncome: Yup.string().required(
        "Estimatied Annual Income  is required"
    ),
    numberOfAccounts: Yup.number(),
    totalInvestmentAssets: Yup.string(),
    investmentAssetsNotes: Yup.string(),
    accountTypes: Yup.string(),
    accountTypeByInput: Yup.string(),
    federalTaxBracket: Yup.string(),
});

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    streetAddress: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: string;
    DOB: string;
    employementStatus: string;
    employer: string;
    occupation: string;
    netWorth: string;
    liquidNetWorth: string;
    estimatedAnnualIncome: string;
    numberOfAccounts: string;
    totalInvestmentAssets: string;
    investmentAssetsNotes: string;
    accountTypes: string;
    accountTypeByInput: string;
    federalTaxBracket: string;
}

const initialValues: FormData = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    DOB: "",
    employementStatus: "",
    employer: "",
    occupation: "",
    netWorth: "",
    liquidNetWorth: "",
    estimatedAnnualIncome: "",
    numberOfAccounts: "",
    totalInvestmentAssets: "",
    investmentAssetsNotes: "",
    accountTypes: "",
    accountTypeByInput: "",
    federalTaxBracket: "",
};

const initialBeneficiaries = [
    {
        type: "Primary",
        portion: "",
        firstname: "",
        middlename: "",
        lastname: "",
        trustOrOrganization: "",
        relationship: "",
        socialSecurityNumber: "",
        DOB: "",
        phoneNumber: "",
        email: "",
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        countryOfCitizenship: "",
        countryOfCitizenshipByInput: "",
        countryOfLegalResidence: "",
        countryOfLegalResidenceByInput: "",
    },
    {
        type: "",
        portion: "",
        firstname: "",
        middlename: "",
        lastname: "",
        trustOrOrganization: "",
        relationship: "",
        socialSecurityNumber: "",
        DOB: "",
        phoneNumber: "",
        email: "",
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        countryOfCitizenship: "",
        countryOfCitizenshipByInput: "",
        countryOfLegalResidence: "",
        countryOfLegalResidenceByInput: "",
    },
    {
        type: "",
        portion: "",
        firstname: "",
        middlename: "",
        lastname: "",
        trustOrOrganization: "",
        relationship: "",
        socialSecurityNumber: "",
        DOB: "",
        phoneNumber: "",
        email: "",
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        countryOfCitizenship: "",
        countryOfCitizenshipByInput: "",
        countryOfLegalResidence: "",
        countryOfLegalResidenceByInput: "",
    },
    {
        type: "",
        portion: "",
        firstname: "",
        middlename: "",
        lastname: "",
        trustOrOrganization: "",
        relationship: "",
        socialSecurityNumber: "",
        DOB: "",
        phoneNumber: "",
        email: "",
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        countryOfCitizenship: "",
        countryOfCitizenshipByInput: "",
        countryOfLegalResidence: "",
        countryOfLegalResidenceByInput: "",
    },
];

const RollOver: React.FC = () => {
    const [documents, setDocuments] = useState<any>([]);
    const [beneficiaries, setBeneficiaries] = useState<BeneficiaryType[]>(initialBeneficiaries);
    const formik = useFormik({
        validationSchema: formSchema,
        initialValues,
        onSubmit: (value: FormData, { resetForm }) => {
            let tempBeneficiaries = [] as BeneficiaryType[];
            beneficiaries.map((e) => {
                let isEmpty = true;
                Object.keys(e).map((key) => {
                    if(e[key] != "") {
                        isEmpty = false;
                    }
                })
                if(!isEmpty) {
                    tempBeneficiaries.push(e);
                }
            })
            let submitData = new FormData();

            Object.keys(value).map((key) => {
                submitData.append(key, value[key]);
            });

            Object.keys(documents).map((fileKey, index) => {
                submitData.append(`documents[${index}]`, documents[fileKey]);
            });

            submitData.append('beneficiaries', JSON.stringify(tempBeneficiaries));

            axios.post("rollover", submitData).then(({ data }) => {
                setBeneficiaries(initialBeneficiaries);
                if (data.success) {
                    Toast("", data.result || "Success", "success");
                    location.href =
                        "https://meetings.hubspot.com/ms7/simple-rollover";
                } else {
                    Toast("", data.result || "Faild", "danger");
                }
            });
        },
    });

    const handleFileUpload = (e) => {
        setDocuments(e.target.files);
    };

    const handleSubmitBenificiaries = async (e) => {
        setBeneficiaries(e.beneficiaries);
        formik.submitForm();
    }

    return (
        <div
            className="m-auto w-full md:w-[600px] lg:w-[800px] p-10 mt-10 bg-white"
            style={{
                boxShadow:
                    "0 4px 8px 0 rgb(53 105 128 / 30%), 0 6px 20px 0 rgb(165 200 213 / 41%)",
            }}
        >
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-10">
                    <img
                        src="https://f.hubspotusercontent10.net/hubfs/7437511/CCP%20Banner2-2.png"
                        alt=""
                    />
                </div>
                <div className="w-full text-3xl font-semibold mb-5">
                    Let's get started with your Simple Rollover®
                </div>
                <div className="w-full mb-4 p-2">
                    <div className="w-full flex flex-cols-1 md:flex-cols-2 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="firstname"
                            >
                                First Name
                            </label>
                            <input
                                required
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="firstname"
                                {...formik.getFieldProps("firstname")}
                            ></input>
                            {formik.touched.firstname &&
                                formik.errors.firstname && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.firstname}
                                        </div>
                                    </div>
                                )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="lastname"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="lastname"
                                {...formik.getFieldProps("lastname")}
                            ></input>
                            {formik.touched.lastname && formik.errors.lastname && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.lastname}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-2 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="email"
                                {...formik.getFieldProps("email")}
                            ></input>
                            {formik.touched.email && formik.errors.email && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.email}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="phoneNumber"
                            >
                                Phone Number
                            </label>
                            <InputMask
                                mask="(***) ***-****"
                                className="w-20"
                                {...formik.getFieldProps("phoneNumber")}
                                maskChar=""
                            >
                                {(inputProps: any) => (
                                    <input
                                        {...inputProps}
                                        type="text"
                                        placeholder="(555) 555-5555"
                                        onClick={(e) => e.preventDefault()}
                                        className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                    />
                                )}
                            </InputMask>
                            {formik.touched.phoneNumber &&
                                formik.errors.phoneNumber && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.phoneNumber}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-2 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="streetAddress"
                            >
                                Street Address
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="streetAddress"
                                {...formik.getFieldProps("streetAddress")}
                            ></input>
                            {formik.touched.streetAddress &&
                                formik.errors.streetAddress && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.streetAddress}
                                        </div>
                                    </div>
                                )}
                        </div>
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="streetAddress2"
                            >
                                Address Line 2
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="streetAddress2"
                                {...formik.getFieldProps("streetAddress2")}
                            ></input>
                            {formik.touched.streetAddress2 &&
                                formik.errors.streetAddress2 && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.streetAddress2}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-3 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="city"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="city"
                                {...formik.getFieldProps("city")}
                            ></input>
                            {formik.touched.city && formik.errors.city && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.city}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="state"
                            >
                                State/Region
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="state"
                                {...formik.getFieldProps("state")}
                            ></input>
                            {formik.touched.state && formik.errors.state && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.state}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="zipCode"
                            >
                                Postal Code
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="zipCode"
                                {...formik.getFieldProps("zipCode")}
                            ></input>
                            {formik.touched.zipCode && formik.errors.zipCode && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.zipCode}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full mb-4">
                        <label
                            className="w-full text-md mb-1 text-blue-600"
                            htmlFor="DOB"
                        >
                            Date Of Birth
                        </label>
                        <InputMask
                            mask="99/99/9999"
                            className="w-20"
                            {...formik.getFieldProps("DOB")}
                            maskChar=""
                        >
                            {(inputProps: any) => (
                                <input
                                    {...inputProps}
                                    type="text"
                                    placeholder="MM/DD/YYYY"
                                    onClick={(e) => e.preventDefault()}
                                    className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                />
                            )}
                        </InputMask>
                        {formik.touched.DOB && formik.errors.DOB && (
                            <div className="w-100 text-red-500">
                                <div className="w-100">{formik.errors.DOB}</div>
                            </div>
                        )}
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-3 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="employementStatus"
                            >
                                Employement Status
                            </label>
                            <select
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="employementStatus"
                                {...formik.getFieldProps("employementStatus")}
                            >
                                <option label="Please Select" disabled value="">
                                    Please Select
                                </option>
                                <option label="Employed" value="Employed">
                                    Employed
                                </option>
                                <option label="Retired" value="Retired">
                                    Retired
                                </option>
                                <option
                                    label="Business Owner"
                                    value="Business Owner"
                                >
                                    Business Owner
                                </option>
                                <option label="Homemaker " value="Homemaker">
                                    Homemaker
                                </option>
                                <option
                                    label="Not currently employed"
                                    value="Not currently employed"
                                >
                                    Not currently employed
                                </option>
                            </select>
                            {formik.touched.employementStatus &&
                                formik.errors.employementStatus && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.employementStatus}
                                        </div>
                                    </div>
                                )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="employer"
                            >
                                Employer
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="employer"
                                {...formik.getFieldProps("employer")}
                            ></input>
                            {formik.touched.employer && formik.errors.employer && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.employer}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="occupation"
                            >
                                Occupation
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="occupation"
                                {...formik.getFieldProps("occupation")}
                            ></input>
                            {formik.touched.occupation &&
                                formik.errors.occupation && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.occupation}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-2 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="netWorth"
                            >
                                Net Worth
                            </label>
                            <NumberFormat
                                thousandSeparator={true}
                                prefix="$"
                                placeholder="$0.00"
                                id="netWorth"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                {...formik.getFieldProps("netWorth")}
                            />
                            {formik.touched.netWorth && formik.errors.netWorth && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.netWorth}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="liquidNetWorth"
                            >
                                Liquid Net Worth
                            </label>
                            <NumberFormat
                                thousandSeparator={true}
                                prefix="$"
                                id="liquidNetWorth"
                                placeholder="$0.00"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                {...formik.getFieldProps("liquidNetWorth")}
                            />
                            {formik.touched.liquidNetWorth &&
                                formik.errors.liquidNetWorth && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.liquidNetWorth}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-2 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="estimatedAnnualIncome"
                            >
                                Estimated Annual Income
                            </label>
                            <NumberFormat
                                thousandSeparator={true}
                                prefix="$"
                                placeholder="$0.00"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                {...formik.getFieldProps(
                                    "estimatedAnnualIncome"
                                )}
                            />
                            {formik.touched.estimatedAnnualIncome &&
                                formik.errors.estimatedAnnualIncome && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {
                                                formik.errors
                                                    .estimatedAnnualIncome
                                            }
                                        </div>
                                    </div>
                                )}
                        </div>
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="federalTaxBracket"
                            >
                                Federal Tax Bracket
                            </label>
                            <NumberFormat
                                thousandSeparator={true}
                                suffix="%"
                                placeholder="0%"
                                max={100}
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                {...formik.getFieldProps("federalTaxBracket")}
                            />
                            {formik.touched.federalTaxBracket &&
                                formik.errors.federalTaxBracket && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.federalTaxBracket}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>

                <div className="w-full text-3xl font-semibold mb-5">
                    Let's get to know you better
                </div>
                <div className="w-full mb-4 p-2">
                    <div className="w-full mb-4">
                        <label
                            className="w-full text-md mb-1 text-blue-600"
                            htmlFor="numberOfAccounts"
                        >
                            Number Of Accounts
                        </label>
                        <input
                            type="number"
                            className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                            id="numberOfAccounts"
                            {...formik.getFieldProps("numberOfAccounts")}
                        ></input>
                        {formik.touched.numberOfAccounts &&
                            formik.errors.numberOfAccounts && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.numberOfAccounts}
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="w-full mb-4">
                        <label
                            className="w-full text-md mb-1 text-blue-600"
                            htmlFor="totalInvestmentAssets"
                        >
                            Total Investment Assets
                        </label>
                        <NumberFormat
                            thousandSeparator={true}
                            className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                            {...formik.getFieldProps("totalInvestmentAssets")}
                        />
                        {formik.touched.totalInvestmentAssets &&
                            formik.errors.totalInvestmentAssets && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.totalInvestmentAssets}
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="w-full mb-4">
                        <label
                            className="w-full text-md mb-1 text-blue-600"
                            htmlFor="investmentAssetsNotes"
                        >
                            Investment Assets - Notes
                        </label>
                        <textarea
                            className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2 h-24 py-2"
                            id="investmentAssetsNotes"
                            {...formik.getFieldProps("investmentAssetsNotes")}
                        ></textarea>
                        {formik.touched.investmentAssetsNotes &&
                            formik.errors.investmentAssetsNotes && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.investmentAssetsNotes}
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-3 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="employementStatus"
                            >
                                Employement Status
                            </label>
                            <select
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="employementStatus"
                                {...formik.getFieldProps("employementStatus")}
                            >
                                <option label="Please Select" disabled value="">
                                    Please Select
                                </option>
                                <option label="Employed" value="Employed">
                                    Employed
                                </option>
                                <option label="Retired" value="Retired">
                                    Retired
                                </option>
                                <option
                                    label="Business Owner"
                                    value="Business Owner"
                                >
                                    Business Owner
                                </option>
                                <option label="Homemaker " value="Homemaker">
                                    Homemaker
                                </option>
                                <option
                                    label="Not currently employed"
                                    value="Not currently employed"
                                >
                                    Not currently employed
                                </option>
                            </select>
                            {formik.touched.employementStatus &&
                                formik.errors.employementStatus && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.employementStatus}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="w-full flex flex-cols-1 md:flex-cols-3 gap-4">
                        <div className="w-full mb-4">
                            <label
                                className="w-full text-md mb-1 text-blue-600"
                                htmlFor="accountTypes"
                            >
                                Account Types
                            </label>
                            <select
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="accountTypes"
                                {...formik.getFieldProps("accountTypes")}
                            >
                                <option disabled value="">
                                    Please Select
                                </option>
                                <option value="IRA">IRA</option>
                                <option value="403(B)">403(B)</option>
                                <option value="401(K)">401(K)</option>
                                <option value="Qualified Plan">
                                    Qualified Plan
                                </option>
                                <option value="Other">Other</option>
                            </select>
                            {formik.touched.accountTypes &&
                                formik.errors.accountTypes && (
                                    <div className="w-100 text-red-500">
                                        <div className="w-100">
                                            {formik.errors.accountTypes}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    <div
                        className="w-full mb-4"
                        hidden={formik.values.accountTypes !== "Other"}
                    >
                        <label
                            className="w-full text-md mb-1 text-blue-600"
                            htmlFor="investmentAssetsNotes"
                        >
                            Account Type
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                            id="accountTypeByInput"
                            {...formik.getFieldProps("accountTypeByInput")}
                        ></input>
                        {formik.touched.accountTypeByInput &&
                            formik.errors.accountTypeByInput && (
                                <div className="w-100 text-red-500">
                                    <div className="w-100">
                                        {formik.errors.accountTypeByInput}
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="w-full">
                        This section includes a few questions that are required
                        for the successful completion of your appliation
                    </div>
                </div>

                <div className="w-full text-3xl font-semibold mb-5">
                    Document Upload
                </div>
                <div className="w-full mb-4 p-2">
                    <label
                        className="w-full text-md mb-1 text-blue-600"
                        htmlFor="statementUpload"
                    >
                        Statement Upload
                    </label>
                    <div>
                        <input
                            id="statementUpload"
                            type="file"
                            onChange={handleFileUpload}
                        ></input>
                    </div>
                </div>
            </form>
            <BeneFiciary
                initialValues={beneficiaries}
                nunberOfBeneficiary={4}
                handleSubmit={handleSubmitBenificiaries}
            />
        </div>
    );
};

export default RollOver;
