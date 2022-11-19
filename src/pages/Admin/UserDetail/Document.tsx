import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { ApplicationState } from "@/store";
import { Upload } from "antd";
import { get_file } from "../../../util/s3getfile";
import { addDocument, deleteDocument } from "@/store/auth/action";
import CloseCircle from "@2fd/ant-design-icons/lib/CloseCircle";
import Image from '@/components/common/Image';

const { Dragger } = Upload;

const Document: React.FC = (props: any) => {
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );

    const dispatch = useDispatch();

    const [fileUrl, setFileUrl] = useState<string>("");
    const [modalActive, setModalActive] = useState<boolean>(false);

    const downloadOrPreview = async (url: string, filename: string) => {
        let dataUrl = await get_file(url);
        setFileUrl(dataUrl);
        setModalActive(true);
    };

    const uploadFile = (e) => {
        let formdata = new FormData();
        formdata.append("file", e.file);
        formdata.append("user_id", selectedUser?.id.toString() || "");
        dispatch(addDocument(formdata));
    };

    const openDialog = () => {
        if (document.querySelectorAll('[type="file"]').length > 0) {
            let element: any = document.querySelectorAll('[type="file"]')[0];
            element.click();
        }
    };
    console.log(selectedUser);

    const isMobile = false;

    return (
        <Scrollbars>
            <div className="w-full  px-5 h-full">
                <Dragger
                    name="file"
                    multiple={true}
                    openFileDialogOnClick={false}
                    showUploadList={false}
                    height={100}
                    style={{
                        border: "1px dashed #A2ACBE",
                        borderRadius: isMobile ? 12 : 20,
                        padding: isMobile ? 24 : 32,
                        background: "#F7F9FC",
                    }}
                    customRequest={uploadFile}
                >
                    <div
                        className="w-full flex gap-5 items-center md:justify-center"
                        id="file_upload_container"
                    >
                        <Image
                            src="/assets/images/upload.svg"
                            alt="Upload"
                            className="w-8 h-8"
                        />
                        <div className="text-black flex text-base md:text-xl gap-[6px] leading-8 font-normal">
                            <span className="hidden md:block">
                                Drag and drop files here, or
                            </span>
                            <div
                                className=" text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]"
                                onClick={() => openDialog()}
                            >
                                <span className="bg-underline-text bg-no-repeat bg-underline-text-size bg-bottom">
                                    {isMobile
                                        ? "Upload your file"
                                        : "Browse files"}
                                </span>
                            </div>
                        </div>
                    </div>
                </Dragger>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-3 md:mt-6">
                    {selectedUser?.document.map((document, key) => (
                        <div
                            className="pl-2 pr-6 py-3 rounded-md border-1 border-[#001F55] hover:bg-[#173A78] hover:text-white  text-[#000714] bg-white relative cursor-pointer"
                            key={key}
                        >
                            <CloseCircle
                                className="absolute flex justify-start items-center top-0 right-0 text-2xl leading-6 text-gray-500"
                                onClick={() =>
                                    dispatch(deleteDocument(document.id))
                                }
                            />
                            <div
                                className="flex items-center gap-2"
                                onClick={() => {
                                    downloadOrPreview(
                                        document.file_path,
                                        document.file_name
                                    );
                                }}
                            >
                                <Image
                                    src="../assets/images/document.svg"
                                    alt="document"
                                />
                                <span
                                    id={`filename-${key}`}
                                    className={`${"truncate"} select-none text-base md:text-lg outline-none`}
                                >
                                    {document.file_name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
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
                                    src="../assets/images/ico-close.svg"
                                    className="w-full"
                                    alt="ico-close"
                                />
                            </div>
                            <iframe
                                src={fileUrl}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </Scrollbars>
    );
};

export default Document;
