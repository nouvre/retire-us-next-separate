import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { MenuProps } from 'antd';
import { Menu, Table } from "antd";
import { User } from "@/store/setting/types";
import { getUserDetail } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";
import Flags from "../UserDetail/Flags";
import Questionnaire from "../UserDetail/Questionnaire";
import moment from "moment";


const IntroUsers: React.FC = (props) => {
	const dispatch = useDispatch();
	const [filterUsers, setFilterUsers] = useState<User[]>([]);
	const [filterText, setFilterText] = useState<string>("");
	const [curItem, setCurItem] = useState<string>("");
	const [selectedUser, setSelectedUser] = useState<User | null>();
	const [isSubmitted, setIsSubmitted] = useState<string>('unsubmitted');
	const [popupState, setPopupState] = useState<any>({
		visible: false,
		x: 0, y: 0
	})

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

	const ContextMenu = ({ user, visible, x, y }) => {
		if (visible) {
			return (
				<div className="bg-clip-padding bg-white rounded-[4px] drop-shadow-sm left-0 top-0 outline-none m-0 p-0 absolute overflow-hidden" style={{ left: `${x}px`, top: `${y}px` }}>
					<Menu onClick={handleMenuClick}>
						<Menu.Item key={"flags"}>
							Flags
						</Menu.Item>
						<Menu.Item key={"checkpoint"}>
							Checkpoint
						</Menu.Item>
					</Menu>
				</div>
			)
		} else {
			return null;
		}
	};

	const columns = [
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: '60%'
		},
		{
			title: 'Checkpoint Date',
			dataIndex: 'created_at',
			key: 'checkpoint_date',
			width: '40%',
			render: (text) => <>{moment(text).format("MM-DD-YYYY")}</>,
			sorter: (a, b) => moment(a.created_at).diff(moment(b.created_at)),
		},
	];

	return (
		<div className="w-full min-h-[calc(100vh-32px)] flex pt-20">
			<div className="w-[300px] flex flex-none flex-col py-6 px-4 bg-white rounded-lg">
				<div className="w-full text-2xl font-semibold py-10">
					Intro Users
				</div>
				<input
					type="text"
					className="rounded-md outline-none border border-gray-300 py-1 px-3 w-40"
					placeholder="Search..."
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
				/>
				<div className="mt-4">
					<Table columns={columns} dataSource={filterUsers} pagination={{ pageSize: 20 }} onRow={(record, rowIndex) => {
						return {
							onClick: (event) => { handleClickUser(record) }, // click row
							onContextMenu: (event) => {
								event.preventDefault()
								handleClickUser(record)
								if (!popupState.visible) {
									document.addEventListener(`click`, function onClickOutside() {
										setPopupState({ visible: false })
										document.removeEventListener(`click`, onClickOutside)
									})
								}
								setPopupState({
									record,
									visible: true,
									x: event.clientX,
									y: event.clientY
								})
							},
						};
					}} />
				</div>
				<ContextMenu {...popupState} />
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
