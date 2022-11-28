import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store/index";
import Image from '@/components/common/Image';

const IdInfo: React.FC = (props: any) => {
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );
    
    const [modalActive, setModalActive] = useState<boolean>(false);

    const [success, setSuccess] =  useState<boolean>(false);
    const [failreason, setFailreason] =  useState<string|null>(null);
    const [fullName, setFullName] =  useState<string|null>(null);
    const [dob, setDob] =  useState<string|null>(null);
    const [sex, setSex] =  useState<string|null>(null);
    const [documentType, setDocumentType] =  useState<string|null>(null);
    const [frontimage, setFrontimage] =  useState<string|null>(null);
    const [backimage, setBackimage] =  useState<string|null>(null);
    const [faceimage, setFaceimage] =  useState<string|null>(null);
    const [tryVerify, setTryVerify] =  useState<boolean>(false);
    const [fileUrl, setFileUrl] =  useState<string>("");

    const downloadOrPreview = async (url: string) => {
        setFileUrl(url);
        setModalActive(true);
    };

    useEffect(()=>{
        if(!selectedUser?.id_data){
            return;
        }          

        setTryVerify(true);
        setSuccess(selectedUser.id_data.success)
        setFailreason(selectedUser.id_data.failreason)
        setFullName(selectedUser.id_data.fullName)
        setDob(selectedUser.id_data.dob)
        if(selectedUser.id_data.sex==="M")
            setSex("Male")
        else if(selectedUser.id_data.sex==="F") {
            setSex("Female");
        }
        switch(selectedUser.id_data.documentType){
            case "P": setDocumentType("Passport"); break;
            case "D": setDocumentType("Driver's License"); break;
            case "I": setDocumentType("Identity Card"); break;
        }
        
        setFrontimage(selectedUser.id_data.frontimage)
        setBackimage(selectedUser.id_data.backimage)
        setFaceimage(selectedUser.id_data.faceimage)
        
    },[selectedUser])

    return (
        <Scrollbars>
            <div className="w-full flex flex-col justify-center items-center px-5 h-full">
                {
                    !tryVerify? 
                    <div className="text-center pt-16 text-4xl">
                        This user has not been verified his/her ID yet.
                    </div>:
                    <div className="grid grid-cols-2 gap-6 mt-6 text-xl">
                        {!success && <div className="col-span-2 text-red-500 text-center text-2xl font-bold">Verification failed!</div>}
                        {failreason && 
                            <><div>Fail Reason</div><div>{failreason}</div></>
                        }
                        {documentType && 
                            <><div>ID Type</div><div>{documentType}</div></>
                        }
                        {fullName && 
                            <><div>Full Name</div><div>{fullName}</div></>
                        }                    
                        {sex && 
                            <><div>Sex</div><div>{sex}</div></>
                        }
                        {dob && 
                            <><div>Date Of Birth</div><div>{dob}</div></>
                        }
                    
                        <div>ID Photos</div>                    
                        <div className=" w-48 flex flex-col gap-3">
                        {frontimage &&
                            <div
                                className="px-6 py-1 md:py-1 rounded-xl border-2 border-[#001F55] hover:bg-[#173A78] hover:text-white  text-[#000714] md:rounded-2xl bg-white relative cursor-pointer"
                                onClick={() => {
                                    downloadOrPreview(frontimage);
                                }}
                            >
                                <div className="flex items-center gap-4" >
                                    <Image
                                        src="/assets/images/document.svg"
                                        alt="document"
                                    />
                                    <span
                                        className={`${"truncate"} select-none text-base md:text-lg outline-none`}
                                    > 
                                        Front Image
                                    </span>
                                </div>
                            </div>
                        }
                        {backimage &&
                            <div
                                className="px-6 py-1 md:py-1 rounded-xl border-2 border-[#001F55] hover:bg-[#173A78] hover:text-white  text-[#000714] md:rounded-2xl bg-white relative cursor-pointer"
                                onClick={() => {
                                    downloadOrPreview(backimage);
                                }}
                            >
                                <div className="flex items-center gap-4" >
                                    <Image
                                        src="/assets/images/document.svg"
                                        alt="document"
                                    />
                                    <span
                                        className={`${"truncate"} select-none text-base md:text-lg outline-none`}
                                    > 
                                        Back Image
                                    </span>
                                </div>
                            </div>
                        }
                        {faceimage &&
                            <div
                                className="px-6 py-1 md:py-1 rounded-xl border-2 border-[#001F55] hover:bg-[#173A78] hover:text-white  text-[#000714] md:rounded-2xl bg-white relative cursor-pointer"
                                onClick={() => {
                                    downloadOrPreview(faceimage);
                                }}
                            >
                                <div className="flex items-center gap-4" >
                                    <Image
                                        src="/assets/images/document.svg"
                                        alt="document"
                                    />
                                    <span
                                        className={`${"truncate"} select-none text-base md:text-lg outline-none`}
                                    > 
                                        Face Image
                                    </span>
                                </div>
                            </div>
                        }
                        </div>
                        
                    </div>
                    
                }
                
                {modalActive && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black/[.6] transition duration-500 p-[24px] z-[100]">
                        <div className="w-full h-full p-[20px] md:p-[40px] bg-white rounded-[20px] relative">
                            <div
                                className="absolute w-[24px] h-[24px] right-[16px] top-[16px] cursor-pointer"
                                onClick={() => {
                                    setModalActive(false);
                                }}
                            >
                                <Image
                                    src="/assets/images/ico-close.svg"
                                    className="w-full"
                                    alt="ico-close"
                                />
                            </div>
                            <div className="flex justify-center items-center h-full w-full">
                                <Image src={fileUrl} alt="document image" className="max-w-full w-auto max-h-full h-auto"/>
                            </div>
                        </div>
                    </div>
                )}
            </div> 
        </Scrollbars>
    );
};

export default IdInfo;
