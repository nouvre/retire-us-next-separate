import React, { useEffect, useState } from "react";
import File from "@/components/common/File";
import { useDispatch, useSelector } from "react-redux";
import { getOnboardingUserDetail } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";
import { get_file } from "../../..//util/s3getfile";
import { User } from "@/store/setting/types";

const OnboardingWrapper: React.FC = (props: any) => {
    // const documentKeys = [
    //     "paystubUpload",
    //     "paystubUpload2",
    //     "investmentAccountUpload",
    //     "investmentAccountUpload2",
    //     "investmentAccountUpload3",
    //     "investmentAccountUpload4",
    //     "investmentAccountUpload5",
    //     "investmentAccountUpload6",
    //     "otherAssetUpload",
    //     "otherAssetUpload2",
    //     "otherAssetUpload3",
    //     "otherAssetUpload4",
    //     "otherAssetUpload5",
    //     "otherAssetUpload6",
    //     "otherLiabilitiesUpload",
    //     "otherLiabilitiesUpload2",
    //     "otherLiabilitiesUpload3",
    //     "otherEmployerBenefitUpload",
    //     "otherEmployerBenefitUpload2",
    //     "otherEmployerBenefitUpload3",
    //     "socialSecurityUpload",
    // ];

    const dispatch = useDispatch();
    const [user, setUser] = useState<User>();
    const onboarding = useSelector(
        (state: ApplicationState) => state.settings.selectedOnboardingUser
    );
    const registeredUsers = useSelector(
        (state: ApplicationState) => state.settings.registeredUsers
    );
    
    useEffect(() => {
        dispatch(getOnboardingUserDetail(props.match.params.id));
    }, []);

    useEffect(()=>{
       setUser(registeredUsers.find(user=>
           user.id == onboarding?.user_id
       ))
    },[onboarding])

    // const downloadOrPreview = async (url) => {
    //     let dataUrl = await get_file(url);
    //     document.getElementById("download_btn")?.setAttribute("href", dataUrl);
    //     document.getElementById("download_btn")?.click();
    // };

    return (
        <div className="w-full pt-20 px-5 h-full">
            <div className="w-full bg-white rounded-lg h-full min-h-screen">
                <div className="w-full p-8 flex justify-center gap-12 text-2xl">
                    <div>{user?.name}</div>
                    <div>{user?.email}</div>                     
                </div>
                <div className="w-full px-5 py-8">
                    {onboarding ? (
                        <div className="w-full">
                            <div className="w-ful px-40 max-w-full grid grid-cols-1 md:grid-cols-2 text-sm gap-2 mb-5">
                                <div>First Name</div>
                                <div>{onboarding.firstname}</div>
                                <div>Last Name</div>
                                <div>{onboarding.lastname}</div>
                                <div>Phone Number</div>
                                <div>{onboarding.phoneNumber}</div>
                                <div>Date of Birth</div>
                                <div>
                                    {onboarding.DOB}
                                </div>
                                <div>Employer</div>
                                <div>{onboarding.employer}</div>
                                <div>Employement Income</div>
                                <div>
                                    {onboarding.employmentIncome}
                                </div>
                                <div>First Name - Client 2</div>
                                <div>{onboarding.firstname2}</div>
                                <div>Last Name - Client 2</div>
                                <div>{onboarding.lastname2}</div>
                                <div>Phone Number - Client 2</div>
                                <div>{onboarding.phoneNumber2}</div>
                                <div>Date of Birth - Client 2</div>
                                <div>
                                    {onboarding.DOB2}
                                </div>
                                <div>Employer - Client 2</div> 
                                <div>{onboarding.employer2}</div>
                                <div>Employement Income - Client 2</div>
                                <div>
                                    {onboarding.employmentIncome2}
                                </div>
                                <div>Email</div>
                                <div>{onboarding.email}</div>
                                <div>Address</div>
                                <div>{onboarding.address}</div>
                                <div>City</div>
                                <div>{onboarding.city}</div>
                                <div>State</div>
                                <div>{onboarding.state}</div>
                                <div>Zip Code</div>
                                <div>
                                    {onboarding.zipCode}
                                </div>
                                <div>Cash Reserves</div>
                                <div>
                                    {onboarding.cashReserves}
                                </div>
                                <div>Important Notes</div>
                                <div>
                                    {onboarding.importantNotes}
                                </div>
                                <div>Do you receive a Cash Bonus?</div>
                                <div>
                                    {onboarding.receiveCashBonus}
                                </div>
                                <div>Annual Cash Bonus Amount</div>
                                <div>
                                    {onboarding.annualCashBonusAmount}
                                </div>
                                <div>`Do you receive RSU's (Restricted Stock)?`</div>
                                <div>
                                    {onboarding.receiveRSU}
                                </div>
                                <div>Annual RSU Amount</div>
                                <div>
                                    {onboarding.annualRSUAmount}
                                </div>
                                <div>Do you receive Stock Options?</div>
                                <div>
                                    {onboarding.receiveStockOption}
                                </div>
                                <div>Annual Stock Option Amount</div>
                                <div>
                                    {onboarding.annualStockOptionAmount}
                                </div>
                            </div>
                            {/* <div className="text-2xl mb-5">Documents</div>
                            <div className="w-full flex">
                                {documentKeys.map((key, index) => {
                                    if (
                                        onboarding[key] &&
                                        onboarding[key] != ""
                                    ) {
                                        return (
                                            <File
                                                name={onboarding[key]}
                                                key={index}
                                                onClick={() => {
                                                    downloadOrPreview(
                                                        onboarding[key]
                                                    );
                                                }}
                                            ></File>
                                        );
                                    }
                                    return null;
                                })}
                            </div> */}
                        </div>
                    ) : (
                        <div className="w-full">Not Exist</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnboardingWrapper;
