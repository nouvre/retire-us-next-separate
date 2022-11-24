import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/store/index";
import Header from "../Header";
import SubscribePlanBlock from "@/components/Blocks/SubscribePlanBlock";
import SubscribePlanBlockMobile from "@/components/Blocks/SubscribePlanBlockMobile";
import { Answer } from "@/store/questions/types";
import { TextNormal } from "@/components/Typographies";
import Image from '@/components/common/Image';
import { useRouter } from "next/router";

const ChoosePlan = (props: any) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const user = useSelector((state: ApplicationState) => state.auth.user);
    const answers: Answer = useSelector(
        (state: ApplicationState) => state.questions.answers
    );
    const step = useSelector((state: ApplicationState) => state.questions.step);
    console.log("=----------------<", answers);

    // useEffect(() => {
    //     if (user) dispatch(getQuestionnare());
    //     else {
    //         if (step < questionOrder.length) router.push("/checkpoint");
    //     }
    // }, [user, step]);

    // useEffect(() => {
    //     if (!Object.keys(answers).length && user)
    //         router.push(
    //             ProfileCompleteStep[user.authenticate_type][
    //                 user.profile_complete_step - 1
    //             ]
    //         );
    // }, [answers]);

    return (
        <div className="w-full min-h-screen relative">
            <Header opacity={false} />
            {Object.keys(answers).length > 0 && (
                <div className="w-full mt-[126px]">
                    {user?.authenticate_type !== 2 && (
                        <>
                            <div className="recommend-plan-block pt-20 pb-[100px] hidden md:block">
                                {/* <div className="text-black font-bold text-[28px] text-center leading-8 mt-[60px] mb-[40px]">
                                    Recommended plan for you
                                </div> */}
                                <div className="md:w-full lg:max-w-[1024px] xl:max-w-[1440px] mx-auto">
                                    <SubscribePlanBlock answers={answers} />
                                </div>
                            </div>
                            <div className="w-full py-10 md:hidden">
                                <TextNormal className="text-[20px] text-center font-bold mb-8">
                                    Recommended plan for you
                                </TextNormal>
                                <SubscribePlanBlockMobile answers={answers} />
                            </div>
                        </>
                    )}
                </div>
            )}
            <div className="md:hidden">
                <Image
                    src="/assets/images/glass-man.svg"
                    alt="Glass man"
                    className="relative ml-auto mt-auto z-[10] max-w-[250px]"
                />
                <Image
                    src="/assets/images/ico-retire-leaf.svg"
                    alt="ico-retire-leaf"
                    className="absolute left-0 bottom-0 max-w-[100px]"
                />
                <Image
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute w-4 left-[50px] bottom-[100px] md:block"
                />
            </div>
        </div>
    );
};

export default ChoosePlan;
