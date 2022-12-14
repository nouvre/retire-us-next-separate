import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
	twoFactorRequestSend,
	twoFactorRequestResend,
	twoFactorRequestVerify,
} from "@/store/auth/action";
import { ApplicationState } from "@/store/index";
import Header from "@/components/Pages/Header";
import EmailVerify from "@/components/Pages/TwoFactorVerify/EmailVerify";
import PhoneVerify from "@/components/Pages/TwoFactorVerify/PhoneVerify";
import VerifyCode from "@/components/Pages/TwoFactorVerify/VerifyCode";
import Image from '@/components/common/Image';

const TwoFactorVerify: React.FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [isSMS, setIsSMS] = useState<boolean>(true);
	const user = useSelector((state: ApplicationState) => state.auth.user);
	const [codeReqData, setCodeReqData] = useState<object>();

	useEffect(() => {
		if (user && user.default_two_factor_method == "email") {
			setIsSMS(false);
		}
	}, [user]);

	const handleSubmit = (data) => {
		setCodeReqData(data);
		dispatch(twoFactorRequestSend(data));
	};

	const handleVerifyCode = (data) => {
		dispatch(twoFactorRequestVerify(data));
	};

	const handleResendCode = () => {
		dispatch(twoFactorRequestResend(codeReqData));
	};

	return (
		<>
			<Header opacity={false} />
			<div className="min-h-[100vh] bg-[#EEF1F8] py-[90px] md:py-[125px] relative">
				{user?.twoFactorSent ? (
					<VerifyCode
						resendCode={handleResendCode}
						handleSubmit={handleVerifyCode}
					/>
				) : (
					<>
						{isSMS ? (
							<PhoneVerify
								changeMethod={() => setIsSMS(false)}
								handleSubmit={handleSubmit}
							/>
						) : (
							<EmailVerify
								changeMethod={() => setIsSMS(true)}
								handleSubmit={handleSubmit}
							/>
						)}
					</>
				)}

				<Image
					src="/assets/images/signup-texture.png"
					alt="texture"
					className="absolute left-0 bottom-0 hidden md:block"
				/>
				<Image
					src="/assets/images/ico-ellipse.svg"
					alt="ico-ellipse"
					className="absolute left-[5%] bottom-[50%] hidden md:block"
				/>
				<Image
					src="/assets/images/ico-ellipse.svg"
					alt="ico-ellipse"
					className="absolute right-[5%] top-[20%] hidden md:block"
				/>
			</div>
		</>
	);
};
export default TwoFactorVerify;
