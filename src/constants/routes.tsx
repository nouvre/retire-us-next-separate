/* eslint-disable import/no-anonymous-default-export */
export default {
	"1": [
		"/checkpoint",
		"/checkpoint-result",
		"/disclosure",
		"/payment",
		"/2fa-verify",
		"/confirmation",
		"/dashboard",
	],
	"2": [
		"/disclosure",
		"/payment",
		"/2fa-verify",
		"/confirmation",
		"/checkpoint",
		"/checkpoint-result",
		"/dashboard",
	],
};


export const RouteConfig = [
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
		}
	},
	{
		link: "/disclosure",
		attr:
		{
			name: "Disclosure",
			ssr: true,
			auth: true,
		}
	},
	{
		link: "/payment",
		attr:
		{
			name: "Payment",
			ssr: true,
			auth: true,
		}
	},
	{
		link: "/2fa-verify",
		attr:
		{
			name: "2fa",
			ssr: true,
			auth: true,
		}
	},
	{
		link: "/confirmation",
		attr:
		{
			name: "Confirmation",
			ssr: true,
			auth: true,
		}
	},
	{
		link: "/checkpoint-result",
		attr:
		{
			name: "CheckpointResult",
			ssr: true,
			auth: false,
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
		}
	},
	{
		link: "/signin",
		attr:
		{
			name: "Signin",
			ssr: true,
			auth: false,
		}
	},
]
