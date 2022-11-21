
import React , {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApplicationState } from "@/store/index";

import ArrowRight from "@2fd/ant-design-icons/lib/ArrowRight";
import ArrowLeft from "@2fd/ant-design-icons/lib/ArrowLeft";


const formSchema = Yup.object().shape({
    streetAddress: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zipCode: Yup.string(),
});


var initialValues = {   
    address: "",
    city: "",
    state: "",
    zipCode: "",
};

interface ComponentProps {
    handlePrev?: () => void;
    handleNext?: (arg: any) => void;
    hidden?: boolean | undefined;
}
const PlanStep3: React.FC<ComponentProps> = ({handlePrev, handleNext, hidden}) => {

    const [documents, setDocuments] = useState({});
    const user = useSelector((state: ApplicationState) => state.auth.user);
   
    const formik = useFormik({
        validationSchema: formSchema,
        initialValues:initialValues,
        onSubmit: (value ) => {
            let tempDocs = {};
            Object.keys(documents).map((key) => {
                Object.keys(documents[key]).map((fileKey, index) => {
                    tempDocs[`${key}[${index}]`] = documents[key][fileKey];
                });
            });
            if (handleNext) {
                handleNext({ ...value, ...tempDocs });
            }
        },
    });

    useEffect(()=>{
        if(user?.profile){
            initialValues.address = user.profile.address || "";
            initialValues.city = user.profile.city || "";
            initialValues.state = user.profile.state || "";
            initialValues.zipCode = user.profile.zipCode || "";
        }  
    },[user])


    return(
        <form onSubmit={formik.handleSubmit} className="w-full" hidden={hidden}>
            <div className="text-[18px] text-[#000714] font-bold pb-[16px] border-b border-[#DDE3F0]">
                Household information
            </div>
            <div className="w-full py-[16px]">
                <label
                    htmlFor="address"
                    className="w-full text-[16px] text-[#434A59] pl-[10px]"
                >
                   Street Address
                </label>                
                <input
                    type="text"
                    className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                    id="address"
                    placeholder="Street Address"
                    {...formik.getFieldProps("address")}
                    disabled={user?.profile? true: false}
                    readOnly={user?.profile? true: false}
                ></input>
            </div>
            <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor="city"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="city"
                        placeholder="City"
                        {...formik.getFieldProps("city")}
                        disabled={user?.profile? true: false}
                        readOnly={user?.profile? true: false}
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="state"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                        State
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="state"
                        placeholder="State"
                        {...formik.getFieldProps("state")}
                        disabled={user?.profile? true: false}
                        readOnly={user?.profile? true: false}
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="zipCode"
                        className="w-full text-[16px] text-[#434A59] pl-[10px]"
                    >
                       ZipCode
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 bg-white border border-[#DDE3F0] px-[24px] py-[12px] rounded-[12px] text-[20px]"
                        id="zipCode"
                        placeholder="ZipCode"
                        {...formik.getFieldProps("zipCode")}
                        disabled={user?.profile? true: false}
                        readOnly={user?.profile? true: false}
                    ></input>
                </div>
            </div>

            <div className={`w-full py-[16px] flex justify-between border-t border-[#DDE3F0]`}>
                    <button
                        className={`text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                flex items-center justify-center h-[60px] min-w-[160px]`}
                        onClick={()=>{
                            if(handlePrev)
                                handlePrev();
                        }}
                        type="button"
                    >
                        <ArrowLeft className="mr-3" />
                        Back
                    </button>
                    <button
                        className="text-white text-[18px] font-bold bg-[#001F55] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                flex items-center justify-center h-[60px] min-w-[160px]"
                        type="submit"
                    >
                        Next   
                         <ArrowRight className="ml-3" />
                    </button>
                </div> 
        </form>
        
    )
}

export default PlanStep3;