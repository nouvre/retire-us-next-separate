import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import { FillButtonLink } from "@/components/Buttons/WhiteButtons";
import {
    TextNormal,
    TextGradient,
    TextTitleLg,
} from "@/components/Typographies";
import Featured from "@/components/Featured";
import Plans from "@/components/Plans";
import Steps from "@/components/Steps";
import CopyImageBlock from "@/components/CopyImageBlock";
import { getImage, fetchAPI } from "../../util/cms";
import { fallback } from "../fallback";
import Image from '@/components/common/Image';

const Home: React.FC = (props) => {
    const [homepage, setHomepage] = useState<any>(null);
    const [topLabel, setTopLabel] = useState<any>(null);

    useEffect(() => {
        async function getCmsData() {
            const response = await fetchAPI("/homepage");
            const content = response?.data?.attributes ?? fallback.homepage;

            setHomepage(content);

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
                title="Your Path to Financial Freedom Starts with US - RetireUS"
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: "description",
                        content:
                            "Financial planning doesn't have to be complicated. Meet with a Certified Financial Planner to create a personalized financial plan from anywhere in the world.",
                    },
                    {
                        name: "keywords",
                        content:
                            "Financial Planning, Retirement Planning, Wealth Management Consultants, Financial Planning and Analysis, Certified Financial Planner, Financial Advisor",
                    },
                    {},
                ]}
                link={[{ rel: "canonical", href: "https://retire.us" }]}
            />

            <Header
                opacity={true}
                {...props}
                bgOnScroll="bg-white"
                blueOnScroll={true}
                topLabel={topLabel}
                handleCloseTopLabel={closeTopLabel}
            />

            {homepage?.hero && (
                <div
                    className={`relative w-full bg-hero-texture-mobile lg:bg-hero-texture bg-cover bg-bottom bg-no-repeat px-6 lg:px-[0] ${
                        topLabel && "mt-[150px] lg:mt-[78px]"
                    }`}
                >
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:max-w-[960px] xl:max-w-[1280px] mx-auto pt-[100px] lg:pt-[160px] lg:pb-[80px]">
                        <div className="relative">
                            <h1 className="font-bold text-[46px] leading-[48px] lg:text-[54px] lg:leading-[58px] xl:text-[70px] xl:leading-[74px] text-white pb-5 lg:pb-6">
                                {homepage?.hero?.title}
                            </h1>
                            <div
                                className="text-base lg:text-lg xl:text-xl text-white leading-6 xl:leading-8 pb-8 lg:pb-11"
                                dangerouslySetInnerHTML={{
                                    __html: homepage?.hero?.text,
                                }}
                            />
                            {homepage?.hero?.cta?.link && (
                                <FillButtonLink
                                    href={homepage.hero.cta.link}
                                    className="w-max py-[15px] xl:py-[25px] px-6 xl:px-10 mx-0 mb-[14px] lg:mb-[57px]"
                                >
                                    <div className="flex items-center gap-4">
                                        {homepage.hero.cta.text}
                                        <span>&#183;&#183;</span>
                                    </div>
                                </FillButtonLink>
                            )}
                            <div className="hidden lg:flex text-[16px] text-white leading-[24px] align-center justify-start">
                                <Image
                                    src="/assets/images/ico-info.svg"
                                    alt="Icon Info"
                                    className="mr-2"
                                />
                                {homepage?.hero?.info}
                            </div>
                            <Image
                                src="/assets/images/ico-ellipse.svg"
                                alt="ico-ellipse"
                                className="absolute right-[50%] md:right-0 bottom-[20%] hidden md:block"
                            />
                        </div>
                        {homepage?.hero?.image && (
                            <Image
                                src={getImage(homepage.hero.image)}
                                alt="Hero People"
                                className="static md:absolute right-[80px] 2xl:right-[240px] bottom-[0] sm:w-[356px] lg:w-[570px] xl:w-[848px]"
                            />
                        )}
                        <Image
                            src="/assets/images/ico-ellipse.svg"
                            alt="ico-ellipse"
                            className="absolute right-[5%] top-[20%] hidden md:block"
                        />
                    </div>
                </div>
            )}

            {homepage?.charts && (
                <div className="relative w-full z-[2] bg-[#F7F9FC] px-6">
                    <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] py-[60px] lg:py-[120px] mx-auto">
                        <TextTitleLg className="sm:w-full max-w-[700px] mx-auto pb-0 sm:pb-10 md:pb-[30px]">
                            {homepage?.charts?.title}
                        </TextTitleLg>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[75px] pt-[50px] font-Lato">
                            {homepage?.charts?.chart &&
                                homepage.charts.chart.map((item, index) => (
                                    <div
                                        key={`charts_${index}`}
                                        className="max-w-[350px] text-center mx-auto"
                                    >
                                        <div className="flex justify-center">
                                            <Image
                                                src={`assets/images/chart-${item.percent}.svg`}
                                                alt={`Chart ${item.percent}`}
                                                className="h-[114px]"
                                            />
                                        </div>
                                        <div className="text-[#5A6478] text-[16px] md:text-[18px] lg:text-[20px] leading-6 md:leading-8 pt-10">
                                            {item.description}
                                        </div>
                                        <div className="pt-[16px] lg:pt-[20px]">
                                            <a
                                                href={item.cta.link}
                                                target={"_blank"}
                                                className="flex align-center justify-center text-[#001F55] text-[18px] leading-[30px] font-bold"
                                            >
                                                {item.cta.text}&nbsp;&nbsp;
                                                <Image
                                                    src="/assets/images/ico-external-link.svg"
                                                    alt="Ico-external-link"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {homepage?.copyImageBlock && (
                <div className="relative w-full z-[2] bg-future-texture bg-cover bg-no-repeat px-6">
                    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 relative lg:max-w-[1024px] xl:max-w-[1280px]">
                        <div className="w-full md:max-w-[600px] m-0 md:mx-auto lg:m-0 pt-[60px] pb-[70px] lg:py-[150px]">
                            <h2 className="font-bold text-[32px] md:text-[56px] text-white text-left md:text-center lg:text-left leading-9 md:leading-[60px] mb-6">
                                {homepage?.copyImageBlock?.title}
                            </h2>
                            <TextNormal
                                grayed
                                className="text-white text-base leading-6 md:text-xl md:leading-8 mb-10"
                                dangerouslySetInnerHTML={{
                                    __html: homepage?.copyImageBlock?.text,
                                }}
                            />
                            {homepage?.copyImageBlock?.cta && (
                                <FillButtonLink
                                    href={homepage.copyImageBlock.cta.link}
                                    className="w-max py-[15px] xl:py-[25px] px-6 xl:px-10"
                                >
                                    <div className="flex items-center gap-4">
                                        {homepage.copyImageBlock.cta.text}
                                        <span>&#183;&#183;</span>
                                    </div>
                                </FillButtonLink>
                            )}
                            <div className="flex text-white text-[14px] md:text-[16px] leading-[16px] md:leading-[24px] align-center justify-start mt-[36px] md:mt-[76px]">
                                <Image
                                    src="/assets/images/ico-info.svg"
                                    alt="Icon Info"
                                    className="mr-2"
                                />
                                {homepage?.copyImageBlock?.info}
                            </div>
                        </div>
                        <div className="flex justify-center place-items-end">
                            {homepage?.copyImageBlock?.image && (
                                <Image
                                    src={getImage(
                                        homepage.copyImageBlock.image
                                    )}
                                    alt="Person"
                                    className="bottom-0 right-0 w-full max-w-[290px] sm:max-w-[430px] mt-auto"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {homepage?.fourIcons && (
                <div className="relative w-full z-[2] bg-white py-[60px] md:py-[120px] px-6">
                    <div className="w-full lg:max-w-[1024px] xl:max-w-[1280px] mx-auto">
                        <TextTitleLg className="sm:w-full md:w-[700px] mx-auto mb-[30px]">
                            {homepage?.fourIcons?.title}
                        </TextTitleLg>
                        <TextNormal
                            grayed
                            className="text-center text-base leading-6 md:text-xl md:leading-8 mb-[40px] md:mb-[80px]"
                            dangerouslySetInnerHTML={{
                                __html: homepage?.fourIcons?.text,
                            }}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px]">
                            {homepage?.fourIcons?.items &&
                                homepage.fourIcons.items.map((item, index) => (
                                    <div
                                        className="flex items-start font-Lato"
                                        key={`four_icons_${index}`}
                                    >
                                        <Image
                                            src={getImage(item.icon)}
                                            alt="Bullet logo"
                                            className="w-[30px] md:w-[60px]"
                                        />
                                        <div className="pl-5 md:pl-[32px]">
                                            <TextGradient className="font-bold text-xl leading-6 md:text-[23px] md:leading-7 pb-3 md:pb-4">
                                                {item.title}
                                            </TextGradient>
                                            <TextNormal
                                                grayed
                                                className="text-base leading-6 md:text-xl md:leading-8"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.text,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {homepage?.fourIcons?.cta && (
                            <div className="mt-[24px] md:mt-[60px]">
                                <FillButtonLink
                                    href={homepage?.fourIcons?.cta?.link}
                                    className="w-full md:w-max mx-auto py-[15px] xl:py-[25px] px-6 xl:px-10"
                                    blue={true}
                                >
                                    <div className="flex items-center gap-4">
                                        {homepage?.fourIcons?.cta?.text}
                                        <span>&#183;&#183;</span>
                                    </div>
                                </FillButtonLink>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {homepage?.featured && (
                <Featured
                    title={homepage.featured.title}
                    elements={homepage.featured.featureds.data}
                />
            )}

            {homepage?.steps &&
                homepage.steps.map((step, index) => (
                    <Steps
                        key={`steps_${index}`}
                        title={step.title}
                        sideTitle={step.sideTitle}
                        steps={step.steps}
                        reversed={step.reversed}
                        noTopMargin={step.noTopMargin}
                        branding={step.branding}
                        withArrows={step.withArrows}
                        cta={step.cta}
                    />
                ))}

            {homepage?.plans && (
                <Plans
                    title={homepage.plans.title}
                    text={homepage.plans.text}
                    plans={homepage.plans.plans.data}
                    cta={homepage.plans.cta}
                />
            )}

            {homepage?.prefooter && (
                <CopyImageBlock
                    title={homepage.prefooter.title}
                    text={homepage.prefooter.text}
                    items={homepage.prefooter.items}
                    cta={homepage.prefooter.cta}
                    image={homepage.prefooter.image}
                />
            )}

            {homepage && <Footer />}
        </div>
    );
};

export default React.memo(Home);
