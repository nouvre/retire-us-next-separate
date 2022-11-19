import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface BeneficiaryType {
    type: string;
    portion: string;
    firstname: string;
    middlename: string;
    lastname: string;
    trustOrOrganization: string;
    relationship: string;
    socialSecurityNumber: string;
    DOB: string;
    phoneNumber: string;
    email: string;
    mailingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    countryOfCitizenship: string;
    countryOfCitizenshipByInput: string;
    countryOfLegalResidence: string;
    countryOfLegalResidenceByInput: string;
}

interface FormData {
    beneficiaries: BeneficiaryType[];
    nunberOfBeneficiary: number;
}

interface ComponentProps {
    initialValues: BeneficiaryType[];
    nunberOfBeneficiary: number;
    handleSubmit?: (formdata: FormData) => void;
}

const validationSchema = Yup.object().shape({
    nunberOfBeneficiary: Yup.number(),
    beneficiaries: Yup.array().of(
        Yup.object().shape({
            type: Yup.string(),
            portion: Yup.string(),
            firstname: Yup.string(),
            middlename: Yup.string(),
            lastname: Yup.string(),
            trustOrOrganization: Yup.string(),
            relationship: Yup.string(),
            socialSecurityNumber: Yup.string(),
            DOB: Yup.string(),
            phoneNumber: Yup.string(),
            email: Yup.string().email('Invalid email'),
            mailingAddress: Yup.string(),
            city: Yup.string(),
            state: Yup.string(),
            zipCode: Yup.string(),
            countryOfCitizenship: Yup.string(),
            countryOfCitizenshipByInput: Yup.string(),
            countryOfLegalResidence: Yup.string(),
            countryOfLegalResidenceByInput: Yup.string(),
        })
    ),
});

