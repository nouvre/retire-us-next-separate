import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy: React.FC = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [tocRight, setTocRight] = useState<number>(0);
    const tocPanel = useRef(null);
    const contentPanel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        if (contentPanel && contentPanel.current) {
            let _tocRight =
                window.innerWidth -
                contentPanel.current.getBoundingClientRect().right;
            setTocRight(_tocRight);
        }
    }, []);

    return (
        <div className="w-full bg-white">
            <Helmet
                title="Privacy Policy - RetireUS"
                htmlAttributes={{ lang: "en" }}
                meta={[
                    {
                        name: `description`,
                        content: "RetireUS Privacy Policy",
                    },
                    {
                        name: `keywords`,
                        content:
                            "Financial Planning Tool, Retirement Planning, Financial Consulting, Certified Financial Planner, CFP",
                    },
                ]}
            />
            <Header opacity={false} bgOnScroll="bg-white" />

            <div className="w-full lg:max-w-[1024px] xl:max-w-[1440px] bg-white mx-auto py-[150px] md:py-[200px] px-[20px] relative">
                <div
                    className="flex flex-wrap justify-between"
                    ref={contentPanel}
                >
                    <div className="w-full md:w-[calc(100%-450px)] order-last md:order-first">
                        <h1 className="font-bold text-[70px] text-[#000714] leading-[74px] pb-[60px]">
                            Privacy Policy
                        </h1>
                        <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                            Thank you for choosing to be part of our community
                            at Cornerstone Capital Holdings LLC, doing business
                            as RetireUS ("RetireUS," "we," "us," or "our"). We
                            are committed to protecting your personal
                            information and your right to privacy. If you have
                            any questions or concerns about this privacy notice
                            or our practices with regard to your personal
                            information, please contact us at info@retire.us.
                        </div>
                        <div className="text-[18px] text-[#000714] leading-[30px] font-bold pb-[20px]">
                            This privacy notice describes how we might use your
                            information if you:
                        </div>
                        <ul className="list-disc marker:text-[#FAA942] list-inside pb-[32px]">
                            <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                Visit our website at retire.us
                            </li>
                            <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                Engage with us in other related ways ― including
                                any sales, marketing, or events
                            </li>
                        </ul>
                        <div className="text-[18px] text-[#000714] leading-[30px] font-bold pb-[20px]">
                            In this privacy notice, if we refer to:
                        </div>
                        <ul className="list-disc marker:text-[#FAA942] list-inside pb-[32px]">
                            <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                "Website," we are referring to any website of
                                ours that references or links to this policy
                            </li>
                            <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                "Services," we are referring to our Website, and
                                other related services, including any sales,
                                marketing, or events
                            </li>
                        </ul>
                        <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                            The purpose of this privacy notice is to explain to
                            you in the clearest way possible what information we
                            collect, how we use it, and what rights you have in
                            relation to it. If there are any terms in this
                            privacy notice that you do not agree with, please
                            discontinue use of our Services immediately.
                        </div>
                        <div className="text-[18px] text-[#5A6478] leading-[30px]">
                            Please read this privacy notice carefully, as it
                            will help you understand what we do with the
                            information that we collect.
                        </div>

                        <div className="pt-[60px]" id="section_1">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                1. What information do we collect?
                            </div>
                            <div className="text-[23px] text-[#000714] leading-[28px] font-bold pb-[32px]">
                                Personal information you disclose to us
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We collect personal information that
                                you provide to us.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                We collect personal information that you
                                voluntarily provide to us when you register on
                                the Website, express an interest in obtaining
                                information about us or our products and
                                Services, when you participate in activities on
                                the Website or otherwise when you contact us.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                The personal information that we collect depends
                                on the context of your interactions with us and
                                the Website, the choices you make and the
                                products and features you use.
                                <div className="text-[#000714]">
                                    The personal information we collect may
                                    include the following:
                                </div>
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[32px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Personal Information Provided by You.
                                    </span>{" "}
                                    We collect names; phone numbers; email
                                    addresses; mailing addresses; job titles;
                                    contact preferences; debit/credit card
                                    numbers; billing addresses; contact or
                                    authentication data; personal financial
                                    statements; and other similar information.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Payment Data.
                                    </span>{" "}
                                    We may collect data necessary to process
                                    your payment if you make purchases, such as
                                    your payment instrument number (such as a
                                    credit card number), and the security code
                                    associated with your payment instrument. All
                                    payment data is stored by Stripe. You may
                                    find their privacy notice link(s) here:{" "}
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                    >
                                        https://stripe.com/privacy
                                    </a>
                                    .
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Social Media Login Data.
                                    </span>{" "}
                                    We may provide you with the option to
                                    register with us using your existing social
                                    media account details, like your Facebook,
                                    Twitter or other social media account. If
                                    you choose to register in this way, we will
                                    collect the information described in the
                                    section called "
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                    >
                                        How do we handle your social logins?
                                    </a>
                                    " below.
                                </li>
                            </ul>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[40px]">
                                All personal information that you provide to us
                                must be true, complete and accurate, and you
                                must notify us of any changes to such personal
                                information.
                            </div>

                            <div className="text-[23px] text-[#000714] leading-[28px] font-bold pb-[32px]">
                                Information automatically collected
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: Some information — such as your
                                Internet Protocol (IP) address and/or browser
                                and device characteristics — is collected
                                automatically when you visit our Website.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                We automatically collect certain information
                                when you visit, use or navigate the Website.
                                This information does not reveal your specific
                                identity (like your name or contact information)
                                but may include device and usage information,
                                such as your IP address, browser and device
                                characteristics, operating system, language
                                preferences, referring URLs, device name,
                                country, location, information about how and
                                when you use our Website and other technical
                                information. This information is primarily
                                needed to maintain the security and operation of
                                our Website, and for our internal analytics and
                                reporting purposes.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                Like many businesses, we also collect
                                information through cookies and similar
                                technologies.
                            </div>
                            <div className="text-[18px] text-[#000714] leading-[30px] pb-[20px]">
                                The information we collect includes:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[40px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Device Data
                                    </span>{" "}
                                    We collect device data such as information
                                    about your computer, phone, tablet or other
                                    device you use to access the Website.
                                    Depending on the device used, this device
                                    data may include information such as your IP
                                    address (or proxy server), device and
                                    application identification numbers,
                                    location, browser type, hardware model
                                    Internet service provider and/or mobile
                                    carrier, operating system and system
                                    configuration information.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Location Data
                                    </span>{" "}
                                    We collect location data such as information
                                    about your device's location, which can be
                                    either precise or imprecise. How much
                                    information we collect depends on the type
                                    and settings of the device you use to access
                                    the Website. For example, we may use GPS and
                                    other technologies to collect geolocation
                                    data that tells us your current location
                                    (based on your IP address). You can opt out
                                    of allowing us to collect this information
                                    either by refusing access to the information
                                    or by disabling your Location setting on
                                    your device. Note however, if you choose to
                                    opt out, you may not be able to use certain
                                    aspects of the Services.
                                </li>
                            </ul>

                            <div className="text-[23px] text-[#000714] leading-[28px] font-bold pb-[32px]">
                                Information collected from other sources
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We may collect limited data from
                                public databases, marketing partners, social
                                media platforms, and other outside sources.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In order to enhance our ability to provide
                                relevant marketing, offers and services to you
                                and update our records, we may obtain
                                information about you from other sources, such
                                as public databases, joint marketing partners,
                                affiliate programs, data providers, social media
                                platforms, as well as from other third parties.
                                This information includes mailing addresses, job
                                titles, email addresses, phone numbers, intent
                                data (or user behavior data), Internet Protocol
                                (IP) addresses, social media profiles, social
                                media URLs and custom profiles, for purposes of
                                targeted advertising and event promotion. If you
                                interact with us on a social media platform
                                using your social media account (e.g. Facebook
                                or Twitter), we receive personal information
                                about you such as your name, email address, and
                                gender. Any personal information that we collect
                                from your social media account depends on your
                                social media account's privacy settings.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_2">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                2. How do we use your information?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We process your information for
                                purposes based on legitimate business interests,
                                the fulfillment of our contract with you,
                                compliance with our legal obligations, and/or
                                your consent.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                We use personal information collected via our
                                Website for a variety of business purposes
                                described below. We process your personal
                                information for these purposes in reliance on
                                our legitimate business interests, in order to
                                enter into or perform a contract with you, with
                                your consent, and/or for compliance with our
                                legal obligations. We indicate the specific
                                processing grounds we rely on next to each
                                purpose listed below.
                            </div>

                            <div className="text-[18px] text-[#000714] leading-[30px] pb-[20px]">
                                We use the information we collect or receive:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[40px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To facilitate account creation and logon
                                        process.
                                    </span>{" "}
                                    If you choose to link your account with us
                                    to a third-party account (such as your
                                    Google or Facebook account), we use the
                                    information you allowed us to collect from
                                    those third parties to facilitate account
                                    creation and logon process for the
                                    performance of the contract. See the section
                                    below headed "
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                    >
                                        How do we handle your social logins?
                                    </a>
                                    " for further information.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To post testimonials.
                                    </span>{" "}
                                    We post testimonials on our Website that may
                                    contain personal information. Prior to
                                    posting a testimonial, we will obtain your
                                    consent to use your name and the content of
                                    the testimonial. If you wish to update, or
                                    delete your testimonial, please contact us
                                    at jv@ccp.group and be sure to include your
                                    name, testimonial location, and contact
                                    information.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Request feedback.
                                    </span>{" "}
                                    We may use your information to request
                                    feedback and to contact you about your use
                                    of our Website.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To enable user-to-user communications.
                                    </span>{" "}
                                    We may use your information in order to
                                    enable user-to-user communications with each
                                    user's consent.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To manage user accounts.
                                    </span>{" "}
                                    We may use your information for the purposes
                                    of managing our account and keeping it in
                                    working order.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To send administrative information to
                                        you.
                                    </span>{" "}
                                    We may use your personal information to send
                                    you product, service and new feature
                                    information and/or information about changes
                                    to our terms, conditions, and policies.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To protect our Services.
                                    </span>{" "}
                                    We may use your information as part of our
                                    efforts to keep our Website safe and secure
                                    (for example, for fraud monitoring and
                                    prevention).
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To enforce our terms, conditions and
                                        policies for business purposes, to
                                        comply with legal and regulatory
                                        requirements or in connection with our
                                        contract.
                                    </span>
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To respond to legal requests and prevent
                                        harm.
                                    </span>{" "}
                                    If we receive a subpoena or other legal
                                    request, we may need to inspect the data we
                                    hold to determine how to respond.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Fulfill and manage your orders.
                                    </span>{" "}
                                    We may use your information to fulfill and
                                    manage your orders, payments, returns, and
                                    exchanges made through the Website.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Administer prize draws and competitions.
                                    </span>{" "}
                                    We may use your information to administer
                                    prize draws and competitions when you elect
                                    to participate in our competitions.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To deliver and facilitate delivery of
                                        services to the user.
                                    </span>{" "}
                                    We may use your information to provide you
                                    with the requested service.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To respond to user inquiries/offer
                                        support to users.
                                    </span>{" "}
                                    We may use your information to respond to
                                    your inquiries and solve any potential
                                    issues you might have with the use of our
                                    Services.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        To send you marketing and promotional
                                        communications.
                                    </span>{" "}
                                    We and/or our third-party marketing partners
                                    may use the personal information you send to
                                    us for our marketing purposes, if this is in
                                    accordance with your marketing preferences.
                                    For example, when expressing an interest in
                                    obtaining information about us or our
                                    Website, subscribing to marketing or
                                    otherwise contacting us, we will collect
                                    personal information from you. You can
                                    opt-out of our marketing emails at any time
                                    (see the "
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                    >
                                        What are your privacy rights?
                                    </a>
                                    " below).
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Deliver targeted advertising to you.
                                    </span>{" "}
                                    We may use your information to develop and
                                    display personalized content and advertising
                                    (and work with third parties who do so)
                                    tailored to your interests and/or location
                                    and to measure its effectiveness.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        For other business purposes.
                                    </span>{" "}
                                    We may use your information for other
                                    business purposes, such as data analysis,
                                    identifying usage trends, determining the
                                    effectiveness of our promotional campaigns
                                    and to evaluate and improve our Website,
                                    products, marketing and your experience. We
                                    may use and store this information in
                                    aggregated and anonymized form so that it is
                                    not associated with individual end users and
                                    does not include personal information.
                                </li>
                            </ul>
                        </div>

                        <div className="pt-[60px]" id="section_3">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                3. Will your information be shared with anyone?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We only share information with your
                                consent, to comply with laws, to provide you
                                with services, to protect your rights, or to
                                fulfill business obligations.
                            </div>

                            <div className="text-[18px] text-[#000714] leading-[30px] pb-[20px]">
                                We may process or share your data that we hold
                                based on the following legal basis:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[32px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Consent.
                                    </span>{" "}
                                    We may process your data if you have given
                                    us specific consent to use your personal
                                    information for a specific purpose.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Legitimate Interests.
                                    </span>{" "}
                                    We may process your data when it is
                                    reasonably necessary to achieve our
                                    legitimate business interests.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Performance of a Contract.
                                    </span>{" "}
                                    Where we have entered into a contract with
                                    you, we may process your personal
                                    information to fulfill the terms of our
                                    contract.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Legal Obligations.
                                    </span>{" "}
                                    We may disclose your information where we
                                    are legally required to do so in order to
                                    comply with applicable law, governmental
                                    requests, a judicial proceeding, court
                                    order, or legal process, such as in response
                                    to a court order or a subpoena (including in
                                    response to public authorities to meet
                                    national security or law enforcement
                                    requirements).
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Vital Interests.
                                    </span>{" "}
                                    We may disclose your information where we
                                    believe it is necessary to investigate,
                                    prevent, or take action regarding potential
                                    violations of our policies, suspected fraud,
                                    situations involving potential threats to
                                    the safety of any person and illegal
                                    activities, or as evidence in litigation in
                                    which we are involved.
                                </li>
                            </ul>

                            <div className="text-[18px] text-[#000714] leading-[30px] pb-[20px]">
                                More specifically, we may need to process your
                                data or share your personal information in the
                                following situations:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[32px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Business Transfers.
                                    </span>{" "}
                                    We may share or transfer your information in
                                    connection with, or during negotiations of,
                                    any merger, sale of company assets,
                                    financing, or acquisition of all or a
                                    portion of our business to another company.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Google Maps Platform APIs.
                                    </span>{" "}
                                    We may share your information with certain
                                    Google Maps Platform APIs (e.g., Google Maps
                                    API, Place API). To find out more about
                                    Google's Privacy Policy, please refer to
                                    this{" "}
                                    <a
                                        href="https://stripe.com/privacy"
                                        target="_blank"
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                    >
                                        link
                                    </a>
                                    . We obtain and store on your device
                                    ('cache') your location. You may revoke your
                                    consent anytime by contacting us at the
                                    contact details provided at the end of this
                                    document.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Business Partners.
                                    </span>{" "}
                                    We may share your information with our
                                    business partners to offer you certain
                                    products, services or promotions.
                                </li>
                            </ul>
                        </div>

                        <div className="pt-[60px]" id="section_4">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                4. Do we use cookies and other tracking
                                technologies?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We may use cookies and other tracking
                                technologies to collect and store your
                                information.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                We may use cookies and similar tracking
                                technologies (like web beacons and pixels) to
                                access or store information. Specific
                                information about how we use such technologies
                                and how you can refuse certain cookies is set
                                out in our Cookie Notice.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_5">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                5. How do we handle your social logins?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: If you choose to register or log in to
                                our services using a social media account, we
                                may have access to certain information about
                                you.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                Our Website offers you the ability to register
                                and login using your third-party social media
                                account details (like your Facebook or Twitter
                                logins). Where you choose to do this, we will
                                receive certain profile information about you
                                from your social media provider. The profile
                                information we receive may vary depending on the
                                social media provider concerned, but will often
                                include your name, email address, friends list,
                                profile picture as well as other information you
                                choose to make public on such social media
                                platform.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                We will use the information we receive only for
                                the purposes that are described in this privacy
                                notice or that are otherwise made clear to you
                                on the relevant Website. Please note that we do
                                not control, and are not responsible for, other
                                uses of your personal information by your
                                third-party social media provider. We recommend
                                that you review their privacy notice to
                                understand how they collect, use and share your
                                personal information, and how you can set your
                                privacy preferences on their sites and apps.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_6">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                6. How long do we keep your information?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We keep your information for as long
                                as necessary to fulfill the purposes outlined in
                                this privacy notice unless otherwise required by
                                law.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                We will only keep your personal information for
                                as long as it is necessary for the purposes set
                                out in this privacy notice, unless a longer
                                retention period is required or permitted by law
                                (such as tax, accounting or other legal
                                requirements). No purpose in this notice will
                                require us keeping your personal information for
                                longer than six (6) months past the termination
                                of the user's account.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                When we have no ongoing legitimate business need
                                to process your personal information, we will
                                either delete or anonymize such information, or,
                                if this is not possible (for example, because
                                your personal information has been stored in
                                backup archives), then we will securely store
                                your personal information and isolate it from
                                any further processing until deletion is
                                possible.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_7">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                7. How do we keep your information safe?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We aim to protect your personal
                                information through a system of organizational
                                and technical security measures.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                We have implemented appropriate technical and
                                organizational security measures designed to
                                protect the security of any personal information
                                we process. However, despite our safeguards and
                                efforts to secure your information, no
                                electronic transmission over the Internet or
                                information storage technology can be guaranteed
                                to be 100% secure, so we cannot promise or
                                guarantee that hackers, cybercriminals, or other
                                unauthorized third parties will not be able to
                                defeat our security, and improperly collect,
                                access, steal, or modify your information.
                                Although we will do our best to protect your
                                personal information, transmission of personal
                                information to and from our Website is at your
                                own risk. You should only access the Website
                                within a secure environment.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_8">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                8. Do we collect information from minors?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In Short: We do not knowingly collect data from
                                or market to children under 18 years of age.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                We do not knowingly solicit data from or market
                                to children under 18 years of age. By using the
                                Website, you represent that you are at least 18
                                or that you are the parent or guardian of such a
                                minor and consent to such minor dependent's use
                                of the Website. If we learn that personal
                                information from users less than 18 years of age
                                has been collected, we will deactivate the
                                account and take reasonable measures to promptly
                                delete such data from our records. If you become
                                aware of any data we may have collected from
                                children under age 18, please contact us at{" "}
                                <a
                                    href="mailto:jv@ccp.group"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    jv@ccp.group
                                </a>
                                .
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_9">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                9. What are your privacy rights?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                In Short: You may review, change, or terminate
                                your account at any time.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                If you are a resident in the EEA or UK and you
                                believe we are unlawfully processing your
                                personal information, you also have the right to
                                complain to your local data protection
                                supervisory authority. You can find their
                                contact details here:{" "}
                                <a
                                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                    target="_blank"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline break-all md:break-normal"
                                >
                                    https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                </a>
                                .
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                If you are a resident in Switzerland, the
                                contact details for the data protection
                                authorities are available here:{" "}
                                <a
                                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                    target="_blank"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline break-all md:break-normal"
                                >
                                    https://www.edoeb.admin.ch/edoeb/en/home.html
                                </a>
                                .
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                If you have questions or comments about your
                                privacy rights, you may email us at{" "}
                                <a
                                    href="mailto:support@retire.us"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    support@retire.us
                                </a>
                                .
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_10">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                10. Controls for do-not-track features
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                Most web browsers and some mobile operating
                                systems and mobile applications include a
                                Do-Not-Track ("DNT") feature or setting you can
                                activate to signal your privacy preference not
                                to have data about your online browsing
                                activities monitored and collected. At this
                                stage no uniform technology standard for
                                recognizing and implementing DNT signals has
                                been finalized. As such, we do not currently
                                respond to DNT browser signals or any other
                                mechanism that automatically communicates your
                                choice not to be tracked online. If a standard
                                for online tracking is adopted that we must
                                follow in the future, we will inform you about
                                that practice in a revised version of this
                                privacy notice.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_11">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                11. Do California residents have specific
                                privacy rights?
                            </div>
                            <div className="text-[16px] text-[#5A6478] leading-[30px] font-bold pb-[32px]">
                                In Short: Yes, if you are a resident of
                                California, you are granted specific rights
                                regarding access to your personal information.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                California Civil Code Section 1798.83, also
                                known as the "Shine The Light" law, permits our
                                users who are California residents to request
                                and obtain from us, once a year and free of
                                charge, information about categories of personal
                                information (if any) we disclosed to third
                                parties for direct marketing purposes and the
                                names and addresses of all third parties with
                                which we shared personal information in the
                                immediately preceding calendar year. If you are
                                a California resident and would like to make
                                such a request, please submit your request in
                                writing to us using the contact information
                                provided below.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[40px]">
                                If you are under 18 years of age, reside in
                                California, and have a registered account with
                                the Website, you have the right to request
                                removal of unwanted data that you publicly post
                                on the Website. To request removal of such data,
                                please contact us using the contact information
                                provided below, and include the email address
                                associated with your account and a statement
                                that you reside in California. We will make sure
                                the data is not publicly displayed on the
                                Website, but please be aware that the data may
                                not be completely or comprehensively removed
                                from all our systems (e.g. backups, etc.).
                            </div>
                            <div className="text-[28px] text-[#000714] leading-[32px] font-bold pb-[28px]">
                                CCPA Privacy Notice
                            </div>
                            <div className="text-[18px] text-[#000714] leading-[30px] font-bold pb-[20px]">
                                The California Code of Regulations defines a
                                "resident" as:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[32px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Business Transfers.
                                    </span>{" "}
                                    (1) every individual who is in the State of
                                    California for other than a temporary or
                                    transitory purpose and
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    <span className="text-[#FAA942] font-bold">
                                        Google Maps Platform APIs.
                                    </span>{" "}
                                    (2) every individual who is domiciled in the
                                    State of California who is outside the State
                                    of California for a temporary or transitory
                                    purpose
                                </li>
                            </ul>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                All other individuals are defined as
                                "non-residents."
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                If this definition of "resident" applies to you,
                                we must adhere to certain rights and obligations
                                regarding your personal information.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[40px]">
                                What categories of personal information do we
                                collect?
                            </div>
                            <div className="text-[23px] text-[#000714] leading-[28px] font-bold pb-[20px]">
                                We have collected the following categories of
                                personal information in the past twelve (12)
                                months:
                            </div>

                            <div className="w-full pb-[40px]">
                                <div className="flex border-b border-[#5A6478] py-[12px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] text-[#000714] leading-[24px] font-bold">
                                            Category
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] text-[#000714] leading-[24px] font-bold">
                                            Examples
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] text-[#000714] leading-[24px] font-bold">
                                            Collected
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            A. Identifiers
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Contact details, such as real name,
                                            alias, postal address, telephone or
                                            mobile contact number, unique
                                            personal identifier, online
                                            identifier, Internet Protocol
                                            address, email address and account
                                            name
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            B. Personal information categories
                                            listed in the California Customer
                                            Records statute
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Name, contact information,
                                            education, employment, employment
                                            history and financial information.
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            C. Protected classification
                                            characteristics under California or
                                            federal law
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Gender and date of birth
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            D. Commercial information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Transaction information, purchase
                                            history, financial details and
                                            payment information
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            E. Biometric information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Fingerprints and voiceprints
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            F. Internet or other similar network
                                            activity
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Browsing history, search history,
                                            online behavior, interest data, and
                                            interactions with our and other
                                            websites, applications, systems and
                                            advertisements
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            G. Geolocation data
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Device location
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            H. Audio, electronic, visual,
                                            thermal, olfactory, or similar
                                            information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Images and audio, video or call
                                            recordings created in connection
                                            with our business activities
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            I. Professional or
                                            employment-related information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Business contact details in order to
                                            provide you our services at a
                                            business level, job title as well as
                                            work history and professional
                                            qualifications if you apply for a
                                            job with us
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            J. Education Information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Student records and directory
                                            information
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-b border-[#DDE3F0] py-[20px]">
                                    <div className="w-[40%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            K. Inferences drawn from other
                                            personal information
                                        </div>
                                    </div>
                                    <div className="w-[40%] md:w-[50%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px]">
                                            Inferences drawn from any of the
                                            collected personal information
                                            listed above to create a profile or
                                            summary about, for example, an
                                            individual's preferences and
                                            characteristics
                                        </div>
                                    </div>
                                    <div className="w-[10%]">
                                        <div className="text-[16px] md:text-[18px] text-[#5A6478] leading-[30px] text-right">
                                            Yes
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[18px] text-[#000714] leading-[30px] font-bold pb-[20px]">
                                We may also collect other personal information
                                outside of these categories instances where you
                                interact with us in-person, online, or by phone
                                or mail in the context of:
                            </div>

                            <ul className="list-disc marker:text-[#FAA942] pb-[32px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    Receiving help through our customer support
                                    channels;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    Participation in customer surveys or
                                    contests; and
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    Facilitation in the delivery of our Services
                                    and to respond to your inquiries.
                                </li>
                            </ul>

                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                How do we use and share your personal
                                information?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                More information about our data collection and
                                sharing practices can be found in this privacy
                                notice.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                You may contact us by email at{" "}
                                <a
                                    href="mailto:info@retire.us"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    info@retire.us
                                </a>
                                , or by referring to the contact details at the
                                bottom of this document.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                If you are using an authorized agent to exercise
                                your right to opt-out we may deny a request if
                                the authorized agent does not submit proof that
                                they have been validly authorized to act on your
                                behalf.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                Will your information be shared with anyone
                                else?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                We may disclose your personal information with
                                our service providers pursuant to a written
                                contract between us and each service provider.
                                Each service provider is a for-profit entity
                                that processes the information on our behalf.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                We may use your personal information for our own
                                business purposes, such as for undertaking
                                internal research for technological development
                                and demonstration. This is not considered to be
                                "selling" of your personal data.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[36px]">
                                Cornerstone Capital Holdings LLC has not
                                disclosed or sold any personal information to
                                third parties for a business or commercial
                                purpose in the preceding 12 months. Cornerstone
                                Capital Holdings LLC will not sell personal
                                information in the future belonging to website
                                visitors, users and other consumers.
                            </div>
                            <div className="text-[28px] text-[#000714] leading-[32px] font-bold pb-[32px]">
                                Your rights with respect to your personal data
                            </div>
                            <div className="text-[20px] text-[#000714] leading-[32px] font-bold pb-[20px]">
                                Right to request deletion of the data - Request
                                to delete
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                You can ask for the deletion of your personal
                                information. If you ask us to delete your
                                personal information, we will respect your
                                request and delete your personal information,
                                subject to certain exceptions provided by law,
                                such as (but not limited to) the exercise by
                                another consumer of his or her right to free
                                speech, our compliance requirements resulting
                                from a legal obligation or any processing that
                                may be required to protect against illegal
                                activities.
                            </div>
                            <div className="text-[20px] text-[#000714] leading-[32px] font-bold pb-[20px]">
                                Right to be informed - Request to know
                            </div>
                            <div className="text-[18px] text-[#000714] leading-[30px] font-bold pb-[20px]">
                                Depending on the circumstances, you have a right
                                to know:
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[20px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    whether we collect and use your personal
                                    information;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    the categories of personal information that
                                    we collect;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    the purposes for which the collected
                                    personal information is used;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    whether we sell your personal information to
                                    third parties;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    the categories of personal information that
                                    we sold or disclosed for a business purpose;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    the categories of third parties to whom the
                                    personal information was sold or disclosed
                                    for a business purpose;
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    the business or commercial purpose for
                                    collecting or selling personal information.
                                </li>
                            </ul>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                In accordance with applicable law, we are not
                                obligated to provide or delete consumer
                                information that is de-identified in response to
                                a consumer request or to re-identify individual
                                data to verify a consumer request.
                            </div>
                            <div className="text-[20px] text-[#000714] leading-[32px] font-bold pb-[20px]">
                                Right to Non-Discrimination for the Exercise of
                                a Consumer's Privacy Rights
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                We will not discriminate against you if you
                                exercise your privacy rights.
                            </div>
                            <div className="text-[20px] text-[#000714] leading-[32px] font-bold pb-[20px]">
                                Verification process
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                Upon receiving your request, we will need to
                                verify your identity to determine you are the
                                same person about whom we have the information
                                in our system. These verification efforts
                                require us to ask you to provide information so
                                that we can match it with information you have
                                previously provided us. For instance, depending
                                on the type of request you submit, we may ask
                                you to provide certain information so that we
                                can match the information you provide with the
                                information we already have on file, or we may
                                contact you through a communication method (e.g.
                                phone or email) that you have previously
                                provided to us. We may also use other
                                verification methods as the circumstances
                                dictate.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[32px]">
                                We will only use personal information provided
                                in your request to verify your identity or
                                authority to make the request. To the extent
                                possible, we will avoid requesting additional
                                information from you for the purposes of
                                verification. If, however, we cannot verify your
                                identity from the information already maintained
                                by us, we may request that you provide
                                additional information for the purposes of
                                verifying your identity, and for security or
                                fraud-prevention purposes. We will delete such
                                additionally provided information as soon as we
                                finish verifying you.
                            </div>
                            <div className="text-[20px] text-[#000714] leading-[32px] font-bold pb-[20px]">
                                Other privacy rights
                            </div>
                            <ul className="list-disc marker:text-[#FAA942] pb-[20px] pl-6">
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    you may object to the processing of your
                                    personal data.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    you may request correction of your personal
                                    data if it is incorrect or no longer
                                    relevant, or ask to restrict the processing
                                    of the data.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px] pb-[12px]">
                                    you can designate an authorized agent to
                                    make a request under the CCPA on your
                                    behalf. We may deny a request from an
                                    authorized agent that does not submit proof
                                    that they have been validly authorized to
                                    act on your behalf in accordance with the
                                    CCPA.
                                </li>
                                <li className="text-[#5A6478] text-[18px] leading-[30px]">
                                    you may request to opt-out from future
                                    selling of your personal information to
                                    third parties. Upon receiving a request to
                                    opt-out, we will act upon the request as
                                    soon as feasibly possible, but no later than
                                    15 days from the date of the request
                                    submission.
                                </li>
                            </ul>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                To exercise these rights, you can contact us by
                                email at{" "}
                                <a
                                    href="mailto:info@retire.us"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    info@retire.us
                                </a>
                                , or by referring to the contact details at the
                                bottom of this document. If you have a complaint
                                about how we handle your data, we would like to
                                hear from you.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_12">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                12. Do we make updates ti this notice?
                            </div>
                            <div className="text-[16px] text-[#5A6478] leading-[24px] font-bold pb-[32px]">
                                In Short: Yes, we will update this notice as
                                necessary to stay compliant with relevant laws.
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                We may update this privacy notice from time to
                                time. The updated version will be indicated by
                                an updated "Revised" date and the updated
                                version will be effective as soon as it is
                                accessible. If we make material changes to this
                                privacy notice, we may notify you either by
                                prominently posting a notice of such changes or
                                by directly sending you a notification. We
                                encourage you to review this privacy notice
                                frequently to be informed of how we are
                                protecting your information.
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_13">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                13. How can you contact us about this notice?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px] pb-[20px]">
                                If you have questions or comments about this
                                notice, you may contact our Data Protection
                                Officer (DPO), Jonathan Vettori, by email at
                                jv@ccp.group, by phone at 215-996-7322, or by
                                post to:
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                Cornerstone Capital Holdings LLC
                                <br />
                                Jonathan Vettori
                                <br />
                                2301 Cherry Street
                                <br />
                                CS2
                                <br />
                                Philadelphia, PA 19103
                                <br />
                                United States
                            </div>
                        </div>

                        <div className="pt-[60px]" id="section_14">
                            <div className="text-[36px] text-[#000714] leading-[40px] font-bold pb-[40px]">
                                14. How can you review, update or delete the
                                data we collect from you?
                            </div>
                            <div className="text-[18px] text-[#5A6478] leading-[30px]">
                                Based on the applicable laws of your country,
                                you may have the right to request access to the
                                personal information we collect from you, change
                                that information, or delete it in some
                                circumstances. To request to review, update, or
                                delete your personal information, please submit
                                a request form by clicking{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    here
                                </a>
                                .<br />
                                This privacy policy was created using Termly's{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7] underline"
                                >
                                    Privacy Policy Generator
                                </a>
                                .
                            </div>
                        </div>
                    </div>

                    <div
                        className={`w-full md:w-[400px] bg-[#F7F9FC] rounded-[20px] p-[32px] mb-[50px] md:fixed order-first md:order-last`}
                        style={{
                            right: tocRight,
                            top: scrollTop > 200 ? 100 : 200,
                        }}
                        ref={tocPanel}
                    >
                        <ol className="list-decimal marker:text-[#A2ACBE]">
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_1"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    What information do we collect?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_2"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How do we use your information?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_3"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Will your information be shared with anyone?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_4"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Do we use cookies and other tracking
                                    technologies?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_5"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How do we handle your social logins?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_6"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How long do we keep your information?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_7"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How do we keep your information safe?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_8"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Do we collect information from minors?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_9"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    What are your privacy rights?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_10"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Controls for do-not-track features
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_11"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Do California residents have specific
                                    privacy rights?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_12"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    Do we make updates ti this notice?
                                </a>
                            </li>
                            <li className="w-full pb-[12px]">
                                <a
                                    href="#section_13"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How can you contact us about this notice?
                                </a>
                            </li>
                            <li className="w-full">
                                <a
                                    href="#section_14"
                                    className="text-[16px] leading-[24px] text-transparent bg-clip-text bg-gradient-to-br from-[#3F68E4] to-[#5EC4F7]"
                                >
                                    How can you review, update or delete the
                                    data we collect from you?
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
