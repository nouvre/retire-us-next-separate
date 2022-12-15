import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationState } from "@/store/index";

import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import { addAttachment } from "@/store/auth/action";

const formSchema = Yup.object().shape({
    receiveCashBonus: Yup.string(),
    receiveRSU: Yup.string(),
    receiveStockOption: Yup.string(),
    annualCashBonusAmount: Yup.number(),
    annualRSUAmount: Yup.string(),
    annualStockOptionAmount: Yup.number(),
});

var initialValues = {
    receiveCashBonus: "",
    receiveRSU: "",
    receiveStockOption: "",
    annualCashBonusAmount: "",
    annualRSUAmount: "",
    annualStockOptionAmount: "",
};

interface ComponentProps {
    handlePrev?: () => void;
    handleNext?: (arg: any) => void;
    hidden?: boolean | undefined;
}

const PlanStep5: React.FC<ComponentProps> = ({
    handlePrev,
    handleNext,
    hidden,
}) => {
    const dispatch = useDispatch();
    const [documents, setDocuments] = useState({});
    const user = useSelector((state: ApplicationState) => state.auth.user);

    const formik = useFormik({
        validationSchema: formSchema,
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
            initialValues.receiveCashBonus =
                user.profile.receiveCashBonus || "";
            initialValues.receiveRSU = user.profile.receiveRSU || "";
            initialValues.receiveStockOption =
                user.profile.receiveStockOption || "";
            initialValues.annualCashBonusAmount =
                user.profile.annualCashBonusAmount || "";
            initialValues.annualRSUAmount = user.profile.annualRSUAmount || "";
            initialValues.annualStockOptionAmount =
                user.profile.annualStockOptionAmount || "";
            formik.setValues({ ...initialValues });
        }
    }, [user]);

    return (
        <form onSubmit={formik.handleSubmit} className="w-full" hidden={hidden}>
            <div className="text-[18px] text-[#000714] font-bold pb-[16px] ">
                Other Employer Benefits
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-[16px]">
                <div>
                    <label
                        htmlFor="receiveCashBonus"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Do you receive a Cash Bonus?
                    </label>
                    <select
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px] h-14 "
                        id="receiveCashBonus"
                        {...formik.getFieldProps("receiveCashBonus")}
                        disabled={user?.profile ? true : false}
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
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Annual Cash Bonus Amount
                    </label>
                    <input
                        type="number"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="annualCashBonusAmount"
                        {...formik.getFieldProps("annualCashBonusAmount")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-[16px]">
                <div>
                    <label
                        htmlFor="receiveRSU"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Do you receive RSU's (Restricted Stock)?
                    </label>
                    <select
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px] h-14 "
                        id="receiveRSU"
                        {...formik.getFieldProps("receiveRSU")}
                        disabled={user?.profile ? true : false}
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
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Annual RSU Amount
                    </label>
                    <input
                        type="number"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="annualRSUAmount"
                        {...formik.getFieldProps("annualRSUAmount")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-[16px]">
                <div>
                    <label
                        htmlFor="receiveStockOption"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Do you receive Stock Options?
                    </label>
                    <select
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px] h-14 "
                        id="receiveStockOption"
                        {...formik.getFieldProps("receiveStockOption")}
                        disabled={user?.profile ? true : false}
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
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Annual Stock Option Amount
                    </label>
                    <input
                        type="number"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="annualStockOptionAmount"
                        {...formik.getFieldProps("annualStockOptionAmount")}
                        disabled={user?.profile ? true : false}
                        readOnly={user?.profile ? true : false}
                    ></input>
                </div>
            </div>

            <h6 className="text-xl mt-8 mb-5 font-bold">
                Upload Employer benefit summary(pdf), vesting schedules, current
                statements
            </h6>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="otherEmployerBenefitUpload"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Employer Benefit Upload
                    </label>
                    <div className="pt-[16px]">
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
                            hidden
                        ></input>
                        <label
                            htmlFor="otherEmployerBenefitUpload"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherEmployerBenefitUpload?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherEmployerBenefitUpload"]
                                ? documents["otherEmployerBenefitUpload"][0]
                                      .name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherEmployerBenefitUpload2"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Employer Benefit Upload 2
                    </label>
                    <div className="pt-[16px]">
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
                            hidden
                        ></input>
                        <label
                            htmlFor="otherEmployerBenefitUpload2"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherEmployerBenefitUpload2?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherEmployerBenefitUpload2"]
                                ? documents["otherEmployerBenefitUpload2"][0]
                                      .name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherEmployerBenefitUpload3"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Employer Benefit Upload 3
                    </label>
                    <div className="pt-[16px]">
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
                            hidden
                        ></input>
                        <label
                            htmlFor="otherEmployerBenefitUpload3"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherEmployerBenefitUpload3?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherEmployerBenefitUpload3"]
                                ? documents["otherEmployerBenefitUpload3"][0]
                                      .name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>

            <h6 className="text-xl mt-8 mb-5 font-bold">
                Upload Employer benefit summary(pdf), vesting schedules, current
                statements
            </h6>
            <a
                href=" https://www.ssa.gov/benefits/retirement/estimator.html"
                target="_blank"
                className="w-full my-4 text-[#33475b] text-xl font-semibold tracking-tight"
            >
                https://www.ssa.gov/benefits/retirement/estimator.html
            </a>
            <div className="w-full py-8">
                <label
                    htmlFor="socialSecurityUpload"
                    className="w-full text-[16px] text-[#434A59] pl-[10px]"
                >
                    Social Security Upload
                </label>
                <div className="w-full text-gray-400 text-sm pl-[10px]">
                    upload your generated statement here
                </div>
                <div className="pt-[16px]">
                    <input
                        type="file"
                        className="w-full"
                        id="socialSecurityUpload"
                        onChange={(e) => {
                            changeFormFields("socialSecurityUpload", e);
                        }}
                        hidden
                    ></input>
                    <label
                        htmlFor="socialSecurityUpload"
                        className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                    >
                        Choose File&nbsp;&nbsp;&#183;&#183;
                    </label>
                    <span className="text-[20px] text-[#434A59]">
                        {user?.profile
                            ? user?.profile?.socialSecurityUpload?.split(
                                  "-"
                              )[1] || "No file chosen"
                            : documents["paystubUpload"]
                            ? documents["paystubUpload"][0].name
                            : "No file chosen"}
                    </span>
                </div>
            </div>
            <div
                className={`w-full py-[16px] flex justify-between border-t border-[#DDE3F0]`}
            >
                <button
                    type="button"
                    className={`text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                            flex items-center justify-center h-[60px] min-w-[160px]`}
                    onClick={() => {
                        if (handlePrev) handlePrev();
                    }}
                >
                    <ArrowLeft className="mr-3" />
                    Back
                </button>
                {user?.profile ? (
                    <></>
                ) : (
                    <button
                        className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                flex items-center justify-center h-[60px] min-w-[160px]"
                        type="submit"
                    >
                        Submit&nbsp;&nbsp;&#183;&#183;
                    </button>
                )}
            </div>
        </form>
    );
};

export default PlanStep5;
