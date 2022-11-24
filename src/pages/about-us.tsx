import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import {
    TextSubitle,
    TextTitleLg,
    TextNormal,
    TextGradient,
} from "@/components/Typographies";
import CustomSlider from "@/components/Slider";
import { SectionContainer } from "@/components/common/Wrappers";
import Banner from "@/components/Banner";
import CopyImageBlock from "@/components/CopyImageBlock";
import { getImage, fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const AboutUs: React.FC = ({ aboutUs }: any) => {
    // const [aboutUs, setAboutUs] = useState<any>(null);
    const [topLabel, setTopLabel] = useState<any>(null);

    useEffect(() => {
        async function getCmsData() {


            const topLabel = sessionStorage.getItem("topLabel");

            if (topLabel !== "off") {
                setTopLabel(aboutUs.topLabel);
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
            <Header
                opacity={true}
                bgOnScroll="bg-white"
                blueOnScroll={true}
                topLabel={topLabel}
                handleCloseTopLabel={closeTopLabel}
            />

            {aboutUs?.hero && (
                <div
                    className={`relative w-full bg-about-us-texture bg-cover bg-center bg-no-repeat px-6 ${topLabel && "mt-[150px] lg:mt-[78px]"
                        }`}
                >
                    <div className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto relative">
                        <div className="w-full max-w-[820px] pt-[100px] md:pt-[200px] pb-[60px] md:pb-[120px] mx-auto text-center">
                            <h1 className="font-bold text-[46px] leading-[48px] md:text-[70px] text-white md:leading-[74px] pb-[24px]">
                                {aboutUs?.hero?.title}
                            </h1>
                            <div
                                className="text-base leading-6 md:text-[20px] text-white md:leading-[30px]"
                                dangerouslySetInnerHTML={{
                                    __html: aboutUs?.hero?.text,
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {aboutUs?.sourceBlock && (
                <SectionContainer
                    grayed
                    className="flex flex-col lg:flex-row justify-between"
                >
                    <div className="flex-1">
                        <TextTitleLg className="mb-5 md:mb-6" align="left">
                            {aboutUs?.sourceBlock?.title}
                        </TextTitleLg>
                        <TextGradient className="text-base md:text-[23px] font-bold">
                            {aboutUs?.sourceBlock?.subtitle}
                        </TextGradient>
                    </div>

                    <div className="flex-1 flex justify-end pt-[64px] lg:pt-0">
                        <div className="lg:max-w-[500px]">
                            {aboutUs?.sourceBlock?.image && (
                                <Image
                                    src={getImage(aboutUs.sourceBlock.image)}
                                    alt="people-mockup"
                                    className="w-full mb-8"
                                />
                            )}
                            <TextNormal
                                className="text-base leading-6 md:text-[18px] md:leading-8 mb-3 md:pl-4"
                                grayed
                                dangerouslySetInnerHTML={{
                                    __html: aboutUs?.sourceBlock?.text,
                                }}
                            />
                            {aboutUs?.sourceBlock?.cta && (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={aboutUs.sourceBlock.cta.link}
                                    className="font-bold text-base leading-6 md:text-[18px] md:leading-8 text-[#001F55] flex items-center md:pl-4"
                                >
                                    {aboutUs.sourceBlock.cta.text}
                                    <Image
                                        src="/assets/images/ico-external-link.svg"
                                        alt="Ico-external-link"
                                        className="ml-2"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </SectionContainer>
            )}

            {aboutUs?.imageCopyBlock && (
                <SectionContainer className="flex flex-col-reverse lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-[45%] lg:self-end relative">
                        {aboutUs?.imageCopyBlock?.image && (
                            <Image
                                src={getImage(aboutUs.imageCopyBlock.image)}
                                alt="Bank"
                                className="bottom-0 left-0 lg:max-w-[100%] w-full"
                            />
                        )}
                    </div>
                    <div className="w-full lg:w-[49%]">
                        <TextTitleLg className="md:text-left mb-6">
                            {aboutUs?.imageCopyBlock?.title}
                        </TextTitleLg>
                        <TextNormal
                            className="text-base leading-6 md:text-[20px] md:leading-8"
                            grayed
                            dangerouslySetInnerHTML={{
                                __html: aboutUs?.imageCopyBlock?.text,
                            }}
                        />
                    </div>
                </SectionContainer>
            )}

            {aboutUs?.quoteBlock && (
                <>
                    <SectionContainer className="md:hidden py-10">
                        <div className="flex-1 flex justify-end">
                            <div className="relative lg:max-w-[510px]">
                                <TextNormal
                                    className="text-base leading-6 md:text-xl md:leading-8 mb-5 md:mb-6"
                                    grayed
                                    dangerouslySetInnerHTML={{
                                        __html: aboutUs?.quoteBlock?.quote,
                                    }}
                                />
                                {aboutUs?.quoteBlock?.quoteAuthor && (
                                    <div className="flex items-center gap-5">
                                        <Image
                                            src={getImage(
                                                aboutUs.quoteBlock.quoteAuthor
                                                    .photo
                                            )}
                                            className="w-[60px] h-[60px] rounded-full bg-[#F7F9FC] border border-[#EEF1F8]"
                                            alt="Retire Co-founder"
                                        />
                                        <div>
                                            <TextGradient className="text-base md:text-[20px] font-bold">
                                                {
                                                    aboutUs.quoteBlock
                                                        .quoteAuthor.name
                                                }
                                            </TextGradient>
                                            <TextNormal className="text-[14px] md:text-[18px]">
                                                {
                                                    aboutUs.quoteBlock
                                                        .quoteAuthor.position
                                                }
                                            </TextNormal>
                                        </div>
                                    </div>
                                )}
                                <Image
                                    src="/assets/images/ico-quote.svg"
                                    alt="ico-quote"
                                    className="absolute top-[-40px] left-0 z-[-1]"
                                />
                            </div>
                        </div>
                    </SectionContainer>

                    <SectionContainer
                        grayed
                        className="flex flex-col lg:flex-row justify-between md:pb-[32px]"
                    >
                        <div className="flex-1">
                            <TextTitleLg className="mb-5 md:mb-6" align="left">
                                {aboutUs?.quoteBlock?.title}
                            </TextTitleLg>
                            <TextGradient className="text-base md:text-[23px] font-bold">
                                {aboutUs?.quoteBlock?.subtitle}
                            </TextGradient>
                        </div>
                        <div className="flex-1 hidden md:flex justify-end pt-[64px] lg:pt-0">
                            <div className="relative lg:max-w-[510px]">
                                <TextNormal
                                    className="text-base leading-6 md:text-xl md:leading-8 mb-5 md:mb-6"
                                    grayed
                                    dangerouslySetInnerHTML={{
                                        __html: aboutUs?.quoteBlock?.quote,
                                    }}
                                />
                                {aboutUs?.quoteBlock?.quoteAuthor && (
                                    <div className="flex items-center gap-5">
                                        <Image
                                            src={getImage(
                                                aboutUs.quoteBlock.quoteAuthor
                                                    .photo
                                            )}
                                            className="w-[100px] h-[100px] rounded-full bg-[#F7F9FC] border border-[#EEF1F8]"
                                            alt="Meeting person"
                                        />
                                        <div>
                                            <TextGradient className="text-base md:text-[20px] font-bold">
                                                {
                                                    aboutUs.quoteBlock
                                                        .quoteAuthor.name
                                                }
                                            </TextGradient>
                                            <TextNormal className="text-[14px] md:text-[18px]">
                                                {
                                                    aboutUs.quoteBlock
                                                        .quoteAuthor.position
                                                }
                                            </TextNormal>
                                        </div>
                                    </div>
                                )}
                                <Image
                                    src="/assets/images/ico-quote.svg"
                                    alt="ico-quote"
                                    className="absolute top-[-40px] left-[-15px] z-[-1]"
                                />
                            </div>
                        </div>
                    </SectionContainer>

                    <SectionContainer
                        grayed
                        className="flex flex-col-reverse md:flex-row justify-between pt-0 md:pt-[32px]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[70px]">
                            {aboutUs?.quoteBlock?.items &&
                                aboutUs.quoteBlock.items.map((item, index) => (
                                    <div
                                        className="flex justify-between md:flex-col md:justify-start"
                                        key={`differences_${index}`}
                                    >
                                        <div className="w-[19%] md:w-full mb-8">
                                            <Image
                                                src={getImage(item.icon)}
                                                alt={item.icon}
                                                className="w-full md:w-[100px]"
                                            />
                                        </div>
                                        <div className="w-[76%] md:w-full">
                                            <TextSubitle className="mb-4">
                                                {item.title}
                                            </TextSubitle>
                                            <TextNormal
                                                className="text-[14px] md:text-[18px]"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.text,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </SectionContainer>
                </>
            )}

            {aboutUs?.copyImageBlock && (
                <CopyImageBlock
                    title={aboutUs.copyImageBlock.title}
                    text={aboutUs.copyImageBlock.text}
                    bigTitle={aboutUs.copyImageBlock.bigTitle}
                    background={aboutUs.copyImageBlock.background}
                    cta={aboutUs.copyImageBlock.cta}
                    image={aboutUs.copyImageBlock.image}
                />
            )}

            {aboutUs?.sliderBlock && (
                <div className="relative w-full z-[2] px-6">
                    <div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto relative py-[60px] md:py-[120px]">
                        <TextTitleLg className="mb-[80px]">
                            {aboutUs?.sliderBlock?.title}
                        </TextTitleLg>

                        {aboutUs?.sliderBlock?.slides && (
                            <CustomSlider
                                items={aboutUs?.sliderBlock?.slides}
                            />
                        )}

                        <TextNormal className="text-xs mt-6 md:mt-10 text-center">
                            {aboutUs?.sliderBlock?.bottom}
                        </TextNormal>

                        <div className="pt-6 md:pt-10">
                            <Banner
                                title={aboutUs?.banner?.title}
                                text={aboutUs?.banner?.text}
                                cta={aboutUs?.banner?.cta}
                            />
                        </div>
                    </div>
                </div>
            )}

            {aboutUs && <Footer />}
        </div>
    );
};

export default AboutUs;

AboutUs.displayName = "AboutUS"


export async function getServerSideProps(context) {
    const response = await fetchAPI("/about");
    const content = response?.data?.attributes ?? fallback.aboutUs;

    return {
        props: {
            aboutUs: content,
            ssr: true,
        },
    }
}
