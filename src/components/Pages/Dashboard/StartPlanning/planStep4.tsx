import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationState } from "@/store/index";

import InputMask from "react-input-mask";
import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";
import { addAttachment } from "@/store/auth/action";

const formSchema = Yup.object().shape({
    cashReserves: Yup.number(),
    importantNotes: Yup.string(),
});

var initialValues = {
    cashReserves: "",
    importantNotes: "",
};

interface ComponentProps {
    handlePrev?: () => void;
    handleNext?: (arg: any) => void;
    hidden?: boolean | undefined;
}

const PlanStep4: React.FC<ComponentProps> = ({
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
            initialValues.cashReserves = user.profile.cashReserves || "";
            initialValues.importantNotes = user.profile.importantNotes || "";
        }
    }, [user]);

    return (
        <form onSubmit={formik.handleSubmit} className="w-full" hidden={hidden}>
            <div className="text-[18px] text-[#000714] font-bold pb-[16px] ">
                Upload Statements
            </div>
            <h5 className="border-b border-[#DDE3F0]">
                Include all holdings, all employer retirement plans, individual
                retirement accounts, annuities & tax deferred products, deferred
                comp, 529 savings plans and future assets.
            </h5>

            <h6 className="text-xl mt-8 mb-5 font-bold">
                Upload Investment Account Statements:
            </h6>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="investmentAccountUpload"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload"]
                                ? documents["investmentAccountUpload"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="investmentAccountUpload2"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload 2
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload2"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload2", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload2"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload2?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload2"]
                                ? documents["investmentAccountUpload2"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="investmentAccountUpload3"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload 3
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload3"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload3", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload3"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload3?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload3"]
                                ? documents["investmentAccountUpload3"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="investmentAccountUpload4"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload 4
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload4"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload4", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload4"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload4?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload4"]
                                ? documents["investmentAccountUpload4"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="investmentAccountUpload5"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload 5
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload5"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload5", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload5"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload5?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload5"]
                                ? documents["investmentAccountUpload5"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="investmentAccountUpload6"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Investment Account Upload 6
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="investmentAccountUpload6"
                            onChange={(e) => {
                                changeFormFields("investmentAccountUpload6", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="investmentAccountUpload6"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.investmentAccountUpload6?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["investmentAccountUpload6"]
                                ? documents["investmentAccountUpload6"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>

            <h6 className="text-xl mt-8 mb-5 font-bold">
                Upload Assets & Important Docs For Review:
            </h6>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="otherAssetUpload"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload"]
                                ? documents["otherAssetUpload"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherAssetUpload2"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload 2
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload2"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload2", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload2"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload2?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload2"]
                                ? documents["otherAssetUpload2"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherAssetUpload3"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload 3
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload3"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload3", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload3"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload3?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload3"]
                                ? documents["otherAssetUpload3"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="otherAssetUpload4"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload 4
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload4"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload4", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload4"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload4?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload4"]
                                ? documents["otherAssetUpload4"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherAssetUpload5"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload 5
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload5"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload5", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload5"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload5?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload5"]
                                ? documents["otherAssetUpload5"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherAssetUpload6"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Asset Upload 6
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherAssetUpload6"
                            onChange={(e) => {
                                changeFormFields("otherAssetUpload6", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherAssetUpload6"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherAssetUpload6?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherAssetUpload6"]
                                ? documents["otherAssetUpload6"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>

            <h6 className="text-xl mt-8 mb-5 font-bold">
                Upload Liability Statements:
            </h6>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="otherLiabilitiesUpload"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Liabilities Upload
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherLiabilitiesUpload"
                            onChange={(e) => {
                                changeFormFields("otherLiabilitiesUpload", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherLiabilitiesUpload"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherLiabilitiesUpload?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherLiabilitiesUpload"]
                                ? documents["otherLiabilitiesUpload"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherLiabilitiesUpload2"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Liabilities Upload 2
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherLiabilitiesUpload2"
                            onChange={(e) => {
                                changeFormFields("otherLiabilitiesUpload2", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherLiabilitiesUpload2"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherLiabilitiesUpload2?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherLiabilitiesUpload2"]
                                ? documents["otherLiabilitiesUpload2"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="otherLiabilitiesUpload3"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        Other Liabilities Upload 3
                    </label>
                    <div className="pt-[16px]">
                        <input
                            type="file"
                            className="w-full"
                            id="otherLiabilitiesUpload3"
                            onChange={(e) => {
                                changeFormFields("otherLiabilitiesUpload3", e);
                            }}
                            hidden
                        ></input>
                        <label
                            htmlFor="otherLiabilitiesUpload3"
                            className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full mr-[20px]"
                        >
                            Choose File&nbsp;&nbsp;&#183;&#183;
                        </label>
                        <span className="text-[20px] text-[#434A59]">
                            {user?.profile
                                ? user?.profile?.otherLiabilitiesUpload3?.split(
                                      "-"
                                  )[1] || "No file chosen"
                                : documents["otherLiabilitiesUpload3"]
                                ? documents["otherLiabilitiesUpload3"][0].name
                                : "No file chosen"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full py-[16px]">
                <label
                    htmlFor="cashReserves"
                    className="w-full text-[16px] text-[#434A59] pl-[10px]"
                >
                    Cash Reserves
                </label>
                <label className="w-full text-[12px] text-[#82868f] pl-[10px]">
                    emergency funds, checking, savings, CD's, etc
                </label>
                <input
                    type="number"
                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                    id="cashReserves"
                    {...formik.getFieldProps("cashReserves")}
                    disabled={user?.profile ? true : false}
                    readOnly={user?.profile ? true : false}
                ></input>
            </div>
            <div className="w-full py-[16px]">
                <label
                    htmlFor="importantNotes"
                    className="w-full text-[16px] text-[#434A59] pl-[10px]"
                >
                    Important Notes
                </label>
                <textarea
                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                    id="importantNotes"
                    style={{ height: 140 }}
                    {...formik.getFieldProps("importantNotes")}
                    disabled={user?.profile ? true : false}
                    readOnly={user?.profile ? true : false}
                ></textarea>
            </div>

            <div
                className={`w-full py-[16px] flex justify-between border-t border-[#DDE3F0]`}
            >
                <button
                    className={`text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                flex items-center justify-center h-[60px] min-w-[160px]`}
                    onClick={() => {
                        if (handlePrev) handlePrev();
                    }}
                    type="button"
                >
                    <ArrowLeft className="mr-3" />
                    Back
                </button>
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

export default PlanStep4;
