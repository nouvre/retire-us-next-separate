import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store/index";
import {
    questionAnswers,
    Question,
    questionOrder,
} from "@/constants/variables";
import { get_file } from "@/util/s3getfile";
import { useQuestionnaire } from "@/util/func";
import { Answer } from "@/store/questions/types";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Image from '@/components/common/Image';

import moment from "moment-timezone";
moment.tz.add("America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0");
interface QuestionItemProps {
    title: string;
    answer: string;
    itemKey: number;
}

const Questionnaire: React.FC = () => {
    const xlsxMimeType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );
    const [quizSteps, setQuizSteps] = useState<any[]>([]);

    let answers: Answer = {
        user_id: 0,
        retireDefineWeeklyIncome: undefined,
        retireDefineNever: undefined,
        retireDefine20hours: undefined,
        retireDefineNoWork: undefined,
        extraSystematicYes: undefined,
        birthYear: "",
        wantToRetireAge: 0,
        retireForRelaxing: undefined,
        retireForNoProblem: undefined,
        retireForEveryDayIsSaturDay: undefined,
        retireForVacation: undefined,
        retireExpenseNormal: undefined,
        retireExpenseMortage: undefined,
        retireExpenseEntertainment: undefined,
        retireExpenseTravel: undefined,
        retireIncomeTypePension: undefined,
        retireIncomeTypeSocial: undefined,
        retireIncomeTypePartTime: undefined,
        retireIncomeTypeRental: undefined,
        retireIncomeTypeOther: undefined,
        retireIncomePension: undefined,
        retireIncomeSocial: undefined,
        retireIncomePartTime: undefined,
        retireIncomeRental: undefined,
        retireIncomeOther: undefined,
        retireIncomePensionAmountPercent: undefined,
        retirementConcern1: undefined,
        retirementConcern2: undefined,
        retirementConcern3: undefined,
        retirementConcern4: undefined,
        retirementConcern5: undefined,
        systematicSavingAfterTax: undefined,
        systematicSavingTaxDeferred: undefined,
        systematicSavingTaxFree: undefined,
        oldEmployerPlans: undefined,
        marjorExpenseBeforeRetireWeeding: undefined,
        marjorExpenseBeforeRetirePropertyPurchase: undefined,
        retireInmarjorExpenseBeforeRetireEducation: undefined,
        marjorExpenseBeforeRetireHealthcare: undefined,
        marjorExpenseBeforeRetireOther: undefined,
        quickExperciseHouseholdIncome: undefined,
        quickExperciseSavedPercentage: undefined,
        quickExperciseMatchPercentage: undefined,
        totalSavedAfterTax: undefined,
        totalSavedTaxDeferred: undefined,
        totalSavedTaxFree: undefined,
        whyRetireTiredWorking: undefined,
        whyRetireFinancialFreedom: undefined,
        whatWouldUpsetLosingMoney: undefined,
        whatWouldUpsetPushingBackDate: undefined,
        decideSaveRetirementMathThing: undefined,
        decideSaveRetirementFeelingThing: undefined,
        valueMoreAccumulatingWelth: undefined,
        valueMoreProtectingWelth: undefined,
        HowKnowRetireInKnow: undefined,
        HowKnowRetireInNotSure: undefined,
        HowMuchToSuccessRetireNotSure: undefined,
        HowMuchToSuccessRetireProbably: undefined,
        HowMuchToSuccessRetireMoney: undefined,
        HowFeelMarketCrashedFind: undefined,
        HowFeelMarketCrashedNervous: undefined,
        HowDoMarketCrashedInvest: undefined,
        HowDoMarketCrashedCry: undefined,
        StillRetireMarketCrashedSure: undefined,
        StillRetireMarketCrashedNotSure: undefined,
        retirementReallyAcomplishNo: undefined,
        retirementReallyAcomplishYes: undefined,
        step2Answer_1: 0,
        step2Answer_2: 0,
        step2Answer_3: 0,
        step2Answer_4: 0,
        step5Answer_1: 0,
        step5Answer_2: 0,
        step6Answer_1: 0,
        step6Answer_2: 0,
        step6Answer_3: 0,
        step6Answer_4: 0,
        step6_follow1_answer_1: 0,
        step6_follow1_answer_2: 0,
        step6_follow1_answer_3: 0,
        step6_follow1_answer_4: 0,
        step6_follow2_answer_1: 0,
        step6_follow2_answer_2: 0,
        step6_follow2_answer_3: 0,
        step6_follow3_answer_1: 0,
        step6_follow3_answer_2: 0,
        step6_follow3_answer_3: 0,
        step6_follow4_answer_1: 0,
        step6_follow4_answer_2: 0,
        step6_follow4_answer_3: 0,
        step8Answer_1: 0,
        step8Answer_2: 0,
        step8Answer_3: 0,
        step8Answer_4: 0,
        step8Answer_5: 0,
        step9Answer_1: 0,
        step9Answer_2: 0,
        step9Answer_3: 0,
        step9Answer_4: 0,
        step9Answer_5: 0,
        step10Answer_1: 0,
        step10Answer_2: 0,
        step10Answer_3: 0,
        step10Answer_4: 0,
        step11Answer_1: 0,
        step11Answer_2: 0,
        step11Answer_3: 0,
        step11Answer_4: 0,
        step11Answer_5: 0,
        step12Answer_1: 0,
        step12Answer_2: 0,
        step12Answer_3: 0,
        step12Answer_4: 0,
        step13Answer_1: 0,
        step13Answer_2: 0,
        step14Answer_1: 0,
        step14Answer_2: 0,
        step15Answer_1: 0,
        step15Answer_2: 0,
        step16Answer_1: 0,
        step16Answer_2: 0,
        step16Answer_3: 0,
        step16Answer_4: 0,
        step17Answer_1: 0,
        step17Answer_2: 0,
        step18Answer_1: 0,
        step18Answer_2: 0,
        step19Answer_1: 0,
        step19Answer_2: 0,
        step20Answer_1: 0,
        step20Answer_2: 0,
        step21Answer_1: 0,
        step21Answer_2: 0,
        step21Answer_3: 0,
        step21Answer_4: 0,
        step22Answer_1: 0,
        step22Answer_2: 0,
        step23Answer_1: 0,
        step23Answer_2: 0,
        step23Answer_3: 0,
        step23Answer_4: 0,
        step24Answer_1: 0,
        step24Answer_2: 0,
        step24Answer_3: 0,
        step24Answer_4: 0,
        step26Answer_1: 0,
        step26Answer_2: 0,
        step27Answer_1: 0,
        step27Answer_2: 0,
        step28Answer_1: 0,
        step28Answer_2: 0,
        step29Answer_1: 0,
        step29Answer_2: 0,
        step30Answer_1: 0,
        step30Answer_2: 0,
        step31Answer_1: 0,
        step31Answer_2: 0,
        step32Answer_1: 0,
        step32Answer_2: 0,
        step33Answer_1: 0,
        step33Answer_2: 0,
        step34Answer_1: 0,
        step34Answer_2: 0,
        step35Answer_1: 0,
        step35Answer_2: 0,
        step36Answer_1: 0,
        step36Answer_2: 0,
        step37Answer_1: 0,
        step37Answer_2: 0,
        step40Answer_1: 0,
        step40Answer_2: 0,
        step40Answer_3: 0,
        step: 0,
    };

    selectedUser?.answers.forEach((a) => {
        answers[a.meta_key] = a.meta_value;
    });

    const exportToCSV = (csvData, fileName, fileExtension) => {
        console.log('test');
        const createDate = moment
            .utc(selectedUser?.created_at)
            .tz("America/New_York")
            .format("MM-DD-YYYY");
        const paidDate = moment
            .utc(selectedUser?.current_plan?.created_at)
            .tz("America/New_York")
            .format("MM-DD-YYYY");
        const checkpointDate = moment
            .utc(selectedUser?.answers[selectedUser.answers.length - 1].updated_at)
            .tz("America/New_York")
            .format("MM-DD-YYYY");

        let aData: any = [];
        aData.push({ title: "name", answer: selectedUser?.name });
        aData.push({ title: "email", answer: selectedUser?.email });
        aData.push({ title: "phone number", answer: selectedUser?.phone_number });
        aData.push({ title: "create date", answer: createDate });
        aData.push({ title: "checkpoint date", answer: checkpointDate });
        aData.push({
            title: "paid subscriber date",
            answer: selectedUser?.current_plan ? paidDate : "",
        });
        aData.push({ title: "date of birth", answer: moment(csvData.filter((i) => i.title === "When is your birthday?")[0].answer).format("MM-DD-YYYY") });
        aData.push({ title: "lead status", answer: "RetireUS" });
        // console.log(aData)

        const csvs = [...aData, ...csvData]

        const csvHeaders = csvs.map((c) => c.title);
        const csvValues = csvs.map((c) => c.answer);
        // const ws = XLSX.utils.json_to_sheet(csvData);
        const ws = XLSX.utils.aoa_to_sheet([csvHeaders, csvValues]);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: xlsxMimeType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    useEffect(() => {
        const tmpQuizSteps: Array<Question> = [];
        for (let i = 0; i < questionOrder.length; i++) {
            tmpQuizSteps.push(questionAnswers[questionOrder[i]]);
        }

        const _quizSteps = tmpQuizSteps.map((q, i) => {
            return parseQuestionData(q);
        });

        setQuizSteps(_quizSteps);
    }, [selectedUser]);

    const passedYear = (birthYear) => {
        if (birthYear) {
            let currentDate = moment();
            let birthDate = moment(birthYear, "MM/DD/YYYY");
            if (
                currentDate.month() > birthDate.month() ||
                (currentDate.month() == birthDate.month() &&
                    currentDate.date() > birthDate.date())
            ) {
                return currentDate.year() - birthDate.year();
            } else {
                return currentDate.year() - birthDate.year() - 1;
            }
        } else {
            return 0;
        }
    };

    const parseQuestionData = (question: Question) => {
        let answer = "";
        let title = question.title;

        if (question.single) {
            let selectedAnswer = selectedUser?.answers.find(
                (e) => e.meta_key == question.answers[0].meta_key
            );
            if (selectedAnswer) {
                answer = selectedAnswer.meta_value;
            }
        } else {
            question.answers.map((questionAnswer) => {
                let selectedAnswer = selectedUser?.answers.find(
                    (e) => e.meta_key == questionAnswer.meta_key
                );
                if (selectedAnswer?.meta_value == "1") {
                    answer = answer
                        ? `${answer}, ${questionAnswer.title}`
                        : questionAnswer.title;
                }
            });
        }

        let wantToRetireAge = selectedUser?.answers.find(
            (e) => e.meta_key == "wantToRetireAge"
        );
        let birthYear = selectedUser?.answers.find(
            (e) => e.meta_key == "birthYear"
        );

        if (wantToRetireAge && birthYear) {
            let accomplishYear =
                parseInt(wantToRetireAge.meta_value) -
                passedYear(birthYear.meta_value);
            title = title.replace(/:wantedYear:/g, accomplishYear.toString());
            answer = answer.replace(/:wantedYear:/g, accomplishYear.toString());
            title = title.replace(/:year:/g, accomplishYear.toString());
            answer = answer.replace(/:year:/g, accomplishYear.toString());
        }

        return { title, answer };
    };

    const QuestionItem: React.FC<QuestionItemProps> = ({
        title,
        answer,
        itemKey,
    }) => {
        return answer ? (
            <div
                className="w-full grid grid-cols-2 mb-1 gap-5 border-b-[1px] border-gray-300"
                key={itemKey}
            >
                <div>{title}</div>
                <div className="text-left">{answer}</div>
            </div>
        ) : (
            <></>
        );
    };

    const timeStamp = () => {
        if (selectedUser?.profile_complete_step && selectedUser.answers.length)
            return moment
                .utc(
                    selectedUser?.answers[selectedUser.answers.length - 1]
                        .updated_at
                )
                .tz("America/New_York")
                .format("YYYY-MM-DD h:mm A");
        else return null;
    };

    return (
        <Scrollbars>
            <div className="w-full px-5 h-full">
                {selectedUser?.role == "admin" ? (
                    <div className="text-center pt-16 text-4xl">Admin User</div>
                ) : selectedUser?.answers.length ? (
                    <>
                        <div className="w-full text-right">
                            <button
                                onClick={(e) =>
                                    exportToCSV(
                                        quizSteps,
                                        "planning_results_report",
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
                                        quizSteps,
                                        "planning_results_report",
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
                        <div className="w-full">
                            <div className="p-3 text-center text-xl">
                                Time stamp {timeStamp()}
                            </div>
                            {quizSteps.map((e, index) => (
                                <QuestionItem
                                    title={e.title}
                                    answer={e.answer}
                                    key={index}
                                    itemKey={index}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center pt-16 text-4xl">
                        This user has not been completed Questionnaire yet.
                    </div>
                )}
            </div>
        </Scrollbars>
    );
};

export default Questionnaire;
