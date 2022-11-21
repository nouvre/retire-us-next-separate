import React from "react";
import { useSelector } from "react-redux";
import { get_file } from "../../../..//util/s3getfile";
import { ApplicationState } from "@/store/index";

const UserDataCollection: React.FC = () => {
    // const documents = useSelector(
    //     (state: ApplicationState) =>
    //         state.settings.selectedUser?.userCollectionData
    // );

    const downloadOrPreview = async (url) => {
        let dataUrl = await get_file(url);
        document.getElementById("download_btn")?.setAttribute("href", dataUrl);
        document.getElementById("download_btn")?.click();
    };

    return (
        <div className="w-full h-full overflow-y-scroll">
            {/* {documents &&
                documents.map((document, index) => (
                    <div
                        className={`w-full py-3 px-2 my-3 border rounded-md ${
                            document.require && document.datas.length === 0
                                ? "border-red-400"
                                : ""
                        }`}
                        key={index}
                    >
                        <div className="text-lg mb-2 font-semibold flex justify-between">
                            <div>{document.title}</div>
                        </div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {document.datas.map((data) => (
                                <div
                                    key={data.id}
                                    className=" text-base text-blue-400 hover:text-blue-500 my-1 cursor-pointer"
                                    onClick={() => downloadOrPreview(data.path)}
                                >
                                    {data.filename}
                                </div>
                            ))}
                        </div>
                    </div>
                ))} */}
            <a href="" target="_blank" id="download_btn" className="hidden"></a>
        </div>
    );
};

export default UserDataCollection;
