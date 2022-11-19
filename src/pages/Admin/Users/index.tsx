import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUsers } from "@/store/setting/action";
// import OnboardingUser from "./OnboardingUser";
// import RolloverUser from "./RolloverUser";
import IntroUsers from "./IntroUsers";
import RegisteredUser from "./RegisteredUser";

interface locationStateProps {
    user_type: "registered" | "onboarding" | "rollover" | "intro";
}

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const [userType, setUserType] = useState<string>("registered");

    const location = useLocation();
    const userTypeState: locationStateProps =
        location.state as locationStateProps;

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        if (userTypeState?.user_type) {
            setUserType(userTypeState?.user_type);
        }
    }, [userTypeState]);

    return (
        <>
            {userType === "registered" && (
                <div className="w-full mt-20 bg-white rounded-lg p-5">
                    <div className="w-full flex py-5 items-center text-2xl font-semibold">
                        Registered Users
                    </div>
                    <RegisteredUser />
                </div>
            )}
            {userType === "intro" && <IntroUsers />}
        </>
    );
};

export default Users;
