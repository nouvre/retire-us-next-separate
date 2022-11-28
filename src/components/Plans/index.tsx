import React, { useEffect, useState } from "react";
import { FillButtonLink, OutlineButtonLink } from "@/components/Buttons/WhiteButtons";
import Image from '@/components/common/Image';

interface PlansProps {
    title: string;
    text?: string;
    plans: any;
    cta: any;
}

const Plans = ({ title, text, plans, cta }: PlansProps) => {
    const [device, setDevice] = useState<string>("");
    const [planTab, setPlanTab] = useState<number | null>(0);
    const [plansHeight, setPlansHeight] = useState<string[]>([]);

    useEffect(() => {
        if (plans) {
            const detectDevice = () => {
                setPlansHeight([]);

                if (window.innerWidth < 1024) {
                    const plans = document.querySelectorAll(".plan-inner");
                    const plansHeightArr: string[] = [];

                    plans.forEach((plan: any) => {
                        plansHeightArr.push(`${plan.offsetHeight}px`);
                    });

                    setDevice("mobile");
                    setPlansHeight(plansHeightArr);
                } else {
                    setDevice("desktop");
                }
            };

            detectDevice();
            window.addEventListener("load", detectDevice);
            window.addEventListener("orientationchange", detectDevice);
            window.addEventListener("resize", detectDevice);

            return () => {
                window.removeEventListener("load", detectDevice);
                window.removeEventListener("orientationchange", detectDevice);
                window.removeEventListener("resize", detectDevice);
            };
        }
    }, [plans]);

    return (
        <div className="w-full bg-[#F7F9FC] py-[60px] lg:py-[120px] lg:px-6">
            <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] mx-auto">
                <div className="flex items-start justify-between mx-[24px] lg:mx-[0] mb-[40px] lg:mb-[80px]">
                    <div className="max-w-[620px]">
                        <h2 className="text-[#000714] font-bold text-left text-[32px] leading-[36px] lg:text-[56px] lg:leading-[60px] font-Lato">
                            {title}
                        </h2>
                        {text && (
                            <div
                                className="text-[#434A59] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] mt-[20px] md:mt-[24px] flex flex-col gap-y-[20px] md:gap-y-[24px]"
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        )}
                    </div>
                    {cta && (
                        <OutlineButtonLink
                            className="hidden lg:flex"
                            href={cta.link}
                            btnText={cta.text}
                            icon={<span>&#183;&#183;</span>}
                            blue={true}
                        />
                    )}
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                    {plans &&
                        plans.map((plan, index) => (
                            <div
                                className="flex flex-col w-full lg:w-[31.7%] shadow-Plan"
                                key={index}
                            >
                                <div
                                    className="flex justify-between lg:justify-center px-[24px] py-[15px] lg:py-[20px] text-[#fff] text-[18px] leading-[30px] lg:text-[23px] lg:leading-[28px] font-bold font-Lato bg-plan-texture lg:rounded-tl-[20px] lg:rounded-tr-[20px]"
                                    style={{
                                        background: plan.attributes.background,
                                    }}
                                    onClick={() => {
                                        if (device !== "desktop") {
                                            setPlanTab(
                                                planTab !== index ? index : null
                                            );
                                        }
                                    }}
                                >
                                    {plan.attributes.title}
                                    <Image
                                        style={{
                                            transform:
                                                planTab === index
                                                    ? "rotate(0deg)"
                                                    : "rotate(180deg)",
                                        }}
                                        className="w-[13.5px] duration-[0.5s] lg:hidden"
                                        src="/assets/images/plans/arrow.svg"
                                        alt="arrow"
                                    />
                                </div>
                                <div
                                    style={{
                                        height:
                                            plansHeight.length === 0
                                                ? "100%"
                                                : planTab === index
                                                ? plansHeight[index]
                                                : "0",
                                    }}
                                    className="plan-inner relative duration-[0.5s] overflow-hidden bg-[#fff] lg:rounded-bl-[2px] lg:rounded-br-[2px] px-[24px]"
                                >
                                    <div className="flex items-center my-[16px] lg:my-[24px] text-[20px] leading-[24px] lg:text-[23px] lg:leading-[28px] font-bold font-Lato bg-plan-texture bg-clip-text text-transparent">
                                        <Image
                                            className="w-[40px] mr-[12px] lg:hidden"
                                            src="/assets/images/plans/price.svg"
                                            alt="price"
                                        />
                                        {plan.attributes.price}
                                    </div>
                                    <div
                                        className="text-[#000714] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] font-Lato"
                                        dangerouslySetInnerHTML={{
                                            __html: plan.attributes.description,
                                        }}
                                    />
                                    {plan.attributes.extra ? (
                                        <div className="my-[24px] text-[#001F55] italic text-[12px] leading-[14px] font-Lato">
                                            {plan.attributes.extra}
                                        </div>
                                    ) : (
                                        <div className="h-[24px] lg:h-[62px]" />
                                    )}
                                    <ul className="border-t-[1px] border-[#DDE3F0] pt-[24px] mb-[24px] lg:mb-[124px]">
                                        {plan.attributes.items.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-[#434A59] ml-[24px] pl-[5px] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] mb-[20px] font-Lato list-disc marker:text-[#FAA942] marker:text-[24px]"
                                                >
                                                    {item.text}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="lg:absolute bottom-[0] left-[0] right-[0] mb-[32px] w-[calc(100%-48px)] mx-auto">
                                        <FillButtonLink
                                            className="py-[15px]"
                                            href={plan.attributes.href}
                                            blue={true}
                                        >
                                            Choose this plan
                                        </FillButtonLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {cta && (
                    <OutlineButtonLink
                        className="flex lg:hidden justify-center mt-[40px] mx-[24px]"
                        href={cta.link}
                        btnText={cta.text}
                        icon={<span>&#183;&#183;</span>}
                        blue={true}
                    />
                )}
            </div>
        </div>
    );
};

export default Plans;
