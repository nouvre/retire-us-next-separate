import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store";
import { updateUser, sendResetPasswordEmail } from "@/store/auth/action";

const QuickView: React.FC = () => {
    const dispatch = useDispatch();

    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    return (
        <Scrollbars>
            <div className="w-full p-28 flex flex-col justify-center items-center h-full">
                <div className="grid grid-cols-2 gap-5 text-2xl">
                    <div>Name</div>
                    <div>{selectedUser?.name}</div>
                    <div>Email Address</div>
                    <div>{selectedUser?.email}</div>
                    <div>State</div>
                    <div>{selectedUser?.state}</div>
                    <div>Phone Number</div>
                    <div>{selectedUser?.phone_number}</div>
                </div>
                <div className="flex gap-4 mt-6">
                    <button
                        disabled={selectedUser?.is_active ? false : true}
                        className="flex justify-center items-center h-10 px-6 bg-red-600 disabled:bg-red-400 text-base text-white rounded-lg"
                        onClick={() =>
                            dispatch(
                                updateUser(selectedUser?.id, { is_active: 0 })
                            )
                        }
                    >
                        Disable User
                    </button>

                    <button
                        disabled={selectedUser?.is_active ? true : false}
                        className="flex justify-center items-center h-10 px-6 bg-blue-700 disabled:bg-blue-400 text-base text-white rounded-lg"
                        onClick={() =>
                            dispatch(
                                updateUser(selectedUser?.id, { is_active: 1 })
                            )
                        }
                    >
                        Enable User
                    </button>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="flex justify-center items-center h-10 px-6 bg-yellow-500 text-base text-white rounded-lg"
                        onClick={() =>
                            dispatch(
                                sendResetPasswordEmail(selectedUser?.email)
                            )
                        }
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </Scrollbars>
    );
};

export default QuickView;
