import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@headlessui/react";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../Header";
import RetirementPacing from "@/components/Questionnare/RetirementPacing";
import TaxPlaning from "@/components/Questionnare/TaxPlaning";
import RiskOfFailure from "@/components/Questionnare/RiskOfFailure";
import { SharedFillButton } from "@/components/Buttons/SharedFillButton";
import { getQuestionnare } from "@/store/questions/action";
import { getUser, advisorMeet } from "@/store/auth/action";
import { Todo } from "@/store/auth/types";
import { ApplicationState } from "@/store";
import { useQuestionnaire } from "../../../util/func";
import { classNames } from "../../../util/helpers";

const Main = (props) => {
    const dispatch = useDispatch();

    const user = useSelector((state: ApplicationState) => state.auth.user);
    const answers = useSelector(
        (state: ApplicationState) => state.questions.answers
    );

    const [retirementYear, setRetirementYear] = useState<number>(0);
    const [retirementTimeline, setRetirementTimeline] = useState<number>(0);
    const [goalHover, setGoalHover] = useState<boolean>(true);
    const [scheduleHover, setScheduleHover] = useState<boolean>(true);
    const retirementAge = answers?.wantToRetireAge || 0;

    const {
        checkRetRF1,
        checkRetRF3,
        checkRetRF4,
        checkRetRF5,
        checkTaxRF1,
        checkCfpRF3,
    } = useQuestionnaire({ answers });

    useEffect(() => {
        dispatch(getQuestionnare());
        dispatch(getUser());
    }, []);

    useEffect(() => {
        if (answers) {
            generateValues();
        }
    }, [answers]);

    const generateValues = () => {
        let currentAge = getCurrentAge(answers?.birthYear);
        if (currentAge) {
            let currentYear = moment().year();
            setRetirementYear(currentYear - currentAge + retirementAge);
            setRetirementTimeline(retirementAge - currentAge);
        } else console.log("Error occured while calculating current age.");
    };

    const getCurrentAge = (birthYear) => {
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

    const handleClick = (todo: Todo) => {
        if (!user) return;
        if (todo.id == 1) {
            props.history.push(todo.link);
        } else {
            if (
                todo.completed === "E" ||
                (todo.id === 2 &&
                    (user.profile || user.todos[0].completed == "E")) ||
                (todo.id === 3 &&
                    (user.profile || user.todos[0].completed == "E") &&
                    user.rep_id &&
                    (user.whealth_concierge_meet ||
                        user.todos[1].completed == "E")) ||
                (todo.id === 4 &&
                    (user.profile || user.todos[0].completed == "E") &&
                    user.rep_id &&
                    (user.whealth_concierge_meet ||
                        user.todos[1].completed == "E")) ||
                todo.id === 5 ||
                (todo.id === 6 &&
                    (user.todos[3].completed == "E" || user.advisor_meet))
            ) {
                if (todo.type === "link") {
                    props.history.push(todo.link);
                } else if (todo.type === "window") {
                    window.open(todo.link);
                } else if (todo.type === "custom") {
                    if (user?.rep) {
                        dispatch(advisorMeet());
                        window.open(user?.rep.url);
                    }
                }

                // if (todo.link !== "/dashboard" && todo.type === "window")
                //     dispatch(updateTodolist(todo.id));
            }
        }
    };

    const handleCompletePlanningReview = () => {
        // dispatch(gotoProfileStep());
        props.history.push("/start-planning");
    };

    const convertToShort = (value: number) => {
        let suffix = "";
        if (value >= 1000000) {
            if (value % 1000000) value = value / 1000000;
            else value = parseFloat((value / 1000000).toFixed(2));
            suffix = "M";
        } else if (value >= 1000) {
            if (value % 1000) value = value / 1000;
            else value = parseFloat((value / 1000).toFixed(2));
            suffix = "K";
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
    };

    const isCompleteTodos = () => {
        let result = true;
        if (user?.todos) {
            // if (!user.id_verified) return false;
            user.todos.forEach((todo) => {
                if (
                    todo.completed != "E" &&
                    todo.completed != "Y" &&
                    !user.id_verified
                ) {
                    result = false;
                }
            });
        }
        return result;
    };

    return (
        <div className="w-full relative pt-[60px] md:pt-[142px] pb-10 px-0 md:px-[60px] ">
            <Header />
            <div className="px-6 md:px-0 mt-3 md:mt-0">
                <div className="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 gap-[20px]">
                    <div className="lg:col-span-2 bg-gradient-to-r from-[#3F68E4] to-[#5EC4F7] rounded-[20px] px-5 py-4 md:px-10 md:py-8 grid grid-cols-4 lg:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center gap-4">
                                <span className="text-[70px] leading-[74px] text-white font-bold">
                                    {retirementTimeline}
                                </span>
                                <span className="text-xl leading-8 text-white">
                                    years to retirement
                                </span>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-3 mt-8">
                                <div className="w-full border border-white rounded-xl p-[16px] flex flex-col items-start md:items-center">
                                    <span className="text-[20px] md:text-[28px] text-white font-bold mb-[4px] leading-none md:leading-[32px]">
                                        {retirementAge}
                                    </span>
                                    <span className="text-[14px] text-white leading-none">
                                        Retirement age
                                    </span>
                                </div>
                                <div className="w-full border border-white rounded-xl p-[16px] flex flex-col items-start md:items-center">
                                    <span className="text-[20px] md:text-[28px] text-white font-bold mb-[4px] leading-none md:leading-[32px]">
                                        {retirementYear}
                                    </span>
                                    <span className="text-[14px] text-white leading-none">
                                        Retirement year
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 relative flex justify-center items-end lg:items-center">
                            <div className="w-3 h-3 bg-[#FAA942] rounded-full absolute top-2 left-2"></div>
                            {user?.cur_retirement_value &&
                            user.retirement_goal ? (
                                <div className="relative rounded-full dashboard-circle">
                                    <svg
                                        version="1.1"
                                        viewBox="0 0 500 500"
                                        preserveAspectRatio="xMinYMin meet"
                                    >
                                        <circle
                                            cx={250}
                                            cy={250}
                                            r={230}
                                            style={{
                                                transform: "rotate(-90deg)",
                                                transformOrigin: "center",
                                            }}
                                        ></circle>
                                        <circle
                                            cx={250}
                                            cy={250}
                                            r={230}
                                            strokeDashoffset={
                                                1444 -
                                                (1444 *
                                                    user.cur_retirement_value) /
                                                    user.retirement_goal
                                            }
                                            style={{
                                                transform: "rotate(-90deg)",
                                                transformOrigin: "center",
                                            }}
                                        ></circle>
                                        <text x={"50%"} y={"50%"}>
                                            $
                                            {convertToShort(
                                                user.cur_retirement_value
                                            )}
                                        </text>
                                        <text x={"50%"} y={"65%"}>
                                            Goal: $
                                            {convertToShort(
                                                user.retirement_goal
                                            )}
                                        </text>
                                    </svg>
                                </div>
                            ) : (
                                <div
                                    className="relative"
                                    onMouseOver={() => setGoalHover(false)}
                                    onMouseOut={() => setGoalHover(true)}
                                >
                                    <div
                                        className={`w-[150px] h-[150px] sm:w-[210px] sm:h-[210px] flex justify-center items-center border-[3px] border-[#ffffff4d] rounded-full relative`}
                                    >
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="text-white text-4xl font-bold">
                                                $
                                            </div>
                                            <div className="text-[#ffffffcc] text-lg font-bold">
                                                Goal: $
                                            </div>
                                        </div>
                                        <img
                                            src="/assets/images/lock-white.svg"
                                            alt="lock"
                                            className="absolute top-[-5px] right-[-5px]"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            goalHover ? "hidden" : "flex"
                                        } cursor-pointer absolute top-0 left-0 w-full h-full flex-col gap-4 justify-center items-center bg-[#0950B6] bg-opacity-20 backdrop-blur-xl rounded-[12px] z-10 p-4`}
                                        // onClick={() =>
                                        //     handleCompletePlanningReview()
                                        // }
                                    >
                                        <img
                                            src="/assets/images/lock-white.svg"
                                            alt="lock"
                                        />
                                        {/* <div className="text-white text-sm md:text-base text-center">
                                            <span className="underline">
                                                Complete planning review{" "}
                                            </span>
                                            <span className="sm:block">
                                                to unlock
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                            )}
                            <div className="w-3 h-3 bg-[#FAA942] rounded-full absolute bottom-2 right-2"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-white grid md:grid-cols-3 gap-[20px] rounded-[20px] p-5 md:p-6">
                        <div className="w-full">
                            <div className="text-[16px] text-[#A2ACBE] font-bold mb-[8px] md:mb-[20px]">
                                Retirement Pacing
                            </div>
                            <RetirementPacing
                                answers={answers}
                                showable={false}
                                checkPoint={user?.checkpoint}
                                numberOfPeriods={retirementTimeline}
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-[16px] text-[#A2ACBE] font-bold mb-[8px] md:mb-[20px]">
                                Tax Planning
                            </div>
                            <TaxPlaning
                                answers={answers}
                                showable={false}
                                checkPoint={user?.checkpoint}
                                retirementAge={answers.wantToRetireAge}
                                retirementYear={answers.wantToRetireAge}
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-[16px] text-[#A2ACBE] font-bold mb-[8px] md:mb-[20px]">
                                Risk of Failure
                            </div>
                            <RiskOfFailure
                                answers={answers}
                                showable={false}
                                numberOfPeriods={retirementTimeline}
                                checkPoint={user?.checkpoint}
                                retRF1={checkRetRF1()}
                                retRF3={checkRetRF3()}
                                retRF4={checkRetRF4()}
                                retRF5={checkRetRF5()}
                                taxRF1={checkTaxRF1()}
                                cfpRF3={checkCfpRF3()}
                            />
                        </div>
                    </div>

                    <div className="lg:row-span-2 p-5 md:p-6 rounded-[20px] bg-white">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-gradient-to-r from-[#3F68E4] to-[#5EC4F7] p-1">
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                            selected
                                                ? "bg-white shadow"
                                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    Planning To-Do's
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        classNames(
                                            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                            selected
                                                ? "bg-white shadow"
                                                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    Personal To-Do's
                                </Tab>
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                <Tab.Panel
                                    className={classNames(
                                        "rounded-xl bg-white p-3",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                                    )}
                                >
                                    <Scrollbars style={{ height: 350 }}>
                                        {user?.todos.map((todo, inx) => (
                                            <div
                                                key={todo.id}
                                                className={`flex items-center gap-[10px] py-[12px] md:py-[16px] border-b border-[#DDE3F0] cursor-pointer`}
                                                onClick={() =>
                                                    handleClick(todo)
                                                }
                                            >
                                                {todo.completed === "E" ||
                                                (todo.id === 1 &&
                                                    (user.profile ||
                                                        user.todos[0]
                                                            .completed ==
                                                            "E")) ||
                                                (todo.id === 2 &&
                                                    (user.profile ||
                                                        user.todos[0]
                                                            .completed ==
                                                            "E") &&
                                                    user.whealth_concierge_meet) ||
                                                (todo.id === 3 &&
                                                    (user.profile ||
                                                        user.todos[0]
                                                            .completed ==
                                                            "E") &&
                                                    user.rep_id &&
                                                    (user.whealth_concierge_meet ||
                                                        user.todos[1]
                                                            .completed ===
                                                            "E")) ||
                                                (todo.id === 5 &&
                                                    user.id_verified) ? (
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 form-checkbox bg-[#00BB7A] text-[#00BB7A] rounded-full"
                                                        checked
                                                    />
                                                ) : (
                                                    <div
                                                        className={`w-4 h-4 border ${
                                                            todo.completed ===
                                                                "E" ||
                                                            todo.id === 1 ||
                                                            (todo.id === 2 &&
                                                                (user.profile ||
                                                                    user
                                                                        .todos[0]
                                                                        .completed ==
                                                                        "E")) ||
                                                            (todo.id === 3 &&
                                                                (user.profile ||
                                                                    user
                                                                        .todos[0]
                                                                        .completed ==
                                                                        "E") &&
                                                                user.rep_id &&
                                                                (user.whealth_concierge_meet ||
                                                                    user
                                                                        .todos[1]
                                                                        .completed ==
                                                                        "E")) ||
                                                            todo.id === 4 ||
                                                            todo.id === 5 ||
                                                            (todo.id === 6 &&
                                                                (user.todos[3]
                                                                    .completed ==
                                                                    "E" ||
                                                                    user.advisor_meet))
                                                                ? "border-[#00BB7A]"
                                                                : "border-gray-400"
                                                        } rounded-full flex items-center justify-center`}
                                                        style={{
                                                            flexBasis: "1rem",
                                                            flexGrow: 0,
                                                            flexShrink: 0,
                                                        }}
                                                    ></div>
                                                )}
                                                <span
                                                    className={`text-[16px] md:text-[18px] ${
                                                        todo.completed ===
                                                            "E" ||
                                                        todo.id === 1 ||
                                                        (todo.id === 2 &&
                                                            (user.profile ||
                                                                user.todos[0]
                                                                    .completed ==
                                                                    "E")) ||
                                                        (todo.id === 3 &&
                                                            (user.profile ||
                                                                user.todos[0]
                                                                    .completed ==
                                                                    "E") &&
                                                            user.rep_id &&
                                                            (user.whealth_concierge_meet ||
                                                                user.todos[1]
                                                                    .completed ==
                                                                    "E")) ||
                                                        todo.id === 4 ||
                                                        todo.id === 5 ||
                                                        (todo.id === 6 &&
                                                            (user.todos[3]
                                                                .completed ==
                                                                "E" ||
                                                                user.advisor_meet))
                                                            ? "text-[#434A59]"
                                                            : "text-gray-400"
                                                    }`}
                                                >
                                                    {todo.name}
                                                </span>
                                            </div>
                                        ))}
                                    </Scrollbars>
                                </Tab.Panel>
                                <Tab.Panel
                                    className={classNames(
                                        "rounded-xl bg-white p-3",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                                    )}
                                >
                                    <Scrollbars style={{ height: 350 }}>
                                        {user?.dynamicTodos.map(
                                            (dynamicTodo, key) => (
                                                <div
                                                    key={key}
                                                    className={
                                                        "flex items-center gap-1 py-[12px] md:py-[16px] border-b border-[#DDE3F0] cursor-pointer"
                                                    }
                                                >
                                                    <input
                                                        className={`w-4 h-4 form-checkbox ${
                                                            dynamicTodo.ischecked
                                                                ? "text-[#00BB7A]"
                                                                : "border border-gray-400"
                                                        } rounded-full`}
                                                        type="checkbox"
                                                        checked={
                                                            dynamicTodo.ischecked
                                                        }
                                                    />
                                                    <span
                                                        className={
                                                            "text-[16px] md:text-[18px] text-[#434A59]"
                                                        }
                                                    >
                                                        {dynamicTodo.content}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </Scrollbars>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="relative w-full">
                        <div className="grid grid-cols-4 md:grid-cols-3 gap-4 md:gap-6 md:items-center h-full bg-white rounded-[20px] p-5 md:p-6">
                            <div className="col-span-3 md:col-span-2">
                                <div className="text-[16px] md:text-[20px] text-[#000714] font-bold mb-[12px]">
                                    Your Financial Planner
                                </div>
                                <div className="text-[14px] md:text-[16px] text-[#000714]">
                                    {user?.rep?.name}
                                </div>
                                <div className="text-[14px] md:text-[16px] text-[#434A59]">
                                    {user?.rep?.title}
                                </div>

                                <div className="w-full md:w-auto md:inline-block mt-[20px]">
                                    <SharedFillButton
                                        className="flex items-center text-base lg:text-lg font-bold px-[24px] py-[12px]"
                                        pill={true}
                                        onClick={() => {
                                            dispatch(advisorMeet());
                                            window.open(user?.rep.url);
                                        }}
                                    >
                                        <span>Schedule a meeting</span>
                                        <img
                                            src="/assets/images/arrow-right.svg"
                                            alt="Right Arrow"
                                            className="ml-[12px]"
                                        />
                                    </SharedFillButton>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img
                                    src={user?.rep?.avatar}
                                    className="w-full rounded-full border border-[#DDE3F0] max-w-[200px] ml-auto"
                                    alt="Planner"
                                />
                            </div>
                        </div>
                        {!(
                            user?.profile || user?.todos[0].completed == "E"
                        ) && (
                            <div
                                className="w-full h-full absolute top-0"
                                onMouseOver={() => setScheduleHover(false)}
                                onMouseOut={() => setScheduleHover(true)}
                            >
                                <div
                                    className={`${
                                        scheduleHover ? "block" : "hidden"
                                    } w-full h-full bg-[#ffffffcc] rounded-[20px] backdrop-blur-xl flex justify-center items-center `}
                                >
                                    <img
                                        className="w-[88px] h-[88px]"
                                        src="/assets/images/lock-dark.svg"
                                        alt="lock"
                                    />
                                </div>
                                <div
                                    className={`${
                                        scheduleHover ? "hidden" : "block"
                                    } cursor-pointer w-full h-full flex flex-col gap-2 justify-center items-center bg-[#ffffffcc] bg-opacity-20 backdrop-blur-2xl rounded-[12px] relative`}
                                    onClick={() =>
                                        props.history.push("/start-planning")
                                    }
                                >
                                    <img
                                        className="w-[88px] h-[88px]"
                                        src="/assets/images/lock-dark.svg"
                                        alt="lock"
                                    />
                                    <div className="text-[#000714] text-base text-center px-3 max-w-[370px]">
                                        You must{" "}
                                        <span className="underline text-[#4D7EF2]">
                                            complete your profile
                                        </span>{" "}
                                        before scheduling a meeting with your
                                        advisor
                                    </div>
                                </div>
                            </div>
                        )}
                        {(user?.profile || user?.todos[0].completed == "E") &&
                        !user.rep ? (
                            <div
                                className="w-full h-full absolute top-0"
                                onMouseOver={() => setScheduleHover(false)}
                                onMouseOut={() => setScheduleHover(true)}
                            >
                                <div
                                    className={`${
                                        scheduleHover ? "block" : "hidden"
                                    } w-full h-full bg-[#ffffffcc] rounded-[20px] backdrop-blur-xl flex justify-center items-center `}
                                >
                                    <img
                                        className="w-[88px] h-[88px]"
                                        src="/assets/images/lock-dark.svg"
                                        alt="lock"
                                    />
                                </div>
                                <div
                                    className={`${
                                        scheduleHover ? "hidden" : "block"
                                    } cursor-pointer w-full h-full flex flex-col gap-2 justify-center items-center bg-[#ffffffcc] bg-opacity-20 backdrop-blur-2xl rounded-[12px] relative`}
                                >
                                    <img
                                        className="w-[88px] h-[88px]"
                                        src="/assets/images/lock-dark.svg"
                                        alt="lock"
                                    />
                                    <div className="text-[#000714] text-base text-center px-3 max-w-[370px]">
                                        Advisor has not been assigned yet.
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="relative w-full">
                        <div className="grid grid-cols-4 md:grid-cols-3 gap-4 md:gap-6 md:items-center h-full bg-white rounded-[20px] p-5 md:p-6">
                            <div className="col-span-3 md:col-span-2">
                                <div className="text-[16px] md:text-[20px] text-[#000714] font-bold mb-[12px]">
                                    Questions? Speak with Wealth Concierge
                                </div>
                                <div className="text-[14px] md:text-[16px] text-[#000714]">
                                    Wealth Concierge supports you along your
                                    journey toward financial freedom
                                </div>
                                <div className="w-full md:w-auto md:inline-block mt-[20px]">
                                    <SharedFillButton
                                        className="flex items-center text-base lg:text-lg font-bold px-[24px] py-[12px]"
                                        pill={true}
                                        onClick={() => {
                                            props.history.push("/support");
                                        }}
                                    >
                                        <span>Speak with Wealth Concierge</span>
                                        <img
                                            src="/assets/images/arrow-right.svg"
                                            alt="Right Arrow"
                                            className="ml-[12px]"
                                        />
                                    </SharedFillButton>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img
                                    src="/assets/images/bullet.png"
                                    alt="bullet"
                                    className="w-full max-w-[200px] ml-auto"
                                />
                            </div>
                        </div>
                        {/* {!user?.profile && (
                            <div className="w-full h-full bg-[#ffffffcc] rounded-[20px] backdrop-blur-xl absolute top-0 flex justify-center items-center">
                                <img className="w-[88px] h-[88px]"
                                    src="/assets/images/lock-dark.svg"
                                    alt="lock"
                                />
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