const BeneFiciary: React.FC<ComponentProps> = ({ initialValues, nunberOfBeneficiary, handleSubmit }) => {
    const [countryOfCitizenship, setCountryOfCitizenship] = useState<string []>([]);
    const [countryOfLegalResidence, setCountryOfLegalResidence] = useState<string []>([]);
    const formik = useFormik({
        initialValues: {
            nunberOfBeneficiary,
            beneficiaries: initialValues
        },
        validationSchema: validationSchema,
        onSubmit: (values: FormData) => {
            if(handleSubmit) {
                handleSubmit(values);
            }
        },
        validateOnChange: true,
    });

    useEffect(() => {
        if(initialValues.length > 0) {
            if(formik) {
                formik.resetForm();
            }
            let tempCountryOfCitizenship = [] as string [];
            initialValues.forEach(element => {
                tempCountryOfCitizenship.push(element.countryOfCitizenship);
            });
            let tempCountryOfLegalResidence = [] as string [];
            initialValues.forEach(element => {
                tempCountryOfLegalResidence.push(element.countryOfLegalResidence);
            });
            setCountryOfCitizenship(tempCountryOfCitizenship);
            setCountryOfLegalResidence(tempCountryOfLegalResidence);
        }
    }, [initialValues])

    const changeCountryOfCitizenship = (value: string, index: number) => setCountryOfCitizenship(countryOfCitizenship.map((e, i) => i === index ? value : e));
    const changeCountryOfLegalResidence = (value: string, index: number) => setCountryOfLegalResidence(countryOfLegalResidence.map((e, i) => i === index ? value : e));
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="w-full text-3xl font-semibold mb-5">Beneficiaries</div>
            {formik.values.beneficiaries.map((beneficiary: BeneficiaryType, index: number) => (
                <div className="w-full mb-10 p-2" key={index}>
                    <div className="w-full mb-5">
                        <div className="w-full text-md mb-1 text-blue-600">Beneficiary Type</div>
                        <div className="w-full flex gap-4 items-center">
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.type`)} id={`beneficiaries.${index}.type.Primary`} value="Primary" checked={beneficiary.type == 'Primary'} />
                                <label htmlFor={`beneficiaries.${index}.type.Primary`} className="ml-2">Primary</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.type`)} id={`beneficiaries.${index}.type.Contingent`} value="Contingent" checked={beneficiary.type == 'Contingent'} />
                                <label htmlFor={`beneficiaries.${index}.type.Contingent`} className="ml-2">Contingent</label>                            
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.firstname`)} placeholder="First Name" />
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.middlename`)} placeholder="Middle" />
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.lastname`)} placeholder="Last Name" />
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-5 gap-4">
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.trustOrOrganization`)} placeholder="Trust Or Organization" />
                        <NumberFormat
                            thousandSeparator={true}
                            suffix="%"
                            placeholder="Portion %"
                            max={100}
                            className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                            {...formik.getFieldProps(`beneficiaries.${index}.portion`)}
                        />
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full text-md mb-1 text-blue-600">Relationship</div>
                        <div className="w-full flex gap-4 mb-5">
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.Spouse`} value="Spouse" />
                                <label htmlFor={`beneficiaries.${index}.relationship.Spouse`} className="ml-2">Spouse</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.Child`} value="Child" />
                                <label htmlFor={`beneficiaries.${index}.relationship.Child`} className="ml-2">Child</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.GrandChild`} value="GrandChild" />
                                <label htmlFor={`beneficiaries.${index}.relationship.GrandChild`} className="ml-2">GrandChild</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.Sibling`} value="Sibling" />
                                <label htmlFor={`beneficiaries.${index}.relationship.Sibling`} className="ml-2">Sibling</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.OtherIndividual`} value="OtherIndividual" />
                                <label htmlFor={`beneficiaries.${index}.relationship.OtherIndividual`} className="ml-2">Other Individual</label>                            
                            </div>
                            <div className="flex items-center">
                                <input type="radio" {...formik.getFieldProps(`beneficiaries.${index}.relationship`)} id={`beneficiaries.${index}.relationship.TrustOrganizationEstate`} value="TrustOrganizationEstate" />
                                <label htmlFor={`beneficiaries.${index}.relationship.TrustOrganizationEstate`} className="ml-2">Trust/Organization/Estate</label>                            
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.socialSecurityNumber`)} placeholder="Social Security/Tax ID number" />
                        <InputMask
                            mask="99/99/9999"
                            className="w-full"
                            {...formik.getFieldProps(`beneficiaries.${index}.DOB`)}
                            maskChar=""
                        >
                            {(inputProps: any) => (
                                <input
                                    {...inputProps}
                                    type="text"
                                    placeholder="Date of Birth"
                                    onClick={(e) => e.preventDefault()}
                                    className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                />
                            )}
                        </InputMask>
                    </div>
                    <div className="w-full mb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputMask
                            mask="(***) ***-****"
                            className="w-full"
                            {...formik.getFieldProps(`beneficiaries.${index}.phoneNumber`)}
                            maskChar=""
                        >
                            {(inputProps: any) => (
                                <input
                                    {...inputProps}
                                    type="text"
                                    placeholder="Phone Number"
                                    onClick={(e) => e.preventDefault()}
                                    className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                />
                            )}
                        </InputMask>
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2"
                                id="email"
                                placeholder="Email Address"
                                {...formik.getFieldProps(`beneficiaries.${index}.email`)}
                            ></input>
                            {/* @ts-ignore: Unreachable code error */}
                            { formik.errors.beneficiaries && formik.errors.beneficiaries[index]?.email &&
                                <div className="w-full text-red-500">
                                    {/* @ts-ignore: Unreachable code error */}
                                    {formik.errors.beneficiaries[index].email}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.mailingAddress`)} placeholder="Mailing Address" />
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.city`)} placeholder="City" />
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.state`)} placeholder="State" />
                        <input type="text" className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.zipCode`)} placeholder="Zip Code" />
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full text-md mb-1 text-blue-600">Country of Citizenship</div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label 
                                    className="flex items-center" 
                                    htmlFor={`beneficiaries.${index}.countryOfCitizenship.USA`}
                                    onClick={() => changeCountryOfCitizenship('USA', index)}
                                >
                                    <input 
                                        type="radio" 
                                        id={`beneficiaries.${index}.countryOfCitizenship.USA`} 
                                        {...formik.getFieldProps(`beneficiaries.${index}.countryOfCitizenship`)} 
                                        value="USA" 
                                    />
                                    <span className="ml-2">USA</span>                            
                                </label>
                                <label 
                                    className="flex items-center" 
                                    htmlFor={`beneficiaries.${index}.countryOfCitizenship.Other`}
                                    onClick={() => changeCountryOfCitizenship('Other', index)}
                                >
                                    <input 
                                        type="radio" 
                                        {...formik.getFieldProps(`beneficiaries.${index}.countryOfCitizenship`)} 
                                        id={`beneficiaries.${index}.countryOfCitizenship.Other`} 
                                        value="Other" 
                                    />
                                    <span className="ml-2">Other</span>                            
                                </label>
                            </div>  
                            <input type="text" disabled={countryOfCitizenship[index] == 'USA'} className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.countryOfCitizenshipByInput`)} placeholder="Country of Citizenship" />
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full text-md mb-1 text-blue-600">Country of Legal Residence</div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label 
                                    className="flex items-center" 
                                    htmlFor={`beneficiaries.${index}.countryOfLegalResidence.USA`}
                                    onClick={() => changeCountryOfLegalResidence('USA', index)}
                                >
                                    <input 
                                        type="radio" 
                                        id={`beneficiaries.${index}.countryOfLegalResidence.USA`} 
                                        {...formik.getFieldProps(`beneficiaries.${index}.countryOfLegalResidence`)} 
                                        value="USA" 
                                    />
                                    <span className="ml-2">USA</span>                            
                                </label>
                                <label 
                                    className="flex items-center" 
                                    htmlFor={`beneficiaries.${index}.countryOfLegalResidence.Other`}
                                    onClick={() => changeCountryOfLegalResidence('Other', index)}
                                >
                                    <input 
                                        type="radio" 
                                        {...formik.getFieldProps(`beneficiaries.${index}.countryOfLegalResidence`)} 
                                        id={`beneficiaries.${index}.countryOfLegalResidence.Other`} 
                                        value="Other" 
                                    />
                                    <span className="ml-2">Other</span>                            
                                </label>
                            </div>  
                            <input type="text" disabled={countryOfLegalResidence[index] == 'USA'} className="w-full rounded-sm h-10 border border-solid border-[#b3bdc1] bg-[#87c4eb1c] outline-none px-2" {...formik.getFieldProps(`beneficiaries.${index}.countryOfLegalResidenceByInput`)} placeholder="Country of Residence" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-5 text-sm">
                        <div className="mb-4">
                            The percentage portions must add up to 100% per
                            beneficiary type. All portions can be extended
                            to the hundredth position (e.g., 33.33%). If
                            section is left blank, portions will be evenly
                            distributed amongst beneficiaries.
                        </div>
                        <div>
                            Note: Benefits cannot be expressed in dollar amounts.
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full p-2">
                <button
                    className="py-2 px-5 bg-blue-500 text-white"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default BeneFiciary;
