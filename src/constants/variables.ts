// export const questionOrder = [                  // questionOrder refers index of questionAnswers
//     0, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//     11, 12, 13, 14, 19, 45, 15, 20, 21, 24,
//     28, 30, 31, 33, 34, 35, 36, 37, 38,
//     39, 25, 40, 42                 // quizRender: 30- 40 ==> quizRenderIndex: 21 - 31
// ];

export const questionOrder = [
    // questionOrder refers index of questionAnswers
    10,
    5,
    6,
    7,
    8,
    9,
    2,
    3,
    4,
    11,
    13,
    15,
    21,
    12,
    24,
    19,
    45,
    14,
    28,
    30,
    31,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    25,
    40,
    42, // quizRender: 30- 40 ==> quizRenderIndex: 21 - 31
];

//  following orders refers index of questionOrder
// export const step6OrderIndex = 4;
// export const step6_4OrderIndex = 8;
export const step6OrderIndex = 1;
export const step6_4OrderIndex = 5;
export const quizRenderStartOrderIndex = 19;
export const quizRenderEndOrderIndex = 29;

export const stepCount =
    questionOrder.length -
    (step6_4OrderIndex - step6OrderIndex) -
    (quizRenderEndOrderIndex - quizRenderStartOrderIndex); //4: step6 + sub questions == 1, quizQuestions == 1

export interface Question {
    title: string;
    answers: QuestionAnswer[];
    single?: boolean;
    includeYear?: boolean;
    multiSelect?: boolean;
    content?: string;
    questionType?: string;
}
export const QuestionTypes = {
    TYPE_GENERAL: "{quesion general_type)",
    TYPE_3: "(quesion type for step3)",
    TYPE_4: "(quesion type for step4)",
    TYPE_5: "(quesion type for step5)",
    TYPE_25: "(quesion type for step25)",
    TYPE_38: "(quesion type for step38)",
    TYPE_CONFETTI: "(confetti)",
    TYPE_CONGRATULATION: "(congratulation)",
    TYPE_FINAL: "(quesion type for final result)",
    TYPE_ICON: "{quesion icon_type)",
    TYPE_CHECKBOX: "{quesion checkbox_type)",
};

export interface QuestionAnswer {
    title: string;
    meta_key: string;
    initialSelected?: boolean;
    icon?: string;
}

