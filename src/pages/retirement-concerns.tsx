import React from "react";
import Header from "@/components/Pages/Header";

const Princing: React.FC = (props: any) => {
    return (
        <div className="w-full pt-32">
            <Header opacity={false} />
            <div className="w-full px-0 mt-[150px] md:px-[10%] pt-11 pb-[130px] bg-[#F3F5F9]">
                <div className="w-[40%] min-w-[550px] bg-white px-[60px] py-[50px] m-auto">
                    <div className="text-2xl font-medium w-full mb-[30px] font-Karla text-center">
                        What are your concerns about retirement?
                    </div>
                    <div className="w-full">
                        <div
                            className={`w-full flex items-center mb-5 text-lg font-lg`}
                        >
                            <input
                                type="checkbox"
                                id="accumulation"
                                name="accumulation"
                                className="w-[35px] h-[35px] form-checkbox mr-5 text-[#0A2C75] border border-[#0A2C7535]"
                            />
                            <label
                                htmlFor="accumulation"
                                className="cursor-pointer text-lg max-w-[80%]"
                            >
                                Accumulation
                            </label>
                        </div>
                        <div
                            className={`w-full flex items-center mb-5 text-lg font-lg`}
                        >
                            <input
                                type="checkbox"
                                id="protection"
                                name="protection"
                                className="w-[35px] h-[35px] form-checkbox mr-5 text-[#0A2C75] border border-[#0A2C7535]"
                            />
                            <label
                                htmlFor="protection"
                                className="cursor-pointer text-lg max-w-[80%]"
                            >
                                Protection
                            </label>
                        </div>
                        <div
                            className={`w-full flex items-center mb-5 text-lg font-lg`}
                        >
                            <input
                                type="checkbox"
                                id="tax_treatment"
                                name="tax_treatment"
                                className="w-[35px] h-[35px] form-checkbox mr-5 text-[#0A2C75] border border-[#0A2C7535]"
                            />
                            <label
                                htmlFor="tax_treatment"
                                className="cursor-pointer text-lg max-w-[80%]"
                            >
                                Tax Treatment
                            </label>
                        </div>
                        <div
                            className={`w-full flex items-center mb-5 text-lg font-lg`}
                        >
                            <input
                                type="checkbox"
                                id="complex_benefits"
                                name="complex_benefits"
                                className="w-[35px] h-[35px] form-checkbox mr-5 text-[#0A2C75] border border-[#0A2C7535]"
                            />
                            <label
                                htmlFor="complex_benefits"
                                className="cursor-pointer text-lg max-w-[80%]"
                            >
                                Complex Benefits
                            </label>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="h-[55px] flex justify-center items-center font-semibold text-lg text-white bg-[#0A2C75] px-6">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Princing;
