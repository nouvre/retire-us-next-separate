import React, { forwardRef } from "react";
import moment from "moment";
import { isMobile } from "react-device-detect";

const TermsAndConditions = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <div
            className="w-full h-[250px] overflow-scroll mr-5 border border-[#DDE3F0] bg-[#F7F9FC] p-3 Disabled resize-y rounded-[12px]"
            ref={ref}
            onScroll={props.handleScroll}
        >
            <p className="MsoTitle">
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman Bold"',
                            letterSpacing: "0pt",
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            fontVariantCaps: "small-caps",
                            fontSize: "12pt",
                            textAlign: "center",
                        }}
                    >
                        RetireUS Subscription Agreement for Financial Planning
                        and Consulting
                    </span>
                </b>
                <b />
            </p>
            <p>&nbsp;</p>
            <p
                className="MsoNormal"
                style={{ textIndent: "36.0000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    AGREEMENT, made this&nbsp;&nbsp;
                </span>
                {moment().format("D")}
                <sup>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                            verticalAlign: "super",
                        }}
                    >
                        th
                    </span>
                </sup>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    day of&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {moment().format("MMMM")}, {moment().format("YYYY")}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;between the undersigned party, whose email address is{" "}
                    {props.user.email}
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        , and
                    </span>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            fontVariantCaps: "small-caps",
                            fontSize: "10pt",
                        }}
                    >
                        &nbsp;
                    </span>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        McAdam, LLC
                    </span>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            fontVariantCaps: "small-caps",
                            fontSize: "10pt",
                        }}
                    >
                        ,
                    </span>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        a registered investment adviser, whose principal mailing
                        address is 1880 John F. Kennedy Boulevard, 16
                    </span>
                    <sup>
                        <span
                            style={{
                                fontFamily: '"Times New Roman"',
                                fontSize: "10.0000pt",
                                verticalAlign: "super",
                            }}
                        >
                            th
                        </span>
                    </sup>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;Floor, Philadelphia, PA 19103 (hereinafter
                        referred to as the “Planner”).
                    </span>
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginRight: "33.6000pt",
                    marginLeft: "33.6000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    1.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        RetireUS Subscription Financial Planning/Consulting
                        Service(s)
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;The Planner shall provide Client with the financial
                    planning and/or consulting subscription services (the
                    “Subscription” or “RetireUS”) indicated in the tier selected
                    by the Client
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    on the annexed Schedule “A”. &nbsp;Planner’s recommendations
                    (if any) shall be discussed by the Planner with the Client
                    and may be implemented, at Client’s sole discretion, with
                    the corresponding professional advisors (i.e., broker,
                    insurance agent, accountant, attorney, etc.) of Client’s
                    choosing. &nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Client acknowledges that in respect to estate planning
                    matters, Planner’s role shall be that of a facilitator
                    between the Client and his/her corresponding professional
                    advisors. &nbsp;No portion of Planner’s services should be
                    interpreted as legal or accounting advice. The Client should
                    defer to his/her attorney or accountant. &nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The current charge and payment terms for the subscription
                    services selected by the Client are set forth on the annexed
                    Schedule “A”. &nbsp;In addition to Planner’s subscription
                    fee, the Client shall be responsible for reimbursement of
                    all out-of-pocket expenses reasonably incurred by the
                    Planner
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    in furtherance of the services to be provided under this{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Agreement. &nbsp;Planner will cease providing the services
                    provided in the subscription tier selected by the Client
                    upon Client’s express written request. &nbsp;In the event
                    Client’s financial situation or objectives change, Client
                    may change which subscription service Client is subscribed
                    to in Schedule “A” upon a written request to the Planner.{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "20.7000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "38.7000pt",
                    textIndent: "-18.0000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    2.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Scope of Engagement
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    .
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "31.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    (a)
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The Client agrees to provide information and/or
                    documentation requested by Planner in furtherance of this
                    Agreement as pertains to Client’s objectives, needs, and
                    goals. The Client acknowledges that Planner cannot
                    adequately perform its services for the Client unless the
                    Client diligently performs their responsibilities under this
                    Agreement. &nbsp;Planner shall not be required to verify any
                    information obtained from the Client, Client’s attorney,
                    accountant, or other professionals, and is expressly
                    authorized to rely thereon. &nbsp;The Client is free at all
                    times to accept or reject any recommendation from Planner,
                    and the Client acknowledges that they have the sole
                    authority with regard to the implementation, acceptance, or
                    rejection of any recommendation or advice from
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Planner;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "31.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    (b)
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The Client authorizes Planner to respond to inquiries from,
                    and communicate and share information with, Client’s
                    attorney, accountant and other professionals to the extent
                    necessary in furtherance of Planner’s services under this
                    Agreement;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "31.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    (c)
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The Client is free to obtain legal, accounting, insurance,
                    and brokerage services from any professional source to
                    implement the recommendations of Planner. &nbsp;Client will
                    retain absolute discretion over all implementation
                    decisions;{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "31.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    (d)
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The Client maintains sole responsibility to notify the
                    Planner if there is a change in his/her/their financial
                    situation or investment objectives for the purpose of
                    reviewing/evaluating/revising Planner’s previous
                    recommendations and/or services; and
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "31.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    (e)
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Planner’s services are provided based on Client’s
                    subscription tier selection in Schedule “A”. Planner’s
                    services pursuant to this Agreement do not include any
                    additional services not explicitly under the selected
                    subscription tier. In the event the client desires that
                    Planner provide additional services in addition to those in
                    the subscription tier selected by the Client, such
                    engagement shall be set forth in a separate
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Investment Advisory
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Agreement
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;between Planner and the Client, for which services
                    Planner shall be paid a separate and additional fee.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "22.5000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "22.5000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    3.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Investment Consulting.
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;To the extent specifically designated by the
                    Client on the annexed Schedule “A”, the Planner may provide
                    the Client with portfolio review and non-discretionary
                    investment consulting services. &nbsp;If so designated, the
                    Planner shall review the Client’s existing investment
                    portfolio, and then provide corresponding investment
                    recommendations and advice consistent with the Client’s
                    designated investment objective(s). All recommendations and
                    advice shall be based exclusively upon the information
                    provided to the Planner by the Client. &nbsp;In the event
                    that a Client’s personal/financial situation or investment
                    objective(s) change, it is the Client’s responsibility to
                    notify the Planner
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    accordingly for the purpose of the Planner
                    reviewing/evaluating/revising previous recommendations,
                    which follow-up services could be subject to an additional
                    mutually agreed upon fixed-fee or an hourly rate charge.
                    &nbsp;The Client maintains absolute discretion as to whether
                    or not to accept any of the Planner’s investment
                    recommendations. &nbsp;Planner’s service is generally
                    intended to provide limited investment advice to those
                    individuals who do not wish to engage the Planner in those
                    services. &nbsp;Should the Client desire additional services
                    which are not expressly included in a subscription tier, the
                    Client may separately engage the Planner to provide same per
                    the terms and conditions of an{" "}
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Investment Advisory
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Agreement
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;(
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        see
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;paragraph 2(e) of this{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Agreement). &nbsp;The Client acknowledges that past
                    performance may not be indicative of future results, and
                    understands that the future performance of any specific
                    investment or investment strategy (including
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;the investments and/or investment strategies
                    recommended by the Planner) may not be profitable, prove
                    successful, or equal any historical performance level(s).
                    &nbsp;In the event that the Planner is requested to provide
                    services with respect to a retirement plan sponsored by the
                    Client’s employer, the Client acknowledges that the
                    Planner’s recommendations shall be limited to the investment
                    alternatives provided by the retirement plan. &nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    4.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Investment Risk/No Guarantee
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;The Client
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    acknowledges and accepts that investments have varying
                    degrees of risk and that there can be no guarantee that any
                    investment will be profitable or prove successful. The
                    Client further acknowledges that Planner shall not be
                    responsible for any adverse financial consequences to
                    Client’s investment assets: &nbsp;(1) if such investment(s),
                    at the time recommended, were consistent with the Client’s
                    designated investment objectives; or, (2) resulting from the
                    investment decisions (or any other errors, actions or
                    omissions) made by the Client or the Client’s other
                    investment and non-investment-related professionals (i.e.,
                    attorney, CPA, insurance agent, investment adviser, broker,
                    etc.).
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "38.7000pt",
                    textIndent: "-18.0000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    5.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Termination
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;This{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Agreement shall remain in effect until terminated in writing
                    by either party.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "38.7000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    6.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Disclosure Brochure
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;
                </span>
                <span style={{ fontFamily: '"CG Times"', fontSize: "10pt" }}>
                    Client hereby acknowledges prior receipt of a copy of the
                    Planner’s written disclosure Brochure set forth on Part 2A
                    of Form ADV, together with the corresponding Part(s) 2B
                    Brochure supplement(s) for the Planner representative(s)
                    providing services to the Client. The Brochure discusses the
                    scope of the Planner’s services, fees, and any corresponding{" "}
                </span>
                <i>
                    <span
                        style={{ fontFamily: '"CG Times"', fontSize: "10pt" }}
                    >
                        conflicts of interest
                    </span>
                </i>
                <span style={{ fontFamily: '"CG Times"', fontSize: "10pt" }}>
                    .
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "38.7000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    7.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Planner Liability
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    .&nbsp; The Planner shall only be responsible for those
                    services that the Client has specifically designated to be
                    the subject of the Planner’s services under this
                    Agreement.&nbsp; The Planner, acting in good faith, shall
                    not be liable for any action, omission, investment
                    recommendation/decision, or loss in connection with this
                    Agreement. &nbsp;Planner shall not be responsible for any
                    adverse financial consequence when the Planner has provided
                    advice and/or services consistent with the Client’s
                    objective. Planner does not and cannot
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;guarantee the performance or success of any advice,
                    strategy, or investment, nor any specific level of
                    performance or success of any advice, strategy, to
                    investment. The Client
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    understands that investment decisions and/or recommendations
                    are subject to various market, currency, economic, political
                    and business risks, and during any specific point in time or
                    period, investment losses can and will occur. The Planner
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    will not be liable for acts or omissions of other
                    professionals or third-party service providers, including
                    but not limited to: a broker-dealer, custodian, attorney,
                    accountant, or insurance agent.{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The federal securities laws impose liabilities under certain
                    circumstances on persons who act in good faith, and
                    therefore no portion of the above shall constitute a waiver
                    or limitation of any rights which the&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Client
                </span>
                <b>
                    <span style={{ fontFamily: '"Times New Roman"' }}>
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    may have under any federal or state securities laws, ERISA,
                    or&nbsp;under the rules promulgated&nbsp;by the&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Employee Benefits Security Administration and/or&nbsp;the
                    Department of Labor
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    .
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "38.7000pt",
                    textIndent: "-18.0000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    8.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Assignment
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;This{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Agreement may not be assigned by either the Client or the
                    Planner without the prior consent{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    of the other party. &nbsp;The Client acknowledges and agrees
                    that transactions that do not result in a change of actual
                    control or management of the Planner shall not be considered
                    an assignment. &nbsp;Should there be a pending assignment of
                    this Agreement (within the meaning of Advisers Act), the
                    Client will be provided with written notice of such event.
                    If the Client does not object to such assignment, in
                    writing, it will be assumed that the Client has consented to
                    the assignment, and services will continue to be provided to
                    the Client to the extent required under the terms and
                    conditions of this Agreement. Examples of an assignment
                    include but are not limited to the sale of the assets of the
                    Planner to an unaffiliated investment adviser, a merger of
                    the Planner into an unaffiliated investment adviser, or a
                    material change in the ownership of the Planner.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "22.5000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        textDecorationLine: "underline",
                        fontSize: "10pt",
                    }}
                >
                    9.&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Arbitration
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;
                </span>
                <span
                    style={{ fontFamily: '"CG Times"', fontSize: "10.0000pt" }}
                >
                    Subject to the conditions and exceptions noted below, a
                </span>
                <span style={{ fontFamily: '"CG Times"', fontSize: "10pt" }}>
                    ny controversy or claim arising out of or relating to this
                    Agreement, or the breach thereof, shall be settled by
                    arbitration administered by the American Arbitration
                    Association in accordance with its Commercial Arbitration
                    Rules, and judgment on the award rendered by the
                    arbitrator(s) may be entered in any court having
                    jurisdiction thereof
                </span>
                <span
                    style={{
                        fontFamily: '"CG Times"',
                        fontSize: "10pt",
                        background: "rgb(255, 255, 255)",
                    }}
                >
                    .
                </span>
                <span
                    style={{ fontFamily: '"CG Times"', fontSize: "10.0000pt" }}
                >
                    &nbsp;Planner and Client understand that such arbitration
                    shall be final and binding, and that by agreeing to
                    arbitration, both Planner and Client are waiving their
                    respective rights to seek remedies in court, including the
                    right to a jury trial.&nbsp; Client acknowledges that they
                    have had a reasonable opportunity to review and consider
                    this arbitration provision prior to the execution of this
                    Agreement.&nbsp; Client acknowledges and agrees that in the
                    specific event of non-payment of any portion of Planner’s
                    fee pursuant to this Agreement, Planner, in addition to the
                    arbitration remedy, shall be free to pursue all other legal
                    remedies available to it under law, and shall be entitled to
                    reimbursement of reasonable attorneys’ fees and other costs
                    of collection.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "20.7000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "38.7000pt",
                    textIndent: "-18.0000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    10.&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Amendments
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;The Planner may amend this Agreement
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;upon written notification to the Client
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        .
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;Unless the
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Client notifies the Planner to the contrary, in writing; the
                    amendment shall become effective thirty (30) days from the
                    date of mailing.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    11.&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Privacy Notice/Form CRS
                    </span>
                </u>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Client acknowledges prior receipt of Planner’s{" "}
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Privacy Notice
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;and{" "}
                </span>
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Form CRS
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;(Client Relationship Summary).
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "33.6000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    12.&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Applicable Law/Venue
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;
                </span>
                <span
                    style={{ fontFamily: '"CG Times"', fontSize: "10.0000pt" }}
                >
                    To the extent not inconsistent with applicable law, this
                    Agreement shall be governed by and construed in accordance
                    with the laws of the Commonwealth of Pennsylvania.&nbsp; In
                    addition, to the extent not inconsistent with applicable
                    law, the venue (i.e., location) for the resolution of any
                    dispute or controversy between Planner and Client shall be
                    the County of Philadelphia, Commonwealth of Pennsylvania.
                    &nbsp;If the Client is served by a branch office maintained
                    by the Planner, the governing law shall be the laws of the
                    state in which the branch office is located, and the venue
                    shall be the county in which the branch office is located.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "0.0000pt",
                    textIndent: "20.7000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    13.&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Electronic Delivery
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;The Client authorizes the Planner to deliver, and
                    the Client agrees to accept, all required regulatory notices
                    and disclosures via electronic mail and/or via the Planner’s
                    internet web site, as well as all other correspondence from
                    the Planner. &nbsp;Planner shall have completed all delivery
                    requirements upon the forwarding of such document,
                    disclosure, notice and/or correspondence to the Client’s
                    last provided email address (or upon advising the Client via
                    email that such document is available on the Planner’s web
                    site and/or in the Client’s portal).{" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    It is the Client’s obligation to notify the Planner, in
                    writing, of any changes to the Client’s email address. Until
                    so notified, the Planner shall rely on the last provided
                    email address. &nbsp;The Client acknowledges that the Client
                    has the ongoing ability to receive and open standard
                    electronic mail and corresponding electronic documents. If,
                    at any time, the Client's electronic delivery situation
                    changes, or the Client is unable to open a specific
                    document, the Client agrees to immediately notify the
                    Planner so that the specific issue can be addressed and
                    resolved.{" "}
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Please Also Note
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    : By execution below, the Client releases and holds the
                    Planner harmless from any and all claims and/or damages of
                    whatever kind resulting from the Planner’s electronic
                    transmission of information, provided that Planner has
                    correctly addressed the electronic transmission to the
                    Client and/or other intended recipient.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    marginLeft: "38.7000pt",
                    textIndent: "-18.0000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    14.&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;
                </span>
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Authority
                    </span>
                </u>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    . &nbsp;The Client acknowledges that he/she/they have all
                    requisite legal authority to execute this Agreement. &nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    The Client correspondingly agrees to immediately notify the
                    Planner, in writing, in the event that this representation
                    should change.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "33.6000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ textIndent: "33.6000pt", textAlign: "justify" }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    IN WITNESS WHEREOF, the Client and Planner have each
                    executed this Agreement on the day, month and year first
                    above written.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    textIndent: isMobile ? 0 : "235.2000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    __________________________________________
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    textIndent: isMobile ? 0 : "235.2000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    , Client
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    textIndent: isMobile ? 0 : "235.2000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    __________________________________________
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    {" "}
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, Client
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal" style={{ marginLeft: "216.0000pt" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fontVariantCaps: "small-caps",
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fontVariantCaps: "small-caps",
                        fontSize: "10pt",
                    }}
                ></span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fontVariantCaps: "small-caps",
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontVariantNumeric: "normal",
                            fontVariantEastAsian: "normal",
                            fontVariantCaps: "small-caps",
                            fontSize: "10pt",
                        }}
                    >
                        McAdam, LLC
                    </span>
                </b>
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    ></span>
                </b>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{
                    textIndent: isMobile ? 0 : "235.2000pt",
                    textAlign: "justify",
                }}
            >
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    By: &nbsp;_____________________________________
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoTitle">
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            letterSpacing: "0.0000pt",
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
            </p>
            <p className="MsoTitle">
                <b>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            letterSpacing: "0.0000pt",
                            fontSize: "10.0000pt",
                        }}
                    >
                        &nbsp;
                    </span>
                </b>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "justify" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "center" }}>
                <b>
                    <u>
                        <span
                            style={{
                                fontFamily: '"Times New Roman"',
                                fontSize: "10pt",
                            }}
                        >
                            SCHEDULE A
                        </span>
                    </u>
                </b>
                <b>
                    <u>
                        <span
                            style={{
                                fontFamily: '"Times New Roman"',
                                fontSize: "10pt",
                            }}
                        ></span>
                    </u>
                </b>
            </p>
            <p className="MsoNormal" style={{ textAlign: "center" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal" style={{ textAlign: "center" }}>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RETIREUS SUBSCRIPTION TIERS
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Please indicate to which subscription tier you wish to
                    subscribe by checking the appropriate box.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-5 h-5 form-checkbox mr-1 text-[#0A2C75] border border-[#0A2C7535]"
                    checked={props.user.selected_plan?.plan_id === 2 || props.user.current_plan?.plan_id === 2 }
                />
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    Basic Planning: $10/week (billed monthly)
                </span>
            </div>
            <p className="MsoNormal">
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        Define your retirement vision, plan for market
                        volatility, and give purpose to your investments
                    </span>
                </i>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Personal analysis and planning from a Certified Financial
                    Planner.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Calculation of retirement goals, short term savings, and
                    investment targets.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    A cash flow plan to prioritize monthly savings & reduce
                    liabilities.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Ongoing adviser review meetings to track how your plan is
                    operating & make strategic adjustments.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Dedicated Wealth Concierge team for meeting support, account
                    service, and planning updates.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RetireUS Dashboard for plan tracking and easy communication
                    with your Wealth Concierge support team.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>

            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Areas of CFP® Evaluation:
                    </span>
                </u>
            </p>

            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Current Financial Situation
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Short-term goals
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Retirement
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Risk management & insurance
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Advanced Planning Strategies
                    </span>
                </u>
            </p>

            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Resilient Retirement®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Cash Flow Hierarchy®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    *The listed services are included in a full year Resilient
                    Retirement® subscription and are subject to four quarterly
                    billing cycles. The subscription will automatically renew
                    annually. Upon renewal, all listed services are available at
                    the a standard annualized planning schedule for as long as
                    the subscription remains active.
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-5 h-5 form-checkbox mr-1 text-[#0A2C75] border border-[#0A2C7535]"
                    checked={props.user.selected_plan?.plan_id === 3 || props.user.current_plan?.plan_id === 3}
                />
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    Tax Mastery: $20/week (billed monthly)
                </span>
            </div>
            <p className="MsoNormal">
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        A plan that is designed to maximize retirement
                        efficiency and minimize the tax consequences of your
                        retirement savings.
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Personal analysis and planning from a Certified Financial Planner.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Calculation of retirement goals, short term savings, and investment targets.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    A cash flow plan to prioritize monthly savings & reduce liabilities.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Ongoing adviser review meetings to track how your plan is operating & make strategic adjustments.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Dedicated Wealth Concierge team for meeting support, account service, and planning updates.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RetireUS Dashboard for plan tracking and easy communication with your Wealth Concierge support team.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Areas of CFP® Evaluation:
                    </span>
                </u>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Current Financial Situation
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Short-term goals
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Retirement
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Risk management & insurance
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Tax diversification
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Advanced Planning Strategies
                    </span>
                </u>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Resilient Retirement®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Cash Flow Hierarchy®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RMD Roadmap®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    *The listed services are included in a full year Tax Mastery subscription and are subject to four quarterly billing cycles. The subscription will automatically renew annually. Upon renewal, all listed services are available at the a standard annualized planning schedule for as long as the subscription remains active.
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-5 h-5 form-checkbox mr-1 text-[#0A2C75] border border-[#0A2C7535]"
                    checked={props.user.selected_plan?.plan_id === 4 || props.user.current_plan?.plan_id === 4}
                />
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    Wealth Mastery: $30/week (billed monthly)
                </span>
            </div>
            <p className="MsoNormal">
                <i>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10pt",
                        }}
                    >
                        A plan that is designed to amplify your wealth and estate through 1:1 advanced planning sessions with a personal Certified Financial Planner.
                    </span>
                </i>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Personal analysis and planning from a Certified Financial Planner.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Calculation of retirement goals, short term savings, and investment targets.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    A cash flow plan to prioritize monthly savings & reduce liabilities.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Ongoing adviser review meetings to track how your plan is operating & make strategic adjustments.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Dedicated Wealth Concierge team for meeting support, account service, and planning updates.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RetireUS Dashboard for plan tracking and easy communication with your Wealth Concierge support team.
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Areas of CFP® Evaluation:
                    </span>
                </u>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Current Financial Situation
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Short-term goals
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Retirement
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Risk management & insurance
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Tax diversification
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Estate
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>

            <p className="MsoNormal">
                <u>
                    <span
                        style={{
                            fontFamily: '"Times New Roman"',
                            fontSize: "10.0000pt",
                        }}
                    >
                        Advanced Planning Strategies
                    </span>
                </u>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Resilient Retirement®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Cash Flow Hierarchy®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    RMD Roadmap®
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Complex Income Playbook
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p
                className="MsoNormal"
                style={{ marginLeft: "36.0000pt", textIndent: "-18.0000pt" }}
            >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0000pt" }}>
                    ·&nbsp;
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    Generational Wealth Transfer
                </span>
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                ></span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10pt",
                    }}
                >
                    *The listed services are included in a full year Wealth Mastery subscription and are subject to four quarterly billing cycles. The subscription will automatically renew annually. Upon renewal, all listed services are available at the a standard annualized planning schedule for as long as the subscription remains active.
                </span>
            </p>

            <p className="MsoNormal">
                <span
                    style={{
                        fontFamily: '"Times New Roman"',
                        fontSize: "10.0000pt",
                    }}
                >
                    &nbsp;
                </span>
            </p>
            <p className="MsoNormal">
                <span
                    style={{ fontFamily: '"CG Times"', fontSize: "12.0000pt" }}
                >
                    &nbsp;
                </span>
            </p>
        </div>
    );
});

export default TermsAndConditions;
