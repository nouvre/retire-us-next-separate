import React, { useEffect, useState } from "react";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import { SectionContainer } from "@/components/common/Wrappers";
import {
    TextSubitle,
    TextTitleLg,
    TextNormal,
} from "@/components/Typographies";
import { FillButtonLink } from "@/components/Buttons/WhiteButtons";
import { Helmet } from "react-helmet";
import Plans from "@/components/Plans";
import Plannings from "@/components/Plannings";
import Banner from "@/components/Banner";
import { getImage, fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const OurServices: React.FC = (props) => {
    const [ourServices, setOurServices] = useState<any>(null);
    const [topLabel, setTopLabel] = useState<any>(null);

    useEffect(() => {
        async function getCmsData() {
            const response = await fetchAPI("/our-service");
            const content = response?.data?.attributes ?? fallback.ourServices;

            setOurServices(content);

            const topLabel = sessionStorage.getItem("topLabel");

            if (topLabel !== "off") {
                setTopLabel(content.topLabel);
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
                title="Subscription-Based Financial Planning Services - RetireUS"
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: "description",
                        content:
                            "Subscription-based services designed to meet your goals. Meet with a Certified Financial Planner and create a personalized plan for as little as $10/week.",
                    },
                    {
                        name: "keywords",
                        content:
                            "Financial Planning, Retirement Planning, Wealth Management, Financial Consultant, Virtual Financial Planning",
                    },
                ]}
                link={[
                    {
                        rel: "canonical",
                        href: "https://retire.us/our-services",
                    },
                ]}
            />

            <Header
                opacity={true}
                {...props}
                bgOnScroll="bg-white"
                blueOnScroll={true}
                topLabel={topLabel}
                handleCloseTopLabel={closeTopLabel}
            />

            {ourServices?.hero && (
                <div
                    className={`relative w-full bg-hero-texture-mobile lg:bg-hero-texture bg-cover bg-bottom bg-no-repeat ${
                        topLabel && "mt-[150px] lg:mt-[78px]"
                    }`}
                >
                    <div className="w-full lg:max-w-[960px] xl:max-w-[1280px] relative grid grid-cols-1 lg:grid-cols-2 mx-auto text-white px-6 lg:px-[0]">
                        <div className="pt-[100px] flex items-center">
                            <div className="max-w-[620px]">
                                <h1 className="w-full text-[46px] leading-[48px] lg:text-[70px] lg:leading-[74px] text-white font-bold mb-5 lg:mb-6">
                                    {ourServices?.hero?.title}
                                </h1>
                                <div
                                    className="w-full text-[16px] leading-[24px] lg:text-xl lg:leading-8"
                                    dangerouslySetInnerHTML={{
                                        __html: ourServices?.hero?.text,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex pt-[32px] lg:pt-[126px] justify-center items-end">
                            {ourServices?.hero?.image && (
                                <Image
                                    src={getImage(ourServices.hero.image)}
                                    alt="Our Services"
                                    className="max-w-[320px] w-full"
                                />
                            )}
                        </div>

                        <Image
                            src="/assets/images/ico-ellipse.svg"
                            alt="ico-ellipse"
                            className="absolute left-[55%] top-[70%] hidden lg:block"
                        />
                    </div>
                </div>
            )}

            {ourServices?.copyImageCaptionBlock && (
                <SectionContainer
                    bg="bg-[#F7F9FC]"
                    className="grid lg:grid-cols-2 gap-y-[40px]"
                >
                    <div>
                        <TextTitleLg className="mb-5 lg:mb-8" align="left">
                            {ourServices?.copyImageCaptionBlock?.title}
                        </TextTitleLg>

                        <TextNormal
                            className="text-[16px] leading-[24px] lg:text-lg lg:leading-8 mb-5 lg:mb-6 text-[#434A59]"
                            grayed
                            dangerouslySetInnerHTML={{
                                __html: ourServices?.copyImageCaptionBlock
                                    ?.text,
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        {ourServices?.copyImageCaptionBlock?.image && (
                            <Image
                                src={getImage(
                                    ourServices.copyImageCaptionBlock.image
                                )}
                                alt="Mobile"
                                className="w-full max-w-[590px]"
                            />
                        )}
                        <div className="text-[#001F55] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] mt-[12px] lg:mt-[24px] font-bold">
                            {ourServices?.copyImageCaptionBlock?.caption}
                        </div>
                    </div>
                </SectionContainer>
            )}

            {ourServices?.planning && (
                <Plannings
                    background="bg-basic-title-mobile lg:bg-basic-title"
                    title={ourServices.planning.title}
                    text={ourServices.planning.text}
                    plannings={ourServices.planning.points}
                />
            )}

            {ourServices?.imageCopyBlock && (
                <SectionContainer
                    bg="bg-[#F7F9FC]"
                    className="grid lg:grid-cols-2 items-center gap-y-[40px] lg:gap-y-[0]"
                >
                    <div className="order-2 lg:order-1">
                        {ourServices?.imageCopyBlock?.image && (
                            <Image
                                src={getImage(ourServices.imageCopyBlock.image)}
                                alt="Mobile"
                                className="w-full max-w-[590px]"
                            />
                        )}
                    </div>
                    <div className="order-1 lg:order-2">
                        <TextTitleLg className="mb-5 lg:mb-8" align="left">
                            {ourServices?.imageCopyBlock?.title}
                        </TextTitleLg>

                        <TextNormal
                            className="text-[16px] leading-[24px] lg:text-lg lg:leading-8 text-[#434A59]"
                            grayed
                            dangerouslySetInnerHTML={{
                                __html: ourServices?.imageCopyBlock?.text,
                            }}
                        />
                    </div>
                </SectionContainer>
            )}

            {ourServices?.masteries && (
                <SectionContainer className="pb-[0] lg:pb-[0]">
                    {ourServices.masteries.map((mastery, index) => (
                        <div
                            className="pb-[60px] lg:pb-[120px]"
                            key={`masteries_${index}`}
                        >
                            <div
                                className={`flex justify-center w-full min-h-[60px] md:min-h-[138px] pt-[7px] md:pt-[28px] text-[28px] leading-[32px] md:text-[56px] md:leading-[60px] text-[#F7F9FC] font-bold ${
                                    mastery.type === "tax"
                                        ? "bg-tax-title-mobile lg:bg-tax-title"
                                        : "bg-wealth-title-mobile lg:bg-wealth-title"
                                } bg-no-repeat bg-center bg-100`}
                            >
                                {mastery.title}
                            </div>
                            <div
                                className="mt-[32px] lg:mt-[60px] lg:mb-[40px] lg:px-[220px] text-center text-[16px] leading-[24px] lg:text-[18px] lg:leading-[32px] text-[#434A59]"
                                dangerouslySetInnerHTML={{
                                    __html: mastery.text,
                                }}
                            ></div>
                            <div className="flex flex-wrap justify-between mt-[32px] lg:mt-[60px] gap-y-[40px]">
                                <div className="w-full lg:w-[49%]">
                                    <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-bold text-[24px] leading-[28px] lg:text-[36px] lg:leading-[40px] mb-[20px] lg:mb-[24px]">
                                        {mastery.left.title}
                                    </div>
                                    <TextNormal
                                        className="text-[16px] leading-[24px] lg:text-lg lg:leading-8 text-[#434A59]"
                                        grayed
                                        dangerouslySetInnerHTML={{
                                            __html: mastery.left.text,
                                        }}
                                    />
                                </div>
                                <div className="w-full lg:w-[49%] pl-[50px] lg:pl-[92px] bg-service bg-service-small lg:bg-service-big bg-no-repeat bg-left-top">
                                    <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-bold text-[20px] leading-[24px] lg:text-[23px] lg:leading-[28px]">
                                        {mastery.right.title}
                                    </div>
                                    <ul className="mt-[4px] lg:mt-[8px]">
                                        {mastery.right.items.map(
                                            (item, index) => (
                                                <li
                                                    key={`masteries_right_${index}`}
                                                    className="text-[#434A59] ml-[24px] mt-[8px] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[32px] font-Lato list-disc marker:text-[#FAA942] marker:text-[24px]"
                                                >
                                                    {item.text}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </SectionContainer>
            )}

            {ourServices?.plans && (
                <Plans
                    title={ourServices.plans.title}
                    text={ourServices.plans.text}
                    plans={ourServices.plans.plans.data}
                    cta={ourServices.plans.cta}
                />
            )}

            {ourServices?.toolkit && (
                <SectionContainer>
                    <div className="w-full max-w-[700px] mx-auto pb-10 lg:pb-[70px]">
                        <TextTitleLg className="mb-6">
                            {ourServices?.toolkit?.title}
                        </TextTitleLg>
                        <TextNormal
                            className="text-center text-base lg:text-xl leading-6 lg:leading-8 mb-10"
                            grayed
                            dangerouslySetInnerHTML={{
                                __html: ourServices?.toolkit?.text,
                            }}
                        />
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-[#4D7EF2] to-[#5FD4F4] font-Lato text-center text-xl lg:text-[28px] font-bold leading-6 lg:leading-8">
                            {ourServices?.toolkit?.subtitle}
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-[70px]">
                        {ourServices?.toolkit?.items &&
                            ourServices.toolkit.items.map((tool, index) => (
                                <div
                                    key={`toolkits_${index}`}
                                    className="flex flex-col items-center"
                                >
                                    <Image
                                        src={getImage(tool.icon)}
                                        className="mb-6 lg:mb-8"
                                    />
                                    <TextSubitle
                                        className="text-center mb-2 lg:mb-4"
                                        dangerouslySetInnerHTML={{
                                            __html: tool.title,
                                        }}
                                    />
                                    <TextNormal
                                        className="text-center text-base lg:text-lg leading-6 lg:leading-8"
                                        grayed
                                        dangerouslySetInnerHTML={{
                                            __html: tool.text,
                                        }}
                                    />
                                    {tool.cta && (
                                        <a
                                            href={tool.cta.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base lg:text-lg mt-4 text-[#001F55] flex items-center justify-center font-bold"
                                        >
                                            {tool.cta.text}&nbsp;&nbsp;
                                            <Image
                                                src="/assets/images/ico-external-link.svg"
                                                alt="ico-external-link"
                                            />
                                        </a>
                                    )}
                                </div>
                            ))}
                    </div>

                    <div className="mt-[80px]">
                        <div className="text-center text-[36px] leading-[40px] mb-[40px] font-bold">
                            {ourServices?.toolkit?.bottom}
                        </div>
                        {ourServices?.toolkit?.cta && (
                            <FillButtonLink
                                href={ourServices.toolkit.cta.link}
                                className="w-max py-[15px] xl:py-[25px] px-6 xl:px-10 mx-auto"
                                blue
                            >
                                <div className="flex items-center gap-4">
                                    {ourServices.toolkit.cta.text}
                                    <span>&#183;&#183;</span>
                                </div>
                            </FillButtonLink>
                        )}
                    </div>
                </SectionContainer>
            )}

            {ourServices?.banner && (
                <div className="bg-white px-[24px] pb-[60px] md:pb-[120px]">
                    <Banner
                        title={ourServices.banner.title}
                        text={ourServices.banner.text}
                        cta={ourServices.banner.cta}
                    />
                </div>
            )}

            {ourServices && <Footer />}
        </div>
    );
};

export default OurServices;
