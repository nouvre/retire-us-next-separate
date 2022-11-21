import React, { useEffect } from "react";
import File from "@/components/common/File";
import { useDispatch, useSelector } from "react-redux";
import { getRolloverUserDetail } from "@/store/setting/action";
import { ApplicationState } from "@/store/index";
import { get_file } from "../../..//util/s3getfile";

const RolloverWrapper: React.FC = (props: any) => {
    const documentKeys = ["document"];

    const dispatch = useDispatch();
    const rollover = useSelector(
        (state: ApplicationState) => state.settings.selectedRolloverUser
    );

    useEffect(() => {
        dispatch(getRolloverUserDetail(props.match.params.id));
    }, []);

    const downloadOrPreview = async (url) => {
        let dataUrl = await get_file(url);
        document.getElementById("download_btn")?.setAttribute("href", dataUrl);
        document.getElementById("download_btn")?.click();
    };

    return (
        <div className="w-full pt-20 px-5 h-full m-auto">
            <div className="w-full bg-white rounded-lg h-full min-h-screen">
                <div className="w-full px-5 py-8">
                    {rollover ? (
                        <div className="w-full">
                            <div className="w-[450px] max-w-full grid grid-cols-1 md:grid-cols-2 text-sm gap-4 mb-5">
                                <div>First Name</div>
                                <div>{rollover.firstname}</div>
                                <div>Last Name</div>
                                <div>{rollover.lastname}</div>
                                <div>Phone Number</div>
                                <div>{rollover.phoneNumber}</div>
                                <div>Email</div>
                                <div>{rollover.email}</div>
                                <div>Street</div>
                                <div>{`${rollover.streetAddress} ${rollover.streetAddress2}`}</div>
                                <div>City</div>
                                <div>{rollover.city}</div>
                                <div>State</div>
                                <div>{rollover.state}</div>
                                <div>Zip Code</div>
                                <div>{rollover.zipCode}</div>
                                <div>Employement Status</div>
                                <div>{rollover.employementStatus}</div>
                                <div>Employer</div>
                                <div>{rollover.employer}</div>
                                <div>Occupation</div>
                                <div>{rollover.occupation}</div>
                                <div>Net Worth</div>
                                <div>{rollover.netWorth}</div>
                                <div>Liquid Net Worth</div>
                                <div>{rollover.liquidNetWorth}</div>
                                <div>Estimated Annual Income</div>
                                <div>{rollover.estimatedAnnualIncome}</div>
                                <div>Federal Tax Bracket</div>
                                <div>{rollover.federalTaxBracket}</div>
                                <div>Number of Account</div>
                                <div>{rollover.numberOfAccounts}</div>
                                <div>Total Investment Assets</div>
                                <div>{rollover.totalInvestmentAssets}</div>
                                <div>Investment Assets Notes</div>
                                <div>{rollover.investmentAssetsNotes}</div>
                                <div>Account Type</div>
                                <div>
                                    {rollover.accountTypes != ""
                                        ? rollover.accountTypes
                                        : rollover.accountTypeByInput}
                                </div>
                            </div>
                            <div className="w-full mb-5">Bene Info</div>
                            <div className="mb-5 w-[1125px]">
                                <div className="w-full grid grid-cols-5 text-sm gap-4 mb-5 items-center">
                                    <div>
                                        <div>Primary or Contingent</div>
                                        <div>First Name</div>
                                        <div>Middle Name</div>
                                        <div>Last Name</div>
                                        <div>Trust or Organ Name</div>
                                        <div>Portion %</div>
                                        <div>Relationship</div>
                                    </div>
                                    {rollover.beneficiaries.map(
                                        (beneficiary, key) => (
                                            <div key={key}>
                                                <div>{beneficiary.type}</div>
                                                <div>
                                                    {beneficiary.firstname}
                                                </div>
                                                <div>
                                                    {beneficiary.middlename}
                                                </div>
                                                <div>
                                                    {beneficiary.lastname}
                                                </div>
                                                <div>
                                                    {
                                                        beneficiary.trustOrOrganization
                                                    }
                                                </div>
                                                <div>{beneficiary.portion}</div>
                                                <div>
                                                    {beneficiary.relationship}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="text-2xl mb-5">Documents</div>
                            <div className="w-full flex">
                                {documentKeys.map((key, index) => {
                                    if (rollover[key] && rollover[key] != "") {
                                        return (
                                            <File
                                                name={rollover[key]}
                                                key={index}
                                                onClick={() => {
                                                    downloadOrPreview(
                                                        rollover[key]
                                                    );
                                                }}
                                            ></File>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full">Not Set</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RolloverWrapper;