export const questionAnswers: Question[] = [
    //1     index: 0
    {
        title: "What does retirement mean to you?",
        answers: [
            {
                title: "Finally quitting the rat race",
                meta_key: "retireDefineQuitRatRace",
            },
            {
                title: "Working part time",
                meta_key: "retireDefineStillWorking",
            },
            {
                title: "Living on my own terms",
                meta_key: "retireDefineOwnTerms",
            },
            {
                title: "No financial worries",
                meta_key: "retireDefineNoWorries",
            },
        ],
    },
    //2     index: 1
    {
        title: "Why do you want to retire?",
        answers: [
            {
                title: "I’m tired of working",
                meta_key: "step2Answer_1",
            },
            {
                title: "It’s time to change my focus towards passion projects",
                meta_key: "step2Answer_2",
            },
            {
                title: "Relaxation awaits",
                meta_key: "step2Answer_3",
            },
            {
                title: "I want more time to travel and see loved ones",
                meta_key: "step2Answer_4",
            },
        ],
    },
    //3     index: 2
    {
        title: "At what age do you want to retire?",
        answers: [
            {
                title: "",
                meta_key: "wantToRetireAge",
            },
        ],
        single: true,
        questionType: QuestionTypes.TYPE_3,
    },
    //4     index: 3
    {
        title: "When is your birthday?",
        answers: [
            {
                title: "",
                meta_key: "birthYear",
            },
        ],
        single: true,
        questionType: QuestionTypes.TYPE_4,
    },
    //5     index: 4
    {
        title: "By our math, it sounds like you want to retire in :wantedYear: years. Does that sound right to you?",
        answers: [
            {
                title: "Yes, that is correct",
                meta_key: "step5Answer_1",
            },
            {
                title: "No, I need to update this",
                meta_key: "step5Answer_2",
            },
        ],
        questionType: QuestionTypes.TYPE_5,
    },
    //6     index: 5
    {
        title: "What concerns you about your ability to retire? (Select all that apply)",
        answers: [
            {
                title: "Running out of money",
                meta_key: "step6Answer_1",
            },
            {
                title: "Not being on pace",
                meta_key: "step6Answer_2",
            },
            {
                title: "Market volatility and losing current savings",
                meta_key: "step6Answer_3",
            },
            {
                title: "Paying too much in taxes",
                meta_key: "step6Answer_4",
            },
        ],
        multiSelect: true,
        questionType: QuestionTypes.TYPE_CHECKBOX,
    },
    //6-1     index: 6
    {
        title: "Why are you concerned about running out of money?",
        answers: [
            {
                title: "I don’t know how much I will need to have saved up",
                meta_key: "step6_follow1_answer_1",
            },
            {
                title: "I’m not sure what my lifestyle will cost in retirement",
                meta_key: "step6_follow1_answer_2",
            },
            {
                title: "Something else",
                meta_key: "step6_follow1_answer_3",
            },
        ],
    },
    //6-2     index: 7
    {
        title: "Why are you concerned about retirement pacing?",
        answers: [
            {
                title: "I’m not sure how much I should be saving each month to stay on track",
                meta_key: "step6_follow2_answer_1",
            },
            {
                title: "I’m not sure where to save",
                meta_key: "step6_follow2_answer_2",
            },
            {
                title: "Something else",
                meta_key: "step6_follow2_answer_3",
            },
        ],
    },
    //6-3     index: 8
    {
        title: "Why are you concerned about market volatility?",
        answers: [
            {
                title: "I’m afraid that losing money will push back my retirement goal",
                meta_key: "step6_follow3_answer_1",
            },
            {
                title: "I’m not sure how much risk I’m actually exposed to",
                meta_key: "step6_follow3_answer_2",
            },
            {
                title: "Something else",
                meta_key: "step6_follow3_answer_3",
            },
        ],
    },
    //6-4     index: 9
    {
        title: "Why are you concerned about in paying too much in taxes?",
        answers: [
            {
                title: "I have a lot of retirement savings in pretax accounts.",
                meta_key: "step6_follow4_answer_1",
            },
            {
                title: "I haven’t ever calculated my Required Minimum Distributions",
                meta_key: "step6_follow4_answer_2",
            },
            {
                title: "I don’t have much tax free savings for retirement",
                meta_key: "step6_follow4_answer_3",
            },
        ],
    },
    //7     index: 10
    {
        title: "What does your ideal retirement look like?",
        answers: [
            {
                title: "Just relaxing and paying my normal bills",
                meta_key: "retireForRelaxing",
            },
            {
                title: "Focusing on my passions",
                meta_key: "retireForNoProblem",
            },
            {
                title: "Acting like every day is a Saturday",
                meta_key: "retireForEveryDayIsSaturDay",
            },
            {
                title: "Jetsetting around the world",
                meta_key: "retireForVacation",
            },
        ],
    },
    //8     index: 11
    {
        title: "How much do you think retirement will cost per year?",
        answers: [
            {
                title: "Up to 50k",
                meta_key: "step8Answer_1",
                icon: "ico-stack-xs.svg",
            },
            {
                title: "50k - 100k",
                meta_key: "step8Answer_2",
                icon: "ico-stack-md.svg",
            },
            {
                title: "100k - 150k",
                meta_key: "step8Answer_3",
                icon: "ico-stack-lg.svg",
            },
            {
                title: "150k +",
                meta_key: "step8Answer_4",
                icon: "ico-stack-full.svg",
            },
            {
                title: "I have no idea",
                meta_key: "step8Answer_5",
                icon: "ico-stack-na.svg",
            },
        ],
        questionType: QuestionTypes.TYPE_ICON,
    },
    //9     index: 12
    {
        title: "How much do you think you will need in total retirement savings?",
        answers: [
            {
                title: "1M",
                meta_key: "step9Answer_1",
                icon: "ico-stack-xs.svg",
            },
            {
                title: "2M",
                meta_key: "step9Answer_2",
                icon: "ico-stack-md.svg",
            },
            {
                title: "3M",
                meta_key: "step9Answer_3",
                icon: "ico-stack-lg.svg",
            },
            {
                title: "4M+",
                meta_key: "step9Answer_4",
                icon: "ico-stack-full.svg",
            },
            {
                title: "I have no idea",
                meta_key: "step9Answer_5",
                icon: "ico-stack-na.svg",
            },
        ],
        questionType: QuestionTypes.TYPE_ICON,
    },
    //10     index: 13
    {
        title: "How would you describe your current progress?",
        answers: [
            {
                title: "I have multiple retirement accounts",
                meta_key: "step10Answer_1",
            },
            {
                title: "I only have an account through my employer",
                meta_key: "step10Answer_2",
            },
            {
                title: "I have savings, but it’s not set for retirement",
                meta_key: "step10Answer_3",
            },
            {
                title: "I haven’t started saving yet",
                meta_key: "step10Answer_4",
            },
        ],
    },
    //11     index: 14
    {
        title: "How would you quantify your retirement progress so far?",
        answers: [
            {
                title: "On my way to 250k",
                meta_key: "step11Answer_1",
                icon: "ico-stack-xs.svg",
            },
            {
                title: "500k is in my sights",
                meta_key: "step11Answer_2",
                icon: "ico-stack-sm.svg",
            },
            {
                title: "Almost 750k",
                meta_key: "step11Answer_3",
                icon: "ico-stack-md.svg",
            },
            {
                title: "Close to a million",
                meta_key: "step11Answer_4",
                icon: "ico-stack-lg.svg",
            },
            {
                title: "Millions",
                meta_key: "step11Answer_5",
                icon: "ico-stack-full.svg",
            },
        ],
        questionType: QuestionTypes.TYPE_ICON,
    },
    //12     index: 15
    {
        title: "Do you receive any of the following work benefits? (Select all that apply)",
        answers: [
            {
                title: "Pension",
                meta_key: "step12Answer_1",
            },
            {
                title: "Deferred compensation",
                meta_key: "step12Answer_2",
            },
            {
                title: "Stock options or grants",
                meta_key: "step12Answer_3",
            },
            {
                title: "I don't receive any of these",
                meta_key: "step12Answer_4",
            },
        ],
        multiSelect: true,
        questionType: QuestionTypes.TYPE_CHECKBOX,
    },
    //13     index: 16
    {
        title: "Do you have a pension?",
        answers: [
            {
                title: "Yes",
                meta_key: "step13Answer_1",
            },
            {
                title: "No",
                meta_key: "step13Answer_2",
            },
        ],
    },
    //14     index: 17
    {
        title: "Does your employer pay you in stock grants or stock options?",
        answers: [
            {
                title: "Yes",
                meta_key: "step14Answer_1",
            },
            {
                title: "No",
                meta_key: "step14Answer_2",
            },
        ],
    },
    //15     index: 18
    {
        title: "Do you have a deferred compensation plan?",
        answers: [
            {
                title: "Yes",
                meta_key: "step15Answer_1",
            },
            {
                title: "No",
                meta_key: "step15Answer_2",
            },
        ],
    },
    //16     index: 19
    {
        title: "Roughly how much are you saving each year for retirement?",
        answers: [
            {
                title: "<20k",
                meta_key: "step16Answer_1",
                icon: "ico-stack-xs.svg",
            },
            {
                title: "20k - 30k",
                meta_key: "step16Answer_2",
                icon: "ico-stack-md.svg",
            },
            {
                title: "30k - 50k",
                meta_key: "step16Answer_3",
                icon: "ico-stack-lg.svg",
            },
            {
                title: "50k+",
                meta_key: "step16Answer_4",
                icon: "ico-stack-full.svg",
            },
        ],
        questionType: QuestionTypes.TYPE_ICON,
    },
    // 17     index: 20
    {
        title: "Do you have savings outside of your workplace?",
        answers: [
            {
                title: "Yes",
                meta_key: "step17Answer_1",
            },
            {
                title: "No",
                meta_key: "step17Answer_2",
            },
        ],
    },
    // 18     index: 21
    {
        title: "Do you have any old employer sponsored plans?",
        answers: [
            {
                title: "Yes",
                meta_key: "step18Answer_1",
            },
            {
                title: "No",
                meta_key: "step18Answer_2",
            },
        ],
    },
    //19     index: 22
    {
        title: "Do you have an emergency cash reserve?",
        answers: [
            {
                title: "Yes",
                meta_key: "step19Answer_1",
            },
            {
                title: "No",
                meta_key: "step19Answer_2",
            },
        ],
    },
    //20     index: 23
    {
        title: "Do you own a business that you use to save for retirement?",
        answers: [
            {
                title: "Yes",
                meta_key: "step20Answer_1",
            },
            {
                title: "No",
                meta_key: "step20Answer_2",
            },
        ],
    },
    //21     index: 24
    {
        title: "How would you describe your investment style?",
        answers: [
            {
                title: "I feel like I'm at the casino every day",
                meta_key: "step21Answer_1",
            },
            {
                title: "I target an average/moderate return",
                meta_key: "step21Answer_2",
            },
            {
                title: "I like investments that produce income",
                meta_key: "step21Answer_3",
            },
            {
                title: "I prefer safe investments",
                meta_key: "step21Answer_4",
            },
        ],
    },
    //22     index: 25
    {
        title: "If the stock market crashed in the next year, what would you do?",
        answers: [
            {
                title: "I'd save more",
                meta_key: "step22Answer_1",
            },
            {
                title: "I'd be in trouble",
                meta_key: "step22Answer_2",
            },
        ],
    },
    //23     index: 26
    {
        title: "What other financial goals could impact retirement? (select all that apply)",
        answers: [
            {
                title: "Children's College",
                meta_key: "step23Answer_1",
            },
            {
                title: "Wedding",
                meta_key: "step23Answer_2",
            },
            {
                title: "Real Estate Purchase",
                meta_key: "step23Answer_3",
            },
            {
                title: "Debt (Non Mortgage)",
                meta_key: "step23Answer_4",
            },
        ],
        multiSelect: true,
    },
    //24     index: 27
    {
        title: "Are you actively saving for these goals?",
        answers: [
            {
                title: "I already have enough saved",
                meta_key: "step24Answer_1",
            },
            {
                title: "Yes I systematically save for them",
                meta_key: "step24Answer_2",
            },
            {
                title: "Sometimes",
                meta_key: "step24Answer_3",
            },
            {
                title: "I haven't started yet",
                meta_key: "step24Answer_4",
            },
        ],
    },
    //25     index: 28
    {
        title: "Great job! Our retirement fun is almost complete!",
        answers: [],
        content: `For this final exercise you will be given 11 questions with 11 seconds to answer each. 
            The goal here is not to overthink the question. 
            Just go with your gut!`,
        questionType: QuestionTypes.TYPE_25,
    },
    //26     index: 29
    {
        title: "Retirement FLASH QUIZ time! Ready?",
        answers: [
            {
                title: "Yes",
                meta_key: "step26Answer_1",
            },
            {
                title: "Yes but in blue",
                meta_key: "step26Answer_2",
                // initialSelected: true,
            },
        ],
    },
    //27     index: 30
    {
        title: "What do you value more?",
        answers: [
            {
                title: "Accumulating wealth",
                meta_key: "step27Answer_1",
            },
            {
                title: "Protecting my wealth",
                meta_key: "step27Answer_2",
            },
        ],
    },
    //28     index: 31
    {
        title: "What would upset you more?",
        answers: [
            {
                title: "Losing money",
                meta_key: "step28Answer_1",
            },
            {
                title: "Pushing back my retirement date",
                meta_key: "step28Answer_2",
            },
        ],
    },
    //29     index: 32
    {
        title: "Why do you want to retire?",
        answers: [
            {
                title: "I'm tired of working",
                meta_key: "step29Answer_1",
            },
            {
                title: "Time to follow my dreams",
                meta_key: "step29Answer_2",
            },
        ],
    },
    //30     index: 33
    {
        title: "Are you saving enough for retirement?",
        answers: [
            {
                title: "I'm saving everything I can",
                meta_key: "step30Answer_1",
            },
            {
                title: "I could definitely be doing more",
                meta_key: "step30Answer_2",
            },
        ],
    },
    //31     index: 34
    {
        title: "How do you know if you are on pace to retire in :year: years?",
        answers: [
            {
                title: "I know the numbers",
                meta_key: "step31Answer_1",
            },
            {
                title: "I'm not sure if I'm on pace to retire",
                meta_key: "step31Answer_2",
            },
        ],
        includeYear: true,
    },
    //32     index: 35
    {
        title: "How do you know if your investments are appropriate?",
        answers: [
            {
                title: "I'm targeting a specific rate of return",
                meta_key: "step32Answer_1",
            },
            {
                title: "I should re-evaluate them",
                meta_key: "step32Answer_2",
            },
        ],
    },
    //33     index: 36
    {
        title: "Have you considered the tax implications of your retirement savings?",
        answers: [
            {
                title: "Yes, I have a long term tax plan",
                meta_key: "step33Answer_1",
            },
            {
                title: "Tax implications?",
                meta_key: "step33Answer_2",
            },
        ],
    },
    //34     index: 37
    {
        title: "Have you done any RMD planning?",
        answers: [
            {
                title: "Yes, my tax liability is mapped out over my retirement",
                meta_key: "step34Answer_1",
            },
            {
                title: "I don't know what that is",
                meta_key: "step34Answer_2",
            },
        ],
    },
    //35     index: 38
    {
        title: "How would you feel if you had to pay more taxes during retirement than you do right now?",
        answers: [
            {
                title: "I would be pretty surprised and upset",
                meta_key: "step35Answer_1",
            },
            {
                title: "That would suit me fine",
                meta_key: "step35Answer_2",
            },
        ],
    },
    //36     index: 39
    {
        title: "Do you know what your portfolio would lose in the event of a market crash?",
        answers: [
            {
                title: "Yes, I've done a market crash test",
                meta_key: "step36Answer_1",
            },
            {
                title: "I have no idea",
                meta_key: "step36Answer_2",
            },
        ],
    },
    //37     index: 40
    {
        title: "How do you feel about your current plan for retirement?",
        answers: [
            {
                title: "It's crystal clear",
                meta_key: "step37Answer_1",
            },
            {
                title: "I don't think I really have one",
                meta_key: "step37Answer_2",
            },
        ],
    },
    //38     index: 41
    {
        title: "Is retirement in :year: years something that you seriously want to accomplish?",
        answers: [
            {
                title: "Yes! Show me my results",
                meta_key: "retirementReallyAcomplishYes",
            },
            {
                title: "No, :year: years is probably more realistic.",
                meta_key: "retirementReallyAcomplishNo",
            },
        ],
        includeYear: true,
        questionType: QuestionTypes.TYPE_38,
    },
    //TYPE_CONFETTI     index: 42
    {
        title: "Confetti Explosion",
        answers: [],
        questionType: QuestionTypes.TYPE_CONFETTI,
    },
    //TYPE_CONGRATULATION     index: 43
    {
        title: "Congratulation",
        answers: [],
        questionType: QuestionTypes.TYPE_CONGRATULATION,
    },
    //final     index: 44
    {
        title: "Retirement Checkpoint Results for",
        answers: [],
        questionType: QuestionTypes.TYPE_FINAL,
    },
    //40     index: 45
    {
        title: "Do you have any tax free savings?",
        answers: [
            {
                title: "Yes",
                meta_key: "step40Answer_1",
            },
            {
                title: "No",
                meta_key: "step40Answer_2",
            },
            {
                title: "Not sure",
                meta_key: "step40Answer_3",
            },
        ],
    },
];

