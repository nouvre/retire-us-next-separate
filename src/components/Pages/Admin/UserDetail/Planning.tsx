import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import File from "@/components/common/File";
import { useDispatch, useSelector } from "react-redux";
import { getOnboardingUserDetail } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Image from '@/components/common/Image';

import moment from "moment-timezone";
moment.tz.add("America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0");

const planningColumns = [
    {
        field: "firstname",
        title: "First Name",
    },
    {
        field: "lastname",
        title: "Last Name",
    },
    {
        field: "phoneNumber",
        title: "Phone Number",
    },
    {
        field: "DOB",
        title: "Date of Birth",
    },
    {
        field: "employer",
        title: "Employer",
    },
    {
        field: "employmentIncome",
        title: "Employement Income",
    },
    {
        field: "firstname2",
        title: "First Name - Client 2",
    },
    {
        field: "lastname2",
        title: "Last Name - Client 2",
    },
    {
        field: "phoneNumber2",
        title: "Phone Number - Client 2",
    },
    {
        field: "DOB2",
        title: "Date of Birth - Client 2",
    },
    {
        field: "employer2",
        title: "Employer - Client 2",
    },
    {
        field: "employer2",
        title: "Employement Income - Client 2",
    },
    {
        field: "email",
        title: "Email",
    },
    {
        field: "address",
        title: "Address",
    },
    {
        field: "city",
        title: "City",
    },
    {
        field: "state",
        title: "State",
    },
    {
        field: "zipCode",
        title: "Zip Code",
    },
    {
        field: "cashReserves",
        title: "Cash Reserves",
    },
    {
        field: "importantNotes",
        title: "Important Notes",
    },
    {
        field: "receiveCashBonus",
        title: "Do you receive a Cash Bonus?",
    },
    {
        field: "annualCashBonusAmount",
        title: "Annual Cash Bonus Amount",
    },
    {
        field: "receiveRSU",
        title: "Do you receive RSU's (Restricted Stock)?",
    },
    {
        field: "annualRSUAmount",
        title: "Annual RSU Amount",
    },
    {
        field: "receiveStockOption",
        title: "Do you receive Stock Options?",
    },
    {
        field: "annualStockOptionAmount",
        title: "Annual Stock Option Amount",
    },
];

interface ComponentProps {
    userId: string;
}

const Planning: React.FC<ComponentProps> = ({ userId }) => {
    const xlsxMimeType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    const dispatch = useDispatch();
    const onboarding = useSelector(
        (state: ApplicationState) => state.settings.selectedOnboardingUser
    );

    const [onboardingData, setOnboardingData] = useState<any>([]);

    const exportToCSV = (csvData, fileName, fileExtension) => {
        const csvHeaders = csvData.map((c) => c.title);
        const csvValues = csvData.map((c) => c.value);
        // const ws = XLSX.utils.json_to_sheet(csvData);
        const ws = XLSX.utils.aoa_to_sheet([csvHeaders, csvValues]);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: xlsxMimeType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    useEffect(() => {
        dispatch(getOnboardingUserDetail(userId));
    }, []);

    useEffect(() => {
        if (onboarding) {
            const _onboardingData = planningColumns.map((p, i) => {
                return { title: p.title, value: onboarding[p.field] };
            });

            setOnboardingData(_onboardingData);
        }
    }, [onboarding]);

    const timeStamp = () => {
        if (onboarding)
            return moment
                .utc(onboarding.updated_at)
                .tz("America/New_York")
                .format("YYYY-MM-DD h:mm A");
        else return null;
    };

    return (
        <Scrollbars>
            <div className="w-full pt-2 px-5 h-full">
                {onboarding ? (
                    <>
                        <div className="w-full text-right">
                            <button
                                onClick={(e) =>
                                    exportToCSV(
                                        onboardingData,
                                        "questionnaire_report",
                                        ".xlsx"
                                    )
                                }
                            >
                                <Image
                                    src="/assets/images/ico-xls-download.svg"
                                    alt="ico-xlsx-download"
                                    className="w-8"
                                />
                            </button>
                            <button
                                onClick={(e) =>
                                    exportToCSV(
                                        onboardingData,
                                        "questionnaire_report",
                                        ".csv"
                                    )
                                }
                            >
                                <Image
                                    src="/assets/images/ico-csv-download.svg"
                                    alt="ico-csv-download"
                                    className="w-8"
                                />
                            </button>
                        </div>
                        <div>
                            <div className="p-3 text-center text-xl">
                                Time stamp {timeStamp()}
                            </div>
                            <div className="w-ful px-4 max-w-full grid grid-cols-1 md:grid-cols-2 text-sm gap-x-5 gap-y-2 mb-5">
                                {planningColumns.map((p, i) => (
                                    <div key={`planning_${i}`}>
                                        <div>{p.title}</div>
                                        <div>{onboarding[p.field]}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center pt-16 text-4xl">
                        This user has not been completed Profile yet.
                    </div>
                )}
            </div>
        </Scrollbars>
    );
};

export default Planning;
