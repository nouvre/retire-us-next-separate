import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { Rollover } from "@/store/setting/types";
import { ApplicationState } from "@/store";
import AccountIcon from "@2fd/ant-design-icons/lib/Account";
import moment from "moment";

const RolloverRollover: React.FC = () => {
    const rolloverRollovers = useSelector(
        (state: ApplicationState) => state.settings.rolloverUsers
    );

    const [users, setRollovers] = useState<Rollover[]>([]);
    const [filterText, setFilterText] = useState<string>("");

    useEffect(() => {
        let tempUsers: Rollover[] = [];
        rolloverRollovers.forEach((user) => {
            if (
                user.firstname?.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
                user.lastname?.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
                user.email?.indexOf(filterText) !== -1
            ) {
                tempUsers.push(user);
            }
        });
        setRollovers(tempUsers);
    }, [filterText]);

    useEffect(() => {
        if (rolloverRollovers.length) {
            setRollovers(rolloverRollovers);
        }
    }, [rolloverRollovers]);

    const columns: any[] = [
        {
            title: "No",
            dataIndex: "",
            render: (text, row, index: number) => <span>{index + 1}</span>,
        },
        {
            title: "First Name",
            dataIndex: "firstname",
            sorter: (a: Rollover, b: Rollover) =>
                a.firstname.localeCompare(b.firstname),
            render: (text: string, row: Rollover) => (
                <Link href={`user/rollover/${row.id}`}>{text}</Link>
            ),
        },
        {
            title: "Last Name",
            dataIndex: "lastname",
            sorter: (a: Rollover, b: Rollover) =>
                a.lastname.localeCompare(b.lastname),
            render: (text: string, row: Rollover) => (
                <Link href={`user/rollover/${row.id}`}>{text}</Link>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a: Rollover, b: Rollover) =>
                a.email.localeCompare(b.email),
        },
        {
            title: "Create Date",
            dataIndex: "created_at",
            defaultSortOrder: "descend",
            sorter: (a: Rollover, b: Rollover) => {
                return (
                    moment(a.created_at).unix() - moment(b.created_at).unix()
                );
            },
            render: (text: string) => {
                return <div>{moment(text).format("YYYY-MM-DD H:mm a")}</div>;
            },
        },
        {
            title: "",
            dataIndex: "",
            render: (text: string, row: Rollover) => (
                <div className="w-full h-full flex justify-evenly items-center">
                    <Link href={`user/rollover/${row.id}`}>
                        <button className="w-8 h-8 rounded-full bg-[#87cf68] text-white text-lg flex justify-center items-center">
                            <AccountIcon />
                        </button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <div className="w-full mb-5">
                <input
                    type="text"
                    className="rounded-md outline-none border border-gray-300 py-1 px-3"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </div>
            <Table
                columns={columns}
                dataSource={users}
                rowKey={"id"}
                showSorterTooltip={false}
            />
        </div>
    );
};

export default RolloverRollover;
