import React, { useEffect, useState } from "react";
import Header from '@/components/Pages/Header';
import { saveDataCollectionInfo } from "@/store/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { getDataCollectionFields } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";

const DataCollection: React.FC = () => {

    const [formdata, setFormdata] = useState({});
    const DataCollectionFields = useSelector(
        (state: ApplicationState) => state.settings.dataCollectionFields
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCollectionFields());
    }, []); 

    const changeFormFields = (key,e) => {
        let tempData = {...formdata};
        tempData[key] = e.target.files;
        setFormdata(tempData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let submitData = new FormData();
        Object.keys(formdata).map((key) => {
            Object.keys(formdata[key]).map((fileKey, index) => {
                submitData.append(`${key}[${index}]`, formdata[key][fileKey]);
            })
        })
        dispatch(saveDataCollectionInfo(submitData));
    };

    const handleSkip = () => {
        let submitData = new FormData();
        dispatch(saveDataCollectionInfo(submitData));
    }

    return (
        <div className="w-full min-h-screen pt-32">
            <Header opacity={false} />
            <div className="w-full flex justify-center">
                <div className="w-[800px] mt-[150px] p-10 box-border text-[#33475b]">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="w-full">
                            <div className="text-[32px] w-full my-4 font-semibold tracking-tight">Personal Information:</div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 text-sm gap-y-4 mb-5">
                                {DataCollectionFields.map((field, index) => (
                                    <div className="block" key={index}>
                                        <label htmlFor={field.key} className="text-[#3a54ed]">{field.title}</label>
                                        <input type="file" id={field.key} name={field.key} className="w-full" onChange={(e) => {changeFormFields(field.key,e)}} multiple={field.multiple} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-start gap-2">
                                <button 
                                    className="transition duration-300 py-2 px-8 h-14 bg-[#0a2b75] text-white text-base font-bold hover:text-[#0a2b75] hover:bg-white border-[3px] border-[#0a2b75] mr-2"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button 
                                    className="h-14 flex justify-center items-center font-bold text-xl mr-4 bg-[#F2F3F8] px-6" 
                                    type="button"
                                    onClick={() => {
                                        handleSkip();
                                    }} 
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataCollection;
