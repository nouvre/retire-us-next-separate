import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Table } from "antd";
import { User } from "@/store/setting/types";
import { ApplicationState } from "@/store/index";
import AccountIcon from "@2fd/ant-design-icons/lib/Account";
import moment from "moment";

const RegisteredUser: React.FC = () => {
    const registeredUsers = useSelector(
        (state: ApplicationState) => state.settings.registeredUsers
    );
    const [users, setUsers] = useState<User[]>([]);
    const [filterText, setFilterText] = useState<string>("");

    useEffect(() => {
        let tempUsers: User[] = [];
        registeredUsers.forEach((user) => {
            if (
                (user.name.toLowerCase().indexOf(filterText.toLowerCase()) !==
                    -1 ||
                    user.email
                        .toLowerCase()
                        .indexOf(filterText.toLowerCase()) !== -1) &&
                (user.user_type === "normal" || user.name)
            ) {
                tempUsers.push(user);
            }
        });
        setUsers(tempUsers);
    }, [filterText, registeredUsers]);

    const columns: any[] = [
        {
            title: "No",
            dataIndex: "",
            render: (text, row, index: number) => <span>{index + 1}</span>,
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a: User, b: User) => a.name.localeCompare(b.name),
            render: (text: string, row: User) => (
                <Link href={`user/${row.id}`}>{row.name}</Link>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a: User, b: User) => a.email.localeCompare(b.email),
        },
        {
            title: "Create Date",
            dataIndex: "created_at",
            sorter: (a, b) => {
                if (a.created_at && b.created_at) {
                    return (
                        moment(a.created_at).unix() -
                        moment(b.created_at).unix()
                    );
                }
                return 1;
            },
            render: (row) =>
                row ? moment(row).format("MM-DD-YYYY") : "Not Set",
        },
        {
            title: "Subscription Date",
            dataIndex: "current_plan",
            sorter: (a, b) => {
                if (a.current_plan && b.current_plan) {
                    return (
                        moment(a.current_plan.updated_at).unix() -
                        moment(b.current_plan.updated_at).unix()
                    );
                } else if (a.current_plan) {
                    return 1;
                } else if (b.current_plan) {
                    return 0;
                }
                return 1;
            },
            render: (row) =>
                row ? moment(row.updated_at).format("MM-DD-YYYY") : "Not Set",
        },
        {
            title: "",
            dataIndex: "",
            render: (text: string, row: User) => (
                <div className="w-full h-full flex justify-evenly items-center">
                    <Link href={`users/${row.id}`}>
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

export default RegisteredUser;
