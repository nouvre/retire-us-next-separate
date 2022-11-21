export const planFeatures = {
    cfp: {
        title: "Areas of CFP® Evaluation",
        currentFinancialSituation: {
            title: "Current Financial Situation",
        },
        shortTermGoals: {
            title: "Short Term Goals",
        },
        retirementPlanning: {
            title: "Retirement Planning",
        },
        insuranceAndRiskManagement: {
            title: "Insurance & Risk Management",
        },
        taxDiversification: {
            title: "Tax Diversification",
        },
        estatePlanning: {
            title: "Estate Planning",
        },
    },
    advanced: {
        title: "RetireUS Advanced Planning Strategies",
        resillientRetirement: {
            title: "Resilient Retirement®",
            description:
                "Resilient Retirement® is a strategy designed to clarify your retirement vision, plan for market volatility, and give your investments purpose.",
        },
        cashFlowHierarchy: {
            title: "Cash Flow Hierarchy®",
            description:
                "A Cash Flow Hierarchy® is a cash flow plan to prioritize your savings by goal, timeline, & importance.",
        },
        rmdRoadmap: {
            title: "RMD Roadmap®",
            description:
                "RMD Roadmap® is a tax planning strategy to help minimize taxable income in retirement & reduce future Required Minimum Distributions.",
        },
        complexIncomePlaybook: {
            title: "Complex Income Playbook",
            description:
                "A Complex Income Playbook is a cash flow plan designed to expedite your plan’s success through the strategic modeling of company stock incentives, deferred compensation, and other advanced income streams.",
        },
        generationalWealthPlanning: {
            title: "Lasting Legacy®",
            description:
                "Lasting Legacy® is a strategy designed to strengthen future estate valuation, minimize inheritance taxes, & create generational wealth for beneficiaries.",
        },
    },
};

export const planSummaries = [
    {
        id: 2,
        name: "Basic Planning",
        title: "$10/week (billed monthly)",
        description:
            "Define your financial goals, implement investment strategy, and prioritize your cash flow for financial efficiency",
        href: "/signup",
        features: {
            cfp: {
                currentFinancialSituation: true,
                shortTermGoals: true,
                retirementPlanning: true,
                insuranceAndRiskManagement: true,
                taxDiversification: false,
                estatePlanning: false,
            },
            advanced: {
                resillientRetirement: true,
                cashFlowHierarchy: true,
                rmdRoadmap: false,
                complexIncomePlaybook: false,
                generationalWealthPlanning: false,
            },
        },
        bgColor: ["#4D7EF2", "#5FD4F4"],
        background: "linear-gradient(90deg, #4D7EF2 -24.69%, #5FD4F4 123.22%)",
    },
    {
        id: 3,
        name: "Tax Mastery",
        title: "$20/week (billed monthly)",
        description:
            "Maximize your savings efficiency and minimize the tax consequences of your retirement savings",
        href: "/signup",
        features: {
            cfp: {
                currentFinancialSituation: true,
                shortTermGoals: true,
                retirementPlanning: true,
                insuranceAndRiskManagement: true,
                taxDiversification: true,
                estatePlanning: false,
            },
            advanced: {
                resillientRetirement: true,
                cashFlowHierarchy: true,
                rmdRoadmap: true,
                complexIncomePlaybook: false,
                generationalWealthPlanning: false,
            },
        },
        bgColor: ["#FAA942", "#FADD43"],
        background: "linear-gradient(90deg, #FAA942 23.79%, #FADD43 97.26%)",
    },
    {
        id: 4,
        name: "Wealth Mastery",
        title: "$30/week (billed monthly)",
        description:
            "Amplify your wealth and estate through 1:1 advanced planning sessions with a Certified Financial Planner (CFP®)",
        href: "/signup",
        features: {
            cfp: {
                currentFinancialSituation: true,
                shortTermGoals: true,
                retirementPlanning: true,
                insuranceAndRiskManagement: true,
                taxDiversification: true,
                estatePlanning: true,
            },
            advanced: {
                resillientRetirement: true,
                cashFlowHierarchy: true,
                rmdRoadmap: true,
                complexIncomePlaybook: true,
                generationalWealthPlanning: true,
            },
        },
        bgColor: ["#57CAC3", "#76EFC3"],
        background: "linear-gradient(90deg, #57CAC3 41.48%, #76EFC3 87.14%)",
    },
];

