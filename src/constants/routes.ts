import { questionOrder } from "@/constants/variables";

interface IAttr {
	name: string;
	ssr: boolean;
	auth: boolean
}

interface ICRoutes {
	link: string;
	attr: IAttr;
	render?: (params) => void;
}

export const CRoutes: ICRoutes[] = [
	{
		link: "/",
		attr:
		{
			name: "Home",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/about-us",
		attr:
		{
			name: "AboutUS",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/get-started",
		attr:
		{
			name: "GetStarted",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/pricing",
		attr:
		{
			name: "Pricing",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/our-planning-process",
		attr:
		{
			name: "Planning",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/privacy-policy",
		attr:
		{
			name: "Privacy",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/checkpoint",
		attr:
		{
			name: "Checkpoint",
			ssr: true,
			auth: false,
		},
		render: (params) => {
			const { router, user, answers } = params;
			if (user) {
				if (answers.step >= questionOrder.length)
					router.push("/checkpoint-result")
			}
		}
	},
	{
		link: "/disclosure",
		attr:
		{
			name: "Disclosure",
			ssr: true,
			auth: true,
		},
		render: (params) => {
			const { router, disclosure, re_plan } = params;
			if (re_plan)
				router.push("/recommendation");
			if (disclosure) {
				const path = getRedirectPath(params);
				router.push(path);
			}
		}
	},
	{
		link: "/payment",
		attr:
		{
			name: "Payment",
			ssr: true,
			auth: true,
		},
		render: (params) => {
			const { router, planState, re_plan } = params;
			if (re_plan)
				router.push("/recommendation")
			if (planState.cPlan) {
				router.push({ pathname: "/2fa-verify", query: { from: "payment" } }, "/2fa-verify");
			}
		}
	},
	{
		link: "/2fa-verify",
		attr:
		{
			name: "2fa",
			ssr: true,
			auth: true,
		},
		render: (params) => {
			const { router, user } = params;
			if (user.passTwoFactor) {
				if (router.query.from == "payment")
					router.push("/confirmation");
				else {
					const path = getRedirectPath(params);
					router.push(path);
				}
			}
		}
	},
	{
		link: "/confirmation",
		attr:
		{
			name: "Confirmation",
			ssr: true,
			auth: true,
		},
		render: (params) => {
			const { router, user } = params;
			if (!user.passTwoFactor) {
				const path = getRedirectPath(params);
				router.push(path);
			}
		}
	},
	{
		link: "/checkpoint-result",
		attr:
		{
			name: "CheckpointResult",
			ssr: true,
			auth: false,
		},
		render: (params) => {
			const { router, rehydrated, answers } = params;
			if (rehydrated && answers.step < questionOrder.length)
				router.push("/checkpoint")
		}
	},
	{
		link: "/recommendation",
		attr:
		{
			name: "Recommendation",
			ssr: true,
			auth: false,
		},
		render: (params) => {
			const { router, user, planState, re_plan } = params;
			if (!re_plan && user && planState.sPlan) {
				const path = getRedirectPath(params);
				router.push(path);
			}
		}
	},
	{
		link: "/404",
		attr:
		{
			name: "404",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/our-services",
		attr:
		{
			name: "OurServices",
			ssr: true,
			auth: false,
		}
	},
	{
		link: "/signup",
		attr:
		{
			name: "Signup",
			ssr: true,
			auth: false,
		},
		render: (params) => {
			const { router, user } = params;
			if (user) {
				const path = getRedirectPath(params);
				router.push(path);
			}
		}
	},
	{
		link: "/signin",
		attr:
		{
			name: "Signin",
			ssr: true,
			auth: false,
		},
		render: (params) => {
			const { router, user } = params;
			if (user) {
				if (user.role === "admin") router.push("/admin/dashboard");
				else {
					const path = getRedirectPath(params);
					router.push(path);
				}
			}
		}
	},
	{
		link: "/dashboard",
		attr:
		{
			name: "Dashboard",
			ssr: false,
			auth: true,
		},
		render: (params) => {
			const { router, user, answers } = params;
			if (user) {
				const path = getRedirectPath(params);
				console.log(path)
				if (path !== "/dashboard")
					router.push(path);
			}
		}
	},
];

export const getRedirectPath = (params) => {
	const { user, answers, disclosure, planState } = params;

	if (answers.step >= questionOrder.length && disclosure && planState.sPlan && planState.cPlan) {
		return "/dashboard";
	}

	if (user.authenticate_type === "1") {
		if (answers.step < questionOrder.length)
			return "/checkpoint";
		if (!planState.sPlan)
			return "/checkpoint-result";
		if (!disclosure)
			return "/disclosure";
		if (!planState.cPlan)
			return "/payment";
	} else if (user.authenticate_type === "2") {
		if (!disclosure)
			return "/disclosure";
		if (!planState.cPlan)
			return "/payment";
		if (answers.step < questionOrder.length)
			return "/checkpoint";
		if (!planState.sPlan)
			return "/checkpoint-result";
	}
}