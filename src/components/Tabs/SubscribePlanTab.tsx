import React from "react";
import { Disclosure } from "@headlessui/react";
import { DarkButtonLink } from "../Buttons/DarkButtons";
import ChevronUp from "@2fd/ant-design-icons/lib/ChevronUp";
import { TextNormal, TextGradient } from "@/components/Typographies";
import Image from '@/components/common/Image';

type ServicesType = {
    title: string;
    items: string[];
};

interface TabProps {
    plan_id: number;
    name?: string | JSX.Element;
    title: string;
    description: string;
    offerTitle?: string;
    serviceTitle?: string;
    subDescription?: string;
    href: string;
    items: string[] | (string | JSX.Element)[];
    services?: Array<ServicesType>;
    ongoingServices?: Array<ServicesType>;
}

export const SubscribeDesktopPlanTab = ({
    plan_id,
    name,
    title,
    description,
    offerTitle,
    href,
    items,
    serviceTitle,
    services,
    ongoingServices,
}: TabProps) => {
    return (
        <div className="p-5" id="tab_2" role="tabpanel" aria-labelledby="tab-2">
            <div className="flex justify-between pb-8 border-b border-[#DDE3F0]">
                <div className="flex">
                    <div className="w-[80px]">
                        <Image
                            src="/assets/images/ico-coin.svg"
                            className="w-full"
                            alt="ico-coin"
                        />
                    </div>
                    <div className="ml-[32px]">
                        <TextGradient className="text-[28px] font-bold leading-[32px] pb-5">
                            {title}
                        </TextGradient>
                        <TextNormal grayed className="text-lg max-w-[600px]">
                            {description}
                        </TextNormal>
                        {offerTitle && (
                            <TextNormal
                                grayed
                                className="text-sm text-[#001F55] mt-5"
                                dangerouslySetInnerHTML={{ __html: offerTitle }}
                            />
                        )}
                    </div>
                </div>
                <div>
                    <DarkButtonLink
                        href={href}
                        params={{ auth_type: true, plan_id }}
                        src="/assets/images/dots-white-btn.svg"
                        btnText="Choose this plan"
                    />
                </div>
            </div>

            <div className="pt-2">
                {[...Array(items.length / 2)].map((_, idx) => (
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-[120px] pl-[112px] pt-6"
                        key={`${name}_${idx}`}
                    >
                        <div className={`flex items-start gap-4`}>
                            <div className="w-2 h-2 bg-[#FAA942] rounded-full mt-2"></div>
                            <div
                                className="text-lg text-[#434A59] leading-8 flex-1"
                                // dangerouslySetInnerHTML={{ __html: item }}
                            >
                                {items[idx]}
                            </div>
                        </div>
                        <div className={`flex items-start gap-4`}>
                            <div className="w-2 h-2 bg-[#FAA942] rounded-full mt-2"></div>
                            <div
                                className="text-lg text-[#434A59] leading-8 flex-1"
                                // dangerouslySetInnerHTML={{ __html: item }}
                            >
                                {items[items.length / 2 + idx]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SubscribeMobilePlanTab = ({
    plan_id,
    name,
    title,
    description,
    offerTitle,
    href,
    items,
}: TabProps) => {
    return (
        <Disclosure defaultOpen>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`flex justify-between items-center w-full px-6 py-[15px] text-lg font-bold text-left leading-[30px] focus:outline-none ${
                            open
                                ? "bg-gradient-to-r from-[#4D7EF2] to-[#5FD4F4]"
                                : ""
                        }`}
                    >
                        <span
                            className={`${
                                open
                                    ? "text-white"
                                    : "text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]"
                            }`}
                        >
                            {name}
                        </span>
                        <ChevronUp
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pt-4 pb-10 bg-white">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/images/ico-coin.svg"
                                    className="w-10 h-10"
                                    alt="ico-coin"
                                />
                                <div className="text-[20px] leading-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]">
                                    {title}
                                </div>
                            </div>
                            <div className="text-base leading-6 text-[#434A59]">
                                {description}
                            </div>
                            {offerTitle && (
                                <div className="text-sm leading-[18px] text-[#001F55]">
                                    {offerTitle}
                                </div>
                            )}
                        </div>
                        <div className="border-t border-[#DDE3F0] my-6"></div>
                        <div className="flex flex-col gap-5">
                            {items.map((item, key) => (
                                <div
                                    key={key}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-2 h-2 bg-[#FAA942] rounded-full mt-2"></div>
                                    <div className="text-base text-[#434A59] leading-6 flex-1">
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <DarkButtonLink
                                href={href}
                                params={{ auth_type: true, plan_id }}
                                src="/assets/images/dots-white-btn.svg"
                                btnText="Choose this plan"
                            />
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
