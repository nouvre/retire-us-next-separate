import React, { useEffect, useState, PureComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAnalyticData } from "@/store/setting/action";
import { Scrollbars } from "react-custom-scrollbars";
import {
    LineChart,
    BarChart,
    Bar,
    Cell,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
} from "recharts";
import { ApplicationState } from "@/store";
import moment from "moment-timezone";
moment.tz.add("America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0");

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState<Array<any> | null>(null);
    const [planData, setPlanData] = useState<Array<any> | null>(null);
    const subscribers = useSelector(
        (state: ApplicationState) => state.settings.subscribers
    );
    const userCountPerWeek = useSelector(
        (state: ApplicationState) => state.settings.userCountPerWeek
    );
    const subcriberCountPerWeek = useSelector(
        (state: ApplicationState) => state.settings.subcriberCountPerWeek
    );
    const subscriberCountPerPlan = useSelector(
        (state: ApplicationState) => state.settings.subscriberCountPerPlan
    );

    useEffect(() => {
        dispatch(getAnalyticData());
    }, []);

    useEffect(() => {
        if (!userCountPerWeek || !subcriberCountPerWeek) return;
        let tempData: Array<any> = [];

        for (let i = 0; i < userCountPerWeek.length; i++) {
            let name: string = "";
            switch (i) {
                case 0:
                    name = "This week";
                    break;
                case 1:
                    name = "Last week";
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    name = i + " weeks ago";
                    break;
            }
            tempData.push({
                name: name,
                user: userCountPerWeek[i],
                subscriver: subcriberCountPerWeek[i],
            });
        }
        setData(tempData);
    }, [userCountPerWeek, subcriberCountPerWeek]);

    useEffect(() => {
        if (!subscriberCountPerPlan) return;
        let tempData: Array<any> = [];

        for (let i = 0; i < subscriberCountPerPlan.length; i++) {
            let name: string = "";
            switch (i) {
                case 0:
                    name = "Resilient Retirement";
                    break;
                case 1:
                    name = "Tax Mastery";
                    break;
                case 2:
                    name = "CFP Wealth Coach";
                    break;
            }
            tempData.push({
                name: name,
                Count: subscriberCountPerPlan[i],
            });
        }
        setPlanData(tempData);
    }, [subscriberCountPerPlan]);

    const renderCustomAxisTick = ({ x, y, payload }) => {
        if (!payload) {
            return <div></div>;
        }
        let text1 = "";
        let text2 = "";

        switch (payload.value) {
            case "Resilient Retirement":
                text1 = "Resilient";
                text2 = "Retirement";
                break;
            case "Tax Mastery":
                text1 = "Resilient Retirement®";
                text2 = "+ Tax Mastery";
                break;
            case "CFP Wealth Coach":
                text1 = "CFP Wealth";
                text2 = "Coach";
                break;
        }

        return (
            <text
                orientation="bottom"
                width="331"
                height="40"
                type="category"
                x={x}
                y={y}
                stroke="none"
                fill="#666"
                className="recharts-text recharts-cartesian-axis-tick-value"
                textAnchor="middle"
            >
                <tspan x={x} dy="0.71em">
                    {text1}
                </tspan>
                <tspan x={x} dy="1.2em">
                    {text2}
                </tspan>
            </text>
        );
    };

    function CustomTooltip(props: any) {
        const { active, label, payload } = props;
        if (active) {
            let title: string = "";
            switch (label) {
                case "Resilient Retirement":
                    title = "Resilient Retirement";
                    break;
                case "Tax Mastery":
                    title = "Resilient Retirement® + Tax Mastery";
                    break;
                default:
                    title = "CFP Wealth Coach";
            }
            return (
                <div
                    style={{
                        backgroundColor: "#000",
                        opacity: "0.9",
                        borderRadius: "4px",
                        border: "1px solid white",
                        padding: "10px",
                    }}
                >
                    <p>{title}</p>
                    <p>Count : {payload[0].value}</p>
                </div>
            );
        }

        return null;
    }

    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;

        return (
            <g>
                <circle
                    cx={x + width / 2}
                    cy={y - radius}
                    r={radius}
                    fill="#fc00ff"
                />
                <text
                    x={x + width / 2}
                    y={y - radius}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {value}
                </text>
            </g>
        );
    };

    const convertToET = (time: string) => {
        return moment.utc(time).tz("America/New_York").format("MM/DD/YYYY");
    };

    return (
        <div className="flex place-items-center h-[calc(100vh-7rem)]  w-full mt-20 px-5 gap-3 text-white text-center">
            <div className="w-[400px] h-[500px] flex flex-col  gap-3">
                <div className="h-1/2 flex flex-col bg-gradient-to-b from-[#3F68E4] to-[#5EC4F7] rounded-lg p-3">
                    <div className=" text-lg  font-bold">
                        Recent Subscriptions
                    </div>
                    <div className="flex font-bold">
                        <div className="flex-1">Client Name</div>
                        <div className="flex-1">Create Date</div>
                    </div>
                    <Scrollbars>
                        {subscribers?.map((subscriber, inx) => (
                            <div
                                className="flex border-b-[1px] border-gray-100  border-opacity-25"
                                key={inx}
                            >
                                <Link
                                    className="flex-1 customLink"
                                    href={`user/${subscriber.user_id}`}
                                >
                                    {subscriber.users?.name}
                                </Link>
                                <div className="flex-1">
                                    {convertToET(subscriber.updated_at)}
                                </div>
                            </div>
                        ))}
                    </Scrollbars>
                </div>
                <div className="h-1/2 flex flex-col bg-gradient-to-b from-[#3F68E4] to-[#5EC4F7] rounded-lg p-3">
                    <div className="text-center text-lg font-bold">
                        Subscriptions
                    </div>
                    {planData && (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={200}
                                height={40}
                                data={planData}
                                margin={{
                                    top: 5,
                                    right: 15,
                                    left: -30,
                                    bottom: 10,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    tick={renderCustomAxisTick}
                                />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="Count" fill="#12ff00">
                                    <LabelList
                                        dataKey="Count"
                                        content={renderCustomizedLabel}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
            <div className="flex-grow flex flex-col h-[500px]  bg-gradient-to-b from-[#3F68E4] to-[#5EC4F7] rounded-lg p-3">
                <div className="text-center text-lg font-bold">
                    User Analytics
                </div>
                {data && (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#000",
                                    opacity: "0.9",
                                    borderRadius: "4px",
                                }}
                            />
                            <Legend
                                width={280}
                                wrapperStyle={{
                                    left: "calc(50% - 140px)",
                                    backgroundColor: "#000",
                                    opacity: "0.9",
                                    borderRadius: "4px",
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="user"
                                name="New Users"
                                stroke="#12ff00"
                                strokeWidth={3}
                                activeDot={{ r: 6 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="subscriver"
                                name="New Subscribers"
                                stroke="#fc00ff"
                                strokeWidth={3}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
