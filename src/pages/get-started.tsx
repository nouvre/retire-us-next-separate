import React, { useEffect, useState } from "react";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import { Helmet } from "react-helmet";
import Featured from "@/components/Featured";
import { FillButtonLink } from "@/components/Buttons/WhiteButtons";
import { getImage, fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const GetStarted: React.FC = ({ getStarted }: any) => {
    const [topLabel, setTopLabel] = useState<any>(null);

    useEffect(() => {
        async function getCmsData() {
            const topLabel = sessionStorage.getItem("topLabel");

            if (topLabel !== "off") {
                setTopLabel(getStarted.topLabel);
                sessionStorage.setItem("topLabel", "on");
            }
        }

        getCmsData();
    }, []);

    const closeTopLabel = () => {
        setTopLabel(null);
        sessionStorage.setItem("topLabel", "off");
    };

    return (
        <div className="w-full h-screen">
            <Helmet
                title="Start with our Free & Secure Retirement Checkpoint Tool"
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: "description",
                        content:
                            "Looking for clarity on your finances? Take RetireUS's Retirement Checkpoint Quiz, and receive a free and personalized retirement planning report in 4 minutes.",
                    },
                    {
                        name: "keywords",
                        content:
                            "Financial Planning Tool, Retirement Planning, Financial Consulting, Certified Financial Planner, CFP",
                    },
                ]}
                link={[
                    { rel: "canonical", href: "https://retire.us/get-started" },
                ]}
            />

            <Header
                opacity={true}
                bgOnScroll="bg-white"
                blueOnScroll={true}
                topLabel={topLabel}
                handleCloseTopLabel={closeTopLabel}
            />

            {getStarted?.hero && (
                <div
                    className={`w-full bg-about-us-texture bg-cover bg-center bg-no-repeat ${topLabel && "mt-[150px] lg:mt-[78px]"
                        }`}
                >
                    <div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] px-6 mx-auto">
                        <div className="w-full md:max-w-[820px] pt-[100px] md:pt-[200px] pb-[60px] md:pb-[120px] mx-auto text-center">
                            <h1 className="font-bold text-[46px] leading-[48px] md:text-[70px] md:leading-[74px] text-white pb-[24px]">
                                {getStarted?.hero?.title}
                            </h1>
                            <div
                                className="text-base text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] text-white"
                                dangerouslySetInnerHTML={{
                                    __html: getStarted?.hero?.text,
                                }}
                            />
                            {getStarted?.hero?.cta && (
                                <div className="pt-[24px]">
                                    <FillButtonLink
                                        href={getStarted.hero.cta.link}
                                        className="w-max py-[15px] xl:py-[25px] px-6 xl:px-10 mx-auto"
                                    >
                                        <div className="flex items-center gap-4">
                                            {getStarted.hero.cta.text}
                                            <span>&#183;&#183;</span>
                                        </div>
                                    </FillButtonLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {getStarted?.twoHalfBlock && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white">
                    <div className="bg-[#DDE3F0] pt-[60px] md:pt-[120px] flex items-end lg:order-2">
                        {getStarted?.twoHalfBlock?.right?.image && (
                            <Image
                                src={getImage(
                                    getStarted.twoHalfBlock.right.image
                                )}
                                className="w-full max-w-[344px] md:max-w-[490px] mx-auto"
                                alt="Mobile"
                            />
                        )}
                    </div>
                    <div
                        className="w-full px-6 md:pl-[80px] md:pr-[67px] py-[60px] md:py-[120px] lg:order-1"
                        style={{
                            background:
                                "url(/assets/images/get-started/bg.png) no-repeat left 400px/55%",
                        }}
                    >
                        <h2 className="text-[32px] leading-[36px] md:text-[56px] md:leading-[60px] font-bold text-[#000714]">
                            {getStarted?.twoHalfBlock?.left?.title}
                        </h2>
                        <div className="text-base text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] text-[#434A59] mt-[20px] md:mt-[24px] mb-[8px] md:mb-[0]">
                            {getStarted?.twoHalfBlock?.left?.subtitle}
                        </div>
                        <ul className="text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
                            {getStarted?.twoHalfBlock?.left?.items &&
                                getStarted.twoHalfBlock.left.items.map(
                                    (item, index) => (
                                        <li
                                            style={{
                                                background:
                                                    "url(/assets/images/get-started/list.svg) no-repeat left 5px / 20px",
                                            }}
                                            className="list-none pl-[38px] mt-[8px] md:mt-[10px]"
                                            key={`two_half_block_left_${index}`}
                                        >
                                            {item.text}
                                        </li>
                                    )
                                )}
                        </ul>
                        {getStarted?.twoHalfBlock?.left?.cta && (
                            <FillButtonLink
                                href={getStarted.twoHalfBlock.left.cta.link}
                                className="w-full md:w-max py-[15px] xl:py-[25px] px-6 xl:px-10 mt-[24px] md:mt-[75px]"
                                blue={true}
                            >
                                <div className="flex items-center gap-4">
                                    {getStarted.twoHalfBlock.left.cta.text}
                                    <span>&#183;&#183;</span>
                                </div>
                            </FillButtonLink>
                        )}
                        <div className="flex text-[#173A78] text-[14px] md:text-[16px] leading-[16px] md:leading-[24px] align-center justify-start mt-[36px] md:mt-[88px]">
                            <Image
                                src="/assets/images/get-started/info.svg"
                                alt="Icon Info"
                                className="mr-2"
                            />
                            {getStarted?.twoHalfBlock?.left?.info}
                        </div>
                    </div>
                </div>
            )}

            {getStarted?.featured && (
                <Featured
                    title={getStarted.featured.title}
                    elements={getStarted.featured.featureds.data}
                />
            )}

            {getStarted && <Footer />}
        </div>
    );
};

export default GetStarted;

GetStarted.displayName = "GetStarted";

export async function getServerSideProps(context) {
    const response = await fetchAPI("/get-started");
    const content = response?.data?.attributes ?? fallback.getStarted;

    return {
        props: {
            getStarted: content,
            ssr: true,
        },
    }
}
