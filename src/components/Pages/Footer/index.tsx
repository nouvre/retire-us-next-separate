import React from "react";
import Link from "next/link";
import { navigation } from "@/constants/variables";
import Image from '@/components/common/Image';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-[#EEF1F8]">
            <div className="md:w-full lg:max-w-[1024px] xl:max-w-[1440px] px-[20px] mx-auto">
                <div className="flex flex-wrap justify-between pt-[60px] pb-6 md:pb-10 border-b border-[#DDE3F0]">
                    <div className="flex flex-col flex-auto justify-center items-center lg:items-start border-b lg:border-0 border-[#DDE3F0]">
                        <Image
                            src="/assets/images/logo-blue.svg"
                            alt="Footer Logo"
                            className="mb-6"
                        />
                        <div className="text-[#A2ACBE] text-base md:text-lg font-Lato pb-6 md:pb-10 lg:pb-0">
                            &copy; 2022 RetireUs. All rights reserved.
                        </div>
                    </div>
                    <div className="flex-auto pt-6 md:pt-10 lg:pt-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-end text-[#434A59] text-base md:text-lg gap-4 lg:gap-[40px] pb-6">
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="no-underline"
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-center lg:justify-end text-[#434A59] text-base md:text-lg gap-4">
                            <Link href="/privacy-policy" className="no-underline">
                                Privacy Policy
                            </Link>
                            {/* <Link href="/terms-conditions" className="no-underline">Terms & Conditions</Link> */}
                        </div>
                    </div>
                </div>
                <div className="pt-6 lg:pt-[60px] pb-[40px] text-left">
                    <div className="text-[#A2ACBE] text-base md:text-lg">
                        McAdam LLC dba RetireUS is an SEC registered investment
                        adviser that maintains a principal place of business in
                        the State of Pennsylvania. The Firm may only transact
                        business in those states in which it is notice filed or
                        qualifies for a corresponding exemption from such
                        requirements. For information about Mcadam LLC dba
                        RetireUS registration status and business operations,
                        please consult the Firm's Form ADV disclosure documents,
                        the most recent versions of which are available on the
                        SEC's Investment Adviser Public Disclosure website at{" "}
                        <a
                            href="https://www.adviserinfo.sec.gov"
                            target="_blank"
                            className="underline text-[#A2ACBE]"
                        >
                            www.adviserinfo.sec.gov
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