export interface Post {
    attributes: {
        author?: any;
        banner?: {
            id: number;
            title: string;
            text: string;
            cta: {
                link: string;
                text: string;
                type?: string;
            };
        };
        category: string;
        cover: any;
        createdAt: string;
        date?: string;
        description?: string;
        publishedAt: string;
        text: string;
        title: string;
        updatedAt: string;
        url: string;
    };
    id: number;
}

export const navigation = [
    { link: "/", text: "Home" },
    { link: "/about-us", text: "About Us" },
    { link: "/our-services", text: "Our Services" },
    { link: "/get-started", text: "Get Started" },
    { link: "/pricing", text: "Pricing" },
    { link: "/our-planning-process", text: "Planning" },
    { link: "/blog", text: "Blog" },
];

export const blog = {
    categories: [
        { value: "all", label: "All blogs" },
        { value: "retirementPlanning", label: "Retirement Planning" },
        { value: "finance101", label: "Finance 101" },
        { value: "marketUpdates", label: "Market Updates" },
        { value: "tipsAndTools", label: "Tips & Tools" },
        { value: "taxMastery", label: "Tax Mastery" },
        { value: "wealthMastery", label: "Wealth Mastery" },
        {
            label: "More categories",
            subcategories: [
                { value: "financialPlanning", label: "Financial Planning" },
                { value: "c401k", label: "401K" },
                { value: "marketVolatility", label: "Market Volatility" },
                { value: "inflation", label: "Inflation" },
                { value: "advisorSpotlight", label: "Advisor Spotlight" },
            ],
        },
    ],
    sorts: [
        { value: "DESC", label: "The newest first" },
        { value: "ASC", label: "The oldest first" },
    ],
};

export const cprItems = {
    pacing: ["Likely off track", "At risk", "Likely on track"],
    tax_planning: ["Heavy tax burden", "Average tax burden", "Low tax burden"],
    risk_failure: ["High", "Moderate", "Low"],
};

export const pacing = ["Likely off track", "At risk", "Likely on track"];

export const riskFailure = ["High", "Moderate", "Low"];

export const taxPlaning = [
    "Heavy tax burden",
    "Average tax burden",
    "Low tax burden",
];
