import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Disclosure } from "@headlessui/react";
import { Tooltip } from "antd";
import ChevronUp from "@2fd/ant-design-icons/lib/ChevronUp";

import { OutlineButton } from "../Buttons/WhiteButtons";
import { selectPlan } from "@/store/auth/action";

import { planFeatures } from "@/pages/Pricing/contents";
import Image from '@/components/common/Image';
import { TextNormal, TextGradient } from "@/components/Typographies";
import { cx } from "../../util/helpers";

interface ISubscribePlanDisclosureProps {
    plan: any;
    defaultOpen?: boolean;
}

const SubscribePlanDisclosure = ({
    plan,
    defaultOpen,
}: ISubscribePlanDisclosureProps) => {
    const dispatch = useDispatch();

    return (
        <>
            <Disclosure defaultOpen={defaultOpen}>
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className={cx(
                                "flex justify-between items-center w-full px-6 py-4 text-lg font-bold text-left focus:outline-none rounded-t-[20px]",
                                open
                                    ? `bg-gradient-to-r from-[${plan.bgColor[0]}] to-[${plan.bgColor[1]}]`
                                    : "bg-[#EEF1F8] rounded-b-[20px]"
                            )}
                        >
                            <span
                                className={`${
                                    open
                                        ? "text-white"
                                        : "text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4]"
                                }`}
                                dangerouslySetInnerHTML={{ __html: plan.name }}
                            />
                            <ChevronUp
                                className={`${
                                    open
                                        ? "transform rotate-180 text-white"
                                        : "text-[#4D7EF2]"
                                } w-5 h-5`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="bg-[#EEF1F8] rounded-b-[20px] border-b border-[#DDE3F0]">
                            <div className="bg-white pt-6">
                                <TextGradient className="text-[20px] font-bold mb-6 px-6">
                                    {plan.title}
                                </TextGradient>
                                <TextNormal
                                    className="text-base mb-6 px-6"
                                    dangerouslySetInnerHTML={{
                                        __html: plan.description,
                                    }}
                                />

                                <div className="grid grid-cols-1 divide-y divide-[#DDE3F0] border-y border-[#DDE3F0]">
                                    {Object.keys(plan?.features || {}).map(
                                        (pfk) => (
                                            <div className="w-full" key={pfk}>
                                                <div className="bg-[#EEF1F8] py-[15px] px-[24px] border-t-[1px] border-t-[#DDE3F0]">
                                                    <TextGradient className="text-[16px] leading-[24px] font-bold">
                                                        {
                                                            planFeatures[pfk]
                                                                .title
                                                        }
                                                    </TextGradient>
                                                </div>
                                                {Object.keys(
                                                    plan?.features[pfk]
                                                ).map((section) => (
                                                    <div className="flex items-center py-[15px] px-[24px] border-t-[1px] border-t-[#DDE3F0]">
                                                        <div className="w-[60%] flex items-center">
                                                            <TextNormal className="font-bold">
                                                                {
                                                                    planFeatures[
                                                                        pfk
                                                                    ][section]
                                                                        .title
                                                                }
                                                            </TextNormal>
                                                        </div>
                                                        <div className="w-[40%] text-center">
                                                            {plan.features[pfk][
                                                                section
                                                            ] === true ? (
                                                                <<Image
                                                                    src="/assets/images/ico-success-circle.svg"
                                                                    alt="ico-success-circle"
                                                                    className="mx-auto"
                                                                />
                                                            ) : (
                                                                <<Image
                                                                    src="/assets/images/ico-danger-circle.svg"
                                                                    alt="ico-danger-circle"
                                                                    className="mx-auto"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="px-6 py-2">
                                <OutlineButton
                                    btnText="Choose Plan"
                                    onClick={() =>
                                        dispatch(selectPlan(plan?.id))
                                    }
                                    icon={<span>&#183;&#183;</span>}
                                    className="w-full justify-center"
                                    blue
                                />
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default SubscribePlanDisclosure;
