import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import routes from "@/constants/routes";
import { ApplicationState } from '@/store/index';
import { setLoadDashboard, verifyIdentify } from '@/store/auth/action';
import { Toast } from '@/components/common/notification';

const NextRoute = ({ router, persistor, children }) => {
	// const dispatch = useDispatch();
	const user = useSelector((state: ApplicationState) => state.auth.user);
	// const loadDashboard = useSelector(
	// 	(state: ApplicationState) => state.auth.loadDashboard,
	// );

	// useEffect(() => {
	// 	if (user && user.role === 'user') {
	// 		if (
	// 			!user.passTwoFactor &&
	// 			user.current_plan &&
	// 			process.env.NODE_ENV === 'production'
	// 		) {
	// 			router.push('/2fa-verify')
	// 		} else {
	// 			if (router.pathname.slice(0, 13) == '?success=true') {
	// 				dispatch(verifyIdentify())
	// 				router.push('/dashboard')
	// 			} else {
	// 				if (router.pathname.slice(0, 14) == '?success=false') {
	// 					Toast(
	// 						'ID verify failed',
	// 						'Please check your information and retry.',
	// 						'danger',
	// 					)
	// 					router.push('/verify')
	// 				} else if (user.isSignUpProcess) {
	// 					if (router.pathname.slice(1, 15) !== 'reset-password') {
	// 						if (
	// 							!user.disclosure_agreements?.disclosure_pdf_link &&
	// 							routes[user.authenticate_type].indexOf(
	// 								'/disclosure',
	// 							) < user.profile_complete_step
	// 						) {
	// 							router.push('/disclosure')
	// 						} else {
	// 							if (
	// 								routes[user.authenticate_type][
	// 								user.profile_complete_step
	// 								] == '/dashboard'
	// 							) {
	// 								if (!loadDashboard) {
	// 									router.push(
	// 										routes[user.authenticate_type][
	// 										user.profile_complete_step
	// 										],
	// 									)
	// 									dispatch(setLoadDashboard())
	// 								}
	// 							} else {
	// 								router.push(
	// 									routes[user.authenticate_type][
	// 									user.profile_complete_step
	// 									],
	// 								)
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }, [user])

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

	// const { bootstrapped } = persistor.getState();
	// // // if (!bootstrapped) {
	// // // 	persistor.
	// // // }
	// useEffect(() => {
	// 	console.log(persistor.getState())
	// }, [bootstrapped]);
	console.log("u===============>", user)
	return children;
};

export default NextRoute;