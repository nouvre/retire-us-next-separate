import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { MenuProps } from 'antd';
import { Dropdown, Menu } from "antd";
import { User } from "@/store/setting/types";
import { getUserDetail } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";
import Flags from "../UserDetail/Flags";
import Questionnaire from "../UserDetail/Questionnaire";


const IntroUsers: React.FC = (props) => {
    const dispatch = useDispatch();
    const [filterUsers, setFilterUsers] = useState<User[]>([]);
    const [filterText, setFilterText] = useState<string>("");
    const [curItem, setCurItem] = useState<string>("");
    const [selectedUser, setSelectedUser] = useState<User | null>();
    const [isSubmitted, setIsSubmitted] = useState<string>('unsubmitted');

    const users = useSelector(
        (state: ApplicationState) => state.settings.registeredUsers
    );

    const pending = useSelector(
        (state: ApplicationState) => state.common.pending
    );

    useEffect(() => {
        let tempUsers: User[] = [];
        users.forEach((user) => {
            if (
                user.email.toLowerCase().indexOf(filterText.toLowerCase()) !==
                -1 &&
                user.user_type === "intro" &&
                !user.name
            ) {
                tempUsers.push(user);
            }
        });
        setFilterUsers(tempUsers);
    }, [filterText, users]);

    useEffect(() => {
        if (pending) {
            setIsSubmitted('submitting');
        } else {
            if (isSubmitted == 'submitting') {
                setIsSubmitted('submitted');
            }
        }
    }, [pending])

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {

        setCurItem(key);
    }

    const handleClickUser = (user: User) => {
        if (selectedUser?.id !== user.id) {
            dispatch(getUserDetail(user.id));
            setSelectedUser(user);
            setCurItem('none');
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={"flags"}>
                Flags
            </Menu.Item>
            <Menu.Item key={"checkpoint"}>
                Checkpoint
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="w-full min-h-[calc(100vh-32px)] flex pt-20">
            <div className="w-[220px] flex flex-none flex-col py-6 px-4 bg-white rounded-lg">
                <div className="w-full text-2xl font-semibold py-10">
                    Intro Users
                </div>
                <input
                    type="text"
                    className="rounded-md outline-none border border-gray-300 py-1 px-3"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                {filterUsers.map((user, key) => (
                    <Dropdown overlay={menu} trigger={['click']} key={key}>
                        <div
                            key={key}
                            className="py-4 border-b text-lg font-bold truncate hover:cursor-pointer"
                            onClick={() => handleClickUser(user)}
                        >
                            {user.email}
                        </div>
                    </Dropdown>
                ))}
            </div>
            <div className="w-full">
                {isSubmitted == 'submitted' &&
                    <>
                        {(curItem === "flags" || curItem === "checkpoint") &&
                            <div className="w-full flex mb-4 justify-center">
                                <div className="text-3xl mr-36 px-5 whitespace-nowrap">
                                    {selectedUser?.name}
                                </div>
                                <div className="text-3xl">{selectedUser?.email}</div>
                            </div>
                        }
                        {!pending && curItem === "flags" &&
                            <Flags />
                        }
                        {!pending && curItem === "checkpoint" &&
                            <Questionnaire />
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default IntroUsers;
