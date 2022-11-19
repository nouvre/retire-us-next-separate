import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { ApplicationState } from "@/store";
import ProfileCompleteStep from '../../constants/routes';
import Header from "../Header";

const Video: React.FC = () => {
    const user = useSelector((state:ApplicationState) => state.auth.user);
    const token = useSelector((state:ApplicationState) => state.auth.token);

    return (
        <div className="w-full h-screen pt-32">
            <Header opacity={false} />
            <div className="w-full h-full items-center p-4 bg-[#F3F5F9]">
                <video
                    src="https://retireus-store.s3.us-west-2.amazonaws.com/%242y%2410%24q2NwOfAtoZrtxSViQtweMeOAeLSMvSQUsc1AsPXc2JUawrdP4wP.S.mp4"
                    className="max-w-[900px] m-auto w-full my-5"
                    autoPlay
                    controls
                ></video>
                <div className="w-full flex justify-center">
                    {token && user ?(
                        <Link href={ProfileCompleteStep[user.authenticate_type][user.profile_complete_step + 1]} className="flex items-center justify-center px-12 h-[65px] text-xl font-bold bg-[#0A2C75] text-white">
                            Next
                        </Link>
                    ) :(
                        <Link href="/signup" className="flex items-center justify-center px-12 h-[65px] text-xl font-bold bg-[#0A2C75] text-white">
                            Sign Up
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Video;
