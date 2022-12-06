import React, { useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ApplicationState } from "@/store/index";
import { selectPlan } from "@/store/auth/action";
import { getQuestionnare } from "@/store/questions/action";
import { fallback } from "@/constants/fallback";
import Header from "@/components/Pages/Header";
import ChoosePlan from "@/components/Pages/ChoosePlan";
import Recommend from "@/components/Pages/Recommendation";
import { fetchAPI } from "@/util/cms";
import { Answer } from "@/store/questions/types";


const Recommendation = ({ allSubscriptions }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const ref = useRef<HTMLDivElement>(null);
	const lazyLoadWrapperRef = useRef<HTMLDivElement>(null);
	const user = useSelector((state: ApplicationState) => state.auth.user);
	const answers: Answer = useSelector((state: ApplicationState) => state.questions.answers);
	const re_plan = useSelector((state: ApplicationState) => state.auth.re_plan);
	const isFetching = useSelector((state: ApplicationState) => state.auth.isFetching);

	useMemo(() => {
		const fetchData = async () => {
			await dispatch(getQuestionnare());
		}
		if (user)
			fetchData()
	}, [user])

	useMemo(() => {
		if (isFetching && !user) router.push("/sso");
	}, [isFetching]);

	const handleClick = () => {
		if (ref.current) {
			const offsetY = ref.current.getBoundingClientRect().top;
			window.scrollTo({
				top: offsetY + window.pageYOffset - 60,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="w-full bg-[#EEF1F8]" ref={lazyLoadWrapperRef} style={{ visibility: 'hidden' }}>
			<Header opacity={false} />
			<Recommend answers={answers} allSubscriptions={allSubscriptions} handleClick={handleClick} lazyLoadWrapperRef={lazyLoadWrapperRef} subscriptionRef={ref} />

			{(user?.authenticate_type != 2 || re_plan) && (
				<ChoosePlan />
			)}
			{(user?.authenticate_type == 2 && !re_plan) && (
				<div className="d-flex w-full justify-center pt-12 pb-[100px]">
					<div
						className="max-w-[400px] mx-auto flex h-[60px] justify-center items-center rounded-[60px] bg-[#001F55] text-white text-[18px] font-bold cursor-pointer"
						onClick={() => dispatch(selectPlan(0))}
					>
						Continue
					</div>
				</div>
			)}

		</div>
	);
};

export default Recommendation;

export async function getServerSideProps(context) {
	const response = await fetchAPI("/pricing");
	const content = response?.data?.attributes ?? fallback.pricing;
	return {
		props: {
			allSubscriptions: content.plansComparison.allSubscriptions,
		},
	}
}
