import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Spin, Space } from 'antd'
import { CRoutes } from "@/constants/routes";
import { ApplicationState } from '@/store/index';
import { getAnswers } from "@/store/questions/selector";
import { getDisclosure } from "@/store/auth/selector";
import { getPlanState } from "@/store/plan/selector";

const PageLoader = () => (
	<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
		<Space size="middle">
			<Spin size="large" />
		</Space>
	</div>
)

const NextRoute = ({ router, children }) => {
	const user = useSelector((state: ApplicationState) => state.auth.user);
	const re_plan = useSelector((state: ApplicationState) => state.auth.re_plan);
	const rehydrated = useSelector((state: ApplicationState) => state._persist.rehydrated);
	const answers = useSelector(getAnswers);
	const disclosure = useSelector(getDisclosure);
	const planState = useSelector(getPlanState);
	const cRoute = CRoutes.find((item) => item.link === router.pathname);	

	useEffect(() => {
		if (cRoute?.attr.auth && !user && rehydrated) 
			router.push("/")
	}, [rehydrated])

	useEffect(() => {
		if(typeof cRoute?.render === "function")
			cRoute.render({router, rehydrated, user, answers, disclosure, planState, re_plan});
	})
	
	if(rehydrated && !cRoute)
		return <div className="font-Lato">{children}</div>
		
	if (cRoute?.attr.auth && !user && rehydrated)
		return <PageLoader />
		
	if(cRoute?.attr.auth && user)
		return <div className="font-Lato">{children}</div>
		
	if (!cRoute?.attr.auth && cRoute?.attr.ssr)
		return <div className="font-Lato">{children}</div>
	else
		return <PageLoader />
};

export default NextRoute;