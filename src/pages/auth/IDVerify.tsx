import axios from "../../util/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "@/store";
import Header from "../Dashboard/Header";
import { Toast } from "@/components/common/notification";

const IDVerify: React.FC = () => {
    const user = useSelector((state: ApplicationState) => state.auth.user);
    const [url, setUrl]=useState<string>("");    
    useEffect(()=>{
        if (user) {
            if (user.id_verified) {
                console.log("Verified user");
            } else{
                axios.post("auth/id-verify", user.email)
                .then(res => {                   
                    setUrl(res.data.data.url);
                })
                .catch(err=>{
                    Toast("",err.response.data.message,"danger");
                });
            }            
        }
    },[])
   
    return (
        <div className="w-full h-full relative pt-[60px] md:pt-[142px] pb-10 px-0 md:px-[60px] ">
            <Header title="Verify ID" />
            <div className="px-6 md:px-0 mt-3 md:mt-0 h-full">
                <iframe
                    src={url ? url : ""}
                    frameBorder="0"
                    className="verifyIFrame w-full"
                ></iframe>
            </div>
        </div>
    );
};

export default IDVerify;
