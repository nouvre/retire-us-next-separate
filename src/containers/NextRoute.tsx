import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from 'antd'
import routes, { RouteConfig } from "@/constants/routes";
import { ApplicationState } from '@/store/index';
import { setLoadDashboard, verifyIdentify } from '@/store/auth/action';
import { Toast } from '@/components/common/notification';

const PageLoader = () => (
	<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
		<Space size="middle">
			<Spin size="large" />
		</Space>
	</div>
)

const NextRoute = ({ router, children }) => {
	const dispatch = useDispatch();
	const user = useSelector((state: ApplicationState) => state.auth.user);
	const rehydrated = useSelector((state: ApplicationState) => state._persist.rehydrated);
	const loadDashboard = useSelector((state: ApplicationState) => state.auth.loadDashboard);
	const data = RouteConfig.find((item) => item.link === router.pathname);

	useEffect(() => {
		if (user && user.role === 'user') {
			if (!user.passTwoFactor && user.current_plan && process.env.NODE_ENV === 'production') {
				router.push('/2fa-verify')
			} else {
				if (router.pathname.slice(0, 13) == '?success=true') {
					dispatch(verifyIdentify())
					router.push('/dashboard')
				} else {
					if (router.pathname.slice(0, 14) == '?success=false') {
						Toast('ID verify failed', 'Please check your information and retry.', 'danger')
						router.push('/verify')
					} else if (user.isSignUpProcess) {
						if (router.pathname.slice(1, 15) !== 'reset-password') {
							if (!user.disclosure_agreements?.disclosure_pdf_link && routes[user.authenticate_type].indexOf('/disclosure') < user.profile_complete_step) {
								router.push('/disclosure')
							} else {
								if (routes[user.authenticate_type][user.profile_complete_step] === '/dashboard') {
									if (!loadDashboard) {
										router.push(routes[user.authenticate_type][user.profile_complete_step])
										dispatch(setLoadDashboard())
									}
								} else {
									router.push(routes[user.authenticate_type][user.profile_complete_step])
								}
							}
						}
					}
				}
			}
		}
	}, [user])

	// useEffect(() => {
	// 	const handleInvalidToken = (e: any) => {
	// 		console.log("-------------------!!!->", e)
	// 		if (e.key === 'persist:root' && e.oldValue && !e.newValue) {
	// 			location.href = '/signin'
	// 		}
	// 	}
	// 	window.addEventListener('storage', handleInvalidToken)

	// 	return function cleanup() {
	// 		window.removeEventListener('storage', handleInvalidToken)
	// 	}
	// }, [])

	if (rehydrated || data?.attr.ssr)
		return children;
	else
		return <PageLoader />
};

export default NextRoute;