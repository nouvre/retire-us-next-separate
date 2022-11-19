import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { useSelector } from "react-redux";
import { ApplicationState } from "@/store";
import Select from "react-select";
import ConfettiExplosion from "react-confetti-explosion";
import Image from '@/components/common/Image';

const OnboardingWizard = () => {
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const [activePage, setActivePage] = useState<number>(1);
    const [feelingBreak, setFeelingBreak] = useState<any>(null);
    const [progressBreak, setProgressBreak] = useState<boolean>(false);
    const [finalBreak, setFinalBreak] = useState<boolean>(false);
    const [endScreen, setEndScreen] = useState<boolean>(false);
    const [error, setError] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [form, setForm] = useState<any>({
        firstName: "",
        lastName: "",
        gender: null,
        birthDate: "",
        employmentStatus: null,
        employmentIncome: "",
        otherIncome: "",
        planningFor: null,
        beneficiary: null,
        retireAge: null,
        feelingSoFar: null,
        goals: [
            {
                goal: "",
                time: "",
                amount: "",
            },
        ],
        monthlySpendings: "",
        yearlySpendings: "",
        socialSecurity: null,
        additionalSources: [
            {
                source: "",
                amount: "",
            },
        ],
        currentAccounts: [
            {
                account: "",
                owner: "",
                amount: "",
            },
        ],
        otherAssets: null,
        insuranceInventory: null,
        complexBenefits: {
            cashBonus: false,
            rsu: false,
            stockOptions: false,
            deferredCompensation: false,
            pension: false,
        },
        liabilities: [
            {
                name: "",
                date: "",
                balance: "",
                payment: "",
            },
        ],
        communicationMethod: null,
        uploadDocuments: null,
        retirementExpectations: {
            noWork: false,
            partTime: false,
            neverRetire: false,
            activeLifestyle: false,
            quietLifestyle: false,
            timeToTravel: false,
            friendsAndFamily: false,
            helpOthers: false,
            newHome: false,
            business: false,
            lessStress: false,
            other: false,
        },
        concerns: null,
    });
    const radios = {
        gender: [
            {
                value: "Woman",
                bg: "url(/assets/images/onboarding-wizard/woman.svg) no-repeat 21px 21px/17px",
            },
            {
                value: "Man",
                bg: "url(/assets/images/onboarding-wizard/man.svg) no-repeat 21px 21px/22px",
            },
            {
                value: "Other",
                bg: "url(/assets/images/onboarding-wizard/other.svg) no-repeat 21px 21px/22px",
            },
        ],
        employmentStatus: [
            "Business Owner",
            "Employed",
            "Homemaker",
            "Not Currently Employed",
            "Retired",
        ],
        planningFor: ["Just me", "Me and my partner", "Other"],
        beneficiary: ["Yes", "No"],
        retireAge: ["Yes, this is correct", "No, change"],
        feelingSoFar: ["Excited", "Overwhelmed", "Relieved"],
        socialSecurity: ["Yes", "No"],
        otherAssets: ["Yes", "No"],
        insuranceInventory: ["Yes", "No"],
        communicationMethod: ["Text", "Call", "Email", "Zoom"],
        uploadDocuments: [
            {
                name: "scanner",
                label: "I have a scanner",
            },
            {
                name: "smartphone",
                label: "I have a smartphone",
            },
            {
                name: "support",
                label: "I would like someone to help me",
            },
        ],
    };
    const checkboxes = {
        otherAssets: [
            { name: "personalProperty", label: "Personal Property" },
            { name: "business", label: "Business" },
            { name: "realEstate", label: "Real Estate" },
            { name: "crypto", label: "Crypto" },
        ],
        complexBenefits: [
            { name: "cashBonus", label: "Cash Bonus" },
            { name: "rsu", label: "RSU (Restricted stock)" },
            { name: "stockOptions", label: "Stock Options" },
            { name: "deferredCompensation", label: "Deferred Compensation" },
            { name: "pension", label: "Pension" },
        ],
        retirementExpectations: [
            { name: "noWork", label: "No Work", icon: "no-work" },
            {
                name: "partTime",
                label: "Part-Time Work for a Few Years",
                icon: "part-time",
            },
            {
                name: "neverRetire",
                label: "Never Completely Retire",
                icon: "never-retire",
            },
            {
                name: "activeLifestyle",
                label: "Active Lifestyle",
                icon: "active",
            },
            { name: "quietLifestyle", label: "Quiet Lifestyle", icon: "quiet" },
            { name: "timeToTravel", label: "Time to Travel", icon: "travel" },
            {
                name: "friendsAndFamily",
                label: "Time with Friends & Family",
                icon: "friends",
            },
            {
                name: "helpOthers",
                label: "Opportunity to Help Others",
                icon: "help",
            },
            { name: "newHome", label: "Moving to a New home", icon: "home" },
            { name: "business", label: "Start a Business", icon: "business" },
            {
                name: "lessStress",
                label: "Less Stress - Peace of Mind",
                icon: "peace",
            },
            { name: "other", label: "Other", icon: "other" },
        ],
    };
    const selects = {
        beneficiary: {
            type: [
                {
                    value: "child",
                    label: "Сhild",
                },
                {
                    value: "grandchild",
                    label: "Grandchild",
                },
                {
                    value: "otherDependent",
                    label: "Other dependent",
                },
                {
                    value: "otherBeneficiary",
                    label: "Other beneficiary",
                },
                {
                    value: "charity",
                    label: "Charity",
                },
                {
                    value: "trust",
                    label: "Trust",
                },
                {
                    value: "trustedContact",
                    label: "Trusted contact",
                },
            ],
            relationship: [
                {
                    value: "dependent",
                    label: "Dependent",
                },
                {
                    value: "other",
                    label: "Other",
                },
            ],
        },
        concernDegree: [
            {
                value: "low",
                label: "Low",
            },
            {
                value: "medium",
                label: "Medium",
            },
            {
                value: "high",
                label: "High",
            },
        ],
    };
    const suggestions = {
        goals: [
            "Travel",
            "Health care",
            "Education",
            "Major purchase",
            "Wedding",
            "Real Estate",
            "Other",
        ],
        accounts: [
            "401(k)",
            "403(b)",
            "457",
            "Trad IRA",
            "Roth IRA",
            "SEP-IRA",
            "Simple-IRA",
            "Inherited IRA",
            "Annuity",
            "Pension",
            "Brokerage",
            "529 Savings",
            "Cash Reserve",
            "Cash Value Life",
        ],
        liabilities: [
            "Personal Real Estate Loan",
            "Vehicle Loan",
            "Business Loan",
            "Personal Debt",
            "Other",
        ],
    };
    const commonSelectStyles = {
        option: {
            fontSize: "16px",
            lineHeight: "24px",
            cursor: "pointer",
            backgroundColor: "#fff",
            paddingLeft: "16px",
            paddingRight: "16px",
            transition: "300ms",
            "&:hover": {
                backgroundColor: "#3F68E4",
                color: "#fff",
            },
            "@media (min-width: 1024px)": {
                fontSize: "18px",
                lineHeight: "32px",
            },
        },
        control: {
            height: "56px",
            paddingLeft: "16px",
            fontSize: "16px",
            lineHeight: "24px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "none !important",
            transition: "300ms",
            "@media (min-width: 1024px)": {
                fontSize: "20px",
                lineHeight: "32px",
            },
        },
    };
    const beneficiaryTypeSelectStyles = {
        option: (styles, state) => ({
            ...styles,
            ...commonSelectStyles.option,
            color: state.isSelected ? "#A2ACBE" : "#000714",
            pointerEvents: state.isSelected ? "none" : "all",
        }),
        control: (styles, state) => ({
            ...styles,
            ...commonSelectStyles.control,
            border: error.beneficiary?.type
                ? "1px solid #F11940"
                : state.isFocused
                ? "1px solid #3F68E4"
                : "1px solid #DDE3F0",
            "&:hover": {
                border: error.beneficiary?.type
                    ? "1px solid #F11940"
                    : state.isFocused
                    ? "1px solid #3F68E4"
                    : "1px solid #A2ACBE",
            },
        }),
    };
    const beneficiaryRelationshipSelectStyles = {
        option: (styles, state) => ({
            ...styles,
            ...commonSelectStyles.option,
            color: state.isSelected ? "#A2ACBE" : "#000714",
            pointerEvents: state.isSelected ? "none" : "all",
        }),
        control: (styles, state) => ({
            ...styles,
            ...commonSelectStyles.control,
            border: error.beneficiary?.relationship
                ? "1px solid #F11940"
                : state.isFocused
                ? "1px solid #3F68E4"
                : "1px solid #DDE3F0",
            "&:hover": {
                border: error.beneficiary?.relationship
                    ? "1px solid #F11940"
                    : state.isFocused
                    ? "1px solid #3F68E4"
                    : "1px solid #A2ACBE",
            },
        }),
    };
    const concernSelectStyles = {
        option: (styles, state) => ({
            ...styles,
            fontSize: "18px",
            lineHeight: "30px",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: state.isSelected ? "#A2ACBE" : "#000714",
            pointerEvents: state.isSelected ? "none" : "all",
            paddingLeft: "16px",
            paddingRight: "16px",
            transition: "300ms",
            "&:hover": {
                backgroundColor: "#3F68E4",
                color: "#fff",
            },
            "@media (max-width: 900px)": {
                fontSize: "14px",
                lineHeight: "16px",
            },
        }),
        control: (styles) => ({
            ...styles,
            height: "30px",
            padding: "0",
            fontSize: "18px",
            lineHeight: "30px",
            cursor: "pointer",
            boxShadow: "none !important",
            border: "none",
            "@media (max-width: 900px)": {
                fontSize: "14px",
                lineHeight: "16px",
            },
        }),
    };
    const totalPages = 18;

    const validateDate = (date) => {
        return /\b(0?[1-9]|1[012])([\/\-])(0?[1-9]|[12]\d|3[01])\2(\d{4})/.test(
            date
        );
    };

    const validatePage = (page: number) => {
        let errors: any = {};

        if (page === 1) {
            if (form.firstName === "") {
                errors.firstName = true;
            }

            if (form.lastName === "") {
                errors.lastName = true;
            }

            if (form.gender === null) {
                errors.gender = true;
            }

            if (!validateDate(form.birthDate)) {
                errors.birthDate = true;
            }

            if (
                errors.firstName ||
                errors.lastName ||
                errors.gender ||
                errors.birthDate
            ) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 2) {
            if (form.employmentIncome === "" || isNaN(form.employmentIncome)) {
                errors.employmentIncome = true;
            }

            if (form.otherIncome === "" || isNaN(form.otherIncome)) {
                errors.otherIncome = true;
            }

            if (form.employmentStatus === null) {
                errors.employmentStatus = true;
            }

            if (
                errors.employmentIncome ||
                errors.otherIncome ||
                errors.employmentStatus
            ) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 3) {
            if (form.planningFor === null) {
                errors.planningFor = true;
            }

            if (form.planningFor?.type) {
                if (form.planningFor.type === "Just me") {
                    errors.planningFor = false;
                }

                if (form.planningFor.type === "Me and my partner") {
                    errors.planningFor = {};

                    if (!form.planningFor.partnerFirstName) {
                        errors.planningFor.partnerFirstName = true;
                    }

                    if (!form.planningFor.partnerLastName) {
                        errors.planningFor.partnerLastName = true;
                    }

                    if (!form.planningFor.partnerGender) {
                        errors.planningFor.partnerGender = true;
                    }

                    if (!validateDate(form.planningFor.partnerBirthDate)) {
                        errors.planningFor.partnerBirthDate = true;
                    }
                }

                if (form.planningFor.type === "Other") {
                    errors.planningFor = {};

                    if (
                        !form.planningFor.yourChoice ||
                        form.planningFor.yourChoice === ""
                    ) {
                        errors.planningFor.yourChoice = true;
                    }
                }
            }

            setError(errors);

            if (
                errors.planningFor === true ||
                errors.planningFor.partnerFirstName ||
                errors.planningFor.partnerLastName ||
                errors.planningFor.partnerGender ||
                errors.planningFor.partnerBirthDate ||
                errors.planningFor.yourChoice
            ) {
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 4) {
            if (form.beneficiary === null) {
                errors.beneficiary = true;
            }

            if (form.beneficiary?.status) {
                if (form.beneficiary.status === "No") {
                    errors.beneficiary = false;
                }

                if (form.beneficiary.status === "Yes") {
                    errors.beneficiary = {};

                    if (!form.beneficiary.firstName) {
                        errors.beneficiary.firstName = true;
                    }

                    if (!form.beneficiary.lastName) {
                        errors.beneficiary.lastName = true;
                    }

                    if (!form.beneficiary.type) {
                        errors.beneficiary.type = true;
                    }

                    if (!form.beneficiary.relationship) {
                        errors.beneficiary.relationship = true;
                    }

                    if (!form.beneficiary.age || isNaN(form.beneficiary.age)) {
                        errors.beneficiary.age = true;
                    }
                }
            }

            setError(errors);

            if (
                errors.beneficiary === true ||
                errors.beneficiary.firstName ||
                errors.beneficiary.lastName ||
                errors.beneficiary.type ||
                errors.beneficiary.relationship ||
                errors.beneficiary.age
            ) {
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 5) {
            if (form.retireAge === null) {
                errors.retireAge = true;
            }

            if (form.retireAge?.status) {
                if (form.retireAge.status === "Yes, this is correct") {
                    errors.retireAge = false;
                }

                if (form.retireAge.status === "No, change") {
                    errors.retireAge = {};

                    if (!form.retireAge.age || isNaN(form.retireAge.age)) {
                        errors.retireAge.age = true;
                    }
                }
            }

            setError(errors);

            if (errors.retireAge === true || errors.retireAge.age) {
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 7) {
            let isError = false;
            errors.goals = [];

            form.goals.forEach((item, index) => {
                if (
                    item.goal === "" ||
                    item.time === "" ||
                    isNaN(item.time) ||
                    item.amount === "" ||
                    isNaN(item.amount)
                ) {
                    errors.goals[index] = true;
                    isError = true;
                }
            });

            if (isError) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 8) {
            if (form.monthlySpendings === "" || isNaN(form.monthlySpendings)) {
                errors.monthlySpendings = true;
            }

            if (form.yearlySpendings === "" || isNaN(form.yearlySpendings)) {
                errors.yearlySpendings = true;
            }

            if (errors.monthlySpendings || errors.yearlySpendings) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 9) {
            if (form.socialSecurity === null) {
                errors.socialSecurity = true;
            }

            if (errors.socialSecurity) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        if (page === 11) {
            if (form.otherAssets === null) {
                errors.otherAssets = true;
            }

            if (
                form.otherAssets?.status === "Yes" &&
                !form.otherAssets.personalProperty &&
                !form.otherAssets.business &&
                !form.otherAssets.realEstate &&
                !form.otherAssets.crypto
            ) {
                errors.otherAssets = {};
                errors.otherAssets.personalProperty = true;
                errors.otherAssets.business = true;
                errors.otherAssets.realEstate = true;
                errors.otherAssets.crypto = true;
            }

            if (errors.otherAssets) {
                setError(errors);
                setErrorMessage(true);
                return false;
            }
        }

        return true;
    };

    const goBack = () => {
        if (progressBreak) {
            setActivePage(14);
            setProgressBreak(false);
        } else {
            setActivePage(activePage - 1);
        }
    };

    const goForward = () => {
        if (validatePage(activePage)) {
            if (activePage === totalPages) {
                setFinalBreak(true);
                return;
            }

            if (activePage === 14 && !progressBreak) {
                setProgressBreak(true);
            } else {
                setProgressBreak(false);
                setActivePage(activePage + 1);

                if (feelingBreak !== null) {
                    setFeelingBreak(null);
                }
            }
        }
    };

    useEffect(() => {
        if (activePage === 18) {
            const concernsTable = [
                {
                    title: "Money",
                    items: [
                        {
                            name: "Running out of money",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Suffering investment losses",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Spending too much",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                    ],
                },
                {
                    title: "Health",
                    items: [
                        {
                            name: "Cost of health care or long-term care",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Current or future health issues",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: `${form.firstName} dying early`,
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: `${form.planningFor?.partnerFirstName} dying early`,
                            you: false,
                            partner: false,
                            degree: null,
                            optional: true,
                        },
                        {
                            name: "Living too long",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                    ],
                },
                {
                    title: "Taxes",
                    items: [
                        {
                            name: "Tax ramifications of savings",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Taking required minimum distributions",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Estate & inheritance taxes",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                        {
                            name: "Family needs financial help",
                            you: false,
                            partner: false,
                            degree: null,
                        },
                    ],
                },
            ];

            setForm({
                ...form,
                concerns: concernsTable,
            });
        }
    }, [activePage]);

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (finalBreak) {
            setTimeout(() => {
                setEndScreen(true);
            }, 3000);
        }
    }, [finalBreak]);

    return (
        <div className="w-full min-h-[100vh] pb-[220px] lg:pb-0 relative">
            <div
                className={`fixed z-[3] top-[20px] left-[0] right-[0] py-[10px] px-[20px] text-[#fff] text-[16px] leading-[24px] mx-auto w-max border-[1px] bg-[#dc3545] border-l-[8px] border-l-[#bd1120] rounded-[3px] transition duration-500 opacity-[0] ${
                    errorMessage && "opacity-[1]"
                }`}
            >
                Please fill in all the fields
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-end relative z-[2]">
                <div className="w-full lg:w-[84%] py-[12px] px-[24px] lg:py-[40px] lg:px-[60px] font-Lato">
                    <div className="relative">
                        <div className="w-full lg:w-[57%]">
                            <div className="flex items-center gap-x-[8px] mb-[29px] lg:mb-[40px]">
                                <Image
                                    className="w-[20px] lg:w-[32px]"
                                    src="/assets/images/onboarding-wizard/arrow-left.svg"
                                    alt="Left"
                                />
                                <div className="text-[#000714] text-[18px] lg:text-[36px] leading-[22px] lg:leading-[40px] font-bold">
                                    Complete your profile
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-between py-[22px] lg:py-[12px] pl-[20px] lg:pl-[32px] pr-[12px] bg-[#DDE3F0] rounded-[400px] mb-[24px] lg:mb-[32px]">
                                <div className="w-[75%] h-[12px] bg-[#fff] rounded-[40px] relative">
                                    <div
                                        style={{
                                            background:
                                                "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
                                            width: `${
                                                finalBreak
                                                    ? 100
                                                    : Math.floor(
                                                          ((activePage - 1) /
                                                              totalPages) *
                                                              100
                                                      )
                                            }%`,
                                        }}
                                        className="absolute top-0 left-0 w-full h-full rounded-[40px] transition-width duration-500"
                                    />
                                </div>
                                <div
                                    className={`bg-[#fff] rounded-[40px] py-[5px] lg:py-[10px] px-[10px] lg:px-[15px] text-[16px] lg:text-[23px] leading-[24px] lg:leading-[28px] font-bold transition duration-500 ${
                                        finalBreak && "scale-110"
                                    }`}
                                >
                                    {finalBreak
                                        ? 100
                                        : Math.floor(
                                              ((activePage - 1) / totalPages) *
                                                  100
                                          )}
                                    %
                                </div>
                            </div>

                            {!feelingBreak && !progressBreak && !finalBreak && (
                                <div className="flex flex-col lg:flex-row gap-y-[12px] gap-x-[12px] mb-[24px] lg:mb-[32px]">
                                    <div className="flex items-end justify-center w-max h-max min-w-[56px] py-[4px] text-[#A2ACBE] text-[12px] leading-[20px] font-bold bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                        <span className="text-[#434A59] text-[16px] leading-[24px]">
                                            {activePage < 10
                                                ? `0${activePage}`
                                                : activePage}
                                        </span>
                                        /{totalPages}
                                    </div>

                                    <div className="flex flex-col gap-y-[8px]">
                                        <div className="text-[#000714] text-[20px] lg:text-[23px] leading-[24px] lg:leading-[28px] font-bold">
                                            {(activePage === 1 ||
                                                activePage === 2) &&
                                                "Tell us about yourself"}

                                            {activePage === 3 &&
                                                "Who are we planning for"}

                                            {activePage === 4 &&
                                                "Do you want to include children, grandchildren or anyone as a beneficiary?"}

                                            {activePage === 5 &&
                                                "At what age do you want to retire?"}

                                            {activePage === 6 &&
                                                "How are you feeling about the planning process so far?"}

                                            {activePage === 7 && "Create goals"}

                                            {activePage === 8 &&
                                                "Set annual expenses in retirement"}

                                            {activePage === 9 &&
                                                "Do you expect to collect social security?"}

                                            {activePage === 10 &&
                                                "Which accounts do you currently have?"}

                                            {activePage === 11 &&
                                                "Any other assets we should know about?"}

                                            {activePage === 12 &&
                                                "Insurance Inventory"}

                                            {activePage === 13 &&
                                                "Complex Benefits"}

                                            {activePage === 14 && "Liabilities"}

                                            {activePage === 15 &&
                                                "Preferred method of communication"}

                                            {activePage === 16 &&
                                                "Preferred way to upload documents"}

                                            {activePage === 17 && (
                                                <>
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]">
                                                        Bonus:
                                                    </span>{" "}
                                                    Set Retirement Expectations
                                                </>
                                            )}

                                            {activePage === 18 && (
                                                <>
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]">
                                                        Bonus:
                                                    </span>{" "}
                                                    Identify Concerns
                                                </>
                                            )}
                                        </div>

                                        <div className="text-[#434A59] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                            {activePage === 11 &&
                                                "Do you have personal property, business or real estate?"}

                                            {activePage === 12 &&
                                                "Do you have any insurance policies?"}

                                            {activePage === 17 &&
                                                "Help us understand your Retirement Expectations. Click all that apply."}

                                            {activePage === 18 &&
                                                "When you think about retirement, what worries or concerns you? Click the icon under your name for each concern that is relevant to you."}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activePage === 1 && (
                                <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px]">
                                    <div className="flex flex-col gap-y-[16px] lg:flex-row lg:justify-between">
                                        <label
                                            className="w-full lg:w-[48%]"
                                            htmlFor="firstName"
                                        >
                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                First name
                                            </div>
                                            <input
                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                    error?.firstName &&
                                                    "border-[#F11940] hover:border-[#F11940]"
                                                }`}
                                                onFocus={() => {
                                                    setError({
                                                        ...error,
                                                        firstName: false,
                                                    });
                                                }}
                                                placeholder="Enter your first name"
                                                value={form.firstName}
                                                id="firstName"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        firstName:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                        <label
                                            className="w-full lg:w-[48%]"
                                            htmlFor="lastName"
                                        >
                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                Last name
                                            </div>
                                            <input
                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                    error?.lastName &&
                                                    "border-[#F11940] hover:border-[#F11940]"
                                                }`}
                                                onFocus={() => {
                                                    setError({
                                                        ...error,
                                                        lastName: false,
                                                    });
                                                }}
                                                placeholder="Enter your last name"
                                                value={form.lastName}
                                                id="lastName"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        lastName:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                            Gender
                                        </div>
                                        <div className="flex justify-between">
                                            {radios.gender.map(
                                                (item, index) => (
                                                    <div
                                                        key={`gender_${index}`}
                                                        style={{
                                                            background: item.bg,
                                                            backgroundColor:
                                                                "#fff",
                                                        }}
                                                        className={`w-[32%] py-[20px] lg:py-[17px] pl-[45px] pr-[18px] lg:px-[50px] rounded-[12px] cursor-pointer border-[1px] text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] transition duration-300 ${
                                                            error.gender ===
                                                            true
                                                                ? "border-[#F11940] hover:border-[#F11940]"
                                                                : form.gender ===
                                                                  item.value
                                                                ? "border-[#3F68E4] hover:border-[#3F68E4]"
                                                                : "border-[transparent]"
                                                        }`}
                                                        onClick={() => {
                                                            setError({
                                                                ...error,
                                                                gender: false,
                                                            });
                                                            setForm({
                                                                ...form,
                                                                gender: item.value,
                                                            });
                                                        }}
                                                    >
                                                        {item.value}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="birthDate">
                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                Date of birth
                                            </div>
                                            <InputMask
                                                mask="99/99/9999"
                                                maskChar=""
                                                value={form.birthDate}
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        birthDate:
                                                            e.target.value,
                                                    });
                                                }}
                                                onFocus={() => {
                                                    setError({
                                                        ...error,
                                                        birthDate: false,
                                                    });
                                                }}
                                            >
                                                {(inputProps) => (
                                                    <input
                                                        {...inputProps}
                                                        style={{
                                                            background:
                                                                "url(/assets/images/onboarding-wizard/calendar.svg) #fff no-repeat 96% 17px/24px",
                                                        }}
                                                        className={`w-full border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                            error?.birthDate &&
                                                            "border-[#F11940] hover:border-[#F11940]"
                                                        }`}
                                                        placeholder="DD / MM / YYYY"
                                                        id="birthDate"
                                                    />
                                                )}
                                            </InputMask>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {activePage === 2 && (
                                <div className="flex flex-col gap-y-[24px]">
                                    <div className="flex flex-col gap-y-[8px] lg:gap-y-[16px] lg:flex-row lg:flex-wrap lg:justify-between">
                                        <div className="w-full text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] lg:mb-[-10px]">
                                            Employment status
                                        </div>
                                        {radios.employmentStatus.map(
                                            (item, index) => (
                                                <div
                                                    key={`employment_status_${index}`}
                                                    className={`w-full lg:w-[48%] flex items-center py-[12px] lg:py-[16px] pl-[12px] lg:pl-[20px] pr-[48px] lg:pr-[60px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                        error?.employmentStatus ===
                                                            true &&
                                                        "border-[#F11940] hover:border-[#F11940]"
                                                    }`}
                                                    onClick={() => {
                                                        setError({
                                                            ...error,
                                                            employmentStatus:
                                                                false,
                                                        });
                                                        setForm({
                                                            ...form,
                                                            employmentStatus:
                                                                item,
                                                        });
                                                    }}
                                                >
                                                    <span className="text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                        {item}
                                                    </span>
                                                    <div className="absolute top-0 bottom-0 my-auto right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                        <div
                                                            style={{
                                                                background:
                                                                    "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                            }}
                                                            className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                                form.employmentStatus ===
                                                                    item &&
                                                                "opacity-[1]"
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-y-[16px] lg:flex-row lg:justify-between">
                                        <label
                                            className="w-full lg:w-[48%]"
                                            htmlFor="employmentIncome"
                                        >
                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                Employment income
                                            </div>
                                            <div className="w-full relative">
                                                <input
                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                        error?.employmentIncome &&
                                                        "border-[#F11940] hover:border-[#F11940]"
                                                    }`}
                                                    onFocus={() => {
                                                        setError({
                                                            ...error,
                                                            employmentIncome:
                                                                false,
                                                        });
                                                    }}
                                                    placeholder="Type here"
                                                    value={
                                                        form.employmentIncome
                                                    }
                                                    id="employmentIncome"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            employmentIncome:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                                <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                    $
                                                </div>
                                            </div>
                                        </label>
                                        <label
                                            className="w-full lg:w-[48%]"
                                            htmlFor="otherIncome"
                                        >
                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                Other income
                                            </div>
                                            <div className="w-full relative">
                                                <input
                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                        error?.otherIncome &&
                                                        "border-[#F11940] hover:border-[#F11940]"
                                                    }`}
                                                    onFocus={() => {
                                                        setError({
                                                            ...error,
                                                            otherIncome: false,
                                                        });
                                                    }}
                                                    placeholder="Type here"
                                                    value={form.otherIncome}
                                                    id="otherIncome"
                                                    onChange={(e) => {
                                                        setForm({
                                                            ...form,
                                                            otherIncome:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                                <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                    $
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {activePage === 3 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    {radios.planningFor.map((item, index) => (
                                        <div
                                            key={`planning_for_${index}`}
                                            className={`w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                error?.planningFor === true &&
                                                "border-[#F11940] hover:border-[#F11940]"
                                            }`}
                                            onClick={() => {
                                                setError({
                                                    ...error,
                                                    planningFor: false,
                                                });

                                                if (
                                                    form.planningFor?.type ===
                                                    item
                                                )
                                                    return;

                                                setForm({
                                                    ...form,
                                                    planningFor: { type: item },
                                                });
                                            }}
                                        >
                                            <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                {item}
                                            </div>
                                            <div className="absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                    }}
                                                    className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                        form.planningFor
                                                            ?.type === item &&
                                                        "opacity-[1]"
                                                    }`}
                                                />
                                            </div>
                                            {item === "Me and my partner" &&
                                                form.planningFor?.type ===
                                                    "Me and my partner" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px] border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                        <div className="flex flex-col gap-y-[16px] lg:flex-row lg:justify-between">
                                                            <label
                                                                className="w-full lg:w-[48%]"
                                                                htmlFor="partnerFirstName"
                                                            >
                                                                <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                    First name
                                                                </div>
                                                                <input
                                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                        error
                                                                            ?.planningFor
                                                                            ?.partnerFirstName &&
                                                                        "border-[#F11940] hover:border-[#F11940]"
                                                                    }`}
                                                                    onFocus={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                planningFor:
                                                                                    {
                                                                                        ...error.planningFor,
                                                                                        partnerFirstName:
                                                                                            false,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                    placeholder="Enter your first name"
                                                                    value={
                                                                        form
                                                                            .planningFor
                                                                            .partnerFirstName ??
                                                                        ""
                                                                    }
                                                                    id="partnerFirstName"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                planningFor:
                                                                                    {
                                                                                        ...form.planningFor,
                                                                                        partnerFirstName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                            </label>
                                                            <label
                                                                className="w-full lg:w-[48%]"
                                                                htmlFor="partnerLastName"
                                                            >
                                                                <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                    Last name
                                                                </div>
                                                                <input
                                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                        error
                                                                            ?.planningFor
                                                                            ?.partnerLastName &&
                                                                        "border-[#F11940] hover:border-[#F11940]"
                                                                    }`}
                                                                    onFocus={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                planningFor:
                                                                                    {
                                                                                        ...error.planningFor,
                                                                                        partnerLastName:
                                                                                            false,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                    placeholder="Enter your last name"
                                                                    value={
                                                                        form
                                                                            .planningFor
                                                                            .partnerLastName ??
                                                                        ""
                                                                    }
                                                                    id="partnerLastName"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                planningFor:
                                                                                    {
                                                                                        ...form.planningFor,
                                                                                        partnerLastName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Gender
                                                            </div>
                                                            <div className="flex justify-between">
                                                                {radios.gender.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            key={`partner_gender_${index}`}
                                                                            style={{
                                                                                background:
                                                                                    item.bg,
                                                                                backgroundColor:
                                                                                    "#F7F9FC",
                                                                            }}
                                                                            className={`w-[32%] py-[20px] lg:py-[17px] pl-[45px] pr-[18px] lg:px-[50px] rounded-[12px] cursor-pointer border-[1px] text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] transition duration-300 ${
                                                                                error
                                                                                    .planningFor
                                                                                    .partnerGender ===
                                                                                true
                                                                                    ? "border-[#F11940] hover:border-[#F11940]"
                                                                                    : form
                                                                                          .planningFor
                                                                                          .partnerGender ===
                                                                                      item.value
                                                                                    ? "border-[#3F68E4] hover:border-[#3F68E4]"
                                                                                    : "border-[transparent]"
                                                                            }`}
                                                                            onClick={() => {
                                                                                setError(
                                                                                    {
                                                                                        ...error,
                                                                                        planningFor:
                                                                                            {
                                                                                                ...error.planningFor,
                                                                                                partnerGender:
                                                                                                    false,
                                                                                            },
                                                                                    }
                                                                                );
                                                                                setForm(
                                                                                    {
                                                                                        ...form,
                                                                                        planningFor:
                                                                                            {
                                                                                                ...form.planningFor,
                                                                                                partnerGender:
                                                                                                    item.value,
                                                                                            },
                                                                                    }
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                item.value
                                                                            }
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="partnerBirthDate">
                                                                <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                    Date of
                                                                    birth
                                                                </div>
                                                                <InputMask
                                                                    mask="99/99/9999"
                                                                    maskChar=""
                                                                    value={
                                                                        form
                                                                            .planningFor
                                                                            .partnerBirthDate ??
                                                                        ""
                                                                    }
                                                                    onFocus={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                planningFor:
                                                                                    {
                                                                                        ...error.planningFor,
                                                                                        partnerBirthDate:
                                                                                            false,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                planningFor:
                                                                                    {
                                                                                        ...form.planningFor,
                                                                                        partnerBirthDate:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    {(
                                                                        inputProps
                                                                    ) => (
                                                                        <input
                                                                            {...inputProps}
                                                                            style={{
                                                                                background:
                                                                                    "url(/assets/images/onboarding-wizard/calendar.svg) #fff no-repeat 96% 17px/24px",
                                                                            }}
                                                                            className={`w-full border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                                error
                                                                                    ?.planningFor
                                                                                    ?.partnerBirthDate &&
                                                                                "border-[#F11940] hover:border-[#F11940]"
                                                                            }`}
                                                                            placeholder="DD / MM / YYYY"
                                                                            id="partnerBirthDate"
                                                                        />
                                                                    )}
                                                                </InputMask>
                                                            </label>
                                                        </div>
                                                    </div>
                                                )}
                                            {item === "Other" &&
                                                form.planningFor?.type ===
                                                    "Other" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px] border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                        <label
                                                            className="w-full"
                                                            htmlFor="yourChoice"
                                                        >
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Describe your
                                                                choice
                                                            </div>
                                                            <input
                                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                    error
                                                                        ?.planningFor
                                                                        ?.yourChoice &&
                                                                    "border-[#F11940] hover:border-[#F11940]"
                                                                }`}
                                                                onFocus={() => {
                                                                    setError({
                                                                        ...error,
                                                                        planningFor:
                                                                            {
                                                                                ...error.planningFor,
                                                                                yourChoice:
                                                                                    false,
                                                                            },
                                                                    });
                                                                }}
                                                                placeholder="Type here"
                                                                value={
                                                                    form
                                                                        .planningFor
                                                                        .yourChoice ??
                                                                    ""
                                                                }
                                                                id="yourChoice"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setForm({
                                                                        ...form,
                                                                        planningFor:
                                                                            {
                                                                                ...form.planningFor,
                                                                                yourChoice:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            },
                                                                    });
                                                                }}
                                                            />
                                                        </label>
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePage === 4 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    {radios.beneficiary.map((item, index) => (
                                        <div
                                            key={`beneficiary_${index}`}
                                            className={`w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                error?.beneficiary === true &&
                                                "border-[#F11940] hover:border-[#F11940]"
                                            }`}
                                            onClick={() => {
                                                setError({
                                                    ...error,
                                                    beneficiary: false,
                                                });

                                                if (
                                                    form.beneficiary?.status ===
                                                    item
                                                )
                                                    return;

                                                setForm({
                                                    ...form,
                                                    beneficiary: {
                                                        status: item,
                                                    },
                                                });
                                            }}
                                        >
                                            <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                {item}
                                            </div>
                                            <div className="absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                    }}
                                                    className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                        form.beneficiary
                                                            ?.status === item &&
                                                        "opacity-[1]"
                                                    }`}
                                                />
                                            </div>
                                            {item === "Yes" &&
                                                form.beneficiary?.status ===
                                                    "Yes" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px] border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                        <div className="flex flex-col gap-y-[16px] lg:flex-row lg:justify-between">
                                                            <label
                                                                className="w-full lg:w-[48%]"
                                                                htmlFor="beneficiaryFirstName"
                                                            >
                                                                <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                    First name
                                                                </div>
                                                                <input
                                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                        error
                                                                            ?.beneficiary
                                                                            ?.firstName &&
                                                                        "border-[#F11940] hover:border-[#F11940]"
                                                                    }`}
                                                                    onFocus={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                beneficiary:
                                                                                    {
                                                                                        ...error.beneficiary,
                                                                                        firstName:
                                                                                            false,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                    placeholder="Enter your first name"
                                                                    value={
                                                                        form
                                                                            .beneficiary
                                                                            .firstName ??
                                                                        ""
                                                                    }
                                                                    id="beneficiaryFirstName"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                beneficiary:
                                                                                    {
                                                                                        ...form.beneficiary,
                                                                                        firstName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                            </label>
                                                            <label
                                                                className="w-full lg:w-[48%]"
                                                                htmlFor="beneficiaryLastName"
                                                            >
                                                                <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                    Last name
                                                                </div>
                                                                <input
                                                                    className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                        error
                                                                            ?.beneficiary
                                                                            ?.lastName &&
                                                                        "border-[#F11940] hover:border-[#F11940]"
                                                                    }`}
                                                                    onFocus={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                beneficiary:
                                                                                    {
                                                                                        ...error.beneficiary,
                                                                                        lastName:
                                                                                            false,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                    placeholder="Enter your last name"
                                                                    value={
                                                                        form
                                                                            .beneficiary
                                                                            .lastName ??
                                                                        ""
                                                                    }
                                                                    id="beneficiaryLastName"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                beneficiary:
                                                                                    {
                                                                                        ...form.beneficiary,
                                                                                        lastName:
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                            </label>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Type
                                                            </div>
                                                            <Select
                                                                placeholder="Make your choice"
                                                                styles={
                                                                    beneficiaryTypeSelectStyles
                                                                }
                                                                options={
                                                                    selects
                                                                        .beneficiary
                                                                        .type
                                                                }
                                                                components={{
                                                                    IndicatorSeparator:
                                                                        () =>
                                                                            null,
                                                                }}
                                                                isSearchable={
                                                                    false
                                                                }
                                                                onChange={(
                                                                    e: any
                                                                ) => {
                                                                    setError({
                                                                        ...error,
                                                                        beneficiary:
                                                                            {
                                                                                ...error.beneficiary,
                                                                                type: false,
                                                                            },
                                                                    });
                                                                    setForm({
                                                                        ...form,
                                                                        beneficiary:
                                                                            {
                                                                                ...form.beneficiary,
                                                                                type: e.value,
                                                                            },
                                                                    });
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Relationship
                                                            </div>
                                                            <Select
                                                                placeholder="Make your choice"
                                                                styles={
                                                                    beneficiaryRelationshipSelectStyles
                                                                }
                                                                options={
                                                                    selects
                                                                        .beneficiary
                                                                        .relationship
                                                                }
                                                                components={{
                                                                    IndicatorSeparator:
                                                                        () =>
                                                                            null,
                                                                }}
                                                                isSearchable={
                                                                    false
                                                                }
                                                                onChange={(
                                                                    e: any
                                                                ) => {
                                                                    setError({
                                                                        ...error,
                                                                        beneficiary:
                                                                            {
                                                                                ...error.beneficiary,
                                                                                relationship:
                                                                                    false,
                                                                            },
                                                                    });
                                                                    setForm({
                                                                        ...form,
                                                                        beneficiary:
                                                                            {
                                                                                ...form.beneficiary,
                                                                                relationship:
                                                                                    e.value,
                                                                            },
                                                                    });
                                                                }}
                                                            />
                                                        </div>
                                                        <label
                                                            className="w-full"
                                                            htmlFor="beneficiaryAge"
                                                        >
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Age
                                                            </div>
                                                            <input
                                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                    error
                                                                        ?.beneficiary
                                                                        ?.age &&
                                                                    "border-[#F11940] hover:border-[#F11940]"
                                                                }`}
                                                                onFocus={() => {
                                                                    setError({
                                                                        ...error,
                                                                        beneficiary:
                                                                            {
                                                                                ...error.beneficiary,
                                                                                age: false,
                                                                            },
                                                                    });
                                                                }}
                                                                placeholder="Enter your age"
                                                                value={
                                                                    form
                                                                        .beneficiary
                                                                        .age ??
                                                                    ""
                                                                }
                                                                id="beneficiaryAge"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setForm({
                                                                        ...form,
                                                                        beneficiary:
                                                                            {
                                                                                ...form.beneficiary,
                                                                                age: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                    });
                                                                }}
                                                            />
                                                        </label>
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePage === 5 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    <div
                                        className="w-full h-[68px] lg:h-[132px] flex items-center justify-center text-[#fff] text-[32px] lg:text-[56px] leading-[36px] lg:leading-[60px] font-bold mb-[4px] lg:mb-[12px] rounded-[20px]"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
                                        }}
                                    >
                                        50 years old
                                    </div>

                                    {radios.retireAge.map((item, index) => (
                                        <div
                                            key={`retire_age_${index}`}
                                            className={`w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                error?.retireAge === true &&
                                                "border-[#F11940] hover:border-[#F11940]"
                                            }`}
                                            onClick={() => {
                                                setError({
                                                    ...error,
                                                    retireAge: false,
                                                });

                                                if (
                                                    form.retireAge?.status ===
                                                    item
                                                )
                                                    return;

                                                setForm({
                                                    ...form,
                                                    retireAge: { status: item },
                                                });
                                            }}
                                        >
                                            <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                {item}
                                            </div>
                                            <div className="absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                    }}
                                                    className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                        form.retireAge
                                                            ?.status === item &&
                                                        "opacity-[1]"
                                                    }`}
                                                />
                                            </div>
                                            {item === "No, change" &&
                                                form.retireAge?.status ===
                                                    "No, change" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px] border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                        <label
                                                            className="w-full"
                                                            htmlFor="retireAge"
                                                        >
                                                            <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                                                Age
                                                            </div>
                                                            <input
                                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                                    error
                                                                        ?.retireAge
                                                                        ?.age &&
                                                                    "border-[#F11940] hover:border-[#F11940]"
                                                                }`}
                                                                onFocus={() => {
                                                                    setError({
                                                                        ...error,
                                                                        retireAge:
                                                                            {
                                                                                ...error.retireAge,
                                                                                age: false,
                                                                            },
                                                                    });
                                                                }}
                                                                placeholder="Age"
                                                                value={
                                                                    form
                                                                        .retireAge
                                                                        .age ??
                                                                    ""
                                                                }
                                                                id="retireAge"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setForm({
                                                                        ...form,
                                                                        retireAge:
                                                                            {
                                                                                ...form.retireAge,
                                                                                age: e
                                                                                    .target
                                                                                    .value,
                                                                            },
                                                                    });
                                                                }}
                                                            />
                                                        </label>
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePage === 6 && (
                                <>
                                    {feelingBreak === null ? (
                                        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-[12px]">
                                            {radios.feelingSoFar.map(
                                                (item, index) => (
                                                    <div
                                                        key={`feeling_so_far_${index}`}
                                                        className="flex flex-row lg:flex-col items-center lg:justify-center w-full lg:w-[32%] py-[25px] lg:py-[32px] px-[25px] gap-x-[12px] gap-y-[12px] rounded-[20px] cursor-pointer bg-[#fff] text-[#000714] text-[18px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-[1px] border-[transparent] hover:border-[#A2ACBE] transition duration-300"
                                                        onClick={() => {
                                                            setForm({
                                                                ...form,
                                                                feelingSoFar:
                                                                    item,
                                                            });
                                                            setFeelingBreak(
                                                                item
                                                            );
                                                        }}
                                                    >
                                                        <Image
                                                            className="w-[48px] lg:w-[60px]"
                                                            src={`/assets/images/onboarding-wizard/${item.toLowerCase()}.svg`}
                                                            alt={item}
                                                        />
                                                        <span>{item}</span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col">
                                            <div
                                                className="w-full h-[200px] lg:h-[314px] px-[30px] lg:px-[60px] flex items-center"
                                                style={{
                                                    background:
                                                        "url(/assets/images/onboarding-wizard/bubble-big.svg) no-repeat center center/110%",
                                                }}
                                            >
                                                {feelingBreak === "Excited" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[20px]">
                                                        <div className="text-[#000714] text-[23px] leading-[28px] font-bold">
                                                            We’re excited too!
                                                        </div>
                                                        <div className="text-[#434A59] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                            Let’s continue to
                                                            set your goals
                                                            together.
                                                        </div>
                                                    </div>
                                                )}
                                                {feelingBreak ===
                                                    "Overwhelmed" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[20px]">
                                                        <div className="text-[#000714] text-[23px] leading-[28px] font-bold">
                                                            Don’t worry. You got
                                                            this!
                                                        </div>
                                                        <div className="text-[#434A59] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                            Let’s set some goals
                                                            and we will help you
                                                            every step of the
                                                            way!
                                                        </div>
                                                    </div>
                                                )}
                                                {feelingBreak ===
                                                    "Relieved" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[20px]">
                                                        <div className="text-[#000714] text-[23px] leading-[28px] font-bold">
                                                            That's great!
                                                        </div>
                                                        <div className="text-[#434A59] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                            Creating a plan for
                                                            your money doesn’t
                                                            have to be hard!
                                                            Let’s continue to
                                                            set your goals
                                                            together.
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className="self-end w-[62px] lg:w-[77px] h-[50px] lg:h-[62px]"
                                                style={{
                                                    background:
                                                        "url(/assets/images/onboarding-wizard/bubble-medium.svg) no-repeat center center/cover",
                                                }}
                                            />
                                            <div
                                                className="self-end w-[28px] lg:w-[34px] h-[22px] lg:h-[27px]"
                                                style={{
                                                    background:
                                                        "url(/assets/images/onboarding-wizard/bubble-small.svg) no-repeat center center/cover",
                                                }}
                                            />
                                        </div>
                                    )}
                                </>
                            )}

                            {activePage === 7 && (
                                <div>
                                    <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] mb-[32px]">
                                        {suggestions.goals.map(
                                            (item, index) => (
                                                <button
                                                    key={`goal_button_${index}`}
                                                    className="py-[6px] px-[10px] border-[1px] border-[#173A78] rounded-[8px] text-[#173A78] text-[16px] leading-[24px]"
                                                    onClick={() => {
                                                        const newGoals = [
                                                            ...form.goals,
                                                        ];

                                                        if (
                                                            newGoals[
                                                                newGoals.length -
                                                                    1
                                                            ].goal === "" &&
                                                            newGoals[
                                                                newGoals.length -
                                                                    1
                                                            ].time === "" &&
                                                            newGoals[
                                                                newGoals.length -
                                                                    1
                                                            ].amount === ""
                                                        ) {
                                                            newGoals[
                                                                newGoals.length -
                                                                    1
                                                            ].goal = item;
                                                        } else {
                                                            newGoals.push({
                                                                goal: item,
                                                                time: "",
                                                                amount: "",
                                                            });
                                                        }

                                                        setForm({
                                                            ...form,
                                                            goals: newGoals,
                                                        });
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
                                        {form.goals.map((item, index) => (
                                            <div
                                                className="w-[620px] lg:w-full"
                                                key={`goal_${index}`}
                                            >
                                                {index === 0 && (
                                                    <div className="flex mb-[5px]">
                                                        <label
                                                            className="w-[40%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
                                                            htmlFor={`goal_input_${index}`}
                                                        >
                                                            Goal name
                                                        </label>
                                                        <label
                                                            className="w-[24%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]"
                                                            htmlFor={`when_input_${index}`}
                                                        >
                                                            When
                                                        </label>
                                                        <label
                                                            className="w-[36%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]"
                                                            htmlFor={`amount_input_${index}`}
                                                        >
                                                            How much
                                                        </label>
                                                    </div>
                                                )}
                                                <div
                                                    className={`flex border-[1px] border-[#DDE3F0] rounded-[12px] overflow-hidden transition duration-300 ${
                                                        error?.goals?.[index] &&
                                                        "border-[#F11940] hover:border-[#F11940]"
                                                    }`}
                                                >
                                                    <input
                                                        className="w-[40%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                        placeholder="Goal"
                                                        value={item.goal}
                                                        id={`goal_input_${index}`}
                                                        onChange={(e) => {
                                                            const newGoals = [
                                                                ...form.goals,
                                                            ];
                                                            newGoals[
                                                                index
                                                            ].goal =
                                                                e.target.value;

                                                            setForm({
                                                                ...form,
                                                                goals: newGoals,
                                                            });
                                                        }}
                                                        onFocus={() => {
                                                            const newErrors = [
                                                                ...error.goals,
                                                            ];

                                                            newErrors[index] =
                                                                false;

                                                            setError({
                                                                ...error,
                                                                goals: newErrors,
                                                            });
                                                        }}
                                                    />
                                                    <input
                                                        className="w-[24%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                        placeholder="Time"
                                                        value={item.time}
                                                        id={`when_input_${index}`}
                                                        onChange={(e) => {
                                                            const newGoals = [
                                                                ...form.goals,
                                                            ];
                                                            newGoals[
                                                                index
                                                            ].time =
                                                                e.target.value;

                                                            setForm({
                                                                ...form,
                                                                goals: newGoals,
                                                            });
                                                        }}
                                                        onFocus={() => {
                                                            const newErrors = [
                                                                ...error.goals,
                                                            ];

                                                            newErrors[index] =
                                                                false;

                                                            setError({
                                                                ...error,
                                                                goals: newErrors,
                                                            });
                                                        }}
                                                    />
                                                    <div className="w-[29%] relative">
                                                        <input
                                                            className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                            placeholder="Amount"
                                                            value={item.amount}
                                                            id={`amount_input_${index}`}
                                                            onChange={(e) => {
                                                                const newGoals =
                                                                    [
                                                                        ...form.goals,
                                                                    ];
                                                                newGoals[
                                                                    index
                                                                ].amount =
                                                                    e.target.value;

                                                                setForm({
                                                                    ...form,
                                                                    goals: newGoals,
                                                                });
                                                            }}
                                                            onFocus={() => {
                                                                const newErrors =
                                                                    [
                                                                        ...error.goals,
                                                                    ];

                                                                newErrors[
                                                                    index
                                                                ] = false;

                                                                setError({
                                                                    ...error,
                                                                    goals: newErrors,
                                                                });
                                                            }}
                                                        />
                                                        <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                            $
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="w-[7%] flex items-center justify-center bg-[#fff]"
                                                        onClick={() => {
                                                            if (
                                                                form.goals
                                                                    .length > 1
                                                            ) {
                                                                const newGoals =
                                                                    [
                                                                        ...form.goals,
                                                                    ].filter(
                                                                        (
                                                                            item,
                                                                            filteredIndex
                                                                        ) => {
                                                                            if (
                                                                                index !==
                                                                                filteredIndex
                                                                            ) {
                                                                                return item;
                                                                            }
                                                                        }
                                                                    );

                                                                setForm({
                                                                    ...form,
                                                                    goals: newGoals,
                                                                });
                                                            } else {
                                                                setForm({
                                                                    ...form,
                                                                    goals: [
                                                                        {
                                                                            goal: "",
                                                                            time: "",
                                                                            amount: "",
                                                                        },
                                                                    ],
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        <Image
                                                            className="w-[15px]"
                                                            src={`/assets/images/onboarding-wizard/${
                                                                index === 0 &&
                                                                form.goals[
                                                                    index
                                                                ].goal === "" &&
                                                                form.goals[
                                                                    index
                                                                ].time === "" &&
                                                                form.goals[
                                                                    index
                                                                ].amount === ""
                                                                    ? "bucket"
                                                                    : "bucket-red"
                                                            }.svg`}
                                                            alt="Bucket"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="w-full bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[12px] text-[18px] leading-[30px] font-bold py-[6px] mt-[12px]"
                                        onClick={() => {
                                            if (
                                                form.goals[
                                                    form.goals.length - 1
                                                ].goal === "" &&
                                                form.goals[
                                                    form.goals.length - 1
                                                ].time === "" &&
                                                form.goals[
                                                    form.goals.length - 1
                                                ].amount === ""
                                            ) {
                                                return;
                                            }

                                            setForm({
                                                ...form,
                                                goals: [
                                                    ...form.goals,
                                                    {
                                                        goal: "",
                                                        time: "",
                                                        amount: "",
                                                    },
                                                ],
                                            });
                                        }}
                                    >
                                        Add new +
                                    </button>
                                </div>
                            )}

                            {activePage === 8 && (
                                <div className="flex flex-col gap-y-[24px]">
                                    <label
                                        className="w-full"
                                        htmlFor="monthlySpendings"
                                    >
                                        <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                            Monthly Spendings
                                        </div>
                                        <div className="w-full relative">
                                            <input
                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                    error.monthlySpendings &&
                                                    "border-[#F11940] hover:border-[#F11940]"
                                                }`}
                                                onFocus={() => {
                                                    setError({
                                                        ...error,
                                                        monthlySpendings: false,
                                                    });
                                                }}
                                                placeholder="Monthly Spendings"
                                                value={form.monthlySpendings}
                                                id="monthlySpendings"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        monthlySpendings:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                            <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                $
                                            </div>
                                        </div>
                                    </label>
                                    <label
                                        className="w-full"
                                        htmlFor="yearlySpendings"
                                    >
                                        <div className="text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] mb-[5px] pl-[10px]">
                                            Yearly Spendings
                                        </div>
                                        <div className="w-full relative">
                                            <input
                                                className={`w-full bg-[#fff] border-[1px] border-[#DDE3F0] rounded-[12px] py-[16px] lg:py-[12px] px-[20px] lg:px-[24px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none transition duration-300 ${
                                                    error.yearlySpendings &&
                                                    "border-[#F11940] hover:border-[#F11940]"
                                                }`}
                                                onFocus={() => {
                                                    setError({
                                                        ...error,
                                                        yearlySpendings: false,
                                                    });
                                                }}
                                                placeholder="Yearly Spendings"
                                                value={form.yearlySpendings}
                                                id="yearlySpendings"
                                                onChange={(e) => {
                                                    setForm({
                                                        ...form,
                                                        yearlySpendings:
                                                            e.target.value,
                                                    });
                                                }}
                                            />
                                            <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                $
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}

                            {activePage === 9 && (
                                <div className="flex flex-col gap-y-[36px]">
                                    <div className="flex flex-col lg:flex-row lg:justify-between gap-y-[8px] lg:gap-y-[16px]">
                                        {radios.socialSecurity.map(
                                            (item, index) => (
                                                <div
                                                    key={`social_security_${index}`}
                                                    className={`w-full lg:w-[48%] flex items-center py-[12px] lg:py-[16px] pl-[12px] lg:pl-[20px] pr-[48px] lg:pr-[60px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                        error?.socialSecurity ===
                                                            true &&
                                                        "border-[#F11940] hover:border-[#F11940]"
                                                    }`}
                                                    onClick={() => {
                                                        setError({
                                                            ...error,
                                                            socialSecurity:
                                                                false,
                                                        });
                                                        setForm({
                                                            ...form,
                                                            socialSecurity:
                                                                item,
                                                        });
                                                    }}
                                                >
                                                    <span className="text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                        {item}
                                                    </span>
                                                    <div className="absolute top-0 bottom-0 my-auto right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                        <div
                                                            style={{
                                                                background:
                                                                    "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                            }}
                                                            className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                                form.socialSecurity ===
                                                                    item &&
                                                                "opacity-[1]"
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <div className="text-[#000714] text-[23px] leading-[28px] font-bold">
                                            Do you anticipate any additional
                                            sources of retirement income?
                                        </div>
                                        <div className="w-full overflow-x-scroll lg:overflow-x-hidden mt-[24px]">
                                            {form.additionalSources.map(
                                                (item, index) => (
                                                    <div
                                                        className="w-[620px] lg:w-full"
                                                        key={`additional_source_${index}`}
                                                    >
                                                        {index === 0 && (
                                                            <div className="flex mb-[5px]">
                                                                <label
                                                                    className="w-[65%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
                                                                    htmlFor={`additional_source_input_${index}`}
                                                                >
                                                                    Source
                                                                </label>
                                                                <label
                                                                    className="w-[35%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]"
                                                                    htmlFor={`additional_amount_input_${index}`}
                                                                >
                                                                    How much
                                                                </label>
                                                            </div>
                                                        )}
                                                        <div className="flex border-[#DDE3F0] rounded-[12px] overflow-hidden">
                                                            <input
                                                                className="w-[65%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                                placeholder="Source"
                                                                value={
                                                                    item.source
                                                                }
                                                                id={`additional_source_input_${index}`}
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const newSources =
                                                                        [
                                                                            ...form.additionalSources,
                                                                        ];

                                                                    newSources[
                                                                        index
                                                                    ].source =
                                                                        e.target.value;

                                                                    setForm({
                                                                        ...form,
                                                                        additionalSources:
                                                                            newSources,
                                                                    });
                                                                }}
                                                            />
                                                            <div className="w-[28%] relative">
                                                                <input
                                                                    className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                                    placeholder="Amount"
                                                                    value={
                                                                        item.amount
                                                                    }
                                                                    id={`additional_amount_input_${index}`}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const newSources =
                                                                            [
                                                                                ...form.additionalSources,
                                                                            ];

                                                                        newSources[
                                                                            index
                                                                        ].amount =
                                                                            e.target.value;

                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                additionalSources:
                                                                                    newSources,
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                                    $
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="w-[7%] flex items-center justify-center bg-[#fff]"
                                                                onClick={() => {
                                                                    if (
                                                                        form
                                                                            .additionalSources
                                                                            .length >
                                                                        1
                                                                    ) {
                                                                        const newSources =
                                                                            [
                                                                                ...form.additionalSources,
                                                                            ].filter(
                                                                                (
                                                                                    item,
                                                                                    filteredIndex
                                                                                ) => {
                                                                                    if (
                                                                                        index !==
                                                                                        filteredIndex
                                                                                    ) {
                                                                                        return item;
                                                                                    }
                                                                                }
                                                                            );

                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                additionalSources:
                                                                                    newSources,
                                                                            }
                                                                        );
                                                                    } else {
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                additionalSources:
                                                                                    [
                                                                                        {
                                                                                            source: "",
                                                                                            amount: "",
                                                                                        },
                                                                                    ],
                                                                            }
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <Image
                                                                    className="w-[15px]"
                                                                    src={`/assets/images/onboarding-wizard/${
                                                                        index ===
                                                                            0 &&
                                                                        form
                                                                            .additionalSources[
                                                                            index
                                                                        ]
                                                                            .source ===
                                                                            "" &&
                                                                        form
                                                                            .additionalSources[
                                                                            index
                                                                        ]
                                                                            .amount ===
                                                                            ""
                                                                            ? "bucket"
                                                                            : "bucket-red"
                                                                    }.svg`}
                                                                    alt="Bucket"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <button
                                            className="w-full bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[12px] text-[18px] leading-[30px] font-bold py-[6px] mt-[12px]"
                                            onClick={() => {
                                                if (
                                                    form.additionalSources[
                                                        form.additionalSources
                                                            .length - 1
                                                    ].source === "" &&
                                                    form.additionalSources[
                                                        form.additionalSources
                                                            .length - 1
                                                    ].amount === ""
                                                ) {
                                                    return;
                                                }

                                                setForm({
                                                    ...form,
                                                    additionalSources: [
                                                        ...form.additionalSources,
                                                        {
                                                            source: "",
                                                            amount: "",
                                                        },
                                                    ],
                                                });
                                            }}
                                        >
                                            Add new +
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activePage === 10 && (
                                <div>
                                    <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] mb-[32px]">
                                        {suggestions.accounts.map(
                                            (item, index) => (
                                                <button
                                                    key={`account_button_${index}`}
                                                    className="py-[6px] px-[10px] border-[1px] border-[#173A78] rounded-[8px] text-[#173A78] text-[16px] leading-[24px]"
                                                    onClick={() => {
                                                        const newAccounts = [
                                                            ...form.currentAccounts,
                                                        ];

                                                        if (
                                                            newAccounts[
                                                                newAccounts.length -
                                                                    1
                                                            ].account === "" &&
                                                            newAccounts[
                                                                newAccounts.length -
                                                                    1
                                                            ].owner === "" &&
                                                            newAccounts[
                                                                newAccounts.length -
                                                                    1
                                                            ].amount === ""
                                                        ) {
                                                            newAccounts[
                                                                newAccounts.length -
                                                                    1
                                                            ].account = item;
                                                        } else {
                                                            newAccounts.push({
                                                                account: item,
                                                                time: "",
                                                                amount: "",
                                                            });
                                                        }

                                                        setForm({
                                                            ...form,
                                                            currentAccounts:
                                                                newAccounts,
                                                        });
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
                                        {form.currentAccounts.map(
                                            (item, index) => (
                                                <div
                                                    className="w-[620px] lg:w-full"
                                                    key={`account_${index}`}
                                                >
                                                    {index === 0 && (
                                                        <div className="flex mb-[5px]">
                                                            <label
                                                                className="w-[40%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]"
                                                                htmlFor={`account_input_${index}`}
                                                            >
                                                                Account
                                                            </label>
                                                            <label
                                                                className="w-[24%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]"
                                                                htmlFor={`account_owner_input_${index}`}
                                                            >
                                                                Owner
                                                            </label>
                                                            <label
                                                                className="w-[36%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]"
                                                                htmlFor={`account_amount_input_${index}`}
                                                            >
                                                                Amount
                                                            </label>
                                                        </div>
                                                    )}
                                                    <div className="flex border-[#DDE3F0] rounded-[12px] overflow-hidden">
                                                        <input
                                                            className="w-[40%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                            placeholder="Account"
                                                            value={item.account}
                                                            id={`account_input_${index}`}
                                                            onChange={(e) => {
                                                                const newAccounts =
                                                                    [
                                                                        ...form.currentAccounts,
                                                                    ];

                                                                newAccounts[
                                                                    index
                                                                ].account =
                                                                    e.target.value;

                                                                setForm({
                                                                    ...form,
                                                                    currentAccounts:
                                                                        newAccounts,
                                                                });
                                                            }}
                                                        />
                                                        <input
                                                            className="w-[24%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                            placeholder="Owner"
                                                            value={item.owner}
                                                            id={`account_owner_input_${index}`}
                                                            onChange={(e) => {
                                                                const newAccounts =
                                                                    [
                                                                        ...form.currentAccounts,
                                                                    ];

                                                                newAccounts[
                                                                    index
                                                                ].owner =
                                                                    e.target.value;

                                                                setForm({
                                                                    ...form,
                                                                    currentAccounts:
                                                                        newAccounts,
                                                                });
                                                            }}
                                                        />
                                                        <div className="w-[29%] relative">
                                                            <input
                                                                className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                                placeholder="Amount"
                                                                value={
                                                                    item.amount
                                                                }
                                                                id={`account_amount_input_${index}`}
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const newAccounts =
                                                                        [
                                                                            ...form.currentAccounts,
                                                                        ];

                                                                    newAccounts[
                                                                        index
                                                                    ].amount =
                                                                        e.target.value;

                                                                    setForm({
                                                                        ...form,
                                                                        currentAccounts:
                                                                            newAccounts,
                                                                    });
                                                                }}
                                                            />
                                                            <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                                $
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="w-[7%] flex items-center justify-center bg-[#fff]"
                                                            onClick={() => {
                                                                if (
                                                                    form
                                                                        .currentAccounts
                                                                        .length >
                                                                    1
                                                                ) {
                                                                    const newAccounts =
                                                                        [
                                                                            ...form.currentAccounts,
                                                                        ].filter(
                                                                            (
                                                                                item,
                                                                                filteredIndex
                                                                            ) => {
                                                                                if (
                                                                                    index !==
                                                                                    filteredIndex
                                                                                ) {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        );

                                                                    setForm({
                                                                        ...form,
                                                                        currentAccounts:
                                                                            newAccounts,
                                                                    });
                                                                } else {
                                                                    setForm({
                                                                        ...form,
                                                                        currentAccounts:
                                                                            [
                                                                                {
                                                                                    account:
                                                                                        "",
                                                                                    owner: "",
                                                                                    amount: "",
                                                                                },
                                                                            ],
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            <Image
                                                                className="w-[15px]"
                                                                src={`/assets/images/onboarding-wizard/${
                                                                    index ===
                                                                        0 &&
                                                                    form
                                                                        .currentAccounts[
                                                                        index
                                                                    ]
                                                                        .account ===
                                                                        "" &&
                                                                    form
                                                                        .currentAccounts[
                                                                        index
                                                                    ].owner ===
                                                                        "" &&
                                                                    form
                                                                        .currentAccounts[
                                                                        index
                                                                    ].amount ===
                                                                        ""
                                                                        ? "bucket"
                                                                        : "bucket-red"
                                                                }.svg`}
                                                                alt="Bucket"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <button
                                        className="w-full bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[12px] text-[18px] leading-[30px] font-bold py-[6px] mt-[12px]"
                                        onClick={() => {
                                            if (
                                                form.currentAccounts[
                                                    form.currentAccounts
                                                        .length - 1
                                                ].account === "" &&
                                                form.currentAccounts[
                                                    form.currentAccounts
                                                        .length - 1
                                                ].owner === "" &&
                                                form.currentAccounts[
                                                    form.currentAccounts
                                                        .length - 1
                                                ].amount === ""
                                            ) {
                                                return;
                                            }

                                            setForm({
                                                ...form,
                                                currentAccounts: [
                                                    ...form.currentAccounts,
                                                    {
                                                        account: "",
                                                        owner: "",
                                                        amount: "",
                                                    },
                                                ],
                                            });
                                        }}
                                    >
                                        Add new +
                                    </button>
                                </div>
                            )}

                            {activePage === 11 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    {radios.otherAssets.map((item, index) => (
                                        <div
                                            key={`other_asset_${index}`}
                                            className={`w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative border-[1px] transition duration-300 ${
                                                error?.otherAssets === true &&
                                                "border-[#F11940] hover:border-[#F11940]"
                                            }`}
                                            onClick={() => {
                                                setError({
                                                    ...error,
                                                    otherAssets: false,
                                                });

                                                if (
                                                    form.otherAssets?.status ===
                                                    item
                                                )
                                                    return;

                                                setForm({
                                                    ...form,
                                                    otherAssets: {
                                                        status: item,
                                                    },
                                                });
                                            }}
                                        >
                                            <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                {item}
                                            </div>
                                            <div className="absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                    }}
                                                    className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                        form.otherAssets
                                                            ?.status === item &&
                                                        "opacity-[1]"
                                                    }`}
                                                />
                                            </div>
                                            {item === "Yes" &&
                                                form.otherAssets?.status ===
                                                    "Yes" && (
                                                    <div className="flex flex-col gap-y-[16px] lg:gap-y-[24px] border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                        {checkboxes.otherAssets.map(
                                                            (item, index) => (
                                                                <div
                                                                    key={`other_asset_checkbox_${index}`}
                                                                    className="flex items-center gap-x-[12px] lg:gap-x-[20px] select-none"
                                                                    onClick={() => {
                                                                        setError(
                                                                            {
                                                                                ...error,
                                                                                otherAssets:
                                                                                    {
                                                                                        ...error.otherAssets,
                                                                                        personalProperty:
                                                                                            false,
                                                                                        business:
                                                                                            false,
                                                                                        realEstate:
                                                                                            false,
                                                                                        crypto: false,
                                                                                    },
                                                                            }
                                                                        );
                                                                        setForm(
                                                                            {
                                                                                ...form,
                                                                                otherAssets:
                                                                                    {
                                                                                        ...form.otherAssets,
                                                                                        [item.name]:
                                                                                            form
                                                                                                .otherAssets[
                                                                                                item
                                                                                                    .name
                                                                                            ]
                                                                                                ? false
                                                                                                : true,
                                                                                    },
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`w-[32px] h-[32px] border-[1px] border-[#DDE3F0] rounded-[8px] flex items-center justify-center transition duration-300 ${
                                                                            error
                                                                                .otherAssets[
                                                                                item
                                                                                    .name
                                                                            ] ===
                                                                            true
                                                                                ? "bg-[#F7F9FC] border-[#bd1120]"
                                                                                : form
                                                                                      .otherAssets[
                                                                                      item
                                                                                          .name
                                                                                  ]
                                                                                ? "bg-[#FAA942] border-[#FAA942]"
                                                                                : "bg-[#F7F9FC]"
                                                                        }`}
                                                                    >
                                                                        <Image
                                                                            className={`w-[14px] lg:w-[19px] transition duration-300 ${
                                                                                form
                                                                                    .otherAssets[
                                                                                    item
                                                                                        .name
                                                                                ]
                                                                                    ? "opacity-[1]"
                                                                                    : "opacity-[0]"
                                                                            }`}
                                                                            src="/assets/images/onboarding-wizard/yes.svg"
                                                                            alt="Yes"
                                                                        />
                                                                    </div>
                                                                    <div className="text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activePage === 12 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    {radios.insuranceInventory.map(
                                        (item, index) => (
                                            <div
                                                key={`insurance_inventory_${index}`}
                                                className="w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative"
                                                onClick={() => {
                                                    if (
                                                        form.insuranceInventory
                                                            ?.status === item
                                                    )
                                                        return;

                                                    const newInventory = {
                                                        ...form.insuranceInventory,
                                                        status: item,
                                                    };

                                                    if (item === "Yes") {
                                                        newInventory.policies =
                                                            [
                                                                {
                                                                    name: "",
                                                                    amount: "",
                                                                },
                                                            ];
                                                    }

                                                    setForm({
                                                        ...form,
                                                        insuranceInventory:
                                                            newInventory,
                                                    });
                                                }}
                                            >
                                                <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                    {item}
                                                </div>
                                                <div className="absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] border-[1px] border-[#DDE3F0] rounded-[40px]">
                                                    <div
                                                        style={{
                                                            background:
                                                                "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
                                                        }}
                                                        className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] rounded-[40px] transition duration-300 opacity-[0] ${
                                                            form
                                                                .insuranceInventory
                                                                ?.status ===
                                                                item &&
                                                            "opacity-[1]"
                                                        }`}
                                                    />
                                                </div>
                                                {item === "Yes" &&
                                                    form.insuranceInventory
                                                        ?.status === "Yes" && (
                                                        <div className="border-t-[1px] border-t-[#DDE3F0] py-[16px] mt-[16px]">
                                                            <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
                                                                {form.insuranceInventory.policies.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <div
                                                                            className="w-full"
                                                                            key={`insurance_policy_${index}`}
                                                                        >
                                                                            {index ===
                                                                                0 && (
                                                                                <div className="flex mb-[5px]">
                                                                                    <label className="w-[43%] lg:w-[57%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]">
                                                                                        Name
                                                                                    </label>
                                                                                    <label className="w-[57%] lg:w-[43%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]">
                                                                                        Death
                                                                                        benefit
                                                                                        amount
                                                                                    </label>
                                                                                </div>
                                                                            )}
                                                                            <div className="flex border-[#DDE3F0] border-[1px] rounded-[12px] overflow-hidden">
                                                                                <input
                                                                                    className="w-[43%] lg:w-[57%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                                                    placeholder="Name"
                                                                                    value={
                                                                                        item.name
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) => {
                                                                                        const newInventory =
                                                                                            {
                                                                                                ...form.insuranceInventory,
                                                                                            };

                                                                                        newInventory.policies[
                                                                                            index
                                                                                        ].name =
                                                                                            e.target.value;

                                                                                        setForm(
                                                                                            {
                                                                                                ...form,
                                                                                                insuranceInventory:
                                                                                                    newInventory,
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                />
                                                                                <div className="w-[43%] lg:w-[36%] relative">
                                                                                    <input
                                                                                        className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                                                        placeholder="Amount"
                                                                                        value={
                                                                                            item.amount
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) => {
                                                                                            const newInventory =
                                                                                                {
                                                                                                    ...form.insuranceInventory,
                                                                                                };

                                                                                            newInventory.policies[
                                                                                                index
                                                                                            ].amount =
                                                                                                e.target.value;

                                                                                            setForm(
                                                                                                {
                                                                                                    ...form,
                                                                                                    insuranceInventory:
                                                                                                        newInventory,
                                                                                                }
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                                                        $
                                                                                    </div>
                                                                                </div>
                                                                                <button
                                                                                    className="w-[14%] lg:w-[7%] flex items-center justify-center bg-[#fff]"
                                                                                    onClick={() => {
                                                                                        if (
                                                                                            form
                                                                                                .insuranceInventory
                                                                                                .policies
                                                                                                .length >
                                                                                            1
                                                                                        ) {
                                                                                            const newInventory =
                                                                                                {
                                                                                                    ...form.insuranceInventory,
                                                                                                };

                                                                                            newInventory.policies =
                                                                                                newInventory.policies.filter(
                                                                                                    (
                                                                                                        item,
                                                                                                        filteredIndex
                                                                                                    ) => {
                                                                                                        if (
                                                                                                            index !==
                                                                                                            filteredIndex
                                                                                                        ) {
                                                                                                            return item;
                                                                                                        }
                                                                                                    }
                                                                                                );

                                                                                            setForm(
                                                                                                {
                                                                                                    ...form,
                                                                                                    insuranceInventory:
                                                                                                        newInventory,
                                                                                                }
                                                                                            );
                                                                                        } else {
                                                                                            setForm(
                                                                                                {
                                                                                                    ...form,
                                                                                                    insuranceInventory:
                                                                                                        {
                                                                                                            ...form.insuranceInventory,
                                                                                                            policies:
                                                                                                                [
                                                                                                                    {
                                                                                                                        name: "",
                                                                                                                        amount: "",
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                }
                                                                                            );
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <Image
                                                                                        className="w-[15px]"
                                                                                        src={`/assets/images/onboarding-wizard/${
                                                                                            index ===
                                                                                                0 &&
                                                                                            form
                                                                                                .insuranceInventory
                                                                                                .policies[
                                                                                                index
                                                                                            ]
                                                                                                .name ===
                                                                                                "" &&
                                                                                            form
                                                                                                .insuranceInventory
                                                                                                .policies[
                                                                                                index
                                                                                            ]
                                                                                                .amount ===
                                                                                                ""
                                                                                                ? "bucket"
                                                                                                : "bucket-red"
                                                                                        }.svg`}
                                                                                        alt="Bucket"
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                            <button
                                                                className="w-full bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[12px] text-[18px] leading-[30px] font-bold py-[6px] mt-[12px]"
                                                                onClick={() => {
                                                                    if (
                                                                        form
                                                                            .insuranceInventory
                                                                            .policies[
                                                                            form
                                                                                .insuranceInventory
                                                                                .policies
                                                                                .length -
                                                                                1
                                                                        ]
                                                                            .name ===
                                                                            "" &&
                                                                        form
                                                                            .insuranceInventory
                                                                            .policies[
                                                                            form
                                                                                .insuranceInventory
                                                                                .policies
                                                                                .length -
                                                                                1
                                                                        ]
                                                                            .amount ===
                                                                            ""
                                                                    ) {
                                                                        return;
                                                                    }

                                                                    const newInventory =
                                                                        {
                                                                            ...form.insuranceInventory,
                                                                        };

                                                                    newInventory.policies.push(
                                                                        {
                                                                            name: "",
                                                                            amount: "",
                                                                        }
                                                                    );

                                                                    setForm({
                                                                        ...form,
                                                                        insuranceInventory:
                                                                            newInventory,
                                                                    });
                                                                }}
                                                            >
                                                                Add new +
                                                            </button>
                                                        </div>
                                                    )}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            {activePage === 13 && (
                                <div className="flex flex-col gap-y-[12px]">
                                    {checkboxes.complexBenefits.map(
                                        (item, index) => (
                                            <div
                                                key={`complex_benefit_${index}`}
                                                className="w-full flex flex-col py-[12px] lg:py-[16px] px-[12px] lg:px-[40px] bg-[#fff] rounded-[12px] lg:rounded-[20px] cursor-pointer relative"
                                                onClick={() => {
                                                    setForm({
                                                        ...form,
                                                        complexBenefits: {
                                                            ...form.complexBenefits,
                                                            [item.name]: form
                                                                .complexBenefits[
                                                                item.name
                                                            ]
                                                                ? false
                                                                : true,
                                                        },
                                                    });
                                                }}
                                            >
                                                <div className="w-full text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                    {item.label}
                                                </div>
                                                <div
                                                    className={`absolute top-[12px] lg:top-[16px] right-[12px] lg:right-[16px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] rounded-[8px] border-[1px] border-[#DDE3F0] flex items-center justify-center transition duration-300 ${
                                                        form.complexBenefits[
                                                            item.name
                                                        ]
                                                            ? "bg-[#FAA942] border-[#FAA942]"
                                                            : "bg-[#F7F9FC]"
                                                    }`}
                                                >
                                                    <Image
                                                        className={`w-[14px] lg:w-[19px] transition duration-300 ${
                                                            form
                                                                .complexBenefits[
                                                                item.name
                                                            ]
                                                                ? "opacity-[1]"
                                                                : "opacity-[0]"
                                                        }`}
                                                        src="/assets/images/onboarding-wizard/yes.svg"
                                                        alt="Yes"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            {activePage === 14 && !progressBreak && (
                                <div>
                                    <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] mb-[32px]">
                                        {suggestions.liabilities.map(
                                            (item, index) => (
                                                <button
                                                    key={`liability_button_${index}`}
                                                    className="py-[6px] px-[10px] border-[1px] border-[#173A78] rounded-[8px] text-[#173A78] text-[16px] leading-[24px]"
                                                    onClick={() => {
                                                        const newLiabilities = [
                                                            ...form.liabilities,
                                                        ];

                                                        if (
                                                            newLiabilities[
                                                                newLiabilities.length -
                                                                    1
                                                            ].name === "" &&
                                                            newLiabilities[
                                                                newLiabilities.length -
                                                                    1
                                                            ].date === "" &&
                                                            newLiabilities[
                                                                newLiabilities.length -
                                                                    1
                                                            ].balance === "" &&
                                                            newLiabilities[
                                                                newLiabilities.length -
                                                                    1
                                                            ].payment === ""
                                                        ) {
                                                            newLiabilities[
                                                                newLiabilities.length -
                                                                    1
                                                            ].name = item;
                                                        } else {
                                                            newLiabilities.push(
                                                                {
                                                                    name: item,
                                                                    date: "",
                                                                    balance: "",
                                                                    payment: "",
                                                                }
                                                            );
                                                        }

                                                        setForm({
                                                            ...form,
                                                            liabilities:
                                                                newLiabilities,
                                                        });
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <div className="w-full overflow-x-scroll lg:overflow-x-visible">
                                        {form.liabilities.map((item, index) => (
                                            <div
                                                className="w-[620px] lg:w-[175%]"
                                                key={`liability_${index}`}
                                            >
                                                {index === 0 && (
                                                    <div className="flex mb-[5px]">
                                                        <label className="w-[25%] lg:w-[38%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]">
                                                            Liability name
                                                        </label>
                                                        <label className="w-[18%] lg:w-[20%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]">
                                                            Payoff Date
                                                        </label>
                                                        <label className="w-[28%] lg:w-[19%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]">
                                                            Current Balance
                                                        </label>
                                                        <label className="w-[28%] lg:w-[23%] text-[#434A59] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] pl-[5px]">
                                                            Monthly Payment
                                                        </label>
                                                    </div>
                                                )}
                                                <div className="flex border-[#DDE3F0] rounded-[12px] overflow-hidden">
                                                    <input
                                                        className="w-[25%] lg:w-[38%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                        placeholder="Liability name"
                                                        value={item.name}
                                                        onChange={(e) => {
                                                            const newLiabilities =
                                                                [
                                                                    ...form.liabilities,
                                                                ];

                                                            newLiabilities[
                                                                index
                                                            ].name =
                                                                e.target.value;

                                                            setForm({
                                                                ...form,
                                                                liabilities:
                                                                    newLiabilities,
                                                            });
                                                        }}
                                                    />
                                                    <input
                                                        className="w-[18%] lg:w-[20%] px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                        placeholder="MM/YYYY"
                                                        value={item.date}
                                                        onChange={(e) => {
                                                            const newLiabilities =
                                                                [
                                                                    ...form.liabilities,
                                                                ];

                                                            newLiabilities[
                                                                index
                                                            ].date =
                                                                e.target.value;

                                                            setForm({
                                                                ...form,
                                                                liabilities:
                                                                    newLiabilities,
                                                            });
                                                        }}
                                                    />
                                                    <div className="w-[28%] lg:w-[19%] relative">
                                                        <input
                                                            className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                            placeholder="Amount"
                                                            value={item.balance}
                                                            onChange={(e) => {
                                                                const newLiabilities =
                                                                    [
                                                                        ...form.liabilities,
                                                                    ];

                                                                newLiabilities[
                                                                    index
                                                                ].balance =
                                                                    e.target.value;

                                                                setForm({
                                                                    ...form,
                                                                    liabilities:
                                                                        newLiabilities,
                                                                });
                                                            }}
                                                        />
                                                        <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                            $
                                                        </div>
                                                    </div>
                                                    <div className="w-[21%] lg:w-[16%] relative">
                                                        <input
                                                            className="w-full px-[12px] lg:px-[20px] py-[16px] lg:py-[12px] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] border-r-[1px] border-r-[#EEF1F8] focus-visible:outline-none"
                                                            placeholder="Amount"
                                                            value={item.payment}
                                                            onChange={(e) => {
                                                                const newLiabilities =
                                                                    [
                                                                        ...form.liabilities,
                                                                    ];

                                                                newLiabilities[
                                                                    index
                                                                ].payment =
                                                                    e.target.value;

                                                                setForm({
                                                                    ...form,
                                                                    liabilities:
                                                                        newLiabilities,
                                                                });
                                                            }}
                                                        />
                                                        <div className="absolute top-0 bottom-0 my-auto right-[5px] h-[calc(100%-10px)] px-[10px] bg-[#EEF1F8] rounded-[8px] flex items-center text-[#000714] text-[20px] leading-[32px]">
                                                            $
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="w-[7%] flex items-center justify-center bg-[#fff]"
                                                        onClick={() => {
                                                            if (
                                                                form.liabilities
                                                                    .length > 1
                                                            ) {
                                                                const newLiabilities =
                                                                    [
                                                                        ...form.liabilities,
                                                                    ].filter(
                                                                        (
                                                                            item,
                                                                            filteredIndex
                                                                        ) => {
                                                                            if (
                                                                                index !==
                                                                                filteredIndex
                                                                            ) {
                                                                                return item;
                                                                            }
                                                                        }
                                                                    );

                                                                setForm({
                                                                    ...form,
                                                                    liabilities:
                                                                        newLiabilities,
                                                                });
                                                            } else {
                                                                setForm({
                                                                    ...form,
                                                                    liabilities:
                                                                        [
                                                                            {
                                                                                name: "",
                                                                                date: "",
                                                                                balance:
                                                                                    "",
                                                                                payment:
                                                                                    "",
                                                                            },
                                                                        ],
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        <Image
                                                            className="w-[15px]"
                                                            src={`/assets/images/onboarding-wizard/${
                                                                index === 0 &&
                                                                form
                                                                    .liabilities[
                                                                    index
                                                                ].name === "" &&
                                                                form
                                                                    .liabilities[
                                                                    index
                                                                ].date === "" &&
                                                                form
                                                                    .liabilities[
                                                                    index
                                                                ].balance ===
                                                                    "" &&
                                                                form
                                                                    .liabilities[
                                                                    index
                                                                ].payment === ""
                                                                    ? "bucket"
                                                                    : "bucket-red"
                                                            }.svg`}
                                                            alt="Bucket"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="w-full lg:w-[175%] bg-[#F7F9FC] border-[1px] border-[#DDE3F0] rounded-[12px] text-[18px] leading-[30px] font-bold py-[6px] mt-[12px]"
                                        onClick={() => {
                                            if (
                                                form.liabilities[
                                                    form.liabilities.length - 1
                                                ].name === "" &&
                                                form.liabilities[
                                                    form.liabilities.length - 1
                                                ].date === "" &&
                                                form.liabilities[
                                                    form.liabilities.length - 1
                                                ].balance === "" &&
                                                form.liabilities[
                                                    form.liabilities.length - 1
                                                ].payment === ""
                                            ) {
                                                return;
                                            }

                                            setForm({
                                                ...form,
                                                liabilities: [
                                                    ...form.liabilities,
                                                    {
                                                        name: "",
                                                        date: "",
                                                        balance: "",
                                                        payment: "",
                                                    },
                                                ],
                                            });
                                        }}
                                    >
                                        Add new +
                                    </button>
                                </div>
                            )}

                            {progressBreak && (
                                <div className="flex flex-col">
                                    <div
                                        className="w-full h-[200px] lg:h-[314px] px-[30px] lg:px-[60px] flex items-center"
                                        style={{
                                            background:
                                                "url(/assets/images/onboarding-wizard/bubble-big.svg) no-repeat center center/110%",
                                        }}
                                    >
                                        <div className="flex flex-col gap-y-[16px] lg:gap-y-[20px]">
                                            <div className="text-[#000714] text-[23px] leading-[28px] font-bold">
                                                Looks like your making great
                                                progress!
                                            </div>
                                            <div className="text-[#434A59] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                You only have a few questions
                                                left to help us understand your
                                                preferences!
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="self-end w-[62px] lg:w-[77px] h-[50px] lg:h-[62px]"
                                        style={{
                                            background:
                                                "url(/assets/images/onboarding-wizard/bubble-medium.svg) no-repeat center center/cover",
                                        }}
                                    />
                                    <div
                                        className="self-end w-[28px] lg:w-[34px] h-[22px] lg:h-[27px]"
                                        style={{
                                            background:
                                                "url(/assets/images/onboarding-wizard/bubble-small.svg) no-repeat center center/cover",
                                        }}
                                    />
                                </div>
                            )}

                            {activePage === 15 && (
                                <div className="flex justify-between flex-wrap gap-y-[16px] lg:gap-y-[24px]">
                                    {radios.communicationMethod.map(
                                        (item, index) => (
                                            <button
                                                key={`communication_method_${index}`}
                                                className="w-[48%] flex flex-col items-center gap-y-[12px] lg:gap-y-[28px] py-[20px] lg:py-[32px] bg-[#fff] rounded-[20px] border-[1px] border-[transparent] hover:border-[#A2ACBE] transition duration-300"
                                                onClick={() => {
                                                    setForm({
                                                        ...form,
                                                        communicationMethod:
                                                            item,
                                                    });
                                                    setActivePage(16);
                                                }}
                                            >
                                                <Image
                                                    className="w-[48px] lg:w-[60px]"
                                                    src={`/assets/images/onboarding-wizard/${item.toLowerCase()}.svg`}
                                                    alt={item}
                                                />
                                                <div className="text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                    {item}
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            )}

                            {activePage === 16 && (
                                <div className="flex flex-col lg:flex-row justify-between gap-y-[12px]">
                                    {radios.uploadDocuments.map(
                                        (item, index) => (
                                            <button
                                                key={`upload_documents_${index}`}
                                                className="w-full lg:w-[32%] flex lg:flex-col items-center gap-x-[24px] gap-y-[28px] py-[16px] lg:py-[32px] pl-[24px] lg:px-[16px] bg-[#fff] rounded-[20px] border-[1px] border-[transparent] hover:border-[#A2ACBE] transition duration-300"
                                                onClick={() => {
                                                    setForm({
                                                        ...form,
                                                        uploadDocuments: item,
                                                    });
                                                    setActivePage(17);
                                                }}
                                            >
                                                <Image
                                                    className="w-[48px] lg:w-[60px]"
                                                    src={`/assets/images/onboarding-wizard/${item.name}.svg`}
                                                    alt={item.label}
                                                />
                                                <div className="text-[#000714] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px]">
                                                    {item.label}
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            )}

                            {activePage === 17 && (
                                <div className="w-full lg:w-[175%] flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-y-[12px]">
                                    {checkboxes.retirementExpectations.map(
                                        (item, index) => (
                                            <button
                                                key={`retirement_expectation_${index}`}
                                                className={`relative w-full lg:w-[24%] flex lg:flex-col items-center justify-start lg:justify-center gap-x-[12px] gap-y-[16px] py-[16px] lg:py-[24px] px-[24px] rounded-[12px] lg:rounded-[20px] border-[1px] transition duration-300 ${
                                                    form.retirementExpectations[
                                                        item.name
                                                    ]
                                                        ? "bg-[#FFE9CE] border-[#FAA942] hover:border-[#FAA942]"
                                                        : "bg-[#fff] border-[transparent] hover:border-[#A2ACBE]"
                                                }`}
                                                onClick={() => {
                                                    const newExpectations = {
                                                        ...form.retirementExpectations,
                                                    };

                                                    newExpectations[item.name] =
                                                        !newExpectations[
                                                            item.name
                                                        ];

                                                    setForm({
                                                        ...form,
                                                        retirementExpectations:
                                                            newExpectations,
                                                    });
                                                }}
                                            >
                                                <Image
                                                    className="w-[28px] lg:w-[40px]"
                                                    src={`/assets/images/onboarding-wizard/expectations/${item.icon}.svg`}
                                                    alt={item.label}
                                                />
                                                <div className="text-[#000714] text-[16px] leading-[24px]">
                                                    {item.label}
                                                </div>
                                                <div
                                                    className={`absolute top-[0] bottom-[0] lg:bottom-auto my-auto lg:my-[0] lg:top-[12px] right-[12px] w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] flex items-center justify-center bg-[#F7F9FC] lg:bg-[#FAA942] border-[1px] border-[#DDE3F0] lg:border-none rounded-[8px] transition duration-300 ${
                                                        form
                                                            .retirementExpectations[
                                                            item.name
                                                        ]
                                                            ? "bg-[#FAA942] lg:opacity-[1]"
                                                            : "lg:opacity-[0]"
                                                    }`}
                                                >
                                                    <Image
                                                        className={`w-[14px] lg:w-[19px] transition duration-300 ${
                                                            form
                                                                .retirementExpectations[
                                                                item.name
                                                            ]
                                                                ? "opacity-[1]"
                                                                : "opacity-[0]"
                                                        } lg:opacity-[1]`}
                                                        src="/assets/images/onboarding-wizard/yes.svg"
                                                        alt="Yes"
                                                    />
                                                </div>
                                            </button>
                                        )
                                    )}
                                </div>
                            )}

                            {activePage === 18 && !finalBreak && (
                                <div className="w-full lg:w-[175%] overflow-x-scroll lg:overflow-x-visible">
                                    <table className="w-[200%] lg:w-full border-none text-left rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
                                        {form.planningFor?.partnerFirstName ? (
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="17%" />
                                                <col width="17%" />
                                                <col width="16%" />
                                            </colgroup>
                                        ) : (
                                            <colgroup>
                                                <col width="50%" />
                                                <col width="25%" />
                                                <col width="25%" />
                                            </colgroup>
                                        )}
                                        <thead className="bg-[#DDE3F0]">
                                            <tr>
                                                <td className="py-[14px] px-[24px] lg:px-[40px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-[14px] leading-[16px] font-bold">
                                                    Concern
                                                </td>
                                                <td className="py-[14px] px-[24px] lg:px-[40px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-[14px] leading-[16px] font-bold text-center">
                                                    {form.firstName}
                                                </td>
                                                {form.planningFor
                                                    ?.partnerFirstName && (
                                                    <td className="py-[14px] px-[24px] lg:px-[40px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-[14px] leading-[16px] font-bold text-center">
                                                        {
                                                            form.planningFor
                                                                .partnerFirstName
                                                        }
                                                    </td>
                                                )}
                                                <td className="py-[14px] px-[24px] lg:px-[40px] text-[#000714] text-[14px] leading-[16px] font-bold text-center">
                                                    Degree
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {form.concerns &&
                                                form.concerns.map(
                                                    (block, blockIndex) => (
                                                        <React.Fragment
                                                            key={`concern_block_${blockIndex}`}
                                                        >
                                                            <tr className="bg-[#F7F9FC] border-b-[1px] border-b-[#DDE3F0]">
                                                                <td
                                                                    colSpan={4}
                                                                    className="py-[14px] px-[24px] lg:px-[40px] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                                                >
                                                                    {
                                                                        block.title
                                                                    }
                                                                </td>
                                                            </tr>
                                                            {block.items.map(
                                                                (
                                                                    item,
                                                                    itemIndex
                                                                ) => (
                                                                    <React.Fragment
                                                                        key={`concern_${itemIndex}`}
                                                                    >
                                                                        {(!item.optional ||
                                                                            form
                                                                                .planningFor
                                                                                ?.partnerFirstName) && (
                                                                            <tr className="border-b-[1px] border-b-[#DDE3F0] bg-[#fff]">
                                                                                <td className="py-[14px] pl-[24px] lg:pl-[40px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-[14px] lg:text-[16px] leading-[16px] lg:leading-[24px]">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </td>
                                                                                <td className="py-[14px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-center">
                                                                                    <button
                                                                                        className="border-none bg-[transparent]"
                                                                                        onClick={() => {
                                                                                            const newConcerns =
                                                                                                [
                                                                                                    ...form.concerns,
                                                                                                ];

                                                                                            newConcerns[
                                                                                                blockIndex
                                                                                            ].items[
                                                                                                itemIndex
                                                                                            ].you =
                                                                                                !newConcerns[
                                                                                                    blockIndex
                                                                                                ]
                                                                                                    .items[
                                                                                                    itemIndex
                                                                                                ]
                                                                                                    .you;

                                                                                            setForm(
                                                                                                {
                                                                                                    ...form,
                                                                                                    concerns:
                                                                                                        newConcerns,
                                                                                                }
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        <Image
                                                                                            className="w-[24px]"
                                                                                            src={`/assets/images/onboarding-wizard/${
                                                                                                form
                                                                                                    .concerns[
                                                                                                    blockIndex
                                                                                                ]
                                                                                                    .items[
                                                                                                    itemIndex
                                                                                                ]
                                                                                                    .you
                                                                                                    ? "user-active"
                                                                                                    : "user"
                                                                                            }.svg`}
                                                                                            alt="User"
                                                                                        />
                                                                                    </button>
                                                                                </td>
                                                                                {form
                                                                                    .planningFor
                                                                                    ?.partnerFirstName && (
                                                                                    <td className="py-[14px] border-r-[1px] border-r-[#EEF1F8] text-[#000714] text-center">
                                                                                        <button
                                                                                            className="border-none bg-[transparent]"
                                                                                            onClick={() => {
                                                                                                const newConcerns =
                                                                                                    [
                                                                                                        ...form.concerns,
                                                                                                    ];

                                                                                                newConcerns[
                                                                                                    blockIndex
                                                                                                ].items[
                                                                                                    itemIndex
                                                                                                ].partner =
                                                                                                    !newConcerns[
                                                                                                        blockIndex
                                                                                                    ]
                                                                                                        .items[
                                                                                                        itemIndex
                                                                                                    ]
                                                                                                        .partner;

                                                                                                setForm(
                                                                                                    {
                                                                                                        ...form,
                                                                                                        concerns:
                                                                                                            newConcerns,
                                                                                                    }
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <Image
                                                                                                className="w-[24px]"
                                                                                                src={`/assets/images/onboarding-wizard/${
                                                                                                    form
                                                                                                        .concerns[
                                                                                                        blockIndex
                                                                                                    ]
                                                                                                        .items[
                                                                                                        itemIndex
                                                                                                    ]
                                                                                                        .partner
                                                                                                        ? "user-active"
                                                                                                        : "user"
                                                                                                }.svg`}
                                                                                                alt="User"
                                                                                            />
                                                                                        </button>
                                                                                    </td>
                                                                                )}
                                                                                <td className="py-[16px] px-[5px] lg:px-[16px]">
                                                                                    <Select
                                                                                        placeholder="Degree"
                                                                                        styles={
                                                                                            concernSelectStyles
                                                                                        }
                                                                                        options={
                                                                                            selects.concernDegree
                                                                                        }
                                                                                        components={{
                                                                                            IndicatorSeparator:
                                                                                                () =>
                                                                                                    null,
                                                                                        }}
                                                                                        isSearchable={
                                                                                            false
                                                                                        }
                                                                                        onChange={(
                                                                                            e: any
                                                                                        ) => {
                                                                                            const newConcerns =
                                                                                                [
                                                                                                    ...form.concerns,
                                                                                                ];

                                                                                            newConcerns[
                                                                                                blockIndex
                                                                                            ].items[
                                                                                                itemIndex
                                                                                            ].degree =
                                                                                                e.value;

                                                                                            setForm(
                                                                                                {
                                                                                                    ...form,
                                                                                                    concerns:
                                                                                                        newConcerns,
                                                                                                }
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                        )}
                                                                    </React.Fragment>
                                                                )
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {finalBreak && (
                                <div>
                                    {!endScreen && (
                                        <ConfettiExplosion
                                            particleSize={14}
                                            duration={4000}
                                            colors={[
                                                "#F44274",
                                                "#BE1E68",
                                                "#B4DF86",
                                                "#B4DF86",
                                                "#F8B54A",
                                                "#6DD0E7",
                                                "#F8B54A",
                                                "#F71873",
                                            ]}
                                            floorWidth={1000}
                                            floorHeight={1000}
                                        />
                                    )}

                                    <div
                                        className={`flex flex-col transition duration-300 opacity-[0] ${
                                            endScreen && "opacity-[1]"
                                        }`}
                                    >
                                        <div
                                            className="w-full h-[200px] lg:h-[314px] px-[30px] lg:px-[60px] flex items-center"
                                            style={{
                                                background:
                                                    "url(/assets/images/onboarding-wizard/bubble-big.svg) no-repeat center center/110%",
                                            }}
                                        >
                                            <div className="flex flex-col gap-y-[8px] lg:gap-y-[12px]">
                                                <div className="text-[#000714] text-[16px] lg:text-[23px] leading-[20px] lg:leading-[28px] font-bold">
                                                    Congrats!
                                                </div>
                                                <div className="text-[#434A59] text-[12px] lg:text-[20px] leading-[18px] lg:leading-[32px]">
                                                    Your information has been
                                                    updated and your profile is
                                                    one step closer to
                                                    completion!
                                                </div>
                                                <div className="text-[#434A59] text-[12px] lg:text-[20px] leading-[18px] lg:leading-[32px]">
                                                    Please return to your
                                                    dashboard and view the
                                                    "Documents" tab to continue.
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="self-end w-[62px] lg:w-[77px] h-[50px] lg:h-[62px]"
                                            style={{
                                                background:
                                                    "url(/assets/images/onboarding-wizard/bubble-medium.svg) no-repeat center center/150%",
                                            }}
                                        />
                                        <div
                                            className="self-end w-[28px] lg:w-[34px] h-[22px] lg:h-[27px]"
                                            style={{
                                                background:
                                                    "url(/assets/images/onboarding-wizard/bubble-small.svg) no-repeat center center/200%",
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {(activePage !== 6 || feelingBreak !== null) &&
                                activePage !== 15 &&
                                activePage !== 16 &&
                                !finalBreak && (
                                    <div
                                        className={`flex items-center justify-between mt-[36px] pt-[24px] border-t-[1px] border-t-[#DDE3F0] w-full ${
                                            ((activePage === 14 &&
                                                !progressBreak) ||
                                                activePage === 17 ||
                                                activePage === 18) &&
                                            "lg:w-[175%]"
                                        }`}
                                    >
                                        <div>
                                            {activePage > 1 && (
                                                <button
                                                    className="flex items-center justify-center gap-x-[8px] border-[1px] border-[#001F55] w-[154px] h-[60px] rounded-[60px]"
                                                    onClick={goBack}
                                                >
                                                    <Image
                                                        src="/assets/images/onboarding-wizard/arrow-left.svg"
                                                        alt="Back"
                                                        className="w-[24px]"
                                                    />
                                                    <span className="text-[#001F55] text-[18px] leading-[32px] font-bold">
                                                        Back
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                        <div>
                                            <button
                                                className="flex items-center justify-center gap-x-[8px] bg-[#001F55] w-[154px] h-[60px] rounded-[60px]"
                                                onClick={goForward}
                                            >
                                                <span className="text-[#fff] text-[18px] leading-[32px] font-bold">
                                                    {activePage < totalPages
                                                        ? "Continue"
                                                        : "Finish"}
                                                </span>
                                                <Image
                                                    src="/assets/images/onboarding-wizard/arrow-right.svg"
                                                    alt="Continue"
                                                    className="w-[24px]"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            {(activePage !== 14 || progressBreak) &&
                activePage !== 17 &&
                (activePage !== 18 || finalBreak) && (
                    <Image
                        className={`absolute bottom-0 right-0 w-[240px] ${
                            endScreen && "w-[326px]"
                        } lg:w-[28%] lg:max-w-[404px] z-[1] transition-all duration-300`}
                        src="/assets/images/onboarding-wizard/bg.png"
                        alt="Onboarding Wizard"
                    />
                )}
        </div>
    );
};

export default OnboardingWizard;