export const faqs = [
    {
        category: "Working with your RetireUS financial advisor",
        faqs: [
            {
                title: "Can I contact my RetireUS  financial advisor directly?",
                summaries: [
                    "Yes, as a part of your RetireUS plan, you will have direct phone and email access to your financial advisor.",
                ],
            },
            {
                title: "How often can I meet with my financial advisor?",
                summaries: [
                    "The number of virtual meetings with your financial advisor varies depending on your subscription type. For more information view our <a href='#' class='underline'>pricing page</a>.",
                ],
            },
            {
                title: "How often can I speak with my financial advisor about my retirement plan?",
                summaries: [
                    "You have unlimited access to your RetireUS financial advisor through the chat functionality on the RetireUS dashboard. ",
                ],
            },
            {
                title: "Can I meet directly with my Certified Financial Planner?",
                summaries: [
                    "Wealth mastery subscribers have direct phone and email access to their Certified Financial Planner and have the ability to schedule 1:1 advanced virtual planning sessions with their CFP.",
                ],
            },
            {
                title: "Can I speak directly to my Certified Financial Planner?",
                summaries: [
                    "All subscription levels include the ability to communicate with a Certified Financial Planner through the Wealth Concierge tab on the RetireUS dashboard.",
                ],
            },
            {
                title: "What if I already have a financial advisor?",
                summaries: [
                    "That is ok. Most RetireUS households have one or more financial professionals that they work with.",
                ],
            },
            {
                title: "What happens to my current advisor(s)?",
                summaries: [
                    "How a relationship continues with your current advisor is your choice.",
                ],
            },
        ],
    },
    {
        category: "Working with your RetireUS Wealth Concierge",
        faqs: [
            {
                title: "What is the Wealth Concierge?",
                summaries: [
                    "Wealth Concierge is a full service support team for your financial planning process. RetireUS is able to work with a range of wealth management solutions based on what works best for you.",
                ],
            },
            {
                title: "How does the Wealth Concierge differ from a normal financial advisor?",
                summaries: [
                    "Your Advisor helps you build a strategy and plan to hit your financial goals. Your Wealth Concierge makes sure your plan is successfully operating. ",
                ],
            },
        ],
    },
    {
        category: "RetireUS Retirement Planning Meeting Types",
        faqs: [
            {
                title: "What is an Analysis Review?",
                summaries: [
                    "In an Analysis Review meeting your virtual advisor will use screen share technology to evaluate your current financial situation in relation to your goal.",
                ],
            },
            {
                title: "What is a Planning Review?",
                summaries: [
                    "In a planning review meeting your virtual financial advisor will use screen share technology to review your personal investment blueprint to show you how to reach your goals.",
                ],
            },
            {
                title: "What is the difference between Analysis Review and Planning Review in the RetireUS financial planning and analysis process?",
                summaries: [
                    "The Analysis Review helps you and your financial advisor assess where you are in relation to your goals. In a Planning Review, you strategize with your retirement advisor on how to reach your goals.",
                ],
            },
            {
                title: "What is an Investment Review?",
                summaries: [
                    "In an Investment Review meeting, you will meet with your investment specialist to review the plan's investments to make sure that they are performing as expected.",
                ],
            },
            {
                title: "What does an Investment Review entail?",
                summaries: [
                    "During an Investment Review, your investment specialist will review global economic updates, how your investments are performing in relation to your plan, and help implement new investment strategies that align with your goals.",
                ],
            },
        ],
    },
    {
        category: "Asset and Wealth Management",
        faqs: [
            {
                title: "Do I have to move all of my assets to RetireUS?",
                summaries: [
                    "Most RetireUS clients prefer to have their assets managed directly by their advisor, however this is completely optional. RetireUS is able to work with a range of wealth management solutions based on what works best for you.",
                ],
            },
            {
                title: "Can you manage my investments?",
                summaries: [
                    "Yes, RetireUS currently manages over $1 Billion in client assets.",
                ],
            },
            {
                title: "Who manages my investments?",
                summaries: [
                    "RetireUS has a centralized team of Chartered Financial Analysts and Certified Financial Planner advisors who will directly manage your investment account.",
                ],
            },
        ],
    },
    {
        category: "Subscriptions & Subscription Management",
        faqs: [
            {
                title: "What’s included in my subscription?",
                summaries: [
                    "All RetireUS subscriptions include:",
                    "<ul class='summary-bullets'><li>Virtual meetings with a personal financial advisor</li><li>A certified financial plan</li><li>Unlimited advisor chat</li><li>Unlimited Wealth Concierge support</li><li>Personal retirement dashboard that tracks your progress and assesses planning risks</li><li>Retirement planning checklist to keep you on track</li></ul>",
                ],
            },
            {
                title: "How can I change my subscription tier?",
                summaries: [
                    "Your subscription tier can be changed easily by contacting your Wealth Concierge support team.",
                ],
            },
            {
                title: "What happens if I cancel my subscription?",
                summaries: [
                    "If you decide to cancel your subscription you will lose direct access to your RetireUS financial advisor and the paid features of the RetireUS.",
                ],
            },
            {
                title: "How do I cancel my subscription?",
                summaries: [
                    "If you need to cancel your subscription our Wealth Concierge team will assist you in plan termination.",
                ],
            },
            {
                title: "Will I be able to access any information if I need to cancel my subscription?",
                summaries: [
                    "Yes, you always have access to your RetireUS Dashboard which stores your planning profile",
                ],
            },
        ],
    },
    {
        category: "Pricing",
        faqs: [
            {
                title: "Is this a one time fee?",
                summaries: [
                    "Your RetireUS subscription is billed Quarterly and includes 3 months of unlimited access to the RetireUS platform.",
                ],
            },
            {
                title: "Do you offer financial and retirement planning services a la carte?",
                summaries: [
                    "RetireUS does not provide  financial and retirement planning services on a per meetings basis. All  financial and retirement planning services and virtual financial planning meetings are included in your RetireUS subscription.",
                ],
            },
        ],
    },
    {
        category: "Plans",
        faqs: [
            {
                title: "Can I see an example plan?",
                summaries: [
                    "Yes, we will email you an example plan upon request.",
                ],
            },
            {
                title: "What are the next steps once I sign up for a RetireUS plan?",
                summaries: [
                    "The next step is to complete your planning profile in the RetireUS dashboard.",
                ],
            },
        ],
    },
    {
        category: "Support",
        faqs: [
            {
                title: "How do I reset my password?",
                summaries: [
                    "From the login screen <a href='https://retire.us/signin' target='_blank' class='underline'>https://retire.us/signin</a>, click ‘Forgot Password?’ to be prompted to change/update your credentials.",
                ],
            },
            {
                title: "How do I reset my username?",
                summaries: [
                    "Your username is the same as your email. To change this, please contact us directly at <a href='mailto:support@retire.us' class='underline'>support@retire.us</a>",
                ],
            },
            {
                title: "How do I contact support?",
                summaries: [
                    "The Wealth Concierge support team can be contacted directly at 1-800-857-PLAN",
                ],
            },
            {
                title: "How do I update my billing information?",
                summaries: [
                    "You can update your billing information in the bill tab of your RetireUS Dashboard.",
                ],
            },
        ],
    },
    {
        category: "Information/Privacy",
        faqs: [
            {
                title: "What personal information do you collect?",
                summaries: [
                    "We only collect information that is necessary to the financial planning process. For more information view our privacy policy",
                ],
            },
            {
                title: "How is my information stored?",
                summaries: [
                    "All information is stored in an encrypted database, Amazon S3 or Amazon Simple Storage Service which is a service offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network.",
                ],
            },
        ],
    },
];
