import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import moment from "moment";
import Link from "next/link";
import { Table } from "antd";
import { User } from "@/store/setting/types";
import { deleteUser } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";
import AccountCircle from "@2fd/ant-design-icons/lib/AccountCircle";
import MinusCircle from "@2fd/ant-design-icons/lib/MinusCircle";

const RegisteredUser: React.FC = () => {
    const dispatch = useDispatch();
    const registeredUsers = useSelector(
        (state: ApplicationState) => state.settings.registeredUsers
    );
    const [users, setUsers] = useState<User[]>([]);
    const [filterText, setFilterText] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState<User>();

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
                <div className="w-full h-full flex items-center">
                    <div className="mr-2" onClick={() => { setIsOpen(true); setUser(row); }}>
                        <MinusCircle className="rounded-full bg-white text-red-600 text-[32px] text-lg flex justify-center items-center hover:cursor-pointer"/>
                    </div>
                    <Link href={`users/${row.id}`}>
                        <AccountCircle className="rounded-full bg-white text-[#87cf68] text-[32px] flex justify-center items-center"/>
                    </Link>
                </div>
            ),
        },
    ];

    const handleClick = async () => {
        await dispatch(deleteUser(user?.id));
        setIsOpen(false);
    }

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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="mt-2">
                            <p className="text-lg text-gray-900 text-center">
                                Are you sure you want to remove
                            </p>
                            <p className="text-lg text-gray-900 text-center">
                                this user?
                            </p>
                        </div>

                        <div className="flex justify-evenly items-center mt-4">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={handleClick}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={() => setIsOpen(false)}
                            >
                                No
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default RegisteredUser;
